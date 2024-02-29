import totalizar from "./totalizador";

const precioUnidad = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const divPrecioNeto = document.querySelector("#precio-neto");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  divPrecioNeto.innerHTML = "<p>" + parseInt(totalizar(precioUnidad.value)) + "</p>";
});
