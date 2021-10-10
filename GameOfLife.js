const boardHTML = document.getElementsByClassName("game__grid__board");
const columns = document.getElementsByClassName("game__grid__board__column");

function createBoard() {
  const newBoard = document.createElement("div");
  newBoard.className = "game__grid__board__new-board";
  for (let i = 0; i < 87; i++) {
    const column = document.createElement("div");
    column.className = "game__grid__board__column";
    boardHTML[0].appendChild(newBoard);
    newBoard.appendChild(column);
  }
  for (let i = 0; i < 87; i++) {
    for (let j = 0; j < 40; j++) {
      const cell = document.createElement("div");
      cell.className = "game__grid__board__cell";
      cell.id = `${i}-${j}`;
      cell.style.backgroundColor = "transparent";
      columns[i].appendChild(cell);
    }
  }
}

createBoard();

let matrix = [];

function newBoard(rows, columns) {
  for (let i = 0; i < rows; i++) {
    matrix.push([]);
    for (let j = 0; j < columns; j++) {
      matrix[i].push(0);
    }
  }
  return matrix;
}

matrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

function checkCompany(matrix, i, j) {
  let count = 0;

  if (i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1] === 1) {
    count++;
  }
  if (i - 1 >= 0 && matrix[i - 1][j] === 1) {
    count++;
  }
  if (i - 1 >= 0 && j + 1 <= matrix[i].length && matrix[i - 1][j + 1] === 1) {
    count++;
  }
  if (j - 1 >= 0 && matrix[i][j - 1] === 1) {
    count++;
  }
  if (j + 1 <= matrix[i].length && matrix[i][j + 1] === 1) {
    count++;
  }
  if (i + 1 <= matrix.length - 1 && j - 1 >= 0 && matrix[i + 1][j - 1] === 1) {
    count++;
  }
  if (i + 1 < matrix.length && matrix[i + 1][j] === 1) {
    count++;
  }
  if (
    i + 1 < matrix.length &&
    j + 1 < matrix[i].length &&
    matrix[i + 1][j + 1] === 1
  ) {
    count++;
  }
  return count;
}

function checkMatrix(matrix) {
  const newBoard = [];
  for (let i = 0; i < matrix.length; i++) {
    newBoard[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      const result = checkCompany(matrix, i, j);
      if (matrix[i][j] === 1) {
        if (result < 2) {
          newBoard[i][j] = 0;
        } else if (result === 2 || result === 3) {
          newBoard[i][j] = 1;
        } else if (result > 3) {
          newBoard[i][j] = 0;
        }
      } else if (matrix[i][j] === 0) {
        if (result === 3) {
          newBoard[i][j] = 1;
        } else {
          newBoard[i][j] = 0;
        }
      }
    }
  }
  matrix = newBoard;
  return matrix;
}

module.exports = {
  checkCompany,
  checkMatrix,
  createBoard,
  newBoard,
};
