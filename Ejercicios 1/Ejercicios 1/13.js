function removerCeros(arreglo) {
    // Crear un nuevo arreglo para almacenar los elementos sin ceros
    const nuevoArreglo = [];
  
    // Recorrer el arreglo original
    for (let i = 0; i < arreglo.length; i++) {
      // Si el elemento actual no es un cero, agregarlo al nuevo arreglo
      if (arreglo[i] !== 0) {
        nuevoArreglo.push(arreglo[i]);
      }
    }
  
    // Devolver el nuevo arreglo sin ceros
    return nuevoArreglo;
  }
  
  // Ejemplos de uso
  console.log(removerCeros([1, 0, 2, 3, 0])); // Salida: [1, 2, 3]
  console.log(removerCeros([0, 0, 0, 0])); // Salida: []
  
  // Ejemplo con un arreglo vacío
  console.log(removerCeros([])); // Salida: []
  