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
  return montoPrecioNeto + montoImpuesto - montoDescuento;
}

function get_descuento(cantidad){
  if(cantidad >= 30000)
    return 15;

  if(cantidad >= 10000)
    return 10;
  
  if(cantidad >= 7000)
    return 7;
  
  if(cantidad >= 3000)
    return 5;

  if(cantidad >= 1000)
    return 3;

  return 0;
}

function calcular_descuento(precioNeto, porcentajeDescuento){
  return precioNeto * porcentajeDescuento / 100;
}

function get_porcentI_adicional(categoria){
  if(categoria === 'vestimenta')
    return 2;
  if(categoria === 'electronicos')
    return 4;
  if(categoria === 'muebles')
    return 3;
  if(categoria === 'alcohol')
    return 7;
  return 0;
}

function get_porcentD_adicional(categoria){
  if(categoria === 'electronicos')
    return 1;
  if(categoria === 'escritorio')
    return 1.5;
  if(categoria === 'alimentos')
    return 2;
  return 0;
}

function get_costeEnvio(peso){
  return 0;
}

export {totalizar, get_impuesto, calcular_impuesto, calcular_pt, get_descuento, calcular_descuento, get_porcentI_adicional, get_porcentD_adicional, get_costeEnvio};
