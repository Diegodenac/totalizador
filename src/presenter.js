import {totalizar, get_impuesto, calcular_impuesto} from "./totalizador";

const precioUnidad = document.querySelector("#precio");
const cantidad = document.querySelector("#cantidad");
const form = document.querySelector("#totalizador-form");
const estado = document.querySelector('#estado')
const divPrecioNeto = document.querySelector("#precio-neto");
const divImpuesto = document.querySelector("#impuesto");
const divPrecioTotal = document.querySelector("#precio-total");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  precioNeto = totalizar(precioUnidad.value, cantidad.value);
  porcentajeImpuesto = get_impuesto(estado.value);
  impuesto = calcular_impuesto(precioNeto, porcentajeImpuesto);
  divPrecioNeto.innerHTML = "<p> Precio neto(" + cantidad.value + "*$" + precioUnidad.value + "): " + parseInt(precioNeto) + "</p>";
  divImpuesto.innerHTML = "<p> Impuesto para " + estado.value + "(%" + parseFloat(porcentajeImpuesto) + "): " + parseFloat(impuesto) + "</p>";
  divPrecioTotal.innerHTML = "<p> Precio Total (impuesto): " + "</p>"; //calcular_pt(precioNeto, impuesto)
});
