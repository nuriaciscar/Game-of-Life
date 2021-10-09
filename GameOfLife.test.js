const matrix = require("./GameOfLife");

describe("Given a checkNeighbours function", () => {
  describe("When it receives checkCompany(1,1)", () => {
    test("Then it should return 2 neighbours", () => {
      const input = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];
      const i = 1;
      const j = 1;
      const expected = 2;

      const result = matrix.checkCompany(input, i, j);

      expect(result).toEqual(expected);
    });
  });
});
