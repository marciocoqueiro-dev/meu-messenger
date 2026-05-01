const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const fs = require("fs");
const path = require("path");

const app = express();
const servidor = http.createServer(app);
const io = new Server(servidor);

const PORTA = process.env.PORT || 3000;
const caminhoDados = path.join(__dirname, "dados.json");

app.use(express.static(path.join(__dirname, "public")));

let dados = {
  usuarios: {},
  conversasPrivadas: {},
  partidasDomino: {}
};

const usuarioPorSocket = {};
const socketPorUsuario = {};

carregarDados();

io.on("connection", (socket) => {
  socket.emit("usuariosCadastrados", listarUsuariosCadastrados());

  socket.on("cadastrarUsuario", ({ nome, senha }) => {
    nome = limparNome(nome);
    senha = String(senha || "").trim();

    if (!nome) {
      socket.emit("erroCadastro", { mensagem: "Digite um nick válido." });
      return;
    }

    if (senha.length < 4) {
      socket.emit("erroCadastro", { mensagem: "A senha precisa ter pelo menos 4 caracteres." });
      return;
    }

    if (dados.usuarios[nome]) {
      socket.emit("erroCadastro", { mensagem: "Esse nick já existe." });
      return;
    }

    dados.usuarios[nome] = {
      nome,
      senha,
      online: false,
      status: "Disponível",
      bio: "Na Rede Coqueiro",
      fotoPerfil: "",
      contatos: {},
      pedidosContato: [],
      contatosPendentes: {},
      criadoEm: Date.now()
    };

    salvarDados();

    socket.emit("sucessoCadastro", {
      mensagem: "Usuário cadastrado. Agora clique em Entrar."
    });

    io.emit("usuariosCadastrados", listarUsuariosCadastrados());
  });

  socket.on("entrar", ({ nome, senha }) => {
    nome = limparNome(nome);
    senha = String(senha || "").trim();

    const usuario = dados.usuarios[nome];

    if (!usuario) {
      socket.emit("erroEntrada", { mensagem: "Usuário não encontrado." });
      return;
    }

    if (usuario.senha !== senha) {
      socket.emit("erroEntrada", { mensagem: "Senha incorreta." });
      return;
    }

    usuarioPorSocket[socket.id] = nome;
    socketPorUsuario[nome] = socket.id;

    usuario.online = true;
    usuario.ultimoLogin = Date.now();

    salvarDados();

    socket.emit("sucessoEntrada", {
      mensagem: `Bem-vindo, ${nome}!`,
      nome,
      status: usuario.status || "Disponível",
      bio: usuario.bio || "Na Rede Coqueiro",
      fotoPerfil: usuario.fotoPerfil || ""
    });

    enviarTudoParaUsuario(nome);
    enviarAtualizacaoParaTodos();
  });

  socket.on("sair", () => {
    desconectar(socket);
  });

  socket.on("disconnect", () => {
    desconectar(socket);
  });

  socket.on("alterarStatus", ({ status }) => {
    const nome = usuarioPorSocket[socket.id];
    if (!nome) return;

    const permitidos = ["Disponível", "Ocupado", "Ausente"];
    if (!permitidos.includes(status)) return;

    dados.usuarios[nome].status = status;
    salvarDados();

    socket.emit("statusAtualizado", { status });
    enviarAtualizacaoParaTodos();
  });

  socket.on("alterarBio", ({ bio }) => {
    const nome = usuarioPorSocket[socket.id];
    if (!nome) return;

    bio = String(bio || "").trim().slice(0, 90) || "Na Rede Coqueiro";

    dados.usuarios[nome].bio = bio;
    salvarDados();

    socket.emit("bioAtualizada", { bio });
    enviarAtualizacaoParaTodos();
  });

  socket.on("alterarFotoPerfil", ({ fotoPerfil }) => {
    const nome = usuarioPorSocket[socket.id];
    if (!nome) return;

    dados.usuarios[nome].fotoPerfil = String(fotoPerfil || "");
    salvarDados();

    socket.emit("fotoPerfilAtualizada", {
      fotoPerfil: dados.usuarios[nome].fotoPerfil
    });

    enviarAtualizacaoParaTodos();
  });

  socket.on("solicitarContato", ({ nome, apelido }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    nome = limparNome(nome);
    apelido = limparNome(apelido) || nome;

    if (!nome) {
      socket.emit("erroContato", { mensagem: "Digite o nick da pessoa." });
      return;
    }

    if (nome === meuNome) {
      socket.emit("erroContato", { mensagem: "Você não pode adicionar você mesmo." });
      return;
    }

    if (!dados.usuarios[nome]) {
      socket.emit("erroContato", { mensagem: "Esse usuário não existe." });
      return;
    }

    if (dados.usuarios[meuNome].contatos[nome]) {
      socket.emit("erroContato", { mensagem: "Essa pessoa já está nos seus contatos." });
      return;
    }

    const jaExiste = (dados.usuarios[nome].pedidosContato || []).some((p) => p.deNome === meuNome);

    if (jaExiste) {
      socket.emit("erroContato", { mensagem: "Você já enviou solicitação para essa pessoa." });
      return;
    }

    dados.usuarios[meuNome].contatosPendentes[nome] = {
      nome,
      apelido,
      criadoEm: Date.now()
    };

    dados.usuarios[nome].pedidosContato.push({
      deNome: meuNome,
      apelidoSolicitado: apelido,
      criadoEm: Date.now()
    });

    salvarDados();

    socket.emit("sucessoContato", {
      mensagem: `Solicitação enviada para ${nome}.`
    });

    emitirParaUsuario(nome, "novaSolicitacaoContato", {
      mensagem: `${meuNome} quer adicionar você.`
    });

    enviarTudoParaUsuario(meuNome);
    enviarTudoParaUsuario(nome);
  });

  socket.on("aceitarContato", ({ deNome, apelido }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    deNome = limparNome(deNome);
    apelido = limparNome(apelido) || deNome;

    if (!dados.usuarios[deNome]) return;

    dados.usuarios[meuNome].pedidosContato = (dados.usuarios[meuNome].pedidosContato || []).filter((p) => p.deNome !== deNome);

    dados.usuarios[meuNome].contatos[deNome] = {
      nome: deNome,
      apelido,
      criadoEm: Date.now()
    };

    const apelidoDoOutro = dados.usuarios[deNome].contatosPendentes?.[meuNome]?.apelido || meuNome;

    dados.usuarios[deNome].contatos[meuNome] = {
      nome: meuNome,
      apelido: apelidoDoOutro,
      criadoEm: Date.now()
    };

    delete dados.usuarios[deNome].contatosPendentes[meuNome];

    salvarDados();

    socket.emit("sucessoContato", {
      mensagem: "Contato aceito."
    });

    emitirParaUsuario(deNome, "solicitacaoContatoAceita", {
      mensagem: `${meuNome} aceitou sua solicitação.`
    });

    enviarTudoParaUsuario(meuNome);
    enviarTudoParaUsuario(deNome);
  });

  socket.on("recusarContato", ({ deNome }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    deNome = limparNome(deNome);

    dados.usuarios[meuNome].pedidosContato = (dados.usuarios[meuNome].pedidosContato || []).filter((p) => p.deNome !== deNome);

    if (dados.usuarios[deNome]?.contatosPendentes) {
      delete dados.usuarios[deNome].contatosPendentes[meuNome];
    }

    salvarDados();

    enviarTudoParaUsuario(meuNome);
    enviarTudoParaUsuario(deNome);
  });

  socket.on("alterarApelidoContato", ({ nome, apelido }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    nome = limparNome(nome);
    apelido = limparNome(apelido) || nome;

    if (!dados.usuarios[meuNome].contatos[nome]) return;

    dados.usuarios[meuNome].contatos[nome].apelido = apelido;

    salvarDados();
    enviarTudoParaUsuario(meuNome);
  });

  socket.on("buscarHistoricoPrivado", ({ paraNome }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    paraNome = limparNome(paraNome);

    socket.emit("historicoPrivado", {
      comNome: paraNome,
      mensagens: dados.conversasPrivadas[chavePrivada(meuNome, paraNome)] || []
    });
  });

  socket.on("mensagemPrivada", ({ paraNome, texto, horario, resposta, imagem, audio }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    paraNome = limparNome(paraNome);

    if (!temContatoAceito(meuNome, paraNome)) {
      socket.emit("erroContato", {
        mensagem: "Você só pode conversar com contatos aceitos."
      });
      return;
    }

    const msg = {
      id: criarId(),
      tipo: "privada",
      deNome: meuNome,
      paraNome,
      texto: String(texto || ""),
      horario: horario || horarioAtual(),
      resposta: resposta || null,
      imagem: imagem || null,
      audio: audio || null,
      criadaEm: Date.now()
    };

    const chave = chavePrivada(meuNome, paraNome);
    dados.conversasPrivadas[chave] = dados.conversasPrivadas[chave] || [];
    dados.conversasPrivadas[chave].push(msg);

    salvarDados();

    socket.emit("mensagemPrivada", msg);
    emitirParaUsuario(paraNome, "mensagemPrivada", msg);

    enviarTudoParaUsuario(meuNome);
    enviarTudoParaUsuario(paraNome);
  });

  socket.on("digitandoPrivado", ({ paraNome }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    emitirParaUsuario(limparNome(paraNome), "digitandoPrivado", {
      deNome: meuNome
    });
  });

  socket.on("parouDigitandoPrivado", ({ paraNome }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    emitirParaUsuario(limparNome(paraNome), "parouDigitandoPrivado", {
      deNome: meuNome
    });
  });

  socket.on("apagarMensagemParaTodos", ({ id }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome || !id) return;

    let destinatarios = [];

    Object.values(dados.conversasPrivadas).forEach((lista) => {
      const msg = lista.find((m) => m.id === id && m.deNome === meuNome);

      if (msg) {
        msg.apagada = true;
        msg.texto = "Mensagem apagada";
        msg.imagem = null;
        msg.audio = null;
        destinatarios = [msg.deNome, msg.paraNome];
      }
    });

    if (!destinatarios.length) return;

    salvarDados();

    destinatarios.forEach((nome) => {
      emitirParaUsuario(nome, "mensagemApagada", { id });
    });
  });

  socket.on("buscarDomino", () => {
    const nome = usuarioPorSocket[socket.id];
    if (!nome) return;

    Object.values(dados.partidasDomino).forEach(garantirTemasDomino);
    salvarDados();

    enviarConvitesDomino(nome);
    enviarPartidasDomino(nome);
  });

  socket.on("convidarDomino", ({ paraNome, temaDomino }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    paraNome = limparNome(paraNome);
    temaDomino = validarTemaDomino(temaDomino);

    if (!dados.usuarios[paraNome]) {
      socket.emit("erroDomino", { mensagem: "Esse usuário não existe." });
      return;
    }

    if (!temContatoAceito(meuNome, paraNome)) {
      socket.emit("erroDomino", { mensagem: "Você só pode convidar contatos aceitos." });
      return;
    }

    const partidaExistente = Object.values(dados.partidasDomino).find((partida) => {
      if (partida.status === "encerrada") return false;
      if (partida.status === "travada") return false;

      return (
        (partida.criadoPor === meuNome && partida.convidado === paraNome) ||
        (partida.criadoPor === paraNome && partida.convidado === meuNome)
      );
    });

    if (partidaExistente) {
      socket.emit("erroDomino", {
        mensagem: "Vocês já têm uma partida ou convite em andamento."
      });

      enviarPartidasDomino(meuNome);
      enviarPartidasDomino(paraNome);
      return;
    }

    const partida = criarPartidaDomino(meuNome, paraNome, temaDomino);

    dados.partidasDomino[partida.id] = partida;
    salvarDados();

    const convitePayload = {
      id: partida.id,
      partidaId: partida.id,
      criadoPor: meuNome,
      deNome: meuNome,
      adversario: meuNome,
      convidado: paraNome,
      status: "convite",
      temaCriador: temaDomino,
      temasDomino: partida.temasDomino,
      criadoEm: partida.criadoEm,
      mensagem: `${meuNome} chamou você para jogar dominó.`
    };

    socket.emit("sucessoDomino", {
      mensagem: `Convite enviado para ${paraNome}.`
    });

    emitirParaUsuario(paraNome, "conviteDominoRecebido", convitePayload);
    emitirParaUsuario(paraNome, "convitesDomino", listarConvitesDomino(paraNome));

    enviarPartidasDomino(meuNome);
    enviarPartidasDomino(paraNome);
    enviarConvitesDomino(paraNome);
  });

  socket.on("aceitarConviteDomino", ({ partidaId, temaDomino }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    const partida = dados.partidasDomino[partidaId];

    if (!partida) {
      socket.emit("erroDomino", { mensagem: "Convite não encontrado." });
      return;
    }

    if (partida.convidado !== meuNome) {
      socket.emit("erroDomino", { mensagem: "Esse convite não é para você." });
      return;
    }

    if (partida.status !== "convite") {
      socket.emit("erroDomino", { mensagem: "Esse convite não está mais disponível." });
      return;
    }

    garantirTemasDomino(partida);

    partida.temasDomino[meuNome] = validarTemaDomino(temaDomino);
    partida.status = "ativa";
    partida.aceitaEm = Date.now();

    definirInicioDomino(partida);

    partida.historico.push({
      texto: `${meuNome} aceitou o convite.`,
      tipo: "sistema",
      criadoEm: Date.now()
    });

    partida.historico.push({
      texto: `${partida.vez} começa com ${textoPeca(partida.pecaObrigatoriaInicio)}.`,
      tipo: "sistema",
      criadoEm: Date.now()
    });

    salvarDados();

    emitirParaUsuario(partida.criadoPor, "convitesDomino", listarConvitesDomino(partida.criadoPor));
    emitirParaUsuario(partida.convidado, "convitesDomino", listarConvitesDomino(partida.convidado));

    enviarPartidaDominoParaJogadores(partida);
    enviarPartidasDomino(partida.criadoPor);
    enviarPartidasDomino(partida.convidado);
  });

  socket.on("recusarConviteDomino", ({ partidaId }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    const partida = dados.partidasDomino[partidaId];

    if (!partida) return;

    if (partida.convidado !== meuNome) {
      socket.emit("erroDomino", { mensagem: "Esse convite não é para você." });
      return;
    }

    partida.status = "encerrada";
    partida.motivoFim = `${meuNome} recusou o convite.`;
    partida.encerradaEm = Date.now();

    partida.historico.push({
      texto: partida.motivoFim,
      tipo: "sistema",
      criadoEm: Date.now()
    });

    salvarDados();

    enviarPartidaDominoParaJogadores(partida);
    enviarPartidasDomino(partida.criadoPor);
    enviarPartidasDomino(partida.convidado);
    enviarConvitesDomino(partida.criadoPor);
    enviarConvitesDomino(partida.convidado);
  });

  socket.on("moverPecaDomino", ({ partidaId, pedra, lado }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    const partida = dados.partidasDomino[partidaId];

    jogarPedraDomino(socket, partida, meuNome, pedra, lado);
  });

  socket.on("comprarDomino", ({ partidaId }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    const partida = dados.partidasDomino[partidaId];

    comprarDomino(socket, partida, meuNome);
  });

  socket.on("passarDomino", ({ partidaId }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    const partida = dados.partidasDomino[partidaId];

    passarDomino(socket, partida, meuNome);
  });

  socket.on("reiniciarDomino", ({ partidaId }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    const antiga = dados.partidasDomino[partidaId];

    if (!antiga) return;

    if (!ehJogador(antiga, meuNome)) {
      socket.emit("erroDomino", { mensagem: "Você não participa dessa partida." });
      return;
    }

    garantirTemasDomino(antiga);

    const temasAntigos = { ...antiga.temasDomino };

    const nova = criarPartidaDomino(
      antiga.criadoPor,
      antiga.convidado,
      temasAntigos[antiga.criadoPor] || "classico",
      antiga.id
    );

    nova.temasDomino = {
      [antiga.criadoPor]: validarTemaDomino(temasAntigos[antiga.criadoPor] || "classico"),
      [antiga.convidado]: validarTemaDomino(temasAntigos[antiga.convidado] || "classico")
    };

    nova.status = "ativa";
    nova.aceitaEm = Date.now();

    definirInicioDomino(nova);

    nova.historico.push({
      texto: `${meuNome} embaralhou as peças. Nova partida iniciada.`,
      tipo: "sistema",
      criadoEm: Date.now()
    });

    nova.historico.push({
      texto: `${nova.vez} começa com ${textoPeca(nova.pecaObrigatoriaInicio)}.`,
      tipo: "sistema",
      criadoEm: Date.now()
    });

    dados.partidasDomino[nova.id] = nova;

    salvarDados();

    enviarPartidaDominoParaJogadores(nova);
    enviarPartidasDomino(nova.criadoPor);
    enviarPartidasDomino(nova.convidado);
  });

  socket.on("sairDomino", ({ partidaId }) => {
    const meuNome = usuarioPorSocket[socket.id];
    if (!meuNome) return;

    const partida = dados.partidasDomino[partidaId];

    if (!partida) return;
    if (!ehJogador(partida, meuNome)) return;

    partida.status = "encerrada";
    partida.vencedor = adversario(partida, meuNome);
    partida.motivoFim = `${meuNome} saiu da partida.`;
    partida.encerradaEm = Date.now();

    partida.historico.push({
      texto: partida.motivoFim,
      tipo: "sistema",
      criadoEm: Date.now()
    });

    salvarDados();

    enviarPartidaDominoParaJogadores(partida);
    enviarPartidasDomino(partida.criadoPor);
    enviarPartidasDomino(partida.convidado);
  });
});

