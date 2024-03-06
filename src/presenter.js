import {totalizar, get_impuesto, get_descuento, calcular_impuesto, calcular_descuento, calcular_pt} from "./totalizador";

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
  let porcentajeDescuento = get_descuento(cantidad.value);
  let montoDescuento = calcular_descuento(precioNeto, porcentajeDescuento);
  let precioDescuento = precioNeto-montoDescuento;
  let porcentajeImpuesto = get_impuesto(estado.value);
  let montoImpuesto = calcular_impuesto(precioDescuento, porcentajeImpuesto);
  divPrecioNeto.innerHTML = "<p> Precio neto(" + cantidad.value + "*$" + precioUnidad.value + "): " + parseFloat(precioNeto) + "</p>";
  divDescuento.innerHTML = "<p> Descuento (" + porcentajeDescuento +"%): " + montoDescuento + "</p>";
  divImpuesto.innerHTML = "<p> Impuesto para " + estado.value + "(%" + parseFloat(porcentajeImpuesto) + "): " + parseFloat(montoImpuesto) + "</p>";
  divPrecioTotal.innerHTML = "<p> Precio Total (impuesto): " + calcular_pt(precioNeto, montoImpuesto, montoDescuento) + "</p>";
});
