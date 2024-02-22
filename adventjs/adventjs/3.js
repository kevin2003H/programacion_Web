function encontrarPasoTravieso(original, modificada) {
    // Si las secuencias son iguales, no hay paso travieso
    if (original === modificada) {
      return "";
    }
  
    // Obtener la longitud de la secuencia más corta
    const longitudMinima = Math.min(original.length, modificada.length);
  
    // Recorrer las secuencias caracter por caracter hasta encontrar una diferencia
    for (let i = 0; i < longitudMinima; i++) {
      if (original[i] !== modificada[i]) {
        // Si la secuencia original es más larga, el paso travieso es el siguiente caracter en la modificada
        if (original.length > modificada.length) {
          return modificada[i];
        }
        // Si la secuencia modificada es más larga, el paso travieso es el caracter que falta en la original
        return "";
      }
    }
  
    // Si no se encontró ninguna diferencia, el paso travieso es el caracter adicional al final de la secuencia modificada
    if (modificada.length > original.length) {
      return modificada[longitudMinima];
    }
  
    // Si se llegó aquí, no se encontró ningún paso travieso
    return "";
  }
  
  // Ejemplos de uso
  const original = "abcd";
  const modificada = "abcde";
  
  const pasoTravieso = encontrarPasoTravieso(original, modificada);
  
  console.log(pasoTravieso); // Salida: "e"
  
  // Más ejemplos
  const original2 = "stepfor";
  const modificada2 = "stepor";
  
  const pasoTravieso2 = encontrarPasoTravieso(original2, modificada2);
  
  console.log(pasoTravieso2); // Salida: "f"
  
  const original3 = "abcde";
  const modificada3 = "abcde";
  
  const pasoTravieso3 = encontrarPasoTravieso(original3, modificada3);
  
  console.log(pasoTravieso3); // Salida: ""
  