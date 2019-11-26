let login_sindico;
let nome_sindico;

function redirecionar_login(){
    window.location.href = 'sign-in.html';
}

function verificar_autenticacao(){
    login_sindico = sessionStorage.login_sindico_meuapp;
    nome_sindico  = sessionStorage.nome_sindico_meuapp;

    if(login_sindico == undefined){
        redirecionar_login();
    }else{
        validar_sessao();
    }
}

function logoff(){
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao(){
    fetch(`/sindico/sessao/${login_sindico}`, {cache:'no-cache'})
    .then(resposta => {
        if(resposta.ok){
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);
            });
        }else{
            console.error('Sessão :.( ');
            logoff();
        }
    });
}

function finalizar_sessao(){
    fetch(`/sindico/sair/${login_sindico}`, {cache:'no-sotre'});
}