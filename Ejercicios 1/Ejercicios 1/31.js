function distancia(str1, str2) {
    // Validar que los strings tengan la misma longitud
    if (str1.length !== str2.length) {
      throw new Error("Los strings deben tener la misma longitud");
    }
  
    // Variable para almacenar la distancia
    let distancia = 0;
  
    // Recorrer los strings caracter por caracter
    for (let i = 0; i < str1.length; i++) {
      // Si los caracteres actuales son diferentes, aumentar la distancia
      if (str1[i] !== str2[i]) {
        distancia++;
      }
    }
  
    // Devolver la distancia total
    return distancia;
  }
  
  // Ejemplos de uso
  console.log(distancia("Hola", "Hala")); // Salida: 1
  console.log(distancia("Hola mundo", "Hola mundo")); // Salida: 0
  
  // Ejemplo con error
  try {
    distancia("Hola", "Hola mundo");
  } catch (error) {
    console.log(error.message); // Salida: "Los strings deben tener la misma longitud"
  }
  