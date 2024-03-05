function totalizar(precio, cantidad) {
  if(precio <= 0 || cantidad <=0){
    return "Error, la cantidad y el precio deben ser mayores a 0";
  }
  return precio * cantidad;
}

function get_descuento(estado){
  return 8.25;
}

export {totalizar, get_descuento};
