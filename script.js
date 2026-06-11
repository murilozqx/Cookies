// Função responsável por criar um cookie
function setCookie(nome, valor, dias) {

    // Cria um objeto com a data atual
    let data = new Date();

    // Define a data de expiração do cookie
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));

    // Converte a data para o formato aceito pelos cookies
    let expires = "expires=" + data.toUTCString();

    // Cria o cookie
    document.cookie = nome + "=" + valor + ";" + expires + ";path=/";
}


// Função que busca um cookie pelo nome
function getCookie(nome) {

    // Nome do cookie que será procurado
    let nomeCookie = nome + "=";

    // Divide todos os cookies em um vetor
    let cookies = document.cookie.split(";");

    // Percorre todos os cookies
    for (let i = 0; i < cookies.length; i++) {

        // Remove espaços em branco
        let c = cookies[i].trim();

        // Verifica se encontrou o cookie procurado
        if (c.indexOf(nomeCookie) === 0) {

            // Retorna apenas o valor
            return c.substring(nomeCookie.length);
        }
    }

    // Retorna vazio caso não encontre
    return "";
}


// Função chamada ao clicar em "Salvar Cookie"
function salvarCookie() {

    // Obtém o valor digitado
    let nome = document.getElementById("nome").value;

    // Verifica se o campo não está vazio
    if (nome !== "") {

        // Salva o cookie por 7 dias
        setCookie("usuario", nome, 7);

        // Atualiza a mensagem
        mostrarMensagem();
    }
}


// Mostra o conteúdo do cookie
function mostrarMensagem() {

    // Obtém o valor salvo
    let usuario = getCookie("usuario");

    // Seleciona o parágrafo de resultado
    let mensagem = document.getElementById("mensagem");

    // Verifica se existe cookie
    if (usuario !== "") {

        mensagem.innerHTML =
            "Olá, " + usuario + "! Seu nome está salvo em um cookie 🍪";

    } else {

        mensagem.innerHTML =
            "Nenhum cookie foi encontrado.";
    }
}


// Remove o cookie
function removerCookie() {

    // Define uma data antiga para excluir o cookie
    document.cookie =
        "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Atualiza a mensagem
    mostrarMensagem();
}


// Alterna entre tema claro e escuro
function alternarTema() {

    // Adiciona ou remove a classe dark
    document.body.classList.toggle("dark");

    // Verifica qual tema está ativo
    let tema = document.body.classList.contains("dark")
        ? "escuro"
        : "claro";

    // Salva o tema em cookie por 30 dias
    setCookie("tema", tema, 30);
}


// Aplica o tema salvo ao abrir a página
function carregarTema() {

    let tema = getCookie("tema");

    if (tema === "escuro") {
        document.body.classList.add("dark");
    }
}


// Executa quando a página terminar de carregar
window.onload = function () {

    carregarTema();

    mostrarMensagem();
};