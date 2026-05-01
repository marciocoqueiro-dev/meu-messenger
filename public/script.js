const socket = io();

const $ = (id) => document.getElementById(id);

const formulario = $("formulario");
const campoMensagem = $("campoMensagem");
const mensagens = $("mensagens");
const nomeUsuario = $("nomeUsuario");
const senhaUsuario = $("senhaUsuario");
const botaoMostrarSenha = $("botaoMostrarSenha");
const botaoTema = $("botaoTema");
const avisoDigitando = $("avisoDigitando");
const botaoCadastrar = $("botaoCadastrar");
const botaoEntrar = $("botaoEntrar");
const botaoSair = $("botaoSair");
const botaoEnviar = $("botaoEnviar");
const listaUsuarios = $("listaUsuarios");
const listaGrupos = $("listaGrupos");
const nomeGrupo = $("nomeGrupo");
const botaoCriarGrupo = $("botaoCriarGrupo");
const listaParticipantesGrupo = $("listaParticipantesGrupo");
const tituloConversa = $("tituloConversa");
const statusConversa = $("statusConversa");
const bioConversa = $("bioConversa");
const avatarConversa = $("avatarConversa");
const mensagemConta = $("mensagemConta");
const nomeUsuarioLogado = $("nomeUsuarioLogado");
const campoBuscaContato = $("campoBuscaContato");
const campoStatus = $("campoStatus");
const campoBio = $("campoBio");
const botaoSalvarBio = $("botaoSalvarBio");
const botaoAbrirMenuMobile = $("botaoAbrirMenuMobile");
const botaoFecharMenuMobile = $("botaoFecharMenuMobile");

const campoNovoContato = $("campoNovoContato");
const campoApelidoContato = $("campoApelidoContato");
const botaoAdicionarContato = $("botaoAdicionarContato");
const listaPedidosContato = $("listaPedidosContato");
const contadorPedidosContato = $("contadorPedidosContato");

const campoFotoPerfil = $("campoFotoPerfil");
const minhaFotoPerfilPreview = $("minhaFotoPerfilPreview");
const botaoEscolherFotoPerfil = $("botaoEscolherFotoPerfil");
const botaoRemoverFotoPerfil = $("botaoRemoverFotoPerfil");

const botaoAbrirBuscaConversa = $("botaoAbrirBuscaConversa");
const areaBuscaConversa = $("areaBuscaConversa");
const campoBuscaConversa = $("campoBuscaConversa");
const resultadoBuscaConversa = $("resultadoBuscaConversa");
const botaoLimparBuscaConversa = $("botaoLimparBuscaConversa");

const areaRespostaMensagem = $("areaRespostaMensagem");
const respostaNome = $("respostaNome");
const respostaTexto = $("respostaTexto");
const botaoCancelarResposta = $("botaoCancelarResposta");

const areaPreviewImagem = $("areaPreviewImagem");
const imagemPreviewSelecionada = $("imagemPreviewSelecionada");
const nomeImagemSelecionada = $("nomeImagemSelecionada");
const tamanhoImagemSelecionada = $("tamanhoImagemSelecionada");
const botaoCancelarImagem = $("botaoCancelarImagem");
const campoImagem = $("campoImagem");
const botaoAnexarImagem = $("botaoAnexarImagem");

const areaPreviewAudio = $("areaPreviewAudio");
const audioPreviewSelecionado = $("audioPreviewSelecionado");
const duracaoAudioSelecionado = $("duracaoAudioSelecionado");
const botaoCancelarAudio = $("botaoCancelarAudio");

const areaGravandoAudio = $("areaGravandoAudio");
const tempoGravandoAudio = $("tempoGravandoAudio");
const botaoCancelarGravacao = $("botaoCancelarGravacao");
const botaoPararGravacao = $("botaoPararGravacao");
const botaoAudio = $("botaoAudio");

const botaoEmoji = $("botaoEmoji");
const painelEmojis = $("painelEmojis");

const modalPerfil = $("modalPerfil");
const botaoFecharPerfil = $("botaoFecharPerfil");
const avatarPerfil = $("avatarPerfil");
const nomePerfil = $("nomePerfil");
const apelidoPerfil = $("apelidoPerfil");
const statusPerfil = $("statusPerfil");
const bioPerfil = $("bioPerfil");
const onlinePerfil = $("onlinePerfil");
const campoApelidoPerfil = $("campoApelidoPerfil");
const botaoSalvarApelidoPerfil = $("botaoSalvarApelidoPerfil");

const modalEncaminhar = $("modalEncaminhar");
const botaoFecharEncaminhar = $("botaoFecharEncaminhar");
const encaminharOrigem = $("encaminharOrigem");
const encaminharTexto = $("encaminharTexto");
const encaminharImagemPreview = $("encaminharImagemPreview");
const encaminharAudioPreview = $("encaminharAudioPreview");
const listaEncaminharContatos = $("listaEncaminharContatos");
const listaEncaminharGrupos = $("listaEncaminharGrupos");

const modalGrupoConfig = $("modalGrupoConfig");
const botaoFecharGrupoConfig = $("botaoFecharGrupoConfig");
const tituloGrupoConfig = $("tituloGrupoConfig");
const subtituloGrupoConfig = $("subtituloGrupoConfig");
const avisoDonoGrupo = $("avisoDonoGrupo");
const campoNovoNomeGrupo = $("campoNovoNomeGrupo");
const botaoRenomearGrupo = $("botaoRenomearGrupo");
const listaMembrosGrupoConfig = $("listaMembrosGrupoConfig");
const listaAdicionarMembroGrupo = $("listaAdicionarMembroGrupo");
const botaoApagarGrupo = $("botaoApagarGrupo");

const modalImagem = $("modalImagem");
const botaoFecharImagem = $("botaoFecharImagem");
const imagemModalGrande = $("imagemModalGrande");
const legendaImagemModal = $("legendaImagemModal");

const botaoAbrirOcioso = $("botaoAbrirOcioso");
const modalOcioso = $("modalOcioso");
const botaoFecharOcioso = $("botaoFecharOcioso");
const abaOciosoConvites = $("abaOciosoConvites");
const abaOciosoContatos = $("abaOciosoContatos");
const abaOciosoPartidas = $("abaOciosoPartidas");
const painelOciosoConvites = $("painelOciosoConvites");
const painelOciosoContatos = $("painelOciosoContatos");
const painelOciosoPartidas = $("painelOciosoPartidas");
const listaConvitesXadrez = $("listaConvitesXadrez");
const listaContatosXadrez = $("listaContatosXadrez");
const listaPartidasXadrez = $("listaPartidasXadrez");
const tituloPartidaXadrez = $("tituloPartidaXadrez");
const statusPartidaXadrez = $("statusPartidaXadrez");
const jogadorBrancoXadrez = $("jogadorBrancoXadrez");
const jogadorPretoXadrez = $("jogadorPretoXadrez");
const vezXadrez = $("vezXadrez");
const tabuleiroXadrez = $("tabuleiroXadrez");
const historicoXadrez = $("historicoXadrez");
const botaoReiniciarXadrez = $("botaoReiniciarXadrez");
const botaoSairXadrez = $("botaoSairXadrez");
const mensagemXadrez = $("mensagemXadrez");

let entrouNoChat = false;
let meuNome = "";
let minhaBio = "Na Rede Coqueiro";
let minhaFotoPerfil = "";

let contatosAtuais = [];
let gruposAtuais = [];
let pedidosContatoAtuais = [];
let convitesXadrezAtuais = [];
let partidasXadrezAtuais = [];
let partidaXadrezAtual = null;

let tipoConversaAtual = "";
let conversaAtualNome = "";
let conversaAtualApelido = "";
let conversaAtualStatus = "";
let conversaAtualOnline = false;
let conversaAtualBio = "";
let conversaAtualFotoPerfil = "";

let grupoAtualId = "";
let grupoAtualNome = "";
let grupoAtualCriadoPor = "";
let grupoAtualMembros = [];

let mensagemRespostaAtual = null;
let mensagemEncaminharAtual = null;
let imagemSelecionadaAtual = null;
let audioSelecionadoAtual = null;
let pedraSelecionadaDomino = null;
let tempoDigitando = null;

let gravadorAudio = null;
let partesAudio = [];
let streamAudio = null;
let inicioGravacao = 0;
let intervaloGravacao = null;

let idsConvitesJaNotificados = new Set();
let fogueteVitoriaJaMostrado = new Set();

iniciar();

function iniciar() {
  carregarTema();
  limparTelaDomino();
  configurarEventos();
}

function configurarEventos() {
  if (botaoReiniciarXadrez) {
    botaoReiniciarXadrez.textContent = "🔀 Embaralhar";
  }

  botaoTema.onclick = alternarTema;

  botaoMostrarSenha.onclick = () => {
    senhaUsuario.type = senhaUsuario.type === "password" ? "text" : "password";
    botaoMostrarSenha.textContent = senhaUsuario.type === "password" ? "👁" : "🙈";
  };

  botaoCadastrar.onclick = () => {
    socket.emit("cadastrarUsuario", {
      nome: nomeUsuario.value.trim(),
      senha: senhaUsuario.value.trim()
    });
  };

  botaoEntrar.onclick = () => {
    socket.emit("entrar", {
      nome: nomeUsuario.value.trim(),
      senha: senhaUsuario.value.trim()
    });
  };

  botaoSair.onclick = () => {
    socket.emit("sair");
    location.reload();
  };

  campoStatus.onchange = () => {
    socket.emit("alterarStatus", {
      status: campoStatus.value
    });
  };

  botaoSalvarBio.onclick = () => {
    socket.emit("alterarBio", {
      bio: campoBio.value.trim()
    });
  };

  botaoEscolherFotoPerfil.onclick = () => campoFotoPerfil.click();

  botaoRemoverFotoPerfil.onclick = () => {
    minhaFotoPerfil = "";
    atualizarMinhaFotoPerfil();

    socket.emit("alterarFotoPerfil", {
      fotoPerfil: ""
    });
  };

  campoFotoPerfil.onchange = selecionarFotoPerfil;

  botaoAdicionarContato.onclick = solicitarContato;

  campoNovoContato.onkeydown = (evento) => {
    if (evento.key === "Enter") {
      evento.preventDefault();
      solicitarContato();
    }
  };

  campoApelidoContato.onkeydown = (evento) => {
    if (evento.key === "Enter") {
      evento.preventDefault();
      solicitarContato();
    }
  };

  campoBuscaContato.oninput = renderizarContatos;

  botaoCriarGrupo.onclick = criarGrupo;

  formulario.onsubmit = enviarMensagem;

  campoMensagem.oninput = () => {
    ajustarAlturaCampo();

    if (!entrouNoChat || tipoConversaAtual !== "privada") return;

    socket.emit("digitandoPrivado", {
      paraNome: conversaAtualNome
    });

    clearTimeout(tempoDigitando);

    tempoDigitando = setTimeout(() => {
      socket.emit("parouDigitandoPrivado", {
        paraNome: conversaAtualNome
      });
    }, 900);
  };

  campoMensagem.onkeydown = (evento) => {
    if (evento.key === "Enter" && !evento.shiftKey) {
      evento.preventDefault();

      if (!botaoEnviar.disabled) {
        formulario.requestSubmit();
      }
    }
  };

  botaoEmoji.onclick = () => {
    painelEmojis.classList.toggle("painel-emojis-aberto");
  };

  painelEmojis.querySelectorAll("button").forEach((botao) => {
    botao.onclick = () => {
      campoMensagem.value += botao.textContent;
      campoMensagem.focus();
      ajustarAlturaCampo();
    };
  });

  botaoAnexarImagem.onclick = () => campoImagem.click();
  campoImagem.onchange = selecionarImagem;
  botaoCancelarImagem.onclick = limparImagemSelecionada;

  botaoAudio.onclick = iniciarGravacaoAudio;
  botaoCancelarAudio.onclick = limparAudioSelecionado;
  botaoCancelarGravacao.onclick = cancelarGravacaoAudio;
  botaoPararGravacao.onclick = pararGravacaoAudio;

  botaoCancelarResposta.onclick = limparResposta;

  botaoAbrirBuscaConversa.onclick = (evento) => {
    evento.stopPropagation();
    areaBuscaConversa.classList.toggle("area-busca-conversa-aberta");
    campoBuscaConversa.focus();
  };

  campoBuscaConversa.oninput = pesquisarMensagens;
  botaoLimparBuscaConversa.onclick = limparBusca;

  botaoAbrirMenuMobile.onclick = () => {
    document.body.classList.add("menu-mobile-aberto");
  };

  botaoFecharMenuMobile.onclick = () => {
    document.body.classList.remove("menu-mobile-aberto");
  };

  document.querySelector(".chat-topo").onclick = (evento) => {
    if (evento.target.tagName === "BUTTON") return;
    abrirPerfilOuGrupo();
  };

  botaoFecharPerfil.onclick = () => modalPerfil.classList.remove("modal-perfil-aberto");
  botaoSalvarApelidoPerfil.onclick = salvarApelidoPerfil;

  botaoFecharEncaminhar.onclick = () => modalEncaminhar.classList.remove("modal-encaminhar-aberto");

  botaoFecharGrupoConfig.onclick = () => modalGrupoConfig.classList.remove("modal-grupo-config-aberto");
  botaoRenomearGrupo.onclick = renomearGrupo;
  botaoApagarGrupo.onclick = apagarGrupo;

  botaoFecharImagem.onclick = () => modalImagem.classList.remove("modal-imagem-aberto");

  botaoAbrirOcioso.onclick = abrirOcioso;
  botaoFecharOcioso.onclick = () => modalOcioso.classList.remove("modal-ocioso-aberto");

  abaOciosoConvites.onclick = () => abrirAbaOcioso("convites");
  abaOciosoContatos.onclick = () => abrirAbaOcioso("contatos");
  abaOciosoPartidas.onclick = () => abrirAbaOcioso("partidas");

  botaoReiniciarXadrez.onclick = () => {
    if (!partidaXadrezAtual) return;

    const confirmar = confirm("Embaralhar e começar uma nova partida de dominó?");
    if (!confirmar) return;

    socket.emit("reiniciarXadrez", {
      partidaId: partidaXadrezAtual.id
    });
  };

  botaoSairXadrez.onclick = () => {
    if (!partidaXadrezAtual) return;

    const confirmar = confirm("Deseja sair desta partida?");
    if (!confirmar) return;

    socket.emit("sairXadrez", {
      partidaId: partidaXadrezAtual.id
    });
  };

  window.onclick = (evento) => {
    if (evento.target === modalPerfil) modalPerfil.classList.remove("modal-perfil-aberto");
    if (evento.target === modalEncaminhar) modalEncaminhar.classList.remove("modal-encaminhar-aberto");
    if (evento.target === modalGrupoConfig) modalGrupoConfig.classList.remove("modal-grupo-config-aberto");
    if (evento.target === modalImagem) modalImagem.classList.remove("modal-imagem-aberto");
    if (evento.target === modalOcioso) modalOcioso.classList.remove("modal-ocioso-aberto");
  };
}

