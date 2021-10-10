const boardHTML = document.getElementsByClassName("game__grid__board");
const columns = document.getElementsByClassName("game__grid__board__column");

let matrix = [];

function createBoard() {
  const newBoardGrid = [];
  const newBoard = document.createElement("div");
  newBoard.className = "game__grid__board__new-board";
  // for (let i = 0; i < 85; i++) {
  //   newBoard[i] = [];
  //   const column = document.createElement("div");
  //   column.className = "game__grid__board__column";
  //   boardHTML[0].appendChild(newBoard);
  //   newBoard.appendChild(column);
  // }
  for (let i = 0; i < 60; i++) {
    newBoardGrid[i] = [];
    const column = document.createElement("div");
    column.className = "game__grid__board__column";
    boardHTML[0].appendChild(newBoard);
    newBoard.appendChild(column);
    for (let j = 0; j < 26; j++) {
      newBoardGrid[i][j] = 0;
      const cell = document.createElement("div");
      cell.className = "game__grid__board__cell";
      cell.id = `${i}-${j}`;

      cell.style.backgroundColor = "transparent";
      cell.onclick = changeColor;
      columns[i].appendChild(cell);
    }
  }
  matrix = newBoardGrid;
}

createBoard();

function changeColor() {
  const position = this.id.split("-");
  const horitzontal = position[0];
  const vertical = position[1];

  if (this.style.backgroundColor === "transparent") {
    this.style.backgroundColor = "black";
    matrix[horitzontal][vertical] = 1;
  } else {
    this.style.backgroundColor = "transparent";
    matrix[horitzontal][vertical] = 0;
  }
}

// function newBoard(rows, columns) {
//   for (let i = 0; i < rows; i++) {
//     matrix.push([]);
//     for (let j = 0; j < columns; j++) {
//       matrix[i].push(0);
//       cell.style.backgroundColor = "transparent";
//     }
//   }
//   return matrix;
// }

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

function checkMatrix() {
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
  transformBoard(newBoard);
  matrix = newBoard;
  return newBoard;
}

function transformBoard(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      const divCell = array[i][j];
      if (divCell === 0) {
        document.getElementById(`${i}-${j}`).style.backgroundColor =
          "transparent";
      } else {
        document.getElementById(`${i}-${j}`).style.backgroundColor = "black";
      }
    }
  }
}

let loop = null;

function loopGame() {
  loop = setInterval(() => {
    checkMatrix();
  }, 1500);
}

function stop() {
  clearInterval(loop);
}

function cleanGame() {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = 0;
      document.getElementById(`${i}-${j}`).style.backgroundColor =
        "transparent";
    }
  }
  stop();
}

module.exports = {
  checkCompany,
  checkMatrix,
  createBoard,

  cleanGame,
};
