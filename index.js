//1 Definí una función obtenerNumeroMayor que tome por parámetro un array 2d de números matriz y devuelva el mayor número de dicha matriz.
/*const obtenerNumeroMayor = (matriz) => {
  let numeroMayor = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] > numeroMayor) {
        numeroMayor = matriz[i][j];
      }
    }
  }
  return numeroMayor;
};

console.log(
  obtenerNumeroMayor([
    [2, 7, 12, 1],
    [8, 23],
    [9, 45, 7],
    [22, 3, 24, 4],
  ])
);
//45*/

//2 Definí una función sumar que reciba una matriz de números  y devuelva la suma de todos los números de dicha matriz.

/*const sumar = (matriz) => {

    let acc = 0

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
         
            acc = acc + matriz[i][j]
            
        }
        
    }

    return acc

}


console.log(sumar([[4, 5],[2, 7, 1],[8, 10],]))
//37*/

//3 Definí una función esMatrizCuadrada que reciba como argumento un array 2d matriz y devuelva si es una matriz cuadrada, es decir, si tiene igual cantidad de filas que de columnas.

/*const esMatrizCuadrada = (matriz) => {
  let resultado = false;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[0].length === matriz[j].length) {
        resultado = true;
      } else {
        resultado = false;
      }
    }
  }

  return resultado;
};

console.log(
  esMatrizCuadrada([
    [4, 5],
    [2, 7, 1],
    [8, 10],
  ])
);
//false

console.log(
  esMatrizCuadrada([
    [4, 5, 9],
    [2, 7, 1],
    [8, 10, 5],
  ])
);
//true*/

//4 Definí una función generarGrilla que tome por parámetro un número entero filas, un número entero columnas y un array de valores items, y devuelva una matriz de filas filas y columnas columnas, donde cada ítem de la matriz es un ítem aleatorio de items.
/*const obtenerNumeroAlAzar = (items) => {
  return Math.floor(Math.random() * items.length);
};

const generarGrilla = (filas, columnas, items) => {
  let matriz = [];

  for (let i = 0; i < filas; i++) {
    let arrayFilas = [];
    matriz.push(arrayFilas);

    for (let j = 0; j < columnas; j++) {
      arrayFilas.push(items[obtenerNumeroAlAzar(items)]);
    }
  }

  return matriz;
};

console.log(generarGrilla(2, 3, [1, 2]));
//[
//  [1, 1, 2],
//  [2, 1, 1]
//]
console.log(generarGrilla(3, 3, ["a", "b", "c"]));
//[
//['c', 'c', 'a'],
//['c', 'a', 'a'],
//['b', 'a', 'b']
//]*/

//5 Definí una función generarMatrizEscalonada que reciba como argumento un número entero filas y devuelva un array 2d con la cantidad de filas filas, donde la primera fila tiene 1 columna, la segunda tiene 2, la tercera 3, y así sucesivamente. Los ítems de la matriz deben ser 0.

// NO FUNCIONA
/*const generarMatrizEscalonada = (numero) => {
  let matriz = [];

  for (let i = 0; i < 1; i++) {
    let acc = "";
    let array = [];
    matriz.push(array);
    for (let j = 0; j < numero; j++) {
      acc = acc + "0";
      array.push(acc);
    }
  }

  return matriz;
};*/
//console.log(generarMatrizEscalonada(3));
/*[
   [0], 
   [0, 0], 
   [0, 0, 0]
 ] */
//console.log(generarMatrizEscalonada(5));
/*[
  ([0], [0, 0], [0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0])
];*/

//6 Definí una función obtenerFilaMasLarga que reciba como argumento un array 2d matriz y devuelva el array (fila) que tenga mayor longitud. Si hay varios de igual longitud, debe devolver el primero de ellos.

/*const obtenerFilaMasLarga = (matriz) => {
  let arrayMasLargo = matriz[0];

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (arrayMasLargo.length < matriz[j].length) {
        arrayMasLargo = matriz[j];
      }
    }
  }

  return arrayMasLargo;
};

console.log(obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]]));
//[3, 7, 5]
console.log(obtenerFilaMasLarga([[1], [3, 7], [6, 8]]));
//[3, 7]*/

//7 Definí una función obtenerCantidad que tome un valor cualquiera item y una matriz items y devuelva la cantidad de veces que item se encuentra dentro de items.

/*const obtenerCantidad = (item, items) => {
  let contadora = 0;
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items[i].length; j++) {
      if (items[i][j] === item) {
        contadora++;
      }
    }
  }
  return contadora;
};

console.log(

  obtenerCantidad("🍎", [
    ["🍎", "🍏", "🍌", "🍌"],
    ["🍌", "🍎"],
    ["🍎", "🍏", "🍌"],
    ["🍏", "🍌", "🍎", "🍌"],
  ])
);
//4*/
//8 Definí una función convertirEnMatriz que reciba como argumentos un número entero columnas y un array array y devuelva una matriz con los items de array y la cantidad de columnas columnas por fila. La última fila puede quedarse como menos columnas de las indicadas si no hay más ítems que agregar.

/*const convertirEnMatriz = (columnas, array) =>{
  let matriz = []
for (let i = 0; i < array.length; i++) {
  let arrayCortado = array.splice(0,columnas)
  matriz.push(arrayCortado)
}
  return matriz

}
 console.log(convertirEnMatriz(2, [1, 2, 3, 4]))
//[[1, 2], [3, 4]]
 console.log(convertirEnMatriz(3, [1, 2, 3, 4, 5, 6, 7]))
//[[1, 2, 3], [4, 5, 6], [7]]
 console.log(convertirEnMatriz(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))
//[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11]]*/


//10 Definí una función tieneBloqueHorizontal que reciba como argumento un array 2d matriz y devuelva si dicha matriz tiene un bloque horizontal de 3 o más ítems consecutivos idénticos.

/*const tieneBloqueHorizontal = (array) => {
  let resultado = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === array[i][j + 1] && array[i][j] === array[i][j + 2]) {
        resultado = true;
        return resultado;
      } else {
        resultado = false;
      }
    }
  }
  return resultado;
};

console.log(
  tieneBloqueHorizontal([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
);
//false

console.log(
  tieneBloqueHorizontal([
    [1, 2, 3, 4],
    [1, 2, 2, 2],
    [1, 2, 4, 5],
  ])
);
//true*/

//11 Definí una función tieneBloqueVertical que tome una matriz y devuelva si la misma tiene un bloque vertical  de 3 o más ítems consecutivos idénticos .

/*const tieneBloqueVertical = (array) => {
  let resultado = false;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i+1] && array[i+2] && array[i][j] === array[i+1][j] && array[i][j] === array[i+2][j]) {
        resultado = true;
        return resultado;
      } else {
        resultado = false;
      }
    }
  }
  return resultado;
};

console.log(
  tieneBloqueVertical([
    [4, 2, 3],
    [1, 5, 3],
    [1, 2, 3],
  ])
);
//true

console.log(
  tieneBloqueVertical([
    [1, 2, 3, 4],
    [7, 2, 9, 2],
    [1, 8, 4, 5],
  ])
);
//false*/
