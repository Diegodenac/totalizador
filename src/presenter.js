import totalizar from "./totalizador";

const precioUnidad = document.querySelector("#precio");
const cantidad = document.querySelector("#cantidad");
const form = document.querySelector("#totalizador-form");
const divPrecioNeto = document.querySelector("#precio-neto");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  divPrecioNeto.innerHTML = "<p> El precio neto es: " + parseInt(totalizar(precioUnidad.value, cantidad.value)) + "</p>";
});