socket.on("sucessoCadastro", (dados) => mostrarMensagemConta(dados.mensagem, "sucesso"));
socket.on("erroCadastro", (dados) => mostrarMensagemConta(dados.mensagem, "erro"));
socket.on("erroEntrada", (dados) => mostrarMensagemConta(dados.mensagem, "erro"));
socket.on("erroContato", (dados) => mostrarMensagemConta(dados.mensagem, "erro"));
socket.on("sucessoContato", (dados) => mostrarMensagemConta(dados.mensagem, "sucesso"));
socket.on("erroGrupo", (dados) => mostrarMensagemConta(dados.mensagem, "erro"));
socket.on("sucessoGrupo", (dados) => mostrarMensagemConta(dados.mensagem, "sucesso"));
socket.on("erroImagem", (dados) => mostrarMensagemConta(dados.mensagem, "erro"));
socket.on("erroAudio", (dados) => mostrarMensagemConta(dados.mensagem, "erro"));

socket.on("sucessoEntrada", (dados) => {
  entrouNoChat = true;
  meuNome = dados.nome;
  minhaBio = dados.bio || "Na Rede Coqueiro";
  minhaFotoPerfil = dados.fotoPerfil || "";

  document.body.classList.add("usuario-logado");

  nomeUsuarioLogado.textContent = meuNome;
  campoStatus.value = dados.status || "Disponível";
  campoBio.value = minhaBio;

  habilitarChat(true);
  atualizarMinhaFotoPerfil();
  mostrarMensagemConta(dados.mensagem, "sucesso");

  socket.emit("buscarPartidasXadrez");
});

socket.on("statusAtualizado", (dados) => {
  campoStatus.value = dados.status;
});

socket.on("bioAtualizada", (dados) => {
  minhaBio = dados.bio;
  campoBio.value = minhaBio;
  mostrarMensagemConta("Recado salvo.", "sucesso");
});

socket.on("fotoPerfilAtualizada", (dados) => {
  minhaFotoPerfil = dados.fotoPerfil || "";
  atualizarMinhaFotoPerfil();
});

socket.on("contatos", (contatos) => {
  contatosAtuais = contatos || [];
  renderizarContatos();
  renderizarParticipantesGrupo();
  renderizarContatosDomino();
});

socket.on("grupos", (grupos) => {
  gruposAtuais = grupos || [];
  renderizarGrupos();
});

socket.on("pedidosContato", (pedidos) => {
  pedidosContatoAtuais = pedidos || [];
  renderizarPedidosContato();
});

socket.on("novaSolicitacaoContato", (dados) => {
  mostrarNotificacao(dados.mensagem || "Nova solicitação de contato.");
});

socket.on("solicitacaoContatoAceita", (dados) => {
  mostrarNotificacao(dados.mensagem || "Solicitação aceita.");
});

socket.on("historicoPrivado", (dados) => {
  if (tipoConversaAtual !== "privada") return;
  if (dados.comNome !== conversaAtualNome) return;

  mensagens.innerHTML = "";
  (dados.mensagens || []).forEach(adicionarMensagemNaTela);
  rolarFim();
});

socket.on("historicoGrupo", (dados) => {
  if (tipoConversaAtual !== "grupo") return;
  if (dados.grupoId !== grupoAtualId) return;

  grupoAtualNome = dados.grupoNome;
  grupoAtualCriadoPor = dados.criadoPor;
  grupoAtualMembros = dados.membros || [];

  mensagens.innerHTML = "";
  (dados.mensagens || []).forEach(adicionarMensagemNaTela);
  rolarFim();
});

socket.on("mensagemPrivada", (msg) => {
  const conversaAberta =
    tipoConversaAtual === "privada" &&
    (msg.deNome === conversaAtualNome || msg.paraNome === conversaAtualNome);

  if (conversaAberta) {
    adicionarMensagemNaTela(msg);
    rolarFim();

    if (msg.deNome !== meuNome) {
      socket.emit("marcarComoLida", {
        deNome: msg.deNome
      });
    }
  } else if (msg.deNome !== meuNome) {
    mostrarNotificacao(`Nova mensagem de ${msg.deNome}`);
  }
});

socket.on("mensagemGrupo", (msg) => {
  const conversaAberta = tipoConversaAtual === "grupo" && msg.grupoId === grupoAtualId;

  if (conversaAberta) {
    adicionarMensagemNaTela(msg);
    rolarFim();
  } else if (msg.deNome !== meuNome) {
    mostrarNotificacao(`Nova mensagem no grupo ${msg.grupoNome || ""}`);
  }
});

socket.on("mensagemApagada", ({ id }) => {
  const el = document.querySelector(`[data-mensagem-id="${id}"]`);
  if (!el) return;

  el.classList.add("mensagem-apagada");

  const texto = el.querySelector(".texto-mensagem");
  if (texto) texto.textContent = "Mensagem apagada";

  const imagem = el.querySelector(".imagem-mensagem");
  if (imagem) imagem.remove();

  const audio = el.querySelector(".audio-mensagem-box");
  if (audio) audio.remove();
});

socket.on("digitandoPrivado", (dados) => {
  if (tipoConversaAtual === "privada" && dados.deNome === conversaAtualNome) {
    avisoDigitando.textContent = `${obterNomeContato(dados.deNome)} está digitando...`;
  }
});

socket.on("parouDigitandoPrivado", (dados) => {
  if (tipoConversaAtual === "privada" && dados.deNome === conversaAtualNome) {
    avisoDigitando.textContent = "";
  }
});

/* =========================================================
   DOMINÓ — SOCKETS
   ========================================================= */

socket.on("conviteXadrezRecebido", (dados) => {
  const convite = {
    id: dados.partidaId || dados.id,
    partidaId: dados.partidaId || dados.id,
    criadoPor: dados.deNome || dados.adversario,
    adversario: dados.adversario || dados.deNome,
    status: "convite",
    temaDomino: dados.temaDomino || "classico",
    criadoEm: Date.now()
  };

  const jaExiste = convitesXadrezAtuais.some((c) => c.id === convite.id);

  if (!jaExiste) {
    convitesXadrezAtuais.unshift(convite);
  }

  idsConvitesJaNotificados.add(convite.id);

  mostrarConviteDominoFlutuante(convite);
  renderizarConvitesDomino();

  modalOcioso.classList.add("modal-ocioso-aberto");
  abrirAbaOcioso("convites");

  socket.emit("buscarPartidasXadrez");
});

socket.on("convitesXadrez", (convites) => {
  convites = convites || [];

  const convitesNovos = convites.filter((convite) => {
    return !idsConvitesJaNotificados.has(convite.id);
  });

  convitesXadrezAtuais = convites;

  convitesNovos.forEach((convite) => {
    idsConvitesJaNotificados.add(convite.id);
    mostrarConviteDominoFlutuante(convite);
  });

  renderizarConvitesDomino();

  if (convitesNovos.length > 0) {
    modalOcioso.classList.add("modal-ocioso-aberto");
    abrirAbaOcioso("convites");
  }
});

socket.on("partidasXadrez", (partidas) => {
  partidasXadrezAtuais = partidas || [];
  renderizarPartidasDomino();

  if (partidaXadrezAtual) {
    const atualizada = partidasXadrezAtuais.find((p) => p.id === partidaXadrezAtual.id);

    if (atualizada) {
      partidaXadrezAtual = atualizada;
      renderizarPartidaDomino(atualizada);
    }
  }
});

socket.on("partidaXadrezAtualizada", (partida) => {
  const indice = partidasXadrezAtuais.findIndex((p) => p.id === partida.id);

  if (indice >= 0) {
    partidasXadrezAtuais[indice] = partida;
  } else {
    partidasXadrezAtuais.unshift(partida);
  }

  partidaXadrezAtual = partida;
  renderizarPartidasDomino();

  modalOcioso.classList.add("modal-ocioso-aberto");
  abrirAbaOcioso("partidas");
  renderizarPartidaDomino(partida);
});

socket.on("sucessoXadrez", (dados) => {
  mostrarMensagemDomino(dados.mensagem || "Ação realizada.", "sucesso");
});

socket.on("erroXadrez", (dados) => {
  mostrarMensagemDomino(dados.mensagem || "Jogada inválida.", "erro");
});

/* =========================================================
   CHAT / CONTA
   ========================================================= */

function habilitarChat(estado) {
  [
    campoMensagem,
    botaoEnviar,
    campoStatus,
    campoBio,
    botaoSalvarBio,
    campoNovoContato,
    campoApelidoContato,
    botaoAdicionarContato,
    botaoEscolherFotoPerfil,
    botaoRemoverFotoPerfil,
    botaoSair,
    botaoEmoji,
    botaoAnexarImagem,
    botaoAudio,
    botaoAbrirOcioso
  ].forEach((el) => {
    if (el) el.disabled = !estado;
  });
}

function selecionarFotoPerfil() {
  const arquivo = campoFotoPerfil.files[0];
  if (!arquivo) return;

  const leitor = new FileReader();

  leitor.onload = () => {
    minhaFotoPerfil = leitor.result;
    atualizarMinhaFotoPerfil();

    socket.emit("alterarFotoPerfil", {
      fotoPerfil: minhaFotoPerfil
    });
  };

  leitor.readAsDataURL(arquivo);
}

function atualizarMinhaFotoPerfil() {
  aplicarAvatar(minhaFotoPerfilPreview, meuNome || "?", minhaFotoPerfil);
}

