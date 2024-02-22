function bmi(peso, altura) {
    // Calcular el IMC
    const imc = peso / (altura * altura);
  
    // Mostrar la clasificación según el IMC
    if (imc < 18.5) {
      console.log("Bajo de peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
      console.log("Normal");
    } else if (imc >= 25 && imc <= 29.9) {
      console.log("Sobrepeso");
    } else {
      console.log("Obeso");
    }
  
    return imc;
  }
  
  // Probar la función con diferentes pesos y alturas
  bmi(70, 1.7); // Salida: "Normal"
  bmi(80, 1.6); // Salida: "Sobrepeso"
  bmi(50, 1.5); // Salida: "Bajo de peso"
  bmi(100, 1.8); // Salida: "Obeso"
  