function carregarDados() {
  try {
    if (!fs.existsSync(caminhoDados)) {
      salvarDados();
      return;
    }

    const bruto = fs.readFileSync(caminhoDados, "utf8");
    const salvo = JSON.parse(bruto);

    dados = {
      usuarios: salvo.usuarios || {},
      conversasPrivadas: salvo.conversasPrivadas || {},
      partidasDomino: salvo.partidasDomino || {}
    };

    Object.values(dados.usuarios).forEach((usuario) => {
      usuario.online = false;
      usuario.status = usuario.status || "Disponível";
      usuario.bio = usuario.bio || "Na Rede Coqueiro";
      usuario.fotoPerfil = usuario.fotoPerfil || "";
      usuario.contatos = usuario.contatos || {};
      usuario.pedidosContato = usuario.pedidosContato || [];
      usuario.contatosPendentes = usuario.contatosPendentes || {};
    });

    Object.values(dados.partidasDomino).forEach((partida) => {
      partida.tipo = "domino";
      partida.status = partida.status || "encerrada";
      partida.historico = partida.historico || [];
      partida.jogadores = partida.jogadores || [partida.criadoPor, partida.convidado];
      partida.domino = partida.domino || {
        mesa: [],
        pontas: { esquerda: null, direita: null },
        monte: [],
        maos: {}
      };

      garantirTemasDomino(partida);
    });
  } catch (erro) {
    console.log("Erro ao carregar dados.json:", erro.message);
  }
}

