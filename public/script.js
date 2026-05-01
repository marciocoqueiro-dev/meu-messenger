/* =========================== SCRIPT - REDE COQUEIRO =========================== */

// Validação de login e cadastro
function validarCadastro() {
  const nick = document.getElementById("nickCadastro").value;
  const senha = document.getElementById("senhaCadastro").value;
  const confirmacaoSenha = document.getElementById("confirmarSenhaCadastro").value;

  // Validação do nick
  if (nick.trim().length === 0) {
    alert("Por favor, insira um nick válido.");
    return false;
  }

  // Validação de senha
  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return false;
  }

  if (senha !== confirmacaoSenha) {
    alert("As senhas não coincidem.");
    return false;
  }

  return true;
}

function validarLogin() {
  const nick = document.getElementById("nickLogin").value;
  const senha = document.getElementById("senhaLogin").value;

  // Validação do nick
  if (nick.trim().length === 0) {
    alert("Por favor, insira um nick válido.");
    return false;
  }

  // Validação de senha
  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return false;
  }

  return true;
}

/* Funções de exibição e alternância de telas */
function mostrarCadastro() {
  document.getElementById("telaLogin").style.display = "none";
  document.getElementById("telaCadastro").style.display = "block";
}

function mostrarLogin() {
  document.getElementById("telaCadastro").style.display = "none";
  document.getElementById("telaLogin").style.display = "block";
}