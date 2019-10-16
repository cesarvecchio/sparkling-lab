function visualizar_opcao_lld() // Função para abrir e fechar o LLD
{
    if(quadrados_lld.style.display == 'none'){
        quadrados_lld.style.display = 'block';
        quadrados_hld.style.display = 'none';
        botao_lld_geral.innerHTML = 'OCULTAR';
        botao_hld_geral.innerHTML = 'HLD';
    }
    else{
        quadrados_lld.style.display = 'none';
        botao_lld_geral.innerHTML = 'LLD';
    }
}

function visualizar_opcao_hld() // Função para abrir e fechar o HLD
{
    if(quadrados_hld.style.display == 'none'){
        quadrados_hld.style.display = 'block';
        quadrados_lld.style.display = 'none';
        botao_hld_geral.innerHTML = 'OCULTAR';
        botao_lld_geral.innerHTML = 'LLD';
    }
    else{
        quadrados_hld.style.display = 'none';
        botao_hld_geral.innerHTML = 'HLD';

    }
}

// Funções responsáveis por mostrar/ocultar texto.
function sair_opcao() 
{
    div_container_resposta.style.display = 'none';
  }

  function visualizar_opcao_1() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'O Arduino deve ser o modelo de luminosidade, contendo conexão Wi-Fi ou via Cabo.';
}
function visualizar_opcao_2() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'O poste deve ter um arduino conectado próximo a sua lampada.';
}
function visualizar_opcao_3() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'O notebook ideal seria o modelo do notebook da faculdade, de prefencia com conexão Wi-Fi';
}
function visualizar_opcao_4() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'Roteador de alta capacidade 802.11gn, mandando e enviando dados.';
}

function visualizar_opcao_5() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'Notebook do usuario deve ter no mínimo 2GB de RAM, Internet e algum navegador. O site terá login, senha, gráficos e setor de abrir chamada.';
}

function visualizar_opcao_6() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'Roteador funcional 802.11gn com capacidade plena de enviar internet aos dispositivos.';
}
function visualizar_opcao_7() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'Android no mínimo 7.0, iOS versão mínima 11.';
}
function visualizar_opcao_8() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'MySQL com script criado, database criada, versão acima de 6.0.';
}
function visualizar_opcao_9() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'Azure configurado, funcionando e "linked" com os BDs';
}

function visualizar_opcao_10() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'Servidor completo com todos os SQLs, Azure e Node.js funcionando.';
}
function visualizar_opcao_11() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'Aqui é feita a conexão entre Nuvem, usuário e nosso sistema. Os dados são guardados aqui.';
}
function visualizar_opcao_12() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'Funcionando via conexão com a internet.';
}
function visualizar_opcao_13() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'Funcionando via conexão com a internet.';
}
function visualizar_opcao_14() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'Essa conexão permite que entremos no servidor.';
}
function visualizar_opcao_15() 
{
    div_container_resposta.style.display = 'block';
    div_container_resposta.innerHTML = 'Essa conexão permite que entremos no servidor.';
}

// Parte do quadrado do HLD

function sair_opcao_2() 
{
    quadrado_hld_resposta.style.display = 'none';
  }

function visualizar_opcao_16() 
{
    quadrado_hld_resposta.style.display = 'block';
    quadrado_hld_resposta.innerHTML = 'O poste deve estar cadastrado e conectado no nosso sistema.';
}

function visualizar_opcao_17() 
{
    quadrado_hld_resposta.style.display = 'block';
    quadrado_hld_resposta.innerHTML = 'Um sensor de luminosidade recebe e envia informações sobre o funcionamento  do poste.    ';
}

function visualizar_opcao_18() 
{
    quadrado_hld_resposta.style.display = 'block';
    quadrado_hld_resposta.innerHTML = 'Estes dados são enviados e analisados diretamente e ficam disponíveis para avaliação do cliente no site.';
}

function visualizar_opcao_19() 
{
    quadrado_hld_resposta.style.display = 'block';
    quadrado_hld_resposta.innerHTML = 'O usuário ou empresa se conecta ao nosso site. Ao se conectar, aparecem as opções de postes que ele contratou nosso serviço.';
}

function visualizar_opcao_20()
{
    quadrado_hld_resposta.style.display = 'block';
    quadrado_hld_resposta.innerHTML = 'Com os dados que o site recebe, gráficos são gerados.';
}