function solicitarContato() {
  if (!entrouNoChat) return;

  socket.emit("solicitarContato", {
    nome: campoNovoContato.value.trim(),
    apelido: campoApelidoContato.value.trim()
  });

  campoNovoContato.value = "";
  campoApelidoContato.value = "";
}

function renderizarPedidosContato() {
  listaPedidosContato.innerHTML = "";
  contadorPedidosContato.textContent = pedidosContatoAtuais.length || "";

  if (!pedidosContatoAtuais.length) {
    listaPedidosContato.textContent = "Nenhum pedido pendente";
    return;
  }

  pedidosContatoAtuais.forEach((pedido) => {
    const item = document.createElement("div");
    item.className = "pedido-contato-item";

    const avatar = document.createElement("div");
    avatar.className = "pedido-contato-avatar";
    aplicarAvatar(avatar, pedido.deNome, pedido.fotoPerfil || "");

    const conteudo = document.createElement("div");
    conteudo.className = "pedido-contato-conteudo";

    const nome = document.createElement("strong");
    nome.textContent = pedido.deNome;

    const texto = document.createElement("span");
    texto.textContent = "Quer adicionar você como contato.";

    const apelido = document.createElement("input");
    apelido.className = "campo-apelido-pedido";
    apelido.placeholder = "Salvar como...";
    apelido.value = pedido.deNome;

    const acoes = document.createElement("div");
    acoes.className = "pedido-contato-acoes";

    const aceitar = document.createElement("button");
    aceitar.className = "botao-aceitar-pedido";
    aceitar.textContent = "Aceitar";
    aceitar.onclick = () => {
      socket.emit("aceitarContato", {
        deNome: pedido.deNome,
        apelido: apelido.value.trim() || pedido.deNome
      });
    };

    const recusar = document.createElement("button");
    recusar.className = "botao-recusar-pedido";
    recusar.textContent = "Recusar";
    recusar.onclick = () => {
      socket.emit("recusarContato", {
        deNome: pedido.deNome
      });
    };

    acoes.append(aceitar, recusar);
    conteudo.append(nome, texto, apelido, acoes);
    item.append(avatar, conteudo);
    listaPedidosContato.appendChild(item);
  });
}

function renderizarContatos() {
  listaUsuarios.innerHTML = "";

  const busca = campoBuscaContato.value.trim().toLowerCase();

  const contatos = contatosAtuais.filter((contato) => {
    return (
      contato.nome.toLowerCase().includes(busca) ||
      (contato.apelido || "").toLowerCase().includes(busca)
    );
  });

  if (!contatos.length) {
    listaUsuarios.textContent = "Nenhum contato aceito ainda";
    return;
  }

  contatos.forEach((contato) => {
    const item = document.createElement("button");
    item.className = "usuario-item";
    item.type = "button";

    if (!contato.online) item.classList.add("usuario-offline");

    if (tipoConversaAtual === "privada" && conversaAtualNome === contato.nome) {
      item.classList.add("usuario-selecionado");
    }

    const avatar = document.createElement("div");
    avatar.className = "usuario-avatar";
    avatar.classList.add(classeAvatar(contato.status, contato.online));
    aplicarAvatar(avatar, contato.apelido || contato.nome, contato.fotoPerfil || "");

    const conteudo = document.createElement("div");
    conteudo.className = "usuario-conteudo";

    const topo = document.createElement("div");
    topo.className = "usuario-topo";

    const nome = document.createElement("strong");
    nome.textContent = contato.apelido || contato.nome;

    const horario = document.createElement("span");
    horario.className = "horario-ultima-mensagem";
    horario.textContent = contato.ultimaMensagem?.horario || "";

    topo.append(nome, horario);

    const nick = document.createElement("div");
    nick.className = "nick-contato";
    nick.textContent = contato.apelido && contato.apelido !== contato.nome ? `@${contato.nome}` : "";

    const status = document.createElement("div");
    status.className = "usuario-status";
    status.innerHTML = `<span class="bolinha-status ${classeBolinha(contato.status, contato.online)}"></span>${textoStatus(contato.status, contato.online)}`;

    const previa = document.createElement("div");
    previa.className = "previa-mensagem";
    previa.textContent = contato.ultimaMensagem?.texto || "";

    conteudo.append(topo, nick, status, previa);
    item.append(avatar, conteudo);

    item.onclick = () => abrirConversaPrivada(contato);

    listaUsuarios.appendChild(item);
  });
}

function abrirConversaPrivada(contato) {
  tipoConversaAtual = "privada";
  conversaAtualNome = contato.nome;
  conversaAtualApelido = contato.apelido || contato.nome;
  conversaAtualStatus = contato.status;
  conversaAtualOnline = contato.online;
  conversaAtualBio = contato.bio || "";
  conversaAtualFotoPerfil = contato.fotoPerfil || "";

  grupoAtualId = "";

  tituloConversa.textContent = conversaAtualApelido;
  statusConversa.textContent = textoStatus(conversaAtualStatus, conversaAtualOnline);
  statusConversa.className = "status-conversa";
  bioConversa.textContent = conversaAtualBio;
  avisoDigitando.textContent = "";

  avatarConversa.className = "avatar-conversa";
  avatarConversa.classList.add(classeAvatarTopo(conversaAtualStatus, conversaAtualOnline));
  aplicarAvatar(avatarConversa, conversaAtualApelido, conversaAtualFotoPerfil);

  campoMensagem.disabled = false;
  botaoEnviar.disabled = false;
  botaoEmoji.disabled = false;
  botaoAnexarImagem.disabled = false;
  botaoAudio.disabled = false;

  mensagens.innerHTML = "";
  adicionarBoasVindas(`Conversa com ${conversaAtualApelido}`);

  socket.emit("buscarHistoricoPrivado", {
    paraNome: conversaAtualNome
  });

  socket.emit("marcarComoLida", {
    deNome: conversaAtualNome
  });

  document.body.classList.remove("menu-mobile-aberto");
  renderizarContatos();
}

function renderizarGrupos() {
  listaGrupos.innerHTML = "";

  if (!gruposAtuais.length) {
    listaGrupos.textContent = "Nenhum grupo ainda";
    return;
  }

  gruposAtuais.forEach((grupo) => {
    const item = document.createElement("button");
    item.className = "grupo-item";
    item.type = "button";

    if (tipoConversaAtual === "grupo" && grupoAtualId === grupo.id) {
      item.classList.add("grupo-selecionado");
    }

    const avatar = document.createElement("div");
    avatar.className = "grupo-avatar";
    avatar.textContent = "#";

    const conteudo = document.createElement("div");
    conteudo.className = "grupo-conteudo";

    const topo = document.createElement("div");
    topo.className = "grupo-topo";

    const nome = document.createElement("strong");
    nome.textContent = grupo.nome;

    const hora = document.createElement("span");
    hora.className = "horario-ultima-mensagem";
    hora.textContent = grupo.ultimaMensagem?.horario || "";

    topo.append(nome, hora);

    const membros = document.createElement("div");
    membros.className = "grupo-membros";
    membros.textContent = `${(grupo.membros || []).length} membros`;

    const previa = document.createElement("div");
    previa.className = "previa-mensagem";
    previa.textContent = grupo.ultimaMensagem?.texto || "";

    conteudo.append(topo, membros, previa);
    item.append(avatar, conteudo);

    item.onclick = () => abrirGrupo(grupo);

    listaGrupos.appendChild(item);
  });
}

function renderizarParticipantesGrupo() {
  listaParticipantesGrupo.innerHTML = "";

  if (!contatosAtuais.length) {
    listaParticipantesGrupo.textContent = "Entre no chat para escolher contatos aceitos.";
    return;
  }

  contatosAtuais.forEach((contato) => {
    const label = document.createElement("label");
    label.className = "participante-item";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = contato.nome;

    const avatar = document.createElement("span");
    avatar.className = "avatar-participante-pequeno";
    aplicarAvatar(avatar, contato.apelido || contato.nome, contato.fotoPerfil || "");

    const texto = document.createElement("span");
    texto.textContent = contato.apelido || contato.nome;

    label.append(input, avatar, texto);
    listaParticipantesGrupo.appendChild(label);
  });
}

function criarGrupo() {
  const nome = nomeGrupo.value.trim();

  const membros = Array.from(listaParticipantesGrupo.querySelectorAll("input:checked")).map((input) => {
    return input.value;
  });

  if (!nome) {
    mostrarMensagemConta("Digite o nome do grupo.", "erro");
    return;
  }

  socket.emit("criarGrupo", {
    nome,
    membros
  });

  nomeGrupo.value = "";

  listaParticipantesGrupo.querySelectorAll("input").forEach((input) => {
    input.checked = false;
  });
}

function abrirGrupo(grupo) {
  tipoConversaAtual = "grupo";
  grupoAtualId = grupo.id;
  grupoAtualNome = grupo.nome;
  grupoAtualCriadoPor = grupo.criadoPor;
  grupoAtualMembros = grupo.membros || [];

  conversaAtualNome = "";

  tituloConversa.textContent = grupo.nome;
  statusConversa.textContent = `${grupoAtualMembros.length} membros`;
  statusConversa.className = "status-conversa status-grupo";
  bioConversa.textContent = "";
  avisoDigitando.textContent = "";

  avatarConversa.className = "avatar-conversa avatar-grupo";
  avatarConversa.textContent = "#";

  campoMensagem.disabled = false;
  botaoEnviar.disabled = false;
  botaoEmoji.disabled = false;
  botaoAnexarImagem.disabled = false;
  botaoAudio.disabled = false;

  mensagens.innerHTML = "";
  adicionarBoasVindas(`Grupo ${grupo.nome}`);

  socket.emit("buscarHistoricoGrupo", {
    grupoId: grupo.id
  });

  document.body.classList.remove("menu-mobile-aberto");
  renderizarGrupos();
}

function enviarMensagem(evento) {
  evento.preventDefault();

  if (!tipoConversaAtual) {
    mostrarMensagemConta("Selecione uma conversa.", "erro");
    return;
  }

  const texto = campoMensagem.value.trim();

  if (!texto && !imagemSelecionadaAtual && !audioSelecionadoAtual) return;

  const dados = {
    texto,
    horario: horarioAtual(),
    resposta: mensagemRespostaAtual,
    imagem: imagemSelecionadaAtual,
    audio: audioSelecionadoAtual
  };

  if (tipoConversaAtual === "privada") {
    socket.emit("mensagemPrivada", {
      ...dados,
      paraNome: conversaAtualNome
    });
  }

  if (tipoConversaAtual === "grupo") {
    socket.emit("mensagemGrupo", {
      ...dados,
      grupoId: grupoAtualId
    });
  }

  campoMensagem.value = "";
  ajustarAlturaCampo();
  limparResposta();
  limparImagemSelecionada();
  limparAudioSelecionado();
}

