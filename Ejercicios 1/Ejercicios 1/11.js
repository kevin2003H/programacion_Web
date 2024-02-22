function sumarArreglo(arreglo) {
    // Validar que el arreglo no esté vacío
    if (arreglo.length === 0) {
      throw new Error("El arreglo no puede estar vacío");
    }
  
    // Variable para almacenar la suma
    let suma = 0;
  
    // Recorrer el arreglo y sumar cada elemento
    for (let i = 0; i < arreglo.length; i++) {
      // Validar que cada elemento del arreglo sea un número
      if (typeof arreglo[i] !== "number") {
        throw new Error("El arreglo solo puede contener números");
      }
      suma += arreglo[i];
    }
  
    // Devolver la suma total
    return suma;
  }
  
  // Ejemplos de uso
  console.log(sumarArreglo([1, 2, 3])); // Salida: 6
  console.log(sumarArreglo([10, 20, 30, 40])); // Salida: 100
  
  // Ejemplos con errores
  try {
    sumarArreglo([]);
  } catch (error) {
    console.log(error.message); // Salida: "El arreglo no puede estar vacío"
  }
  
  try {
    sumarArreglo(["a", 2, 3]);
  } catch (error) {
    console.log(error.message); // Salida: "El arreglo solo puede contener números"
  }
  