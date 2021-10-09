const cuadricula = require("./GameOfLife");

describe("Given a cuadricula function", () => {
  describe("When it starts", () => {
    test("Then it should return an array fill of all 0", () => {
      const fila = 5;
      const columna = 5;

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

  describe("When it receives comprobarVecinos(2,2)", () => {
    test("Then it should return 2", () => {
      const cuadricula = [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ];

      const expected = 2;

      const result = comprobarVecinos(2, 2);

      expect(result).comprobarVecinos(expected);
    });
  });
});
