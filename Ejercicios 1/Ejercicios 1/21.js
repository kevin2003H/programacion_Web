function pares(arreglo) {
    // Crear un nuevo arreglo para almacenar los números pares
    const numerosPares = [];
  
    // Recorrer el arreglo original
    for (let i = 0; i < arreglo.length; i++) {
      // Si el elemento actual es par, agregarlo al nuevo arreglo
      if (arreglo[i] % 2 === 0) {
        numerosPares.push(arreglo[i]);
      }
    }
  
    // Devolver el nuevo arreglo con los números pares
    return numerosPares;
  }
  
  // Ejemplos de uso
  console.log(pares([1, 2, 3, 4, 5])); // Salida: [2, 4]
  console.log(pares([10, 15, 20, 25])); // Salida: [10, 20]
  
  // Ejemplo con un arreglo vacío
  console.log(pares([])); // Salida: []
  