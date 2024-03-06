import {totalizar, get_impuesto, calcular_impuesto, calcular_pt} from "./totalizador.js";

describe("Obtener Precio Neto", () => {
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

  it("deberia calcular el impuesto segun el porcentajeObtenido y el precioNeto CA", () => {
    expect(calcular_impuesto(100, 8.25)).toEqual(8.25);
  });

  it("deberia calcular el impuesto segun el porcentajeObtenido y el precioNeto CA", () => {
    expect(calcular_impuesto(200, 8.25)).toEqual(16.5);
  });

  it("deberia calcular el impuesto segun el porcentajeObtenido y el precioNeto AL", () => {
    expect(calcular_impuesto(100, 4)).toEqual(4);
  });

  it("deberia calcular el precio total incluyendo el impuesto", () => {
    expect(calcular_pt(200, 16.5)).toEqual(216.5);
  });

  it("deberia calcular el precio total incluyendo el impuesto", () => {
    expect(calcular_pt(100, 8.25)).toEqual(108.25);
  });

});
