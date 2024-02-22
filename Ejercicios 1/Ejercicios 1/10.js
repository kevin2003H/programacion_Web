function numeroDeCaracteres(texto, caracter) {
    // Validar que el caracter tenga solo un caracter
    if (caracter.length !== 1) {
      throw new Error("El caracter debe ser un solo caracter");
    }
  
    // Convertir el texto a minúsculas para evitar problemas de sensibilidad a mayúsculas y minúsculas
    const textoMinusculas = texto.toLowerCase();
  
    // Convertir el caracter a minúsculas
    const caracterMinuscula = caracter.toLowerCase();
  
    // Contar la cantidad de apariciones del caracter en el texto
    let contador = 0;
    for (let i = 0; i < textoMinusculas.length; i++) {
      if (textoMinusculas[i] === caracterMinuscula) {
        contador++;
      }
    }
  
    // Devolver el número de apariciones del caracter
    return contador;
  }
  
  // Ejemplos de uso
  console.log(numeroDeCaracteres("Hola mundo", "o")); // Salida: 2
  console.log(numeroDeCaracteres("Hola mundo", "a")); // Salida: 1
  console.log(numeroDeCaracteres("Hola mundo", "H")); // Salida: 1
  
  // Ejemplo con error
  try {
    numeroDeCaracteres("Hola mundo", "Hola");
  } catch (error) {
    console.log(error.message); // Salida: "El caracter debe ser un solo caracter"
  }
  
