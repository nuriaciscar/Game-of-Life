const matrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

console.table(matrix);

function checkVoisins(matrix, i, j) {
  let count = 0;

  debugger;
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
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    newArr[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let result = checkVoisins(matrix, i, j);
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
