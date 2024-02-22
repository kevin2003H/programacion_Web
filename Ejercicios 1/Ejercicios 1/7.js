function contarRango(numeroInicial, numeroFinal) {
    // Validar que el primer número sea menor que el segundo
    if (numeroInicial >= numeroFinal) {
      throw new Error("El primer número debe ser menor que el segundo");
    }
  
    // Contador para los números entre el rango
    let contador = 0;
  
    // Recorrer el rango desde el siguiente número al inicial hasta el final
    for (let i = numeroInicial + 1; i < numeroFinal; i++) {
      // Incrementar el contador en cada iteración
      contador++;
    }
  
    // Devolver el número de números encontrados
    return contador;
  }
  
  // Ejemplos de uso
  console.log(contarRango(1, 5)); // Salida: 3
  console.log(contarRango(10, 20)); // Salida: 9
  console.log(contarRango(5, 5)); // Salida: 0
  
  // Ejemplo con error
  try {
    contarRango(10, 5);
  } catch (error) {
    console.log(error.message); // Salida: "El primer número debe ser menor que el segundo"
  }
  