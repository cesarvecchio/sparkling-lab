// var slider = document.getElementById("myRange");
// // var output = document.getElementById("demo");
// // output.innerHTML = slider.value;
// // slider.oninput = function() {
// //     output.innerHTML = this.value;
// // };

function calcularLampadas() {
    console.log(calcularLampadas);
    var totalLampadas = Number(qtdLampadas.value);
    var precoTotalLampada = totalLampadas * 60;
    var desconto100 = 0.03;
    var desconto200 = 0.05;
    var descontoAcima = 0.07;
    var instalacao = totalLampadas * 0.3;

    mostrarLampadas.innerHTML = `<h2> Quantidade total de lâmpadas: ${totalLampadas} </h2>`;
    if (totalLampadas >= 100) {
        mostrarTotal.innerHTML = `<h2> R$ ${(precoTotalLampada - precoTotalLampada * desconto100 + instalacao).toFixed(
            2
        )} </h2>`;
        desconto.innerHTML = `<h2>Voce economizará R$ ${(
            precoTotalLampada -
            precoTotalLampada * desconto100 +
            instalacao * 25
        ).toFixed(2)} por ano com nosso produto</h2>`;

        gasto.innerHTML = `<h2>Voce gastaria R$ ${(
            precoTotalLampada -
            precoTotalLampada * desconto100 +
            instalacao * 12
        ).toFixed(2)} a mais por ano com uma lampada comum</h2>`;
    } else if (totalLampadas >= 200) {
        mostrarTotal.innerHTML = `<h2> R$ ${(precoTotalLampada - precoTotalLampada * desconto200 + instalacao).toFixed(
            2
        )} </h2>`;

        desconto.innerHTML = `<h2>Voce economizará R$ ${(
            precoTotalLampada -
            precoTotalLampada * desconto200 +
            instalacao * 25
        ).toFixed(2)} por ano com nosso produto</h2>`;

        gasto.innerHTML = `<h2>Voce gastaria R$ ${(
            precoTotalLampada -
            precoTotalLampada * desconto200 +
            instalacao * 12
        ).toFixed(2)} a mais por ano com uma lampada comum</h2>`;
    } else if (totalLampadas > 300) {
        mostrarTotal.innerHTML = `<h2> R$ ${(
            precoTotalLampada -
            precoTotalLampada * descontoAcima +
            instalacao
        ).toFixed(2)} </h2>`;
        desconto.innerHTML = `<h2>Voce economizará R$ ${(
            precoTotalLampada -
            precoTotalLampada * descontoAcima +
            instalacao * 25
        ).toFixed(2)} por ano com nosso produto</h2>`;

        gasto.innerHTML = `<h2>Voce gastaria R$ ${(
            precoTotalLampada -
            precoTotalLampada * descontoAcima +
            instalacao * 12
        ).toFixed(2)} a mais por ano com uma lampada comum</h2>`;
    } else {
        mostrarTotal.innerHTML = `<h2> R$ ${(precoTotalLampada + instalacao).toFixed(2)} </h2> `;
        desconto.innerHTML = `<h2>Voce economizará R$ ${(precoTotalLampada + instalacao * 25).toFixed(
            2
        )} em energia por ano com nosso produto</h2>`;
        gasto.innerHTML = `<h2>Voce gastaria R$ ${(precoTotalLampada + instalacao * 12).toFixed(
            2
        )} a mais por ano com uma lampada comum</h2>`;
    }
}
