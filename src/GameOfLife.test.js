const matrix = require("./GameOfLife");

describe("Given a checkNeighbours function", () => {
  describe("When it receives checkCompany(1,1)", () => {
    test("Then it should return a total of 2 ", () => {
      const input = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];
      const row = 1;
      const column = 1;
      const expected = 2;

      const result = matrix.checkCompany(input, row, column);

      expect(result).toEqual(expected);
    });
  });
  describe("When it receives checkCompany(0,0)", () => {
    test("Then it should return 2 neighbours", () => {
      const input = [
        [1, 1, 0],
        [1, 0, 0],
        [0, 0, 0],
      ];
      const row = 0;
      const column = 0;
      const expected = 2;

      const result = matrix.checkCompany(input, row, column);

      expect(result).toEqual(expected);
    });
  });
  describe("When it receives [0, 1, 0],[0, 1, 0],[0, 1, 0],", () => {
    test("Then it should return [0, 0, 0],[1, 1, 1],[0, 0, 0],", () => {
      const input = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ];

      const expected = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];

      const result = matrix.checkMatrix(input);

      expect(result).toEqual(expected);
    });
  });
  describe("When it receives an specific array", () => {
    test("Then it should return an array", () => {
      const input = [
        [1, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 1],
      ];

      const expected = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ];
      const result = matrix.checkMatrix(input);

      expect(result).toEqual(expected);
    });
  });
});
