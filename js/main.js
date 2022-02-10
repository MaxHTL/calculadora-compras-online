// Variables ==============================================================================
let datoDolar = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

let inputOnline;
let dolarPesos;
let dolarBlue;
let dolarOficial;
let outputText;
let precioFinal;
let inputSteam;

let impuestoPais = 0.30;
let retencionGanancias = 0.35;
// ========================================================================================

// Fecha de hoy ===========================================================================
var today = new Date();
var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
// ========================================================================================

$.get(datoDolar, function (datos) {

  dolarOficial = datos[0].casa.venta.replace(/,/g, '.');
  dolarBlue = datos[1].casa.venta.replace(/,/g, '.');

})

// Calculos ===============================================================================

function compraOnline(){
  dolarPesos = (dolarOficial) * (inputOnline);
  precioImpuestoPais = dolarPesos*impuestoPais;
  precioGanancias = dolarPesos*retencionGanancias;
  precioFinal = dolarPesos + precioImpuestoPais + precioGanancias;
}

function compraSteam(){
  precioImpuestoPais = inputSteam*impuestoPais;
  precioGanancias = inputSteam*retencionGanancias;
  precioFinal = parseFloat(inputSteam) + parseFloat(precioImpuestoPais) + parseFloat(precioGanancias);
}

// Función click ==========================================================================

$("#calcular-online").click(function () {

  inputOnline = $('#precio-online').val(); // Tomo el precio ingresado

  if (inputOnline == 0) {           // Verificio que no sea 0
    outputText = "No puede ser cero";
    } else {
    
      outputText = "";
      compraOnline();

      $(".article-online").prepend(`<div> ${outputText}                                  </div>
                                  <div> Precio ingresado: US$ ${inputOnline}            </div>
                                  <div> Dólar hoy ${date} (venta): $ ${dolarOficial}    </div>
                                  <div> Precio en pesos: $ ${dolarPesos}                </div>
                                  <div> Impuesto país (30%): $ ${precioImpuestoPais}    </div>
                                  <div> Retención ganancias (35%): $ ${precioGanancias} </div>
                                  <div> Precio final en pesos: $ ${precioFinal}         </div>
                                `);

    }
})

$("#calcular-steam").click(function () {

  inputSteam = $('#precio-steam').val(); // Tomo el precio ingresado

  if (inputSteam == 0) {           // Verificio que no sea 0
    outputText = "No puede ser cero";
    } else {
    
      outputText = "";
      compraSteam();

      $(".article-steam").prepend(`<div> ${outputText}                                  </div>
                                  <div> Precio ingresado: $ ${inputSteam}               </div>
                                  <div> Impuesto país (30%): $ ${precioImpuestoPais}    </div>
                                  <div> Retención ganancias (35%): $ ${precioGanancias} </div>
                                  <div> Precio final en pesos: $ ${precioFinal}         </div>
                                `);

    }
})