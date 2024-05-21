const usuarios = [
    { email: "usuario1@fiap.com.br", password: "111111" },
    { email: "usuario2@fiap.com.br", password: "222222" },
    { email: "usuario3@fiap.com.br", password: "333333" },
    { email: "usuario4@fiap.com.br", password: "444444" },
    { email: "usuario5@fiap.com.br", password: "555555" },
    { email: "usuario6@fiap.com.br", password: "666666" },
    { email: "usuario7@fiap.com.br", password: "777777" },
    { email: "usuario8@fiap.com.br", password: "888888" },
    { email: "usuario9@fiap.com.br", password: "999999" },
  ];

const formularioLogin = document.getElementById("formulario-login");
const mensagemErro = document.getElementById("mensagem-erro");

const botaoLogout = document.getElementById("btn-logout");
const divDados = document.getElementById("dados-usuario");