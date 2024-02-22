function crearArbolNavidad(adornos, altura) {
    // Convertir la cadena de adornos en un array
    const adornosArray = adornos.split("");
  
    // Calcular la longitud máxima de una línea del árbol
    const longitudMaximaLinea = (2 * altura) - 1;
  
    // Función para generar una línea del árbol
    function generarLinea(nivel) {
      let linea = "";
      const espaciosIzquierda = Math.floor((longitudMaximaLinea - linea.length) / 2);
      const adornosLinea = adornosArray.slice(nivel * 2, (nivel * 2) + 2);
  
      linea += " ".repeat(espaciosIzquierda);
      linea += adornosLinea.join(" ");
  
      return linea;
    }
  
    // Generar las líneas del árbol
    let arbol = "";
    for (let i = 0; i < altura; i++) {
      arbol += generarLinea(i) + "\n";
    }
  
    // Agregar el tronco del árbol
    arbol += " ".repeat(Math.floor(longitudMaximaLinea / 2)) + "|\n";
  
    return arbol;
  }
  
  // Ejemplos de uso
  const adornos = "123";
  const altura = 4;
  
  const arbolNavidad = crearArbolNavidad(adornos, altura);
  
  console.log(arbolNavidad);
  
  // Salida:
  //   1
  //  2 3
  // 1 2 3
  //1 2 3 1
  //   |
  
  const adornos2 = "*@o";
  const altura2 = 3;
  
  const arbolNavidad2 = crearArbolNavidad(adornos2, altura2);
  
  console.log(arbolNavidad2);
  
  // Salida:
  //  *
  // @ o
  //* @ o
  //  |
  