function totalizar(precio, cantidad) {
  if(precio <= 0 || cantidad <=0){
    return "Error, la cantidad y el precio deben ser mayores a 0";
  }
  return precio * cantidad;
}

function get_impuesto(estado){
  if(estado==='CA')
    return 8.25;
  if(estado==='AL')
    return 4;
  if(estado==='NV')
    return 8;
  if(estado==='TX')
    return 6.25;
  if(estado==='UT')
    return 6.65;
  return "Estado no encontrado";
}

function calcular_impuesto(precioNeto, porcentajeImpuesto){
  return precioNeto*porcentajeImpuesto/100;
}

function calcular_pt(montoPrecioNeto, montoImpuesto, montoDescuento){
  return montoPrecioNeto+montoImpuesto-montoDescuento;
}

function get_descuento(cantidad){
  if(cantidad >= 1000)
    return 3;
  return 0;
}

function calcular_descuento(precioNeto, porcentajeDescuento){
  return precioNeto * porcentajeDescuento / 100;
}

export {totalizar, get_impuesto, calcular_impuesto, calcular_pt, get_descuento, calcular_descuento};