function adicionarMensagemNaTela(msg) {
  if (msg.sistema) {
    const aviso = document.createElement("div");
    aviso.className = "aviso-sistema";
    aviso.textContent = msg.texto;
    mensagens.appendChild(aviso);
    return;
  }

  const div = document.createElement("div");
  div.className = "mensagem";
  div.dataset.mensagemId = msg.id || "";

  if (msg.deNome === meuNome) {
    div.classList.add("minha-mensagem");
  } else {
    div.classList.add("outra-mensagem");
  }

  if (msg.apagada) {
    div.classList.add("mensagem-apagada");
  }

  const cab = document.createElement("div");
  cab.className = "cabecalho-mensagem";

  const nome = document.createElement("strong");
  nome.textContent = obterNomeMensagem(msg.deNome);

  const acoes = document.createElement("div");
  acoes.className = "acoes-mensagem";

  const responder = document.createElement("button");
  responder.className = "botao-responder-mensagem";
  responder.type = "button";
  responder.textContent = "↩";
  responder.onclick = () => responderMensagem(msg);

  const encaminhar = document.createElement("button");
  encaminhar.className = "botao-encaminhar-mensagem";
  encaminhar.type = "button";
  encaminhar.textContent = "➤";
  encaminhar.onclick = () => abrirEncaminhar(msg);

  acoes.append(responder, encaminhar);

  if (msg.deNome === meuNome && !msg.apagada) {
    const apagar = document.createElement("button");
    apagar.className = "botao-apagar-mensagem";
    apagar.type = "button";
    apagar.textContent = "🗑";
    apagar.onclick = () => socket.emit("apagarMensagemParaTodos", {
      id: msg.id
    });
    acoes.append(apagar);
  }

  cab.append(nome, acoes);
  div.appendChild(cab);

  if (msg.encaminhada) {
    const enc = document.createElement("div");
    enc.className = "mensagem-encaminhada-label";
    enc.textContent = "Encaminhada";
    div.appendChild(enc);
  }

  if (msg.resposta) {
    const resp = document.createElement("div");
    resp.className = "resposta-na-mensagem";

    const rnome = document.createElement("strong");
    rnome.textContent = msg.resposta.deNome || "Mensagem";

    const rtexto = document.createElement("span");
    rtexto.textContent = msg.resposta.texto || "Mídia";

    resp.append(rnome, rtexto);
    div.appendChild(resp);
  }

  const texto = document.createElement("span");
  texto.className = "texto-mensagem";
  texto.textContent = msg.apagada ? "Mensagem apagada" : msg.texto || "";
  div.appendChild(texto);

  if (msg.imagem && msg.imagem.dados && !msg.apagada) {
    const img = document.createElement("img");
    img.className = "imagem-mensagem";
    img.src = msg.imagem.dados;
    img.alt = msg.imagem.nome || "Imagem";
    img.onclick = () => abrirImagem(img.src, msg.texto || "");
    div.appendChild(img);
  }

  if (msg.audio && msg.audio.dados && !msg.apagada) {
    const box = document.createElement("div");
    box.className = "audio-mensagem-box";

    const icone = document.createElement("div");
    icone.className = "icone-audio-mensagem";
    icone.textContent = "🎙️";

    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = msg.audio.dados;

    box.append(icone, audio);
    div.appendChild(box);
  }

  const rodape = document.createElement("div");
  rodape.className = "rodape-mensagem";

  const hora = document.createElement("small");
  hora.textContent = msg.horario || "";

  rodape.appendChild(hora);
  div.appendChild(rodape);

  mensagens.appendChild(div);
}

function responderMensagem(msg) {
  mensagemRespostaAtual = {
    id: msg.id,
    deNome: msg.deNome,
    texto: msg.texto || (msg.imagem ? "Imagem" : msg.audio ? "Áudio" : "Mensagem")
  };

  respostaNome.textContent = `Respondendo ${obterNomeMensagem(msg.deNome)}`;
  respostaTexto.textContent = mensagemRespostaAtual.texto;
  areaRespostaMensagem.classList.add("area-resposta-mensagem-aberta");
  campoMensagem.focus();
}

function limparResposta() {
  mensagemRespostaAtual = null;
  areaRespostaMensagem.classList.remove("area-resposta-mensagem-aberta");
}

function selecionarImagem() {
  const arquivo = campoImagem.files[0];
  if (!arquivo) return;

  const leitor = new FileReader();

  leitor.onload = () => {
    imagemSelecionadaAtual = {
      nome: arquivo.name,
      tipo: arquivo.type,
      tamanho: arquivo.size,
      dados: leitor.result
    };

    imagemPreviewSelecionada.src = leitor.result;
    nomeImagemSelecionada.textContent = arquivo.name;
    tamanhoImagemSelecionada.textContent = formatarTamanho(arquivo.size);
    areaPreviewImagem.classList.add("area-preview-imagem-aberta");
  };

  leitor.readAsDataURL(arquivo);
}

function limparImagemSelecionada() {
  imagemSelecionadaAtual = null;
  campoImagem.value = "";
  areaPreviewImagem.classList.remove("area-preview-imagem-aberta");
  imagemPreviewSelecionada.src = "";
}

async function iniciarGravacaoAudio() {
  if (gravadorAudio && gravadorAudio.state === "recording") {
    pararGravacaoAudio();
    return;
  }

  try {
    streamAudio = await navigator.mediaDevices.getUserMedia({
      audio: true
    });

    partesAudio = [];
    gravadorAudio = new MediaRecorder(streamAudio);

    gravadorAudio.ondataavailable = (evento) => {
      if (evento.data.size > 0) {
        partesAudio.push(evento.data);
      }
    };

    gravadorAudio.onstop = () => {
      if (!partesAudio.length) return;

      const blob = new Blob(partesAudio, {
        type: "audio/webm"
      });

      const leitor = new FileReader();

      leitor.onload = () => {
        audioSelecionadoAtual = {
          nome: "audio.webm",
          tipo: "audio/webm",
          tamanho: blob.size,
          dados: leitor.result
        };

        audioPreviewSelecionado.src = leitor.result;
        duracaoAudioSelecionado.textContent = "Áudio pronto";
        areaPreviewAudio.classList.add("area-preview-audio-aberta");
      };

      leitor.readAsDataURL(blob);
    };

    inicioGravacao = Date.now();
    areaGravandoAudio.classList.add("area-gravando-audio-aberta");

    intervaloGravacao = setInterval(() => {
      const segundos = Math.floor((Date.now() - inicioGravacao) / 1000);
      tempoGravandoAudio.textContent = formatarTempo(segundos);
    }, 500);

    gravadorAudio.start();
  } catch (erro) {
    mostrarMensagemConta("Não foi possível acessar o microfone.", "erro");
  }
}

function pararGravacaoAudio() {
  if (gravadorAudio && gravadorAudio.state === "recording") {
    gravadorAudio.stop();
  }

  if (streamAudio) {
    streamAudio.getTracks().forEach((track) => track.stop());
    streamAudio = null;
  }

  clearInterval(intervaloGravacao);
  areaGravandoAudio.classList.remove("area-gravando-audio-aberta");
}

function cancelarGravacaoAudio() {
  partesAudio = [];
  pararGravacaoAudio();
}

function limparAudioSelecionado() {
  audioSelecionadoAtual = null;
  audioPreviewSelecionado.src = "";
  areaPreviewAudio.classList.remove("area-preview-audio-aberta");
}

function abrirImagem(src, legenda) {
  imagemModalGrande.src = src;
  legendaImagemModal.textContent = legenda || "";
  modalImagem.classList.add("modal-imagem-aberto");
}

function abrirEncaminhar(msg) {
  mensagemEncaminharAtual = msg;

  encaminharOrigem.textContent = `De: ${obterNomeMensagem(msg.deNome)}`;
  encaminharTexto.textContent = msg.texto || "";

  encaminharImagemPreview.style.display = msg.imagem?.dados ? "block" : "none";
  encaminharImagemPreview.src = msg.imagem?.dados || "";

  encaminharAudioPreview.style.display = msg.audio?.dados ? "block" : "none";
  encaminharAudioPreview.src = msg.audio?.dados || "";

  renderizarDestinosEncaminhar();

  modalEncaminhar.classList.add("modal-encaminhar-aberto");
}

function renderizarDestinosEncaminhar() {
  listaEncaminharContatos.innerHTML = "";
  listaEncaminharGrupos.innerHTML = "";

  contatosAtuais.forEach((contato) => {
    const btn = document.createElement("button");
    btn.className = "item-encaminhar";
    btn.type = "button";
    btn.textContent = contato.apelido || contato.nome;
    btn.onclick = () => encaminharParaContato(contato.nome);
    listaEncaminharContatos.appendChild(btn);
  });

  gruposAtuais.forEach((grupo) => {
    const btn = document.createElement("button");
    btn.className = "item-encaminhar";
    btn.type = "button";
    btn.textContent = grupo.nome;
    btn.onclick = () => encaminharParaGrupo(grupo.id);
    listaEncaminharGrupos.appendChild(btn);
  });

  if (!contatosAtuais.length) listaEncaminharContatos.textContent = "Nenhum contato disponível";
  if (!gruposAtuais.length) listaEncaminharGrupos.textContent = "Nenhum grupo disponível";
}

function encaminharParaContato(nome) {
  if (!mensagemEncaminharAtual) return;

  socket.emit("encaminharMensagem", {
    destinoTipo: "privada",
    destinoNome: nome,
    texto: mensagemEncaminharAtual.texto || "",
    imagem: mensagemEncaminharAtual.imagem || null,
    audio: mensagemEncaminharAtual.audio || null,
    origemNome: mensagemEncaminharAtual.deNome
  });

  modalEncaminhar.classList.remove("modal-encaminhar-aberto");
}

function encaminharParaGrupo(id) {
  if (!mensagemEncaminharAtual) return;

  socket.emit("encaminharMensagem", {
    destinoTipo: "grupo",
    destinoGrupoId: id,
    texto: mensagemEncaminharAtual.texto || "",
    imagem: mensagemEncaminharAtual.imagem || null,
    audio: mensagemEncaminharAtual.audio || null,
    origemNome: mensagemEncaminharAtual.deNome
  });

  modalEncaminhar.classList.remove("modal-encaminhar-aberto");
}

function abrirPerfilOuGrupo() {
  if (tipoConversaAtual === "grupo") {
    abrirConfigGrupo();
    return;
  }

  if (tipoConversaAtual !== "privada") return;

  avatarPerfil.className = "avatar-perfil";
  avatarPerfil.classList.add(classeAvatarPerfil(conversaAtualStatus, conversaAtualOnline));
  aplicarAvatar(avatarPerfil, conversaAtualApelido, conversaAtualFotoPerfil);

  nomePerfil.textContent = conversaAtualApelido;
  apelidoPerfil.textContent = conversaAtualApelido !== conversaAtualNome ? `Nick real: @${conversaAtualNome}` : "";
  statusPerfil.textContent = textoStatus(conversaAtualStatus, conversaAtualOnline);
  bioPerfil.textContent = conversaAtualBio || "Sem recado.";
  onlinePerfil.textContent = conversaAtualOnline ? "Usuário online" : "Usuário offline";
  campoApelidoPerfil.value = conversaAtualApelido;

  modalPerfil.classList.add("modal-perfil-aberto");
}

function salvarApelidoPerfil() {
  if (!conversaAtualNome) return;

  socket.emit("alterarApelidoContato", {
    nome: conversaAtualNome,
    apelido: campoApelidoPerfil.value.trim() || conversaAtualNome
  });

  modalPerfil.classList.remove("modal-perfil-aberto");
}

function abrirConfigGrupo() {
  if (!grupoAtualId) return;

  tituloGrupoConfig.textContent = grupoAtualNome;
  subtituloGrupoConfig.textContent = `${grupoAtualMembros.length} membros`;

  const souDono = grupoAtualCriadoPor === meuNome;

  avisoDonoGrupo.style.display = souDono ? "none" : "block";
  campoNovoNomeGrupo.disabled = !souDono;
  botaoRenomearGrupo.disabled = !souDono;
  botaoApagarGrupo.disabled = !souDono;

  campoNovoNomeGrupo.value = grupoAtualNome;

  listaMembrosGrupoConfig.innerHTML = "";

  grupoAtualMembros.forEach((membro) => {
    const item = document.createElement("div");
    item.className = "membro-grupo-config-item";

    const avatar = document.createElement("div");
    avatar.className = "avatar-membro-grupo";
    avatar.textContent = obterIniciais(membro);

    const info = document.createElement("div");
    info.className = "info-membro-grupo";

    const nome = document.createElement("strong");
    nome.textContent = membro;

    const cargo = document.createElement("span");
    cargo.textContent = membro === grupoAtualCriadoPor ? "Criador" : "Membro";

    info.append(nome, cargo);
    item.append(avatar, info);

    if (souDono && membro !== meuNome) {
      const remover = document.createElement("button");
      remover.className = "botao-remover-membro";
      remover.textContent = "Remover";
      remover.onclick = () => {
        socket.emit("removerMembroGrupo", {
          grupoId: grupoAtualId,
          membro
        });
      };

      item.appendChild(remover);
    }

    listaMembrosGrupoConfig.appendChild(item);
  });

  listaAdicionarMembroGrupo.innerHTML = "";

  contatosAtuais
    .filter((contato) => !grupoAtualMembros.includes(contato.nome))
    .forEach((contato) => {
      const btn = document.createElement("button");
      btn.className = "adicionar-membro-item";
      btn.textContent = contato.apelido || contato.nome;
      btn.disabled = !souDono;
      btn.onclick = () => {
        socket.emit("adicionarMembroGrupo", {
          grupoId: grupoAtualId,
          membro: contato.nome
        });
      };

      listaAdicionarMembroGrupo.appendChild(btn);
    });

  if (!listaAdicionarMembroGrupo.children.length) {
    listaAdicionarMembroGrupo.textContent = "Nenhum contato disponível";
  }

  modalGrupoConfig.classList.add("modal-grupo-config-aberto");
}

