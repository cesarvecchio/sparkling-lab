// Função para calcular o valor bruto desperdiçado.
function calculateGrossLoss() {
  /*calcular valor bruto*/
  var qtd_dia = parseFloat(qtdPoste.value)
  var qtd_poste = parseFloat(qtdDias.value)

  var gasto_energia_watts = 100 * 12 * qtd_dia * qtd_poste
  var gasto_energia_quilo_watts = gasto_energia_watts / 1000
  var gasto_energia_real = gasto_energia_quilo_watts * 0.484
  var gasto_dia = gasto_energia_real / qtd_dia
  var gasto_semana = gasto_dia * 7
  var gasto_mes = gasto_dia * 30
  var gasto_ano = gasto_mes * 12
  

  resultados.innerHTML = `
        <h3>Desperdicio ao ano:</h3>
        <li>Desperdicio total em Watts ${gasto_energia_watts}W/h</li>
        <li>Desperdicio total em Quilowatt ${gasto_energia_quilo_watts}KW/h</li>
        <li>Valor em reais deperdiçados R$${gasto_energia_real.toFixed(2)}</li>
        <li>Desperdiçado por dia R$${gasto_dia.toFixed(2)}</li>
        <li>Desperdiçado por semana R$${gasto_semana.toFixed(2)}</li>
        <li>Desperdiçado por mes R$${gasto_mes.toFixed(2)}</li>
        <li>Desperdicado por ano R$${gasto_ano.toFixed(2)}</li>
    `
}

function addQtdPoste(valorPoste){
  document.getElementById("resultado_qtd_poste").innerHTML = valorPoste;
}

function addQtdDia(valorDia){
  document.getElementById("resultado_qtd_dia").innerHTML = valorDia;
}
