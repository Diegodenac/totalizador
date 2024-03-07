import {totalizar, get_impuesto, get_descuento, calcular_Descuento_o_Impuesto, get_porcentD_adicional, get_porcentI_adicional, get_costeEnvio, get_descuento_cliente_envio, get_descuento_montoFijo} from "./totalizador";

const precioUnidad = document.querySelector("#precio");
const cantidad = document.querySelector("#cantidad");
const form = document.querySelector("#totalizador-form");
const estado = document.querySelector('#estado')
const categoria = document.querySelector('#categoria')
const pesoU = document.querySelector('#pesoU')
const cliente = document.querySelector('#cliente')

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
  let montoDesCan = calcular_Descuento_o_Impuesto(precioNeto, porDesCan);

  //Descuento Adicional
  let porDesAdi = get_porcentD_adicional(categoria.value);
  let montoDesAdi =  calcular_Descuento_o_Impuesto(precioNeto, porDesAdi);

  //Precio neto descontado
  let montoDescuento = montoDesCan+montoDesAdi;
  let precioDescuento = precioNeto-montoDescuento;

  //Impuesto Estado
  let porImpEst = get_impuesto(estado.value); 
  let montoImpEst = calcular_Descuento_o_Impuesto(precioDescuento, porImpEst);

  //Impuesto Adicional
  let porImpAdi = get_porcentI_adicional(categoria.value);
  let montoImpAdi = calcular_Descuento_o_Impuesto(precioDescuento, porImpAdi);

  //Obtener coste de envio
  let envioUni = get_costeEnvio(pesoU.value);
  let montoEnvio = envioUni * cantidad.value;

  //Descuento en el coste de envio
  let por_Cliente_Des = get_descuento_cliente_envio(cliente.value);
  let monto_Cliente_Des = calcular_Descuento_o_Impuesto(montoEnvio, por_Cliente_Des);
  montoEnvio = montoEnvio - monto_Cliente_Des;

  //Calcular Precio Total
  let precioTotal = precioDescuento + montoImpEst + montoImpAdi + montoEnvio;
  let des_Especial = get_descuento_montoFijo(cliente.value, precioNeto, categoria.value);
  precioTotal = precioTotal - des_Especial;
  
  divPrecioNeto.innerHTML = "<br><p>DETALLE</p><p> Precio Neto (" + cantidad.value + "*$" + precioUnidad.value + "): $" + parseFloat(precioNeto) + "</p>";
  divDescuento.innerHTML = "<p> Descuento (" + porDesCan +"%): $" + montoDesCan + "</p>";
  divImpuesto.innerHTML = "<p> Impuesto para " + estado.value + " (%" + parseFloat(porImpEst) + "): $" + parseFloat(montoImpEst) + "</p>";
  divCategoria.innerHTML = "<p> Descuento por categoria " + categoria.value + " (%" + parseFloat(porDesAdi) + "): $" + parseFloat(montoDesAdi) + "</p>" + "<p> Impuesto por categoria " + categoria.value + " (%" + parseFloat(porImpAdi)+ "): $" + parseFloat(montoImpAdi) + "</p>"; 
  divCosteEnvio.innerHTML = "<p> Coste Unitario Envio: $" + envioUni + "</p>" + "<p> Descuento en Coste Envio por ser cliente " + cliente.value + " (%" + parseFloat(por_Cliente_Des) + "): $" + parseFloat(monto_Cliente_Des) + "</p>" + "<p> Coste Envio: $" + montoEnvio + "</p>";
  divPrecioTotal.innerHTML = "<p> Descuento Fijo Especial por ser cliente " + cliente.value + ", tener un Precio Neto de " + parseFloat(precioNeto) + " y comprar la categoria " + categoria.value + ": $"+ parseFloat(des_Especial) + "<p> Precio Total (impuestos, descuentos y envio): $" + precioTotal + "</p>";
});
