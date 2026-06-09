// Verifica cookies ao abrir
window.onload = function () {

    // Tema
    let tema = obterCookie("tema");

    if (tema === "escuro") {
        document.body.classList.add("dark-mode");
    }

    // Usuário
    let usuario = obterCookie("usuario");

    if (usuario !== "") {
        document.getElementById("resultado").innerText =
            "Bem-vindo novamente, " + usuario + "!";
    }
};

// Salvar cookie do usuário
function salvarCookie() {

    let nome = document.getElementById("nome").value;

    criarCookie("usuario", nome, 7);

    alert("Cookie salvo!");
}

// Mostrar cookies
function mostrarCookie() {

    let cookies = document.cookie;

    if (cookies) {
        document.getElementById("resultado").innerText =
            "Cookies armazenados: " + cookies;
    } else {
        document.getElementById("resultado").innerText =
            "Nenhum cookie encontrado.";
    }
}

// Apagar cookie do usuário
function apagarCookie() {

    criarCookie("usuario", "", 0);

    document.getElementById("resultado").innerText =
        "Cookie apagado!";
}

// Alternar tema
function alternarTema() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        criarCookie("tema", "escuro", 7);

    } else {

        criarCookie("tema", "claro", 7);
    }
}

// Criar cookie
function criarCookie(nome, valor, dias) {

    let data = new Date();

    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));

    let expira = "expires=" + data.toUTCString();

    document.cookie =
        nome + "=" + valor + ";" + expira + ";path=/";
}

// Ler cookie
function obterCookie(nome) {

    let nomeCookie = nome + "=";

    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {

        let c = cookies[i].trim();

        if (c.indexOf(nomeCookie) === 0) {
            return c.substring(nomeCookie.length, c.length);
        }
    }

    return "";
}