function renomearGrupo() {
  socket.emit("renomearGrupo", {
    grupoId: grupoAtualId,
    nome: campoNovoNomeGrupo.value.trim()
  });
}

function apagarGrupo() {
  if (!confirm("Apagar este grupo para todos?")) return;

  socket.emit("apagarGrupo", {
    grupoId: grupoAtualId
  });

  modalGrupoConfig.classList.remove("modal-grupo-config-aberto");
}

/* =========================================================
   DOMINÓ — TELA, CONVITES, TEMAS E JOGO
   ========================================================= */

function abrirOcioso() {
  modalOcioso.classList.add("modal-ocioso-aberto");
  abrirAbaOcioso("convites");
  socket.emit("buscarPartidasXadrez");
}

function abrirAbaOcioso(aba) {
  abaOciosoConvites.classList.remove("aba-ocioso-ativa");
  abaOciosoContatos.classList.remove("aba-ocioso-ativa");
  abaOciosoPartidas.classList.remove("aba-ocioso-ativa");

  painelOciosoConvites.classList.remove("painel-ocioso-ativo");
  painelOciosoContatos.classList.remove("painel-ocioso-ativo");
  painelOciosoPartidas.classList.remove("painel-ocioso-ativo");

  if (aba === "convites") {
    abaOciosoConvites.classList.add("aba-ocioso-ativa");
    painelOciosoConvites.classList.add("painel-ocioso-ativo");
  }

  if (aba === "contatos") {
    abaOciosoContatos.classList.add("aba-ocioso-ativa");
    painelOciosoContatos.classList.add("painel-ocioso-ativo");
  }

  if (aba === "partidas") {
    abaOciosoPartidas.classList.add("aba-ocioso-ativa");
    painelOciosoPartidas.classList.add("painel-ocioso-ativo");
  }

  renderizarConvitesDomino();
  renderizarContatosDomino();
  renderizarPartidasDomino();
}

function nomeTemaDomino(tema) {
  const mapa = {
    classico: "Clássico",
    coqueiro: "Coqueiro transparente",
    flamengo: "Flamengo",
    corinthians: "Corinthians"
  };

  return mapa[tema] || "Clássico";
}

function obterTemaDominoEscolhido() {
  const campo = document.querySelector("#temaDominoEscolhido");
  return campo ? campo.value : "classico";
}

function mostrarConviteDominoFlutuante(convite) {
  const antigo = document.querySelector(".convite-domino-flutuante");
  if (antigo) antigo.remove();

  const card = document.createElement("div");
  card.className = "notificacao-flutuante convite-domino-flutuante";

  const tema = convite.temaDomino || "classico";

  card.innerHTML = `
    <div class="notificacao-icone">🁫</div>
    <div class="notificacao-conteudo">
      <strong>Convite de dominó</strong>
      <span>${escapar(convite.adversario || convite.criadoPor)} chamou você para jogar.</span>
      <em class="convite-tema-domino">Pedras: ${nomeTemaDomino(tema)}</em>

      <div class="convite-domino-acoes">
        <button type="button" class="botao-convite-domino-aceitar">Aceitar</button>
        <button type="button" class="botao-convite-domino-recusar">Recusar</button>
      </div>
    </div>
  `;

  document.body.appendChild(card);

  const aceitar = card.querySelector(".botao-convite-domino-aceitar");
  const recusar = card.querySelector(".botao-convite-domino-recusar");

  aceitar.onclick = () => {
    socket.emit("aceitarConviteXadrez", {
      partidaId: convite.id || convite.partidaId
    });

    card.remove();

    convitesXadrezAtuais = convitesXadrezAtuais.filter((c) => c.id !== convite.id);
    renderizarConvitesDomino();

    modalOcioso.classList.add("modal-ocioso-aberto");
    abrirAbaOcioso("partidas");

    socket.emit("buscarPartidasXadrez");
  };

  recusar.onclick = () => {
    socket.emit("recusarConviteXadrez", {
      partidaId: convite.id || convite.partidaId
    });

    card.remove();

    convitesXadrezAtuais = convitesXadrezAtuais.filter((c) => c.id !== convite.id);
    renderizarConvitesDomino();

    socket.emit("buscarPartidasXadrez");
  };
}

function renderizarConvitesDomino() {
  listaConvitesXadrez.innerHTML = "";

  if (!convitesXadrezAtuais.length) {
    listaConvitesXadrez.textContent = "Nenhum convite de dominó.";
    return;
  }

  convitesXadrezAtuais.forEach((convite) => {
    const item = document.createElement("div");
    item.className = "item-convite-xadrez";

    const info = document.createElement("div");
    info.className = "info-convite-xadrez";

    const nome = document.createElement("strong");
    nome.textContent = convite.adversario || convite.criadoPor;

    const texto = document.createElement("span");
    texto.textContent = `Convidou você para jogar dominó ${nomeTemaDomino(convite.temaDomino || "classico")}.`;

    info.append(nome, texto);

    const acoes = document.createElement("div");
    acoes.className = "acoes-convite-xadrez";

    const aceitar = document.createElement("button");
    aceitar.className = "botao-aceitar-xadrez";
    aceitar.textContent = "Aceitar";
    aceitar.onclick = () => {
      socket.emit("aceitarConviteXadrez", {
        partidaId: convite.id || convite.partidaId
      });

      convitesXadrezAtuais = convitesXadrezAtuais.filter((c) => c.id !== convite.id);
      renderizarConvitesDomino();

      modalOcioso.classList.add("modal-ocioso-aberto");
      abrirAbaOcioso("partidas");

      socket.emit("buscarPartidasXadrez");
    };

    const recusar = document.createElement("button");
    recusar.className = "botao-recusar-xadrez";
    recusar.textContent = "Recusar";
    recusar.onclick = () => {
      socket.emit("recusarConviteXadrez", {
        partidaId: convite.id || convite.partidaId
      });

      convitesXadrezAtuais = convitesXadrezAtuais.filter((c) => c.id !== convite.id);
      renderizarConvitesDomino();

      socket.emit("buscarPartidasXadrez");
    };

    acoes.append(aceitar, recusar);
    item.append(info, acoes);
    listaConvitesXadrez.appendChild(item);
  });
}

function renderizarContatosDomino() {
  listaContatosXadrez.innerHTML = "";

  const seletorTema = document.createElement("div");
  seletorTema.className = "seletor-tema-domino";
  seletorTema.innerHTML = `
    <div>
      <strong>Escolha o tipo de dominó</strong>
      <span>O convite será enviado com esse estilo de pedra.</span>
    </div>

    <select id="temaDominoEscolhido">
      <option value="classico">Clássico</option>
      <option value="coqueiro">Coqueiro transparente</option>
      <option value="flamengo">Flamengo</option>
      <option value="corinthians">Corinthians</option>
    </select>
  `;

  listaContatosXadrez.appendChild(seletorTema);

  if (!contatosAtuais.length) {
    const vazio = document.createElement("div");
    vazio.className = "domino-lista-vazia";
    vazio.textContent = "Nenhum contato disponível.";
    listaContatosXadrez.appendChild(vazio);
    return;
  }

  contatosAtuais.forEach((contato) => {
    const item = document.createElement("div");
    item.className = "item-contato-xadrez";

    const avatar = document.createElement("div");
    avatar.className = "avatar-contato-xadrez";
    aplicarAvatar(avatar, contato.apelido || contato.nome, contato.fotoPerfil || "");

    const info = document.createElement("div");
    info.className = "info-contato-xadrez";

    const nome = document.createElement("strong");
    nome.textContent = contato.apelido || contato.nome;

    const texto = document.createElement("span");
    texto.textContent = contato.online ? "Online para jogar dominó" : "Pode receber convite quando entrar";

    info.append(nome, texto);

    const btn = document.createElement("button");
    btn.className = "botao-convidar-xadrez";
    btn.textContent = "Convidar";

    btn.onclick = () => {
      const temaDomino = obterTemaDominoEscolhido();

      socket.emit("convidarXadrez", {
        paraNome: contato.nome,
        temaDomino
      });

      abrirAbaOcioso("partidas");
      mostrarMensagemDomino(
        `Convite enviado para ${contato.apelido || contato.nome} com dominó ${nomeTemaDomino(temaDomino)}.`,
        "sucesso"
      );
    };

    item.append(avatar, info, btn);
    listaContatosXadrez.appendChild(item);
  });
}

function renderizarPartidasDomino() {
  listaPartidasXadrez.innerHTML = "";

  if (!partidasXadrezAtuais.length) {
    listaPartidasXadrez.textContent = "Nenhuma partida.";
    return;
  }

  partidasXadrezAtuais.forEach((partida) => {
    const item = document.createElement("div");
    item.className = "item-partida-xadrez";

    if (partidaXadrezAtual && partidaXadrezAtual.id === partida.id) {
      item.classList.add("item-partida-xadrez-ativa");
    }

    const info = document.createElement("div");
    info.className = "info-partida-xadrez";

    const nome = document.createElement("strong");
    nome.textContent = `Contra ${partida.adversario}`;

    const texto = document.createElement("span");

    if (partida.status === "encerrada") {
      texto.textContent = partida.motivoFim || "Partida encerrada";
    } else if (partida.status === "travada") {
      texto.textContent = partida.motivoFim || "Partida travada";
    } else if (partida.status === "convite") {
      texto.textContent = `Aguardando convite ser aceito • ${nomeTemaDomino(partida.temaDomino || "classico")}`;
    } else {
      texto.textContent = partida.vez === meuNome ? "Sua vez de jogar" : "Aguardando adversário";
    }

    info.append(nome, texto);

    const btn = document.createElement("button");
    btn.className = "botao-abrir-partida-xadrez";
    btn.textContent = "Abrir";
    btn.onclick = () => {
      partidaXadrezAtual = partida;
      renderizarPartidaDomino(partida);
      renderizarPartidasDomino();
      abrirAbaOcioso("partidas");
    };

    item.append(info, btn);
    listaPartidasXadrez.appendChild(item);
  });
}

function limparTelaDomino() {
  if (botaoReiniciarXadrez) {
    botaoReiniciarXadrez.textContent = "🔀 Embaralhar";
  }

  tituloPartidaXadrez.textContent = "Partida de dominó";
  statusPartidaXadrez.textContent = "Escolha uma partida para jogar.";
  jogadorBrancoXadrez.textContent = "-";
  jogadorPretoXadrez.textContent = "-";
  vezXadrez.textContent = "Aguardando partida";
  tabuleiroXadrez.innerHTML = `<div class="tabuleiro-xadrez-vazio">Abra uma partida para carregar a mesa de dominó.</div>`;
  historicoXadrez.textContent = "Nenhuma jogada ainda.";
  botaoReiniciarXadrez.disabled = true;
  botaoSairXadrez.disabled = true;
}

