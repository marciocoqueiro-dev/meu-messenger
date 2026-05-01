/* =========================================================
   SAIR DA CONVERSA - REDE COQUEIRO
   Funciona no PC e no celular
========================================================= */

(function () {
  function estaNoMobile() {
    return window.innerWidth <= 900;
  }

  function criarBotaoSairConversa() {
    const areaAcoesTopo = document.querySelector(".acoes-topo-chat");
    const chatTopo = document.querySelector(".chat-topo");

    if (!chatTopo) return;

    let botaoSair = document.getElementById("botaoSairConversa");

    if (botaoSair) return;

    botaoSair = document.createElement("button");
    botaoSair.id = "botaoSairConversa";
    botaoSair.className = "botao-sair-conversa";
    botaoSair.type = "button";
    botaoSair.title = "Sair da conversa";
    botaoSair.textContent = "Sair";

    if (areaAcoesTopo) {
      areaAcoesTopo.appendChild(botaoSair);
    } else {
      chatTopo.appendChild(botaoSair);
    }

    botaoSair.addEventListener("click", function (evento) {
      evento.preventDefault();
      evento.stopPropagation();
      sairDaConversaRedeCoqueiro();
    });
  }

  function desativarCampo(id) {
    const elemento = document.getElementById(id);

    if (elemento) {
      elemento.disabled = true;

      if ("value" in elemento) {
        elemento.value = "";
      }
    }
  }

  function esconderElemento(id, classeAberta) {
    const elemento = document.getElementById(id);

    if (!elemento) return;

    elemento.classList.remove(classeAberta);
  }

  function sairDaConversaRedeCoqueiro() {
    document.body.classList.add("sem-conversa-aberta");

    const tituloConversa = document.getElementById("tituloConversa");
    const statusConversa = document.getElementById("statusConversa");
    const bioConversa = document.getElementById("bioConversa");
    const avisoDigitando = document.getElementById("avisoDigitando");
    const avatarConversa = document.getElementById("avatarConversa");
    const mensagens = document.getElementById("mensagens");

    if (tituloConversa) {
      tituloConversa.textContent = "Rede Coqueiro";
    }

    if (statusConversa) {
      statusConversa.textContent = "Selecione uma conversa";
    }

    if (bioConversa) {
      bioConversa.textContent = "";
    }

    if (avisoDigitando) {
      avisoDigitando.textContent = "";
    }

    if (avatarConversa) {
      avatarConversa.textContent = "🌴";
      avatarConversa.style.backgroundImage = "";
    }

    if (mensagens) {
      mensagens.innerHTML = `
        <div class="aviso-sistema">
          Você saiu da conversa. Selecione um contato ou grupo para conversar.
        </div>
      `;
    }

    document
      .querySelectorAll(
        ".usuario-selecionado, .grupo-selecionado, .item-partida-xadrez-ativa"
      )
      .forEach(function (item) {
        item.classList.remove(
          "usuario-selecionado",
          "grupo-selecionado",
          "item-partida-xadrez-ativa"
        );
      });

    desativarCampo("campoMensagem");
    desativarCampo("botaoEmoji");
    desativarCampo("botaoAnexarImagem");
    desativarCampo("botaoAudio");
    desativarCampo("botaoEnviar");

    esconderElemento("areaRespostaMensagem", "area-resposta-mensagem-aberta");
    esconderElemento("areaPreviewImagem", "area-preview-imagem-aberta");
    esconderElemento("areaPreviewAudio", "area-preview-audio-aberta");
    esconderElemento("areaGravandoAudio", "area-gravando-audio-aberta");
    esconderElemento("painelEmojis", "painel-emojis-aberto");
    esconderElemento("areaBuscaConversa", "area-busca-conversa-aberta");

    const campoBuscaConversa = document.getElementById("campoBuscaConversa");
    const resultadoBuscaConversa = document.getElementById("resultadoBuscaConversa");

    if (campoBuscaConversa) {
      campoBuscaConversa.value = "";
    }

    if (resultadoBuscaConversa) {
      resultadoBuscaConversa.textContent = "Digite para pesquisar";
    }

    if (estaNoMobile() && typeof window.abrirMenuMobileRedeCoqueiro === "function") {
      window.abrirMenuMobileRedeCoqueiro();
    }
  }

  function liberarConversaQuandoSelecionarContato() {
    document.addEventListener(
      "click",
      function (evento) {
        const itemConversa = evento.target.closest(
          ".usuario-item, .grupo-item, .item-partida-xadrez, .item-contato-xadrez"
        );

        if (!itemConversa) return;

        document.body.classList.remove("sem-conversa-aberta");
      },
      true
    );
  }

  function bloquearEnvioSemConversa() {
    const formulario = document.getElementById("formulario");

    if (!formulario) return;

    formulario.addEventListener(
      "submit",
      function (evento) {
        if (!document.body.classList.contains("sem-conversa-aberta")) return;

        evento.preventDefault();
        evento.stopPropagation();

        const mensagens = document.getElementById("mensagens");

        if (mensagens) {
          mensagens.innerHTML = `
            <div class="aviso-sistema">
              Selecione uma conversa antes de enviar mensagem.
            </div>
          `;
        }
      },
      true
    );
  }

  function iniciarSairConversa() {
    criarBotaoSairConversa();
    liberarConversaQuandoSelecionarContato();
    bloquearEnvioSemConversa();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarSairConversa);
  } else {
    iniciarSairConversa();
  }

  window.sairDaConversaRedeCoqueiro = sairDaConversaRedeCoqueiro;
})();