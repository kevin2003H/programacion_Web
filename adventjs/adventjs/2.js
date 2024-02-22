function fabricarRegalos(regalos, materiales) {
    // Convertir los materiales disponibles en un conjunto
    const materialesSet = new Set(materiales);
  
    // Función para verificar si un regalo se puede fabricar
    function sePuedeFabricar(regalo) {
      // Convertir el regalo en un conjunto
      const regaloSet = new Set(regalo);
  
      // Regresar true si todos los materiales del regalo están en el conjunto de materiales disponibles
      return Array.from(regaloSet).every(function (material) {
        return materialesSet.has(material);
      });
    }
  
    // Filtrar la lista de regalos y devolver solo los que se pueden fabricar
    return regalos.filter(sePuedeFabricar);
  }
  
  // Ejemplos de uso
  const regalos = ["tren", "oso", "pelota"];
  const materiales = "tronesa";
  
  const regalosFabricables = fabricarRegalos(regalos, materiales);
  
  console.log(regalosFabricables); // Salida: ["tren", "oso"]
  
  // Más ejemplos
  const regalos2 = ["juego", "puzzle"];
  const materiales2 = "jlepuz";
  
  const regalosFabricables2 = fabricarRegalos(regalos2, materiales2);
  
  console.log(regalosFabricables2); // Salida: ["puzzle"]
  
  const regalos3 = ["libro", "ps5"];
  const materiales3 = "psli";
  
  const regalosFabricables3 = fabricarRegalos(regalos3, materiales3);
  
  console.log(regalosFabricables3); // Salida: []
    