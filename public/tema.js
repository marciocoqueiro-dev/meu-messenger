(function () {
  function aplicarTema(tema) {
    const html = document.documentElement;
    const body = document.body;
    const botao = document.getElementById("botaoTema");

    if (!body) return;

    if (tema === "claro") {
      html.classList.add("tema-claro");
      body.classList.add("tema-claro");

      html.classList.remove("tema-escuro");
      body.classList.remove("tema-escuro");

      localStorage.setItem("temaMessenger", "claro");

      if (botao) {
        botao.textContent = "🌙";
        botao.title = "Ativar modo escuro";
      }

      return;
    }

    html.classList.add("tema-escuro");
    body.classList.add("tema-escuro");

    html.classList.remove("tema-claro");
    body.classList.remove("tema-claro");

    localStorage.setItem("temaMessenger", "escuro");

    if (botao) {
      botao.textContent = "☀️";
      botao.title = "Ativar modo claro";
    }
  }

  function alternarTema(evento) {
    if (evento) {
      evento.preventDefault();
      evento.stopPropagation();

      if (typeof evento.stopImmediatePropagation === "function") {
        evento.stopImmediatePropagation();
      }
    }

    const temaAtual = localStorage.getItem("temaMessenger");

    if (temaAtual === "claro") {
      aplicarTema("escuro");
    } else {
      aplicarTema("claro");
    }
  }

  function iniciarTema() {
    const botao = document.getElementById("botaoTema");
    const temaSalvo = localStorage.getItem("temaMessenger") || "escuro";

    aplicarTema(temaSalvo);

    if (botao) {
      botao.onclick = alternarTema;

      botao.addEventListener(
        "click",
        function (evento) {
          alternarTema(evento);
        },
        true
      );
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarTema);
  } else {
    iniciarTema();
  }

  window.aplicarTemaRedeCoqueiro = aplicarTema;
  window.alternarTemaRedeCoqueiro = alternarTema;
})();