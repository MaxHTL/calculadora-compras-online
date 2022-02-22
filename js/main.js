// Variables ==============================================================================
let inputPesos;
let inputDolar;
let precioFinal;

let tipoCompra;
let tipoCompra2;
let dolarBlue;
let dolarOficial;
let dolarSoja;
let outputText;

let impuestoPais = 0.30;
let retencionGanancias = 0.35;

// Fecha de hoy ===========================================================================
var today = new Date();
var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

// API Dolar ==============================================================================
let datoDolar = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

$.get(datoDolar, function (datos) {
  dolarOficial  = datos[0].casa.venta.replace(/,/g, '.');
  dolarBlue     = datos[1].casa.venta.replace(/,/g, '.');
  dolarSoja     = datos[2].casa.venta.replace(/,/g, '.');
})
// ========================================================================================

$("#calcular-dolar").click(function () {

    inputDolar = $('#input-dolar').val();

    if (inputPesos == 0) {           // Verificio que no sea 0
        outputText = "No puede ser cero";
        } else {

        tipoCompra = $('#tipo-compra-dolares').val();

        switch (tipoCompra){
            case "online":
                compraOnlineDolares();
                break;
            case "soja":
                compraSoja();
                break;
            case "blue":
                console.log("Blue");
                break;
        }
        }
})

$("#calcular-pesos").click(function () {

    inputPesos = $('#input-pesos').val();
    compraOnlinePesos();
})






