function totalizar(precio, cantidad) {
  if(precio <= 0 || cantidad <=0){
    return "Error, la cantidad y el precio deben ser mayores a 0";
  }
  return precio * cantidad;
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

function calcular_Descuento_o_Impuesto(precioNeto, porcentaje){
  return precioNeto*porcentaje/100;
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

function get_costeEnvio(peso){
  if (peso>=0){
    if (peso < 11)
      return 0;
    if(peso < 21)
      return 3.5;
    if(peso < 41)
      return 5;
    if(peso <= 80)
      return 6;
    if(peso >=80 && peso<=100)
      return 6.5;
    if(peso<=200)
      return 8;
    if(peso>200)
      return 9;
  }
  return "Parametro no definido";
}

function get_descuento_cliente_envio(cliente){
  if(cliente == 'normal')
    return 0;
  if(cliente == 'recurrente')
    return 0.5;
}

 function calcular_pt(precio, imp, des){
  return precio-des+imp;
 }

export {totalizar, calcular_pt, get_descuento, get_impuesto, calcular_Descuento_o_Impuesto, get_porcentD_adicional, get_porcentI_adicional, get_costeEnvio, get_descuento_cliente_envio};
