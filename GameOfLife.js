const cuadricula = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

console.log(cuadricula);

function inicioDelJuego(fila, columna) {
  //Empezar con todo zero
  for (let i = 0; i < filas; i++) {
    const cuadricula = [];
    for (let j = 0; j < columnas; j++) {
      cuadricula[i][j] = 0;
    }
  }
  return cuadricula;
}

function comprobarVecinos(fila, columna) {
  let totalVecinos = 0;

  if (fila - 1 >= 0 && columna - 1 >= 0) {
    console.log(cuadricula[fila - 1][columna - 1]);
    totalVecinos += cuadricula[fila - 1][columna - 1];
  }

  if (fila - 1 >= 0) {
    totalVecinos += cuadricula[fila - 1][columna];
  }

  if (fila - 1 >= 0 && columna + 1 < 5) {
    totalVecinos += cuadricula[fila - 1][columna + 1];
  }

  if (fila + 1 < 5 && columna - 1 >= 0) {
    totalVecinos += cuadricula[fila + 1][columna - 1];
  }

  if (columna + 1 < 5) {
    totalVecinos += cuadricula[fila][columna + 1];
  }

  if (fila + 1 < 5 && columna - 1 >= 0) {
    totalVecinos += cuadricula[fila + 1][columna - 1];
  }

  if (fila + 1 < 5) {
    totalVecinos += cuadricula[fila + 1][columna];
  }

  if (fila + 1 < 5 && columna + 1 < 5) {
    totalVecinos += cuadricula[fila + 1][columna + 1];
  }

  return totalVecinos;
}
console.log(comprobarVecinos(0, 0));

function vivirMorir(fila, columna) {
  for (let i = 0; i < fila; i++) {
    for (let j = 0; j < columna; j++) {
      let marcador = comprobarVecinos(i, j);
      if (cuadricula[i][j] === 1) {
        if (totalVecinos === 2 || totalVecinos === 3) {
        } else {
          cuadricula[i][j] = 0;
        }
      } else if (cuadricula[i][j] === 0) {
        if (totalVecinos === 3) {
          cuadricula[i][j] = 1;
        }
      }
    }
  }
}

//Poblar cuadricula a boleo

function poblar(fila, columna) {
  for (let i = 0; i < fila; i++) {
    for (let j = 0; j < columna; j++) {
      cuadricula[i][j] = Math.round(Math.random() * 1 + 1);
    }
  }
  return cuadricula;
}