function renderizarPartidaDomino(partida) {
  partidaXadrezAtual = partida;
  pedraSelecionadaDomino = null;

  aplicarTemaDominoNaPartida(partida);

  if (botaoReiniciarXadrez) {
    botaoReiniciarXadrez.textContent = "🔀 Embaralhar";
  }

  const jogo = partida.tabuleiro || {};
  const mesa = jogo.mesa || [];
  const mao = jogo.minhaMao || [];
  const pontas = jogo.pontas || {};
  const podeJogar = partida.status === "ativa" && jogo.possoJogar;
  const primeiraJogadaFeita = Boolean(partida.primeiraJogadaFeita);
  const pecaInicial = partida.pecaObrigatoriaInicio || null;

  tituloPartidaXadrez.textContent = `Dominó contra ${partida.adversario || "-"}`;

  if (partida.status === "encerrada" || partida.status === "travada") {
    statusPartidaXadrez.textContent = partida.motivoFim || "Partida finalizada.";
  } else if (partida.status === "convite") {
    statusPartidaXadrez.textContent = `Aguardando o convite ser aceito • Pedras: ${nomeTemaDomino(partida.temaDomino || "classico")}`;
  } else {
    statusPartidaXadrez.textContent =
      `Pedras: ${nomeTemaDomino(partida.temaDomino || "classico")} • Monte: ${jogo.monteQuantidade || 0} • Você: ${jogo.minhasPedras || mao.length} • Adversário: ${jogo.pedrasAdversario || 0}`;
  }

  jogadorBrancoXadrez.textContent = meuNome;
  jogadorPretoXadrez.textContent = partida.adversario || "-";

  if (partida.status === "encerrada" || partida.status === "travada") {
    vezXadrez.textContent = partida.motivoFim || "Partida finalizada";
    vezXadrez.className = "vez-xadrez vez-xadrez-encerrada";
  } else if (podeJogar) {
    vezXadrez.textContent = "Sua vez";
    vezXadrez.className = "vez-xadrez vez-xadrez-minha";
  } else {
    vezXadrez.textContent = "Vez do adversário";
    vezXadrez.className = "vez-xadrez";
  }

  botaoReiniciarXadrez.disabled = false;
  botaoSairXadrez.disabled = false;

  tabuleiroXadrez.innerHTML = "";

  const area = document.createElement("div");
  area.className = "domino-jogo-top";

  const painel = document.createElement("div");
  painel.className = "domino-painel-info";

  const statusRegra = document.createElement("div");
  statusRegra.className = "domino-status-regra";

  if (partida.status === "encerrada") {
    statusRegra.innerHTML = `
      <strong>Fim da partida</strong>
      <span>${escapar(partida.motivoFim || "Partida encerrada.")}</span>
    `;
  } else if (partida.status === "travada") {
    statusRegra.innerHTML = `
      <strong>Partida travada</strong>
      <span>Ninguém venceu porque ninguém ficou sem peças.</span>
    `;
  } else if (!primeiraJogadaFeita && pecaInicial) {
    statusRegra.innerHTML = `
      <strong>Primeira jogada obrigatória: ${textoPeca(pecaInicial)}</strong>
      <span>Começa quem tiver a maior dupla. Se ninguém tiver dupla, começa a maior peça.</span>
    `;
  } else if (!mesa.length) {
    statusRegra.innerHTML = `
      <strong>Mesa vazia</strong>
      <span>Aguardando a primeira peça da partida.</span>
    `;
  } else {
    statusRegra.innerHTML = `
      <strong>Pontas abertas: ${pontas.esquerda} e ${pontas.direita}</strong>
      <span>Arraste uma peça até a ponta que encaixa. Peça errada não entra.</span>
    `;
  }

  const placar = document.createElement("div");
  placar.className = "domino-placar-maos";
  placar.innerHTML = `
    <div>
      <strong>${escapar(partida.adversario || "Adversário")}</strong>
      <span>${jogo.pedrasAdversario || 0} peça(s)</span>
    </div>
    <div>
      <strong>Monte</strong>
      <span>${jogo.monteQuantidade || 0} peça(s)</span>
    </div>
    <div>
      <strong>${escapar(meuNome || "Você")}</strong>
      <span>${jogo.minhasPedras || mao.length} peça(s)</span>
    </div>
  `;

  painel.append(statusRegra, placar);

  const tabuleiro = document.createElement("div");
  tabuleiro.className = "domino-tabuleiro-madeira";
  tabuleiro.classList.add(`domino-tema-${partida.temaDomino || "classico"}`);

  const topoAdversario = document.createElement("div");
  topoAdversario.className = "domino-area-adversario";

  const nomeAdv = document.createElement("div");
  nomeAdv.className = "domino-nome-jogador domino-nome-adversario";
  nomeAdv.textContent = partida.adversario || "Adversário";

  const pedrasAdv = document.createElement("div");
  pedrasAdv.className = "domino-pedras-adversario";

  for (let i = 0; i < (jogo.pedrasAdversario || 0); i++) {
    pedrasAdv.appendChild(criarPedraViradaDomino());
  }

  topoAdversario.append(nomeAdv, pedrasAdv);

  const centro = document.createElement("div");
  centro.className = "domino-centro-mesa";

  const monte = document.createElement("button");
  monte.type = "button";
  monte.className = "domino-monte-compra";
  monte.disabled =
    partida.status !== "ativa" ||
    !jogo.possoJogar ||
    jogo.tenhoJogada ||
    (jogo.monteQuantidade || 0) <= 0;

  monte.innerHTML = `
    <span class="domino-monte-icone">🂠</span>
    <strong>Comprar</strong>
    <small>${jogo.monteQuantidade || 0} no monte</small>
  `;

  monte.onclick = () => {
    socket.emit("comprarDomino", {
      partidaId: partida.id
    });
  };

  const campoMesa = document.createElement("div");
  campoMesa.className = "domino-campo-mesa";

  const linhaMesa = document.createElement("div");
  linhaMesa.className = "domino-linha-pecas";

  if (!mesa.length) {
    const vazio = document.createElement("div");
    vazio.className = "domino-mesa-vazia";
    vazio.textContent = podeJogar
      ? "Comece jogando a peça inicial correta."
      : "Aguardando a primeira jogada.";
    linhaMesa.appendChild(vazio);
  } else {
    mesa.forEach((pedra, indice) => {
      linhaMesa.appendChild(criarPedraDomino(pedra, false, "mesa", indice, partida.temaDomino));
    });
  }

  campoMesa.appendChild(linhaMesa);

  const acoesLaterais = document.createElement("div");
  acoesLaterais.className = "domino-acoes-laterais";

  const zonaEsquerda = criarZonaSoltarDomino("esquerda", podeJogar, primeiraJogadaFeita);
  const zonaDireita = criarZonaSoltarDomino("direita", podeJogar, primeiraJogadaFeita);

  acoesLaterais.append(zonaEsquerda, zonaDireita);

  centro.append(monte, campoMesa, acoesLaterais);

  const areaMinhaMao = document.createElement("div");
  areaMinhaMao.className = "domino-area-minha-mao";

  const infoMao = document.createElement("div");
  infoMao.className = "domino-info-mao";

  if (partida.status === "encerrada" || partida.status === "travada") {
    infoMao.innerHTML = `<strong>Sua mão</strong><span>Partida finalizada</span>`;
  } else if (podeJogar && !primeiraJogadaFeita && pecaInicial) {
    infoMao.innerHTML = `<strong>Sua mão</strong><span>Jogue a peça inicial: ${textoPeca(pecaInicial)}</span>`;
  } else if (podeJogar && jogo.tenhoJogada) {
    infoMao.innerHTML = `<strong>Sua mão</strong><span>Arraste uma peça até uma ponta aberta.</span>`;
  } else if (podeJogar && !jogo.tenhoJogada && (jogo.monteQuantidade || 0) > 0) {
    infoMao.innerHTML = `<strong>Sua mão</strong><span>Você não tem jogada. Compre uma peça.</span>`;
  } else if (podeJogar && !jogo.tenhoJogada) {
    infoMao.innerHTML = `<strong>Sua mão</strong><span>Monte acabou. Passe a vez.</span>`;
  } else {
    infoMao.innerHTML = `<strong>Sua mão</strong><span>Aguarde sua vez.</span>`;
  }

  const minhasPedras = document.createElement("div");
  minhasPedras.className = "domino-minhas-pecas";

  if (!mao.length) {
    const vazio = document.createElement("div");
    vazio.className = "domino-mesa-vazia";
    vazio.textContent = "Você está sem peças.";
    minhasPedras.appendChild(vazio);
  } else {
    mao.forEach((pedra) => {
      const btn = criarPedraDomino(pedra, true, "mao", 0, partida.temaDomino);
      btn.disabled = !podeJogar;
      btn.onclick = () => selecionarPedraDomino(pedra, btn);
      minhasPedras.appendChild(btn);
    });
  }

  const botoesAcao = document.createElement("div");
  botoesAcao.className = "domino-botoes-acao";

  const passar = document.createElement("button");
  passar.type = "button";
  passar.className = "domino-botao-passar";
  passar.textContent = "Passar vez";
  passar.disabled =
    partida.status !== "ativa" ||
    !jogo.possoJogar ||
    jogo.tenhoJogada ||
    (jogo.monteQuantidade || 0) > 0;

  passar.onclick = () => {
    socket.emit("passarDomino", {
      partidaId: partida.id
    });
  };

  const dica = document.createElement("div");
  dica.className = "domino-dica-jogada";

  if (podeJogar) {
    dica.textContent = "Toque ou arraste uma peça. Depois solte na ponta aberta que encaixa.";
  } else {
    dica.textContent = "Aguarde o adversário jogar.";
  }

  botoesAcao.append(passar, dica);

  areaMinhaMao.append(infoMao, minhasPedras, botoesAcao);

  tabuleiro.append(topoAdversario, centro, areaMinhaMao);
  area.append(painel, tabuleiro);

  tabuleiroXadrez.appendChild(area);

  atualizarZonasPorPedraSelecionada();
  renderizarHistoricoDomino(partida.historico || []);
  verificarAnimacaoVitoriaDomino(partida);
}

function criarZonaSoltarDomino(lado, ativa, primeiraJogadaFeita) {
  const zona = document.createElement("button");
  zona.type = "button";
  zona.className = "domino-zona-jogar domino-ponta-encaixe";
  zona.dataset.lado = lado;

  if (!ativa) {
    zona.disabled = true;
    zona.classList.add("domino-zona-bloqueada");
  }

  if (!primeiraJogadaFeita) {
    zona.innerHTML = `
      <strong>Começar mesa</strong>
      <span>Solte a peça inicial aqui</span>
    `;
  } else if (lado === "esquerda") {
    zona.innerHTML = `
      <strong>Ponta esquerda</strong>
      <span>Arraste a pedra até aqui</span>
    `;
  } else {
    zona.innerHTML = `
      <strong>Ponta direita</strong>
      <span>Arraste a pedra até aqui</span>
    `;
  }

  zona.addEventListener("click", () => {
    if (!ativa) return;
    jogarDomino(lado);
  });

  zona.addEventListener("dragenter", (evento) => {
    if (!ativa) return;
    evento.preventDefault();
    zona.classList.add("domino-zona-ativa");
  });

  zona.addEventListener("dragover", (evento) => {
    if (!ativa) return;
    evento.preventDefault();
  });

  zona.addEventListener("dragleave", () => {
    zona.classList.remove("domino-zona-ativa");
  });

  zona.addEventListener("drop", (evento) => {
    if (!ativa) return;

    evento.preventDefault();
    zona.classList.remove("domino-zona-ativa");

    const idPedra = evento.dataTransfer.getData("text/plain");
    const pedra = buscarPedraMinhaMao(idPedra);

    if (!pedra) {
      mostrarMensagemDomino("Não encontrei essa peça na sua mão.", "erro");
      return;
    }

    pedraSelecionadaDomino = pedra;
    jogarDomino(lado);
  });

  return zona;
}

function criarPedraViradaDomino() {
  const el = document.createElement("div");
  el.className = "domino-peca-virada";
  el.innerHTML = `<span></span>`;
  return el;
}

function criarPedraDomino(pedra, clicavel, local = "mao", indiceMesa = 0, tema = "classico") {
  const el = document.createElement(clicavel ? "button" : "div");

  el.className = "pedra-domino";
  el.classList.add(local === "mesa" ? "pedra-domino-na-mesa" : "pedra-domino-na-mao");
  el.classList.add(`pedra-tema-${tema || "classico"}`);

  if (pedra.esquerda === pedra.direita) {
    el.classList.add("pedra-domino-dupla");
  }

  if (local === "mesa" && pedra.esquerda === pedra.direita) {
    el.classList.add("pedra-domino-dupla-na-mesa");
  }

  if (local === "mesa" && indiceMesa % 6 === 5) {
    el.classList.add("pedra-domino-curva");
  }

  el.dataset.id = pedra.id;
  el.title = `${pedra.esquerda}|${pedra.direita}`;

  const metadeCima = criarMetadeDomino(pedra.esquerda);
  const divisoria = document.createElement("i");
  divisoria.className = "divisoria-domino";
  const metadeBaixo = criarMetadeDomino(pedra.direita);

  el.append(metadeCima, divisoria, metadeBaixo);

  if (clicavel) {
    el.draggable = true;

    el.addEventListener("dragstart", (evento) => {
      evento.dataTransfer.setData("text/plain", pedra.id);
      evento.dataTransfer.effectAllowed = "move";
      el.classList.add("pedra-domino-arrastando");
      pedraSelecionadaDomino = pedra;
      atualizarZonasPorPedraSelecionada();
    });

    el.addEventListener("dragend", () => {
      el.classList.remove("pedra-domino-arrastando");
    });
  }

  return el;
}

