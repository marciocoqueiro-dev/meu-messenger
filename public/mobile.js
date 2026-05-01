/* =========================================================
   MOBILE - REDE COQUEIRO
   Menu lateral + botão voltar da conversa
========================================================= */

(function () {
  function estaNoMobile() {
    return window.innerWidth <= 900;
  }

  function pegarSidebar() {
    return document.querySelector(".sidebar");
  }

  function abrirMenuMobile() {
    const sidebar = pegarSidebar();

    if (!sidebar) return;

    sidebar.classList.add("sidebar-mobile-aberta");
    document.body.classList.add("menu-mobile-aberto");
  }

  function fecharMenuMobile() {
    const sidebar = pegarSidebar();

    if (!sidebar) return;

    sidebar.classList.remove("sidebar-mobile-aberta");
    document.body.classList.remove("menu-mobile-aberto");
  }

  function criarBotaoVoltarMobile() {
    const chatTopo = document.querySelector(".chat-topo");

    if (!chatTopo) return;

    let botaoVoltar = document.getElementById("botaoVoltarConversaMobile");

    if (botaoVoltar) return;

    botaoVoltar = document.createElement("button");
    botaoVoltar.id = "botaoVoltarConversaMobile";
    botaoVoltar.className = "botao-voltar-conversa-mobile";
    botaoVoltar.type = "button";
    botaoVoltar.title = "Voltar para contatos";
    botaoVoltar.textContent = "←";

    const botaoMenu = document.getElementById("botaoAbrirMenuMobile");

    if (botaoMenu && botaoMenu.parentNode === chatTopo) {
      chatTopo.insertBefore(botaoVoltar, botaoMenu.nextSibling);
    } else {
      chatTopo.insertBefore(botaoVoltar, chatTopo.firstChild);
    }

    botaoVoltar.addEventListener("click", function (evento) {
      evento.preventDefault();
      evento.stopPropagation();
      abrirMenuMobile();
    });
  }

  function configurarBotoesMenu() {
    const botaoAbrir = document.getElementById("botaoAbrirMenuMobile");
    const botaoFechar = document.getElementById("botaoFecharMenuMobile");

    if (botaoAbrir) {
      botaoAbrir.onclick = function (evento) {
        evento.preventDefault();
        evento.stopPropagation();
        abrirMenuMobile();
      };
    }

    if (botaoFechar) {
      botaoFechar.onclick = function (evento) {
        evento.preventDefault();
        evento.stopPropagation();
        fecharMenuMobile();
      };
    }
  }

  function configurarCliqueForaDoMenu() {
    document.addEventListener("click", function (evento) {
      if (!estaNoMobile()) return;

      const sidebar = pegarSidebar();
      const botaoAbrir = document.getElementById("botaoAbrirMenuMobile");

      if (!sidebar) return;

      const clicouDentroSidebar = sidebar.contains(evento.target);
      const clicouNoBotaoAbrir = botaoAbrir && botaoAbrir.contains(evento.target);

      if (!clicouDentroSidebar && !clicouNoBotaoAbrir) {
        fecharMenuMobile();
      }
    });
  }

  function fecharMenuAoEscolherConversa() {
    document.addEventListener("click", function (evento) {
      if (!estaNoMobile()) return;

      const itemConversa = evento.target.closest(
        ".usuario-item, .grupo-item, .item-partida-xadrez, .item-contato-xadrez"
      );

      if (!itemConversa) return;

      setTimeout(function () {
        fecharMenuMobile();
      }, 120);
    });
  }

  function ajustarEstadoInicial() {
    const sidebar = pegarSidebar();

    if (!sidebar) return;

    if (estaNoMobile()) {
      sidebar.classList.remove("sidebar-mobile-aberta");
      document.body.classList.remove("menu-mobile-aberto");
    } else {
      sidebar.classList.remove("sidebar-mobile-aberta");
      document.body.classList.remove("menu-mobile-aberto");
    }
  }

  function iniciarMobileRedeCoqueiro() {
    criarBotaoVoltarMobile();
    configurarBotoesMenu();
    configurarCliqueForaDoMenu();
    fecharMenuAoEscolherConversa();
    ajustarEstadoInicial();

    window.addEventListener("resize", ajustarEstadoInicial);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarMobileRedeCoqueiro);
  } else {
    iniciarMobileRedeCoqueiro();
  }

  window.abrirMenuMobileRedeCoqueiro = abrirMenuMobile;
  window.fecharMenuMobileRedeCoqueiro = fecharMenuMobile;
})();