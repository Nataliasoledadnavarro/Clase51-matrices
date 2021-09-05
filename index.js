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

// 5 Definí una función generarMatrizEscalonada que reciba como argumento un número entero filas y devuelva un array 2d con la cantidad de filas filas, donde la primera fila tiene 1 columna, la segunda tiene 2, la tercera 3, y así sucesivamente. Los ítems de la matriz deben ser 0.
// NO FUNCIONA

/*const generarMatrizEscalonada = (numero) => {
  let acc = [];

  for (let i = 0; i < numero; i++) {
    acc.push([]);
  }

  for (let j = 0; j < acc.length; j++) {
   
  }

  return acc;
};*/
//console.log(generarMatrizEscalonada(3));
/*[
   [0], 
   [0, 0], 
   [0, 0, 0]
 ] */
/*console.log(generarMatrizEscalonada(5)) 
 [
   [0], 
   [0, 0], 
   [0, 0, 0], 
   [0, 0, 0, 0], 
   [0, 0, 0, 0, 0]
 ] */

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
