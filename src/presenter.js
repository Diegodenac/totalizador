import {totalizar, get_descuento} from "./totalizador";

const precioUnidad = document.querySelector("#precio");
const cantidad = document.querySelector("#cantidad");
const form = document.querySelector("#totalizador-form");
const estado = document.querySelector('#estado')
const divPrecioNeto = document.querySelector("#precio-neto");
const divImpuesto = document.querySelector("#impuesto");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  divPrecioNeto.innerHTML = "<p> Precio neto(" + cantidad.value + "*$" + precioUnidad.value + "): " + parseInt(totalizar(precioUnidad.value, cantidad.value)) + "</p>";
  divImpuesto.innerHTML = "<p> Impuesto para " + estado.value + "(%" + parseFloat(get_descuento(estado.value)) + "): ";
});
