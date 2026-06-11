// Função responsável por criar um cookie
function setCookie(nome, valor, dias) {

    // Cria um objeto com a data atual
    let data = new Date();

    // Define a data de expiração do cookie
    // dias * horas * minutos * segundos * milissegundos
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));

    // Converte a data para o formato aceito pelos cookies
    let expires = "expires=" + data.toUTCString();

    // Cria o cookie
    // nome = nome do cookie
    // valor = valor armazenado
    // expires = data de expiração
    // path=/ = disponível em todo o site
    document.cookie = nome + "=" + valor + ";" + expires + ";path=/";
}


// Função que busca um cookie pelo nome
function getCookie(nome) {

    // Monta a parte inicial que será procurada
    let nomeCookie = nome + "=";

    // Divide todos os cookies em um vetor usando ";"
    let cookies = document.cookie.split(";");

    // Percorre todos os cookies encontrados
    for (let i = 0; i < cookies.length; i++) {

        // Remove espaços em branco antes e depois do texto
        let c = cookies[i].trim();

        // Verifica se o cookie atual começa com o nome procurado
        if (c.indexOf(nomeCookie) == 0) {

            // Retorna apenas o valor do cookie
            return c.substring(nomeCookie.length, c.length);
        }
    }

    // Caso o cookie não exista, retorna vazio
    return "";
}


// Função chamada ao clicar no botão "Salvar Nome"
function salvarCookie() {

    // Obtém o valor digitado no campo de texto
    let nome = document.getElementById("nome").value;

    // Verifica se o campo não está vazio
    if (nome !== "") {

        // Salva o nome em um cookie chamado "usuario"
        // que ficará armazenado por 7 dias
        setCookie("usuario", nome, 7);

        // Atualiza a mensagem exibida na tela
        mostrarMensagem();
    }
}


// Função que exibe mensagens ao usuário
function mostrarMensagem() {

    // Obtém o valor salvo no cookie "usuario"
    let usuario = getCookie("usuario");

    // Seleciona o elemento <p> que mostrará a mensagem
    let mensagem = document.getElementById("mensagem");

    // Verifica se existe um usuário salvo
    if (usuario !== "") {

        // Exibe mensagem personalizada
        mensagem.innerHTML =
            "Olá, " + usuario + "! Seu nome foi salvo em cookie 🍪";

    } else {

        // Exibe mensagem caso não exista cookie
        mensagem.innerHTML = "Nenhum cookie salvo.";
    }
}


// Função chamada ao clicar no botão "Remover Cookie"
function removerCookie() {

    // Cria o cookie com uma data antiga
    // Isso faz o navegador apagá-lo automaticamente
    document.cookie =
        "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Atualiza a mensagem na tela
    mostrarMensagem();
}


// Executa a função assim que a página é carregada
// para verificar se já existe um cookie salvo
mostrarMensagem();