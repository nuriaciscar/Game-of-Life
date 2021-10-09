const table = document.querySelector(".container__grid);

function createTable() {
 for (let i = 0; i < 40; i++) {
   const rows = document.createElement("div");
    table.appendChild(rows);
    rows.classList.add("rows", `row-${i}`);

    for (let j = 0; j < 40; j++) {
      const columns = document.createElement("div");
      rows.appendChild(col);
      columns.classList.add("columns", `${i}-${j}`);
    }
 }
}
 

const matrix = [
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
  const newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    newArr[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      const result = checkCompany(matrix, i, j);
      if (matrix[i][j] === 1) {
        if (result < 2) {
          newArr[i][j] = 0;
        } else if (result === 2 || result === 3) {
          newArr[i][j] = 1;
        } else if (result > 3) {
          newArr[i][j] = 0;
        }
      } else if (matrix[i][j] === 0) {
        if (result === 3) {
          newArr[i][j] = 1;
        } else {
          newArr[i][j] = 0;
        }
      }
    }
  }
  return newArr;
}

console.table(checkMatrix(matrix));



module.exports = {
  checkCompany,
  checkMatrix,
};
