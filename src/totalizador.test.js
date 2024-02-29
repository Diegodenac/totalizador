import totalizar from "./totalizador.js";

describe("Obtener Precio Neto", () => {
  it("deberia mostrar el precio neto para un item", () => {
    expect(totalizar(20)).toEqual(20);
  });
});
