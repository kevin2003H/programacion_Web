function maxDistance(movimientos) {
    // Variables para almacenar la posición actual y la máxima distancia
    let posicionActual = 0;
    let distanciaMaxima = 0;
  
    // Recorrer la cadena de movimientos
    for (const movimiento of movimientos) {
      // Actualizar la posición actual según el movimiento
      switch (movimiento) {
        case ">":
          posicionActual++;
          break;
        case "<":
          posicionActual--;
          break;
      }
  
      // Actualizar la distancia máxima si la posición actual es mayor
      distanciaMaxima = Math.max(distanciaMaxima, Math.abs(posicionActual));
    }
  
    // Devolver la distancia máxima
    return distanciaMaxima;
  }
  
  // Ejemplos de uso
  const movimientos = ">>*<>";
  const result = maxDistance(movimientos);
  
  console.log(result); // Salida: 2
  
  const movimientos2 = "<<<>";
  const result2 = maxDistance(movimientos2);
  
  console.log(result2); // Salida: 2
  
  const movimientos3 = ">***>";
  const result3 = maxDistance(movimientos3);
  
  console.log(result3); // Salida: 5
  