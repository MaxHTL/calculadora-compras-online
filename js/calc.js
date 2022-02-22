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

function compraBlue(){
  inputPesos = dolarBlue * inputDolar;
  precioFinal = inputPesos;
  precioFinal = precioFinal.toFixed(2);
  $(".dolar-final").html(`
  <ul>
    <li> Precio ingresado: US$ ${inputDolar}             </li>
    <li> <strong> Precio final en pesos: $ ${precioFinal} </strong>           </li>
    <li> Dólar Blue hoy ${date} (venta): $ ${dolarBlue}    </li>
  </ul>
                          `);
}

function compraOnlinePesos(){

  ultimaConversionPesos();

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
  
  localStorage.setItem("ultInpPesos", inputPesos);
  localStorage.setItem("ultImpPesos", precioImpuestoPais);
  localStorage.setItem("ultGanPesos", precioGanancias);
  localStorage.setItem("ultFinPesos", precioFinal);
}

function ultimaConversionPesos(){
  $(".ult").html(`
  <ul>
    <li> Precio ingresado: $ ${localStorage.getItem("ultInpPesos")}                               </li>
    <li> Impuesto país (30%): $ ${localStorage.getItem("ultImpPesos")}                            </li>
    <li> Retención ganancias (35%): $ ${localStorage.getItem("ultGanPesos")}                      </li>
    <li> <strong> Precio final en pesos: $ ${localStorage.getItem("ultFinPesos")} </strong>       </li>
  </ul>
  `);
}