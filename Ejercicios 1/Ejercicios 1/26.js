function imprimirMatriz(matriz) {
    // Recorrer cada fila de la matriz
    for (let i = 0; i < matriz.length; i++) {
      // Imprimir cada elemento de la fila actual
      for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
      }
      // Agregar un salto de línea al final de cada fila
      console.log("\n");
    }
  }
  
  // Ejemplo de uso
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  imprimirMatriz(matriz);
  