function salvarDados() {
  fs.writeFileSync(caminhoDados, JSON.stringify(dados, null, 2));
}

function limparNome(valor) {
  return String(valor || "").trim().slice(0, 40);
}

function criarId() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function horarioAtual() {
  return new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function chavePrivada(a, b) {
  return [a, b].sort().join("__");
}

function obterSocketUsuario(nome) {
  const socketId = socketPorUsuario[nome];
  if (!socketId) return null;

  return io.sockets.sockets.get(socketId) || null;
}

function emitirParaUsuario(nome, evento, payload) {
  const socket = obterSocketUsuario(nome);
  if (socket) socket.emit(evento, payload);
}

function desconectar(socket) {
  const nome = usuarioPorSocket[socket.id];
  if (!nome) return;

  delete usuarioPorSocket[socket.id];

  if (socketPorUsuario[nome] === socket.id) {
    delete socketPorUsuario[nome];
  }

  if (dados.usuarios[nome]) {
    dados.usuarios[nome].online = false;
    dados.usuarios[nome].ultimoLogout = Date.now();
  }

  salvarDados();
  enviarAtualizacaoParaTodos();
}

function listarUsuariosCadastrados() {
  return Object.values(dados.usuarios).map((usuario) => ({
    nome: usuario.nome,
    online: Boolean(usuario.online),
    status: usuario.status || "Disponível",
    bio: usuario.bio || "",
    fotoPerfil: usuario.fotoPerfil || ""
  }));
}

function temContatoAceito(a, b) {
  return Boolean(dados.usuarios[a]?.contatos?.[b] && dados.usuarios[b]?.contatos?.[a]);
}

function formatarPedidosContato(nome) {
  const usuario = dados.usuarios[nome];
  if (!usuario) return [];

  return (usuario.pedidosContato || []).map((pedido) => {
    const remetente = dados.usuarios[pedido.deNome] || {};

    return {
      ...pedido,
      fotoPerfil: remetente.fotoPerfil || "",
      status: remetente.status || "Disponível",
      online: Boolean(remetente.online)
    };
  });
}

function formatarContatos(nome) {
  const usuario = dados.usuarios[nome];
  if (!usuario) return [];

  return Object.values(usuario.contatos || {}).map((contato) => {
    const outro = dados.usuarios[contato.nome] || {};
    const ultima = obterUltimaMensagemPrivada(nome, contato.nome);

    return {
      nome: contato.nome,
      apelido: contato.apelido || contato.nome,
      online: Boolean(outro.online),
      status: outro.status || "Disponível",
      bio: outro.bio || "",
      fotoPerfil: outro.fotoPerfil || "",
      ultimaMensagem: ultima
    };
  });
}

function obterUltimaMensagemPrivada(a, b) {
  const lista = dados.conversasPrivadas[chavePrivada(a, b)] || [];
  const ultima = lista[lista.length - 1];

  if (!ultima) return null;

  return {
    texto: ultima.apagada
      ? "Mensagem apagada"
      : ultima.texto || (ultima.imagem ? "Imagem" : ultima.audio ? "Áudio" : ""),
    horario: ultima.horario || ""
  };
}

function enviarTudoParaUsuario(nome) {
  const socket = obterSocketUsuario(nome);
  if (!socket) return;

  socket.emit("contatos", formatarContatos(nome));
  socket.emit("pedidosContato", formatarPedidosContato(nome));
  socket.emit("usuariosCadastrados", listarUsuariosCadastrados());

  enviarConvitesDomino(nome);
  enviarPartidasDomino(nome);
}

function enviarAtualizacaoParaTodos() {
  Object.keys(socketPorUsuario).forEach((nome) => {
    enviarTudoParaUsuario(nome);
  });
}

function validarTemaDomino(tema) {
  const limpo = String(tema || "classico").toLowerCase().trim();
  const permitidos = ["classico", "coqueiro", "flamengo", "corinthians"];

  return permitidos.includes(limpo) ? limpo : "classico";
}

function garantirTemasDomino(partida) {
  if (!partida) return;

  partida.temasDomino = partida.temasDomino || {};

  if (partida.criadoPor && !partida.temasDomino[partida.criadoPor]) {
    partida.temasDomino[partida.criadoPor] = validarTemaDomino(partida.temaDomino || "classico");
  }

  if (partida.convidado && !partida.temasDomino[partida.convidado]) {
    partida.temasDomino[partida.convidado] = "classico";
  }

  partida.temaDomino = partida.temasDomino[partida.criadoPor] || "classico";
}

function criarPartidaDomino(criadoPor, convidado, temaCriador = "classico", idExistente = null) {
  const pecas = criarPecasDomino();
  embaralhar(pecas);

  const maoCriador = pecas.splice(0, 7);
  const maoConvidado = pecas.splice(0, 7);

  const id = idExistente || criarId();

  return {
    id,
    tipo: "domino",
    criadoPor,
    convidado,
    jogadores: [criadoPor, convidado],
    temasDomino: {
      [criadoPor]: validarTemaDomino(temaCriador),
      [convidado]: "classico"
    },
    temaDomino: validarTemaDomino(temaCriador),
    status: "convite",
    vez: "",
    vencedor: "",
    motivoFim: "",
    primeiraJogadaFeita: false,
    pecaObrigatoriaInicio: null,
    passesSeguidos: 0,
    criadoEm: Date.now(),
    historico: [
      {
        texto: `${criadoPor} convidou ${convidado} para jogar dominó.`,
        tipo: "sistema",
        criadoEm: Date.now()
      }
    ],
    domino: {
      mesa: [],
      pontas: {
        esquerda: null,
        direita: null
      },
      monte: pecas,
      maos: {
        [criadoPor]: maoCriador,
        [convidado]: maoConvidado
      }
    }
  };
}

function criarPecasDomino() {
  const pecas = [];
  let contador = 1;

  for (let a = 0; a <= 6; a++) {
    for (let b = a; b <= 6; b++) {
      pecas.push({
        id: `d_${contador}_${Math.random().toString(36).slice(2, 7)}`,
        esquerda: a,
        direita: b,
        soma: a + b,
        dupla: a === b
      });

      contador++;
    }
  }

  return pecas;
}

function embaralhar(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
}

function definirInicioDomino(partida) {
  const jogadores = [partida.criadoPor, partida.convidado];

  let melhor = null;
  let dono = "";

  jogadores.forEach((jogador) => {
    const mao = partida.domino.maos[jogador] || [];
    const melhorDaMao = escolherPecaInicial(mao);

    if (!melhorDaMao) return;

    if (!melhor || compararPecaInicial(melhorDaMao, melhor) > 0) {
      melhor = melhorDaMao;
      dono = jogador;
    }
  });

  partida.vez = dono || partida.criadoPor;
  partida.pecaObrigatoriaInicio = melhor;
  partida.primeiraJogadaFeita = false;
}

function escolherPecaInicial(mao) {
  const duplas = mao.filter((p) => p.esquerda === p.direita);

  if (duplas.length) {
    return [...duplas].sort((a, b) => b.esquerda - a.esquerda)[0];
  }

  return [...mao].sort((a, b) => {
    if (b.soma !== a.soma) return b.soma - a.soma;
    return Math.max(b.esquerda, b.direita) - Math.max(a.esquerda, a.direita);
  })[0];
}

function compararPecaInicial(a, b) {
  const aDupla = a.esquerda === a.direita;
  const bDupla = b.esquerda === b.direita;

  if (aDupla && !bDupla) return 1;
  if (!aDupla && bDupla) return -1;

  if (aDupla && bDupla) return a.esquerda - b.esquerda;

  if (a.soma !== b.soma) return a.soma - b.soma;

  return Math.max(a.esquerda, a.direita) - Math.max(b.esquerda, b.direita);
}

function ehJogador(partida, nome) {
  return partida && (partida.criadoPor === nome || partida.convidado === nome);
}

function adversario(partida, nome) {
  return partida.criadoPor === nome ? partida.convidado : partida.criadoPor;
}

function listarConvitesDomino(nome) {
  return Object.values(dados.partidasDomino)
    .filter((partida) => partida.status === "convite")
    .filter((partida) => partida.convidado === nome)
    .map((partida) => {
      garantirTemasDomino(partida);

      return {
        id: partida.id,
        partidaId: partida.id,
        criadoPor: partida.criadoPor,
        deNome: partida.criadoPor,
        adversario: partida.criadoPor,
        convidado: partida.convidado,
        status: partida.status,
        temasDomino: partida.temasDomino,
        temaCriador: partida.temasDomino[partida.criadoPor] || "classico",
        criadoEm: partida.criadoEm
      };
    });
}

function enviarConvitesDomino(nome) {
  emitirParaUsuario(nome, "convitesDomino", listarConvitesDomino(nome));
}

function enviarPartidasDomino(nome) {
  const partidas = Object.values(dados.partidasDomino)
    .filter((partida) => ehJogador(partida, nome))
    .sort((a, b) => b.criadoEm - a.criadoEm)
    .map((partida) => prepararPartidaParaUsuario(partida, nome));

  emitirParaUsuario(nome, "partidasDomino", partidas);
}

function enviarPartidaDominoParaJogadores(partida) {
  garantirTemasDomino(partida);

  emitirParaUsuario(partida.criadoPor, "partidaDominoAtualizada", prepararPartidaParaUsuario(partida, partida.criadoPor));
  emitirParaUsuario(partida.convidado, "partidaDominoAtualizada", prepararPartidaParaUsuario(partida, partida.convidado));
}

function prepararPartidaParaUsuario(partida, nome) {
  garantirTemasDomino(partida);

  const outro = adversario(partida, nome);
  const minhaMao = partida.domino.maos[nome] || [];
  const maoOutro = partida.domino.maos[outro] || [];

  const possoJogar = partida.status === "ativa" && partida.vez === nome;
  const tenhoJogada = possoJogar ? jogadorTemJogadaValida(partida, nome) : false;

  return {
    id: partida.id,
    tipo: "domino",
    criadoPor: partida.criadoPor,
    convidado: partida.convidado,
    adversario: outro,
    status: partida.status,
    vez: partida.vez,
    vencedor: partida.vencedor || "",
    motivoFim: partida.motivoFim || "",
    primeiraJogadaFeita: Boolean(partida.primeiraJogadaFeita),
    pecaObrigatoriaInicio: partida.pecaObrigatoriaInicio || null,
    historico: partida.historico || [],
    criadoEm: partida.criadoEm,
    temasDomino: partida.temasDomino || {},
    meuTemaDomino: validarTemaDomino(partida.temasDomino[nome] || "classico"),
    temaAdversario: validarTemaDomino(partida.temasDomino[outro] || "classico"),
    tabuleiro: {
      mesa: (partida.domino.mesa || []).map((pedra) => ({
        ...pedra,
        temaDomino: validarTemaDomino(pedra.temaDomino || partida.temasDomino[pedra.jogador] || "classico"),
        jogador: pedra.jogador || ""
      })),
      pontas: partida.domino.pontas || { esquerda: null, direita: null },
      minhaMao,
      minhasPedras: minhaMao.length,
      pedrasAdversario: maoOutro.length,
      monteQuantidade: partida.domino.monte.length,
      possoJogar,
      tenhoJogada,
      somaMinhaMao: somarMao(minhaMao),
      somaAdversario: somarMao(maoOutro)
    }
  };
}

function jogarPedraDomino(socket, partida, jogador, pedraRecebida, lado) {
  if (!partida) {
    socket.emit("erroDomino", { mensagem: "Partida não encontrada." });
    return;
  }

  garantirTemasDomino(partida);

  if (!ehJogador(partida, jogador)) {
    socket.emit("erroDomino", { mensagem: "Você não participa dessa partida." });
    return;
  }

  if (partida.status !== "ativa") {
    socket.emit("erroDomino", { mensagem: "Essa partida não está ativa." });
    return;
  }

  if (partida.vez !== jogador) {
    socket.emit("erroDomino", { mensagem: "Ainda não é sua vez." });
    return;
  }

  const mao = partida.domino.maos[jogador] || [];
  const indice = mao.findIndex((p) => p.id === pedraRecebida?.id);

  if (indice < 0) {
    socket.emit("erroDomino", { mensagem: "Essa peça não está na sua mão." });
    return;
  }

  let pedra = mao[indice];

  if (!partida.primeiraJogadaFeita) {
    if (!partida.pecaObrigatoriaInicio || pedra.id !== partida.pecaObrigatoriaInicio.id) {
      socket.emit("erroDomino", {
        mensagem: `A primeira jogada precisa ser ${textoPeca(partida.pecaObrigatoriaInicio)}.`
      });
      return;
    }

    lado = "direita";
  } else {
    lado = lado === "esquerda" ? "esquerda" : "direita";
  }

  const encaixe = encaixarPedra(partida, pedra, lado);

  if (!encaixe.ok) {
    socket.emit("erroDomino", { mensagem: "Essa peça não encaixa nessa ponta." });
    return;
  }

  pedra = {
    ...encaixe.pedra,
    jogador,
    temaDomino: validarTemaDomino(partida.temasDomino[jogador] || "classico")
  };

  mao.splice(indice, 1);

  if (!partida.primeiraJogadaFeita) {
    partida.domino.mesa.push(pedra);
    partida.primeiraJogadaFeita = true;
  } else if (lado === "esquerda") {
    partida.domino.mesa.unshift(pedra);
  } else {
    partida.domino.mesa.push(pedra);
  }

  partida.passesSeguidos = 0;

  partida.historico.push({
    texto: `${jogador} jogou ${textoPeca(pedra)} na ${lado}.`,
    jogador,
    peca: textoPeca(pedra),
    lado,
    tipo: "jogada",
    criadoEm: Date.now()
  });

  if (mao.length === 0) {
    finalizarPorBatida(partida, jogador);
  } else {
    partida.vez = adversario(partida, jogador);
    verificarTravaSemVencedor(partida);
  }

  salvarDados();

  enviarPartidaDominoParaJogadores(partida);
  enviarPartidasDomino(partida.criadoPor);
  enviarPartidasDomino(partida.convidado);
}

function encaixarPedra(partida, pedra, lado) {
  const jogo = partida.domino;

  if (!jogo.mesa.length) {
    jogo.pontas.esquerda = pedra.esquerda;
    jogo.pontas.direita = pedra.direita;

    return {
      ok: true,
      pedra: normalizarPedra(pedra)
    };
  }

  if (lado === "esquerda") {
    const ponta = jogo.pontas.esquerda;

    if (pedra.direita === ponta) {
      jogo.pontas.esquerda = pedra.esquerda;
      return { ok: true, pedra: normalizarPedra(pedra) };
    }

    if (pedra.esquerda === ponta) {
      const invertida = inverterPedra(pedra);
      jogo.pontas.esquerda = invertida.esquerda;
      return { ok: true, pedra: normalizarPedra(invertida) };
    }

    return { ok: false };
  }

  if (lado === "direita") {
    const ponta = jogo.pontas.direita;

    if (pedra.esquerda === ponta) {
      jogo.pontas.direita = pedra.direita;
      return { ok: true, pedra: normalizarPedra(pedra) };
    }

    if (pedra.direita === ponta) {
      const invertida = inverterPedra(pedra);
      jogo.pontas.direita = invertida.direita;
      return { ok: true, pedra: normalizarPedra(invertida) };
    }

    return { ok: false };
  }

  return { ok: false };
}

function inverterPedra(pedra) {
  return {
    ...pedra,
    esquerda: pedra.direita,
    direita: pedra.esquerda,
    soma: pedra.esquerda + pedra.direita,
    dupla: pedra.esquerda === pedra.direita
  };
}

function normalizarPedra(pedra) {
  return {
    ...pedra,
    soma: pedra.esquerda + pedra.direita,
    dupla: pedra.esquerda === pedra.direita
  };
}

function comprarDomino(socket, partida, jogador) {
  if (!partida) {
    socket.emit("erroDomino", { mensagem: "Partida não encontrada." });
    return;
  }

  if (!ehJogador(partida, jogador)) {
    socket.emit("erroDomino", { mensagem: "Você não participa dessa partida." });
    return;
  }

  if (partida.status !== "ativa") {
    socket.emit("erroDomino", { mensagem: "Essa partida não está ativa." });
    return;
  }

  if (partida.vez !== jogador) {
    socket.emit("erroDomino", { mensagem: "Ainda não é sua vez." });
    return;
  }

  if (jogadorTemJogadaValida(partida, jogador)) {
    socket.emit("erroDomino", { mensagem: "Você tem peça para jogar." });
    return;
  }

  if (!partida.domino.monte.length) {
    socket.emit("erroDomino", { mensagem: "O monte acabou. Passe a vez." });
    return;
  }

  const pedra = partida.domino.monte.pop();
  partida.domino.maos[jogador].push(pedra);

  partida.historico.push({
    texto: `${jogador} comprou uma peça.`,
    jogador,
    tipo: "compra",
    criadoEm: Date.now()
  });

  salvarDados();

  enviarPartidaDominoParaJogadores(partida);
  enviarPartidasDomino(partida.criadoPor);
  enviarPartidasDomino(partida.convidado);
}

function passarDomino(socket, partida, jogador) {
  if (!partida) {
    socket.emit("erroDomino", { mensagem: "Partida não encontrada." });
    return;
  }

  if (!ehJogador(partida, jogador)) {
    socket.emit("erroDomino", { mensagem: "Você não participa dessa partida." });
    return;
  }

  if (partida.status !== "ativa") {
    socket.emit("erroDomino", { mensagem: "Essa partida não está ativa." });
    return;
  }

  if (partida.vez !== jogador) {
    socket.emit("erroDomino", { mensagem: "Ainda não é sua vez." });
    return;
  }

  if (jogadorTemJogadaValida(partida, jogador)) {
    socket.emit("erroDomino", { mensagem: "Você ainda tem peça para jogar." });
    return;
  }

  if (partida.domino.monte.length > 0) {
    socket.emit("erroDomino", { mensagem: "Ainda tem monte. Compre uma peça." });
    return;
  }

  partida.historico.push({
    texto: `${jogador} passou a vez.`,
    jogador,
    tipo: "passou",
    criadoEm: Date.now()
  });

  partida.passesSeguidos = (partida.passesSeguidos || 0) + 1;
  partida.vez = adversario(partida, jogador);

  verificarTravaSemVencedor(partida);

  salvarDados();

  enviarPartidaDominoParaJogadores(partida);
  enviarPartidasDomino(partida.criadoPor);
  enviarPartidasDomino(partida.convidado);
}

function jogadorTemJogadaValida(partida, jogador) {
  const mao = partida.domino.maos[jogador] || [];

  if (!mao.length) return false;

  if (!partida.primeiraJogadaFeita) {
    return partida.vez === jogador && mao.some((p) => partida.pecaObrigatoriaInicio && p.id === partida.pecaObrigatoriaInicio.id);
  }

  const pontas = partida.domino.pontas;

  return mao.some((p) => {
    return (
      p.esquerda === pontas.esquerda ||
      p.direita === pontas.esquerda ||
      p.esquerda === pontas.direita ||
      p.direita === pontas.direita
    );
  });
}

function verificarTravaSemVencedor(partida) {
  if (partida.status !== "ativa") return;
  if (partida.domino.monte.length > 0) return;

  const a = partida.criadoPor;
  const b = partida.convidado;

  const aTem = jogadorTemJogadaValida(partida, a);
  const bTem = jogadorTemJogadaValida(partida, b);

  if (!aTem && !bTem) {
    partida.status = "travada";
    partida.vencedor = "";
    partida.motivoFim = "Partida travada. Ninguém venceu porque ninguém ficou sem peças.";

    partida.historico.push({
      texto: partida.motivoFim,
      tipo: "travada",
      criadoEm: Date.now()
    });
  }
}

function finalizarPorBatida(partida, jogador) {
  const outro = adversario(partida, jogador);

  partida.status = "encerrada";
  partida.vencedor = jogador;
  partida.motivoFim = `${jogador} bateu e venceu ficando sem nenhuma peça.`;
  partida.encerradaEm = Date.now();

  partida.historico.push({
    texto: partida.motivoFim,
    jogador,
    tipo: "vitoria",
    criadoEm: Date.now()
  });

  partida.historico.push({
    texto: `${outro} ficou com ${somarMao(partida.domino.maos[outro])} ponto(s) na mão.`,
    tipo: "pontos",
    criadoEm: Date.now()
  });
}

function somarMao(mao) {
  return (mao || []).reduce((total, p) => {
    return total + Number(p.esquerda || 0) + Number(p.direita || 0);
  }, 0);
}

function textoPeca(peca) {
  if (!peca) return "peça inicial";
  return `${peca.esquerda}|${peca.direita}`;
}

servidor.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});