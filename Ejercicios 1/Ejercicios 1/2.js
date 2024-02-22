function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
      return ingresos * 0.4;
    } else {
      return 0;
    }
  }

  const edad1 = 18;
  const ingresos1 = 1500;
  const edad2 = 17;
  const ingresos2 = 800;
  
  console.log(calcularImpuestos(edad1, ingresos1)); 
  console.log(calcularImpuestos(edad2, ingresos2)); 
  