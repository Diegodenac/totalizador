import {totalizar, get_impuesto, calcular_impuesto, calcular_pt} from "./totalizador";

const precioUnidad = document.querySelector("#precio");
const cantidad = document.querySelector("#cantidad");
const form = document.querySelector("#totalizador-form");
const estado = document.querySelector('#estado')
const divPrecioNeto = document.querySelector("#precio-neto");
const divDescuento = document.querySelector("#descuento");
const divImpuesto = document.querySelector("#impuesto");
const divPrecioTotal = document.querySelector("#precio-total");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let precioNeto = totalizar(precioUnidad.value, cantidad.value);
  //let porcentajeDescuento = get_descuento(cantidad.value);
  let porcentajeImpuesto = get_impuesto(estado.value);
  let impuesto = calcular_impuesto(precioNeto, porcentajeImpuesto);
  divPrecioNeto.innerHTML = "<p> Precio neto(" + cantidad.value + "*$" + precioUnidad.value + "): " + parseInt(precioNeto) + "</p>";
  divDescuento.innerHTML = "<p> Descuento ( %):" + "</p>"; //calcular_descuento(precioNeto, porcentajeDescuento)
  divImpuesto.innerHTML = "<p> Impuesto para " + estado.value + "(%" + parseFloat(porcentajeImpuesto) + "): " + parseFloat(impuesto) + "</p>";
  divPrecioTotal.innerHTML = "<p> Precio Total (impuesto): " + calcular_pt(precioNeto, impuesto) + "</p>";
});
