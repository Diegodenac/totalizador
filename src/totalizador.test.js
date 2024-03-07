import {totalizar, get_impuesto, calcular_impuesto, calcular_pt, get_descuento, calcular_descuento, get_porcentI_adicional, get_porcentD_adicional, get_costeEnvio} from "./totalizador.js";

describe("Obtener Precio Neto", () => {
  
  // Funcionalidades iniciales:

  it("deberia mostrar el precio neto para un item", () => {
    expect(totalizar(20, 1)).toEqual(20);
  });

  it("deberia mostrar el precio neto para un item", () => {
    expect(totalizar(30, 1)).toEqual(30);
  });

  it("deberia mostrar el precio neto para varios items", () => {
    expect(totalizar(30, 2)).toEqual(60);
  });

  it("deberia mostrar un mensaje de error si el precio o la cantidad son menores o iguales a 0", () => {
    expect(totalizar(0, -2)).toEqual("Error, la cantidad y el precio deben ser mayores a 0");
  });

  it("deberia mostrar el impuesto segun el estado seleccionado CA", () => {
    expect(get_impuesto('CA')).toEqual(8.25);
  });

  it("deberia mostrar el impuesto segun el estado seleccionado AL", () => {
    expect(get_impuesto('AL')).toEqual(4);
  });

  it("deberia mostrar el impuesto segun el estado seleccionado NV", () => {
    expect(get_impuesto('NV')).toEqual(8);
  });

  it("deberia mostrar el impuesto segun el estado seleccionado TX", () => {
    expect(get_impuesto('TX')).toEqual(6.25);
  });

  it("deberia mostrar el impuesto segun el estado seleccionado UT", () => {
    expect(get_impuesto('UT')).toEqual(6.65);
  });

  it("deberia mostrar error si el estado recibido no corresponde a un estado", () => {
    expect(get_impuesto('OT')).toEqual("Estado no encontrado");
  });

  it("deberia calcular el impuesto segun el porcentajeObtenido y el precioNeto CA", () => {
    expect(calcular_impuesto(100, 8.25)).toEqual(8.25);
  });

  it("deberia calcular el impuesto segun el porcentajeObtenido y el precioNeto CA", () => {
    expect(calcular_impuesto(200, 8.25)).toEqual(16.5);
  });

  it("deberia calcular el impuesto segun el porcentajeObtenido y el precioNeto AL", () => {
    expect(calcular_impuesto(100, 4)).toEqual(4);
  });

  it("deberia calcular el precio total incluyendo el impuesto precio_neto 200 impuesto 16.5", () => {
    expect(calcular_pt(200, 16.5, 0)).toEqual(216.5);
  });

  it("deberia calcular el precio total incluyendo el impuesto precio_neto 100 impuesto 8.25", () => {
    expect(calcular_pt(100, 8.25, 0)).toEqual(108.25);
  });

  it("deberia calcular el precio total incluyendo el impuesto y el descuento precio_neto 100, impuesto 8.0025 , descuento 3", () => {
    expect(calcular_pt(100, 8.0025, 3)).toEqual(105.0025);
  });

  it("deberia obtener el descuento 0% para una cantidad 100", () => {
    expect(get_descuento(100)).toEqual(0);
  });

  it("deberia obtener el descuento 3% para una cantidad 1000 o superior, 1000", () => {
    expect(get_descuento(1000)).toEqual(3);
  });

  it("deberia obtener el descuento 3% para una cantidad 1000 o superior, 1500", () => {
    expect(get_descuento(1500)).toEqual(3);
  });

  it("deberia calcular el descuento segun el porcentajeDescuento y el precioNeto", () => {
    expect(calcular_descuento(100, 0)).toEqual(0);
  });

  it("deberia calcular el descuento segun el porcentajeDescuento y el precioNeto, 100, 3", () => {
    expect(calcular_descuento(100, 3)).toEqual(3);
  });

  it("deberia calcular el descuento segun el porcentajeDescuento y el precioNeto, 200, 6", () => {
    expect(calcular_descuento(200, 3)).toEqual(6);
  });

  it("deberia obtener el descuento 5% para una cantidad de 3000", () => {
    expect(get_descuento(3000)).toEqual(5);
  });

  it("deberia obtener el descuento 5% para una cantidad de 3000 o mas", () => {
    expect(get_descuento(4500)).toEqual(5);
  });

  it("deberia obtener el descuento 7% para una cantidad de 7000", () => {
    expect(get_descuento(7000)).toEqual(7);
  });

  it("deberia obtener el descuento 7% para una cantidad de 7000 o mas", () => {
    expect(get_descuento(8500)).toEqual(7);
  });

  it("deberia obtener el descuento 10% para una cantidad de 10000", () => {
    expect(get_descuento(10000)).toEqual(10);
  });

  it("deberia obtener el descuento 10% para una cantidad de 10000 o mas, 15000", () => {
    expect(get_descuento(15000)).toEqual(10);
  });

  it("deberia obtener el descuento 15% para una cantidad de 30000", () => {
    expect(get_descuento(30000)).toEqual(15);
  });

  it("deberia obtener el descuento 15% para una cantidad de 30000 o mas, 60500", () => {
    expect(get_descuento(60500)).toEqual(15);
  });

  it("deberia calcular el descuento segun el precioNeto y el porcentajeDescuento, 100, 3", () => {
    expect(calcular_descuento(10000, 30)).toEqual(3000);
  });

  // Funcionalidades adicionales:

  it("deberia obtener el IMPUESTO ADICIONAL 0% para categoria varios", () => {
    expect(get_porcentI_adicional('varios')).toEqual(0);
  });

  it("deberia obtener el DESCUENTO ADICIONAL 0% para categoria varios", () => {
    expect(get_porcentD_adicional('varios')).toEqual(0);
  });

  it("deberia obtener el IMPUESTO ADICIONAL 2% para categoria vestimenta", () => {
    expect(get_porcentI_adicional('vestimenta')).toEqual(2);
  });

  it("deberia obtener el DESCUENTO ADICIONAL 0% para categoria vestimenta", () => {
    expect(get_porcentD_adicional('vestimenta')).toEqual(0);
  });

  it("deberia obtener el IMPUESTO ADICIONAL 4% para categoria electronicos", () => {
    expect(get_porcentI_adicional('electronicos')).toEqual(4);
  });

  it("deberia obtener el DESCUENTO ADICIONAL 1% para categoria electronicos", () => {
    expect(get_porcentD_adicional('electronicos')).toEqual(1);
  });

  it("deberia obtener el IMPUESTO ADICIONAL 3% para categoria muebles", () => {
    expect(get_porcentI_adicional('muebles')).toEqual(3);
  });

  it("deberia obtener el DESCUENTO ADICIONAL 0% para categoria muebles", () => {
    expect(get_porcentD_adicional('muebles')).toEqual(0);
  });

  it("deberia obtener el IMPUESTO ADICIONAL 0% para categoria escritorio", () => {
    expect(get_porcentI_adicional('escritorio')).toEqual(0);
  });

  it("deberia obtener el DESCUENTO ADICIONAL 1.5% para categoria escritorio", () => {
    expect(get_porcentD_adicional('escritorio')).toEqual(1.5);
  });
  
  it("deberia obtener el IMPUESTO ADICIONAL 7% para categoria alcohol", () => {
    expect(get_porcentI_adicional('alcohol')).toEqual(7);
  });

  it("deberia obtener el DESCUENTO ADICIONAL 0% para categoria alcohol", () => {
    expect(get_porcentD_adicional('alcohol')).toEqual(0);
  });

  it("deberia obtener el IMPUESTO ADICIONAL 0% para categoria alimentos", () => {
    expect(get_porcentI_adicional('alimentos')).toEqual(0);
  });

  it("deberia obtener el DESCUENTO ADICIONAL 2% para categoria alimentos", () => {
    expect(get_porcentD_adicional('alimentos')).toEqual(2);
  });

  it("deberia obtener el COSTE DE ENVIO UNITARIO entre 0-10 deberia devolver 0", () => {
    expect(get_costeEnvio(0)).toEqual(0);
  });

  it("deberia obtener el COSTE DE ENVIO UNITARIO entre 0-10 deberia devolver 0", () => {
    expect(get_costeEnvio(11)).toEqual("Parametro no definido");
  });
});
