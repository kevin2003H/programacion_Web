function likes(numero) {
    // Convertir el número a una cadena
    const numStr = numero.toString();
  
    // Si el número es menor a 1000, devolver la cadena directamente
    if (numero < 1000) {
      return numStr;
    }
  
    // Formatear el número con K o M
    if (numero >= 1000 && numero < 1000000) {
      const miles = Math.floor(numero / 1000);
      return miles + "K";
    } else {
      const millones = Math.floor(numero / 1000000);
      return millones + "M";
    }
  }
  
  // Ejemplos de uso
  console.log(likes(1400)); // Salida: "1K"
  console.log(likes(34567)); // Salida: "34K"
  console.log(likes(7456345)); // Salida: "7M"
  console.log(likes(999)); // Salida: "999"
  