const usuariosPredefinidos = [
    { nome: "Usuário 1", email: "usuario1@fiap.com.br", password: "111111" },
    { nome: "Usuário 2", email: "usuario2@fiap.com.br", password: "222222" },
    { nome: "Usuário 3", email: "usuario3@fiap.com.br", password: "333333" },
    { nome: "Usuário 4", email: "usuario4@fiap.com.br", password: "444444" },
    { nome: "Usuário 5", email: "usuario5@fiap.com.br", password: "555555" },
    { nome: "Usuário 6", email: "usuario6@fiap.com.br", password: "666666" },
    { nome: "Usuário 7", email: "usuario7@fiap.com.br", password: "777777" },
    { nome: "Usuário 8", email: "usuario8@fiap.com.br", password: "888888" },
    { nome: "Usuário 9", email: "usuario9@fiap.com.br", password: "999999" },
  ];

const formularioLogin = document.getElementById("formulario-login");
const mensagemErro = document.getElementById("mensagem-erro");

const botaoLogout = document.getElementById("btn-logout");
const divDados = document.getElementById("dados-usuario");

function armazenarUsuarios(usuarios) {
    let stringUsuarios = "";
    for (let i = 0; i < usuarios.length; i++) {
      const user = usuarios[i];
      stringUsuarios += `Nome: ${user.nome}, email: ${user.email}, senha: ${user.password};`
      }
    localStorage.setItem("usuarios", stringUsuarios);
}