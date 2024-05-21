class Usuario {
    constructor(nome, email, password) {
        this.nome = nome;
        this.email = email;
        this.password = password;
    }
}

const usuariosPredefinidos = [
    new Usuario ("Usuário 1", "usuario1@fiap.com.br", "111111"),
    new Usuario ("Usuário 2", "usuario2@fiap.com.br", "222222"),
    new Usuario ("Usuário 3", "usuario3@fiap.com.br", "333333"),
    new Usuario ("Usuário 4", "usuario4@fiap.com.br", "444444"),
    new Usuario ("Usuário 5", "usuario5@fiap.com.br", "555555"),
    new Usuario ("Usuário 6", "usuario6@fiap.com.br", "666666"),
    new Usuario ("Usuário 7", "usuario7@fiap.com.br", "777777"),
    new Usuario ("Usuário 8", "usuario8@fiap.com.br", "888888"),
    new Usuario ("Usuário 9", "usuario9@fiap.com.br", "999999")
  ];

const formularioLogin = document.getElementById("formulario-login");
const mensagemErro = document.getElementById("mensagem-erro");

const botaoLogout = document.getElementById("btn-logout");
const divDados = document.getElementById("dados-usuario");

if (localStorage.getItem("usuarios") === null) {
    localStorage.setItem("usuarios", JSON.stringify(usuariosPredefinidos))
  }