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
  return 8;
}

function calcular_impuesto(precioNeto, porcentajeImpuesto){
  return precioNeto*porcentajeImpuesto/100;
}

function calcular_pt(precioNeto, impuesto){
  return precioNeto+impuesto;
}

export {totalizar, get_impuesto, calcular_impuesto, calcular_pt};
