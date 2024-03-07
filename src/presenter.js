import {totalizar, get_impuesto, get_descuento, calcular_impuesto, calcular_descuento, get_porcentD_adicional, get_porcentI_adicional, get_costeEnvio} from "./totalizador";

const precioUnidad = document.querySelector("#precio");
const cantidad = document.querySelector("#cantidad");
const form = document.querySelector("#totalizador-form");
const estado = document.querySelector('#estado')
const categoria = document.querySelector('#categoria')
const pesoU = document.querySelector('#pesoU')

const divPrecioNeto = document.querySelector("#div-precio-neto");
const divDescuento = document.querySelector("#div-descuento");
const divImpuesto = document.querySelector("#div-impuesto");
const divCategoria = document.querySelector("#div-categoria");
const divCosteEnvio = document.querySelector("#div-costeEnvio");
const divPrecioTotal = document.querySelector("#div-precio-total");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let precioNeto = totalizar(precioUnidad.value, cantidad.value);
  //Descuento Cantidad
  let porDesCan = get_descuento(cantidad.value);
  let montoDesCan = calcular_descuento(precioNeto, porDesCan);
  //Descuento Adicional
  let porDesAdi = get_porcentD_adicional(categoria.value);
  let montoDesAdi =  calcular_descuento(precioNeto, porDesAdi);
  //Precio neto descontado
  let montoDescuento = montoDesCan+montoDesAdi;
  let precioDescuento = precioNeto-montoDescuento;
  //Impuesto Estado
  let porImpEst = get_impuesto(estado.value); 
  let montoImpEst = calcular_impuesto(precioDescuento, porImpEst);
  //Impuesto Adicional
  let porImpAdi = get_porcentI_adicional(categoria.value);
  let montoImpAdi = calcular_impuesto(precioDescuento, porImpAdi)
  //Obtener coste de envio
  let envioUni = get_costeEnvio(pesoU.value);
  let montoEnvio = envioUni * cantidad.value;
  //Calcular Precio Total
  let precioTotal = precioDescuento + montoImpAdi + montoImpEst;
  
  divPrecioNeto.innerHTML = "<p>DETALLE</p><p> Precio neto(" + cantidad.value + "*$" + precioUnidad.value + "): " + parseFloat(precioNeto) + "</p>";
  divDescuento.innerHTML = "<p> Descuento (" + porDesCan +"%): " + montoDesCan + "</p>";
  divImpuesto.innerHTML = "<p> Impuesto para " + estado.value + "(%" + parseFloat(porImpEst) + "): " + parseFloat(montoImpEst) + "</p>";
  divCategoria.innerHTML = "<p> Descuento por categoria " + categoria.value + "(%" + parseFloat(porDesAdi) + "): " + parseFloat(montoDesAdi) + "</p>" + "<p> Impuesto por categoria " + categoria.value + "(%" + parseFloat(porImpAdi)+ "): " + parseFloat(montoImpAdi) + "</p>"; 
  divCosteEnvio.innerHTML = "<p> Coste Unitario Envio: $" + envioUni + "</p>"+"<p> Coste Envio: $" + montoEnvio + "</p>";
  divPrecioTotal.innerHTML = "<p> Precio Total (impuesto y descuento): " + precioTotal + "</p>";
});