function criarMetadeDomino(valor) {
  const metade = document.createElement("div");
  metade.className = `metade-domino valor-${valor}`;

  for (let i = 0; i < valor; i++) {
    const ponto = document.createElement("span");
    ponto.className = "ponto-domino";
    metade.appendChild(ponto);
  }

  return metade;
}

function buscarPedraMinhaMao(idPedra) {
  if (!partidaXadrezAtual || !partidaXadrezAtual.tabuleiro) return null;

  const mao = partidaXadrezAtual.tabuleiro.minhaMao || [];

  return mao.find((pedra) => pedra.id === idPedra) || null;
}

function selecionarPedraDomino(pedra, el) {
  pedraSelecionadaDomino = pedra;

  document.querySelectorAll(".pedra-domino-selecionada").forEach((p) => {
    p.classList.remove("pedra-domino-selecionada");
  });

  el.classList.add("pedra-domino-selecionada");
  atualizarZonasPorPedraSelecionada();

  const partida = partidaXadrezAtual;

  if (!partida) return;

  if (!partida.primeiraJogadaFeita && partida.pecaObrigatoriaInicio) {
    if (pedra.id === partida.pecaObrigatoriaInicio.id) {
      mostrarMensagemDomino(`Peça inicial correta: ${textoPeca(pedra)}. Solte na área indicada.`, "sucesso");
    } else {
      mostrarMensagemDomino(`A primeira jogada precisa ser ${textoPeca(partida.pecaObrigatoriaInicio)}.`, "erro");
    }

    return;
  }

  const esquerda = pecaEncaixaNoLado(pedra, "esquerda");
  const direita = pecaEncaixaNoLado(pedra, "direita");

  if (esquerda && direita) {
    mostrarMensagemDomino("Essa peça encaixa nas duas pontas.", "sucesso");
  } else if (esquerda) {
    mostrarMensagemDomino("Essa peça encaixa na ponta esquerda.", "sucesso");
  } else if (direita) {
    mostrarMensagemDomino("Essa peça encaixa na ponta direita.", "sucesso");
  } else {
    mostrarMensagemDomino("Essa peça não encaixa nas pontas abertas.", "erro");
  }
}

function pecaEncaixaNoLado(pedra, lado) {
  if (!partidaXadrezAtual || !partidaXadrezAtual.tabuleiro) return false;

  const mesa = partidaXadrezAtual.tabuleiro.mesa || [];
  const pontas = partidaXadrezAtual.tabuleiro.pontas || {};

  if (!partidaXadrezAtual.primeiraJogadaFeita) {
    return partidaXadrezAtual.pecaObrigatoriaInicio && pedra.id === partidaXadrezAtual.pecaObrigatoriaInicio.id;
  }

  if (!mesa.length) return true;

  const ponta = lado === "esquerda" ? pontas.esquerda : pontas.direita;

  return pedra.esquerda === ponta || pedra.direita === ponta;
}

function atualizarZonasPorPedraSelecionada() {
  const zonas = document.querySelectorAll(".domino-zona-jogar");

  zonas.forEach((zona) => {
    zona.classList.remove("domino-zona-permitida");
    zona.classList.remove("domino-zona-negada");

    if (!pedraSelecionadaDomino || zona.disabled) return;

    const lado = zona.dataset.lado;
    const pode = pecaEncaixaNoLado(pedraSelecionadaDomino, lado);

    if (pode) {
      zona.classList.add("domino-zona-permitida");
    } else {
      zona.classList.add("domino-zona-negada");
    }
  });
}

function jogarDomino(lado) {
  if (!partidaXadrezAtual) return;

  if (!pedraSelecionadaDomino) {
    mostrarMensagemDomino("Selecione ou arraste uma peça primeiro.", "erro");
    return;
  }

  if (!pecaEncaixaNoLado(pedraSelecionadaDomino, lado)) {
    if (!partidaXadrezAtual.primeiraJogadaFeita && partidaXadrezAtual.pecaObrigatoriaInicio) {
      mostrarMensagemDomino(`A primeira jogada precisa ser ${textoPeca(partidaXadrezAtual.pecaObrigatoriaInicio)}.`, "erro");
    } else {
      mostrarMensagemDomino("Essa peça não encaixa nessa ponta.", "erro");
    }

    return;
  }

  socket.emit("moverPecaXadrez", {
    partidaId: partidaXadrezAtual.id,
    peca: pedraSelecionadaDomino,
    pedra: pedraSelecionadaDomino,
    lado
  });
}

function aplicarTemaDominoNaPartida(partida) {
  const tema = partida?.temaDomino || "classico";

  document.body.dataset.temaDomino = tema;

  const mesa = document.querySelector(".domino-tabuleiro-madeira");

  if (mesa) {
    mesa.classList.remove(
      "domino-tema-classico",
      "domino-tema-coqueiro",
      "domino-tema-flamengo",
      "domino-tema-corinthians"
    );

    mesa.classList.add(`domino-tema-${tema}`);
  }

  document.querySelectorAll(".pedra-domino").forEach((pedra) => {
    pedra.classList.remove(
      "pedra-tema-classico",
      "pedra-tema-coqueiro",
      "pedra-tema-flamengo",
      "pedra-tema-corinthians"
    );

    pedra.classList.add(`pedra-tema-${tema}`);
  });
}

function renderizarHistoricoDomino(historico) {
  historicoXadrez.innerHTML = "";

  if (!historico.length) {
    historicoXadrez.textContent = "Nenhuma jogada ainda.";
    return;
  }

  historico.slice().reverse().forEach((mov) => {
    const div = document.createElement("div");
    div.className = "movimento-xadrez";
    div.textContent = mov.texto || `${mov.jogador || ""} jogou.`;
    historicoXadrez.appendChild(div);
  });
}

function verificarAnimacaoVitoriaDomino(partida) {
  if (!partida) return;
  if (partida.status !== "encerrada") return;
  if (!partida.vencedor) return;

  const chave = `${partida.id}_${partida.vencedor}`;

  if (fogueteVitoriaJaMostrado.has(chave)) return;

  fogueteVitoriaJaMostrado.add(chave);

  setTimeout(() => {
    soltarFoguetesDomino(partida.vencedor);
  }, 400);
}

function soltarFoguetesDomino(vencedor) {
  const antigo = document.querySelector(".foguetes-domino");
  if (antigo) antigo.remove();

  const camada = document.createElement("div");
  camada.className = "foguetes-domino";

  const titulo = document.createElement("div");
  titulo.className = "foguetes-domino-titulo";
  titulo.innerHTML = `
    <strong>🚀 ${escapar(vencedor)} venceu! 🚀</strong>
    <span>Dominó batido: ficou sem nenhuma peça.</span>
  `;

  camada.appendChild(titulo);

  for (let i = 0; i < 42; i++) {
    const foguete = document.createElement("span");
    foguete.className = "foguete-domino";
    foguete.textContent = i % 3 === 0 ? "🚀" : i % 3 === 1 ? "✨" : "🎆";

    foguete.style.left = `${Math.random() * 100}%`;
    foguete.style.animationDelay = `${Math.random() * 1.4}s`;
    foguete.style.animationDuration = `${1.5 + Math.random() * 1.6}s`;

    camada.appendChild(foguete);
  }

  document.body.appendChild(camada);

  setTimeout(() => {
    camada.remove();
  }, 5200);
}

function mostrarMensagemDomino(texto, tipo) {
  mensagemXadrez.textContent = texto;
  mensagemXadrez.className = "mensagem-xadrez";
  mensagemXadrez.classList.add(tipo === "erro" ? "mensagem-xadrez-erro" : "mensagem-xadrez-sucesso");

  setTimeout(() => {
    mensagemXadrez.textContent = "";
    mensagemXadrez.className = "mensagem-xadrez";
  }, 3000);
}

/* =========================================================
   BUSCA / UTILIDADES
   ========================================================= */

function pesquisarMensagens() {
  const termo = campoBuscaConversa.value.trim().toLowerCase();
  const todas = mensagens.querySelectorAll(".mensagem");

  todas.forEach((m) => m.classList.remove("mensagem-encontrada"));

  if (!termo) {
    resultadoBuscaConversa.textContent = "Digite para pesquisar";
    return;
  }

  let achadas = 0;

  todas.forEach((m) => {
    if (m.innerText.toLowerCase().includes(termo)) {
      m.classList.add("mensagem-encontrada");
      achadas++;
    }
  });

  resultadoBuscaConversa.textContent = achadas
    ? `${achadas} mensagem(ns) encontrada(s)`
    : "Nenhuma mensagem encontrada";

  const primeira = mensagens.querySelector(".mensagem-encontrada");

  if (primeira) {
    primeira.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}

function limparBusca() {
  campoBuscaConversa.value = "";
  resultadoBuscaConversa.textContent = "Digite para pesquisar";

  mensagens.querySelectorAll(".mensagem-encontrada").forEach((m) => {
    m.classList.remove("mensagem-encontrada");
  });
}

function adicionarBoasVindas(texto) {
  const div = document.createElement("div");
  div.className = "aviso-sistema";
  div.textContent = texto;
  mensagens.appendChild(div);
}

function mostrarMensagemConta(texto, tipo) {
  mensagemConta.textContent = texto || "";
  mensagemConta.className = "mensagem-conta";

  if (tipo === "sucesso") mensagemConta.classList.add("mensagem-sucesso");
  if (tipo === "erro") mensagemConta.classList.add("mensagem-erro");
}

function mostrarNotificacao(texto) {
  mostrarMensagemConta(texto, "sucesso");

  const div = document.createElement("div");
  div.className = "notificacao-flutuante";
  div.innerHTML = `
    <div class="notificacao-icone">🌴</div>
    <div class="notificacao-conteudo">
      <strong>Rede Coqueiro</strong>
      <span>${escapar(texto)}</span>
    </div>
  `;

  document.body.appendChild(div);

  setTimeout(() => {
    div.classList.add("notificacao-saindo");
  }, 3000);

  setTimeout(() => {
    div.remove();
  }, 3700);
}

function aplicarAvatar(el, nome, foto) {
  el.innerHTML = "";

  if (foto) {
    const img = document.createElement("img");
    img.className = "foto-avatar-img";
    img.src = foto;
    img.alt = nome || "";
    el.appendChild(img);
    el.classList.add("avatar-com-foto");
  } else {
    el.textContent = obterIniciais(nome);
    el.classList.remove("avatar-com-foto");
  }
}

function obterIniciais(nome) {
  const partes = String(nome || "?").trim().split(/\s+/).filter(Boolean);

  if (!partes.length) return "?";
  if (partes.length === 1) return partes[0].charAt(0).toUpperCase();

  return `${partes[0].charAt(0)}${partes[1].charAt(0)}`.toUpperCase();
}

function obterNomeContato(nome) {
  if (nome === meuNome) return meuNome;

  const contato = contatosAtuais.find((c) => c.nome === nome);

  return contato ? contato.apelido || contato.nome : nome;
}

function obterNomeMensagem(nome) {
  if (nome === "Sistema") return "Sistema";

  return obterNomeContato(nome);
}

function textoStatus(status, online) {
  if (!online) return "Offline";
  if (status === "Ocupado") return "Ocupado";
  if (status === "Ausente") return "Ausente";

  return "Disponível";
}

function classeBolinha(status, online) {
  if (!online) return "bolinha-offline";
  if (status === "Ocupado") return "bolinha-ocupado";
  if (status === "Ausente") return "bolinha-ausente";

  return "bolinha-online";
}

function classeAvatar(status, online) {
  if (!online) return "usuario-avatar-offline";
  if (status === "Ocupado") return "usuario-avatar-ocupado";
  if (status === "Ausente") return "usuario-avatar-ausente";

  return "usuario-avatar-online";
}

function classeAvatarTopo(status, online) {
  if (!online) return "avatar-conversa-offline";
  if (status === "Ocupado") return "avatar-conversa-ocupado";
  if (status === "Ausente") return "avatar-conversa-ausente";

  return "avatar-conversa-online";
}

function classeAvatarPerfil(status, online) {
  if (!online) return "avatar-perfil-offline";
  if (status === "Ocupado") return "avatar-perfil-ocupado";
  if (status === "Ausente") return "avatar-perfil-ausente";

  return "avatar-perfil-online";
}

function carregarTema() {
  if (localStorage.getItem("temaMessenger") === "claro") {
    document.body.classList.remove("tema-escuro");
    botaoTema.textContent = "🌙";
  } else {
    document.body.classList.add("tema-escuro");
    botaoTema.textContent = "☀️";
  }
}

function alternarTema() {
  const escuro = document.body.classList.toggle("tema-escuro");
  localStorage.setItem("temaMessenger", escuro ? "escuro" : "claro");
  botaoTema.textContent = escuro ? "☀️" : "🌙";
}

function horarioAtual() {
  return new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function formatarTamanho(bytes) {
  if (bytes < 1024) return `${bytes} bytes`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatarTempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const resto = segundos % 60;

  return `${String(minutos).padStart(2, "0")}:${String(resto).padStart(2, "0")}`;
}

function textoPeca(peca) {
  if (!peca) return "peça inicial";

  return `${peca.esquerda}|${peca.direita}`;
}

function ajustarAlturaCampo() {
  campoMensagem.style.height = "auto";
  campoMensagem.style.height = `${campoMensagem.scrollHeight}px`;
}

function rolarFim() {
  mensagens.scrollTop = mensagens.scrollHeight;
}

function escapar(texto) {
  return String(texto || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
/* =========================================================
   CORREÇÃO FINAL DOMINÓ
   - Cada jogador escolhe seu próprio estilo local
   - Remove botões grandes esquerda/direita
   - Cria pontas brilhantes direto na mesa
   Cole no FINAL do public/script.js
   ========================================================= */

const temasDominoPermitidosCoqueiro = ["classico", "coqueiro", "flamengo", "corinthians"];

function getMeuTemaDominoLocal() {
  const salvo = localStorage.getItem("meuTemaDominoCoqueiro") || "classico";
  return temasDominoPermitidosCoqueiro.includes(salvo) ? salvo : "classico";
}

function setMeuTemaDominoLocal(tema) {
  const limpo = temasDominoPermitidosCoqueiro.includes(tema) ? tema : "classico";
  localStorage.setItem("meuTemaDominoCoqueiro", limpo);
  document.body.dataset.meuTemaDomino = limpo;
  aplicarMeuTemaNasMinhasPedras();
}

function nomeTemaDominoLocal(tema) {
  const mapa = {
    classico: "Clássico",
    coqueiro: "Coqueiro",
    flamengo: "Flamengo",
    corinthians: "Corinthians"
  };

  return mapa[tema] || "Clássico";
}

function criarSeletorTemaDominoLocal() {
  const temaAtual = getMeuTemaDominoLocal();

  const box = document.createElement("div");
  box.className = "seletor-tema-domino-local";

  box.innerHTML = `
    <div class="seletor-tema-domino-info">
      <strong>Seu estilo de pedra</strong>
      <span>Cada jogador escolhe o próprio estilo. Isso muda as suas peças.</span>
    </div>

    <div class="seletor-tema-domino-controles">
      <select id="meuTemaDominoEscolhido">
        <option value="classico" ${temaAtual === "classico" ? "selected" : ""}>Clássico</option>
        <option value="coqueiro" ${temaAtual === "coqueiro" ? "selected" : ""}>Coqueiro</option>
        <option value="flamengo" ${temaAtual === "flamengo" ? "selected" : ""}>Flamengo</option>
        <option value="corinthians" ${temaAtual === "corinthians" ? "selected" : ""}>Corinthians</option>
      </select>

      <div class="preview-tema-domino preview-tema-${temaAtual}">
        <span></span>
        <strong>${nomeTemaDominoLocal(temaAtual)}</strong>
      </div>
    </div>
  `;

  const select = box.querySelector("#meuTemaDominoEscolhido");
  const preview = box.querySelector(".preview-tema-domino");

  select.onchange = () => {
    const novoTema = select.value;
    setMeuTemaDominoLocal(novoTema);

    preview.className = `preview-tema-domino preview-tema-${novoTema}`;
    preview.querySelector("strong").textContent = nomeTemaDominoLocal(novoTema);
  };

  return box;
}

function aplicarMeuTemaNasMinhasPedras() {
  const tema = getMeuTemaDominoLocal();

  document.body.dataset.meuTemaDomino = tema;

  document.querySelectorAll(".pedra-domino-na-mao").forEach((pedra) => {
    pedra.classList.remove(
      "pedra-tema-classico",
      "pedra-tema-coqueiro",
      "pedra-tema-flamengo",
      "pedra-tema-corinthians"
    );

    pedra.classList.add(`pedra-tema-${tema}`);
  });

  document.querySelectorAll(".domino-minhas-pecas").forEach((mao) => {
    mao.dataset.meuTemaDomino = tema;
  });
}

/* Recria a área de contatos com seletor próprio */
renderizarContatosDomino = function () {
  listaContatosXadrez.innerHTML = "";

  listaContatosXadrez.appendChild(criarSeletorTemaDominoLocal());

  if (!contatosAtuais.length) {
    const vazio = document.createElement("div");
    vazio.className = "domino-lista-vazia";
    vazio.textContent = "Nenhum contato disponível.";
    listaContatosXadrez.appendChild(vazio);
    return;
  }

  contatosAtuais.forEach((contato) => {
    const item = document.createElement("div");
    item.className = "item-contato-xadrez";

    const avatar = document.createElement("div");
    avatar.className = "avatar-contato-xadrez";
    aplicarAvatar(avatar, contato.apelido || contato.nome, contato.fotoPerfil || "");

    const info = document.createElement("div");
    info.className = "info-contato-xadrez";

    const nome = document.createElement("strong");
    nome.textContent = contato.apelido || contato.nome;

    const texto = document.createElement("span");
    texto.textContent = contato.online ? "Online para jogar dominó" : "Pode receber convite quando entrar";

    const meuTema = document.createElement("em");
    meuTema.className = "meu-tema-convite-info";
    meuTema.textContent = `Suas peças: ${nomeTemaDominoLocal(getMeuTemaDominoLocal())}`;

    info.append(nome, texto, meuTema);

    const btn = document.createElement("button");
    btn.className = "botao-convidar-xadrez";
    btn.textContent = "Convidar";

    btn.onclick = () => {
      const temaDomino = getMeuTemaDominoLocal();

      socket.emit("convidarXadrez", {
        paraNome: contato.nome,
        temaDomino
      });

      abrirAbaOcioso("partidas");

      mostrarMensagemDomino(
        `Convite enviado. Suas peças estão no estilo ${nomeTemaDominoLocal(temaDomino)}.`,
        "sucesso"
      );
    };

    item.append(avatar, info, btn);
    listaContatosXadrez.appendChild(item);
  });
};

/* Convites também mostram seletor, porque quem aceita também escolhe o próprio estilo */
const renderizarConvitesDominoOriginalCoqueiro = renderizarConvitesDomino;

renderizarConvitesDomino = function () {
  listaConvitesXadrez.innerHTML = "";

  listaConvitesXadrez.appendChild(criarSeletorTemaDominoLocal());

  if (!convitesXadrezAtuais.length) {
    const vazio = document.createElement("div");
    vazio.className = "domino-lista-vazia";
    vazio.textContent = "Nenhum convite de dominó.";
    listaConvitesXadrez.appendChild(vazio);
    return;
  }

  convitesXadrezAtuais.forEach((convite) => {
    const item = document.createElement("div");
    item.className = "item-convite-xadrez";

    const info = document.createElement("div");
    info.className = "info-convite-xadrez";

    const nome = document.createElement("strong");
    nome.textContent = convite.adversario || convite.criadoPor;

    const texto = document.createElement("span");
    texto.textContent = "Chamou você para jogar dominó.";

    const tema = document.createElement("em");
    tema.className = "meu-tema-convite-info";
    tema.textContent = `Suas peças: ${nomeTemaDominoLocal(getMeuTemaDominoLocal())}`;

    info.append(nome, texto, tema);

    const acoes = document.createElement("div");
    acoes.className = "acoes-convite-xadrez";

    const aceitar = document.createElement("button");
    aceitar.className = "botao-aceitar-xadrez";
    aceitar.textContent = "Aceitar";

    aceitar.onclick = () => {
      setMeuTemaDominoLocal(getMeuTemaDominoLocal());

      socket.emit("aceitarConviteXadrez", {
        partidaId: convite.id || convite.partidaId
      });

      convitesXadrezAtuais = convitesXadrezAtuais.filter((c) => c.id !== convite.id);
      renderizarConvitesDomino();

      modalOcioso.classList.add("modal-ocioso-aberto");
      abrirAbaOcioso("partidas");

      socket.emit("buscarPartidasXadrez");
    };

    const recusar = document.createElement("button");
    recusar.className = "botao-recusar-xadrez";
    recusar.textContent = "Recusar";

    recusar.onclick = () => {
      socket.emit("recusarConviteXadrez", {
        partidaId: convite.id || convite.partidaId
      });

      convitesXadrezAtuais = convitesXadrezAtuais.filter((c) => c.id !== convite.id);
      renderizarConvitesDomino();

      socket.emit("buscarPartidasXadrez");
    };

    acoes.append(aceitar, recusar);
    item.append(info, acoes);
    listaConvitesXadrez.appendChild(item);
  });
};

/* Remove os botões grandes e coloca as pontas direto dentro da mesa */
function transformarPontasEmEncaixeNaMesa() {
  const campoMesa = document.querySelector(".domino-campo-mesa");
  const acoesLaterais = document.querySelector(".domino-acoes-laterais");

  if (!campoMesa || !acoesLaterais) return;

  campoMesa.classList.add("domino-campo-mesa-com-pontas");

  const zonaEsquerda = acoesLaterais.querySelector('[data-lado="esquerda"]');
  const zonaDireita = acoesLaterais.querySelector('[data-lado="direita"]');

  if (zonaEsquerda) {
    zonaEsquerda.classList.add("domino-ponta-real", "domino-ponta-real-esquerda");
    zonaEsquerda.innerHTML = `
      <span class="bolha-ponta-domino"></span>
      <strong></strong>
    `;

    campoMesa.appendChild(zonaEsquerda);
  }

  if (zonaDireita) {
    zonaDireita.classList.add("domino-ponta-real", "domino-ponta-real-direita");
    zonaDireita.innerHTML = `
      <span class="bolha-ponta-domino"></span>
      <strong></strong>
    `;

    campoMesa.appendChild(zonaDireita);
  }

  acoesLaterais.remove();

  const centro = document.querySelector(".domino-centro-mesa");
  if (centro) {
    centro.classList.add("domino-centro-mesa-sem-botoes");
  }
}

/* O clique/touch na ponta ainda funciona no celular */
function reforcarTouchNasPontas() {
  document.querySelectorAll(".domino-ponta-real").forEach((zona) => {
    zona.ontouchend = (evento) => {
      evento.preventDefault();

      const lado = zona.dataset.lado;
      if (!lado) return;

      jogarDomino(lado);
    };
  });
}

/* Aplica as correções depois que a partida renderiza */
const renderizarPartidaDominoOriginalFinalCoqueiro = renderizarPartidaDomino;

renderizarPartidaDomino = function (partida) {
  renderizarPartidaDominoOriginalFinalCoqueiro(partida);

  aplicarMeuTemaNasMinhasPedras();
  transformarPontasEmEncaixeNaMesa();
  reforcarTouchNasPontas();
};

/* Atualiza texto do seletor quando troca o tema dentro da aba aberta */
document.addEventListener("change", (evento) => {
  if (evento.target && evento.target.id === "meuTemaDominoEscolhido") {
    setMeuTemaDominoLocal(evento.target.value);

    document.querySelectorAll(".meu-tema-convite-info").forEach((el) => {
      el.textContent = `Suas peças: ${nomeTemaDominoLocal(getMeuTemaDominoLocal())}`;
    });
  }
});

setMeuTemaDominoLocal(getMeuTemaDominoLocal());