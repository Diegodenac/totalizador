import totalizar from "./totalizador.js";

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
});
