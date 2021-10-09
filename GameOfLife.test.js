const matrix = require("./GameOfLife");

describe("Given a cuadricula function", () => {
  describe("When it receives crearCuadricula(5,5)", () => {
    test("Then it should return an array fill of all 0", () => {
      const input = crearCuadricula(5, 5);

      const expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const result = crearCuadricula(fila, columna);

      expect(result).crearCuadricula(expected);
    });
  });
});
