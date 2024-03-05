import {totalizar, get_impuesto, calcular_impuesto} from "./totalizador";

const precioUnidad = document.querySelector("#precio");
const cantidad = document.querySelector("#cantidad");
const form = document.querySelector("#totalizador-form");
const estado = document.querySelector('#estado')
const divPrecioNeto = document.querySelector("#precio-neto");
const divImpuesto = document.querySelector("#impuesto");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  precioNeto = totalizar(precioUnidad.value, cantidad.value);
  porcentajeImpuesto = get_impuesto(estado.value);
  divPrecioNeto.innerHTML = "<p> Precio neto(" + cantidad.value + "*$" + precioUnidad.value + "): " + parseInt(precioNeto) + "</p>";
  divImpuesto.innerHTML = "<p> Impuesto para " + estado.value + "(%" + parseFloat(porcentajeImpuesto) + "): " + parseFloat(calcular_impuesto(precioNeto, porcentajeImpuesto)) + "</p>";
});
