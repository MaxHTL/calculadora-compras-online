function redondeo(){
    precioImpuestoPais = precioImpuestoPais.toFixed(2);
    precioGanancias = precioGanancias.toFixed(2);
    precioFinal = precioFinal.toFixed(2);
}
  
function impuestos(){
  precioImpuestoPais = inputPesos*impuestoPais;
  precioGanancias = inputPesos*retencionGanancias;
}

function compraOnlineDolares(){
  inputPesos = (dolarOficial) * (inputDolar);
  impuestos();
  precioFinal = inputPesos + precioImpuestoPais + precioGanancias;
  inputPesos = inputPesos.toFixed(2);
  redondeo();
  
  $(".dolar-final").html(`
    <ul>
      <li> Precio ingresado: US$ ${inputDolar}             </li>
      <li> Precio en pesos: $ ${inputPesos}                </li>
      <li> Impuesto país (30%): $ ${precioImpuestoPais}    </li>
      <li> Retención ganancias (35%): $ ${precioGanancias} </li>
      <li> <strong> Precio final en pesos: $ ${precioFinal} </strong>        </li>
      <li> Dólar hoy  ${date}  (venta): $ ${dolarOficial}    </li>
    </ul>
                          `);
}

function compraSoja(){
  inputPesos = dolarSoja * inputDolar;
  precioFinal = inputPesos;
  precioFinal = precioFinal.toFixed(2);
  $(".dolar-final").html(`
  <ul>
    <li> Precio ingresado: US$ ${inputDolar}             </li>
    <li> <strong> Precio final en pesos: $ ${precioFinal} </strong>           </li>
    <li> Dólar Soja hoy ${date} (venta): $ ${dolarSoja}    </li>
  </ul>
                          `);
}

function compraOnlinePesos(){
  impuestos();
  precioFinal = parseFloat(inputPesos) + parseFloat(precioImpuestoPais) + parseFloat(precioGanancias);
  redondeo();
  $(".peso-final").html(`
  <ul>
    <li> Precio ingresado: $ ${inputPesos}               </li>
    <li> Impuesto país (30%): $ ${precioImpuestoPais}    </li>
    <li> Retención ganancias (35%): $ ${precioGanancias} </li>
    <li> <strong> Precio final en pesos: $ ${precioFinal} </strong>        </li>
  </ul>
  `);
}