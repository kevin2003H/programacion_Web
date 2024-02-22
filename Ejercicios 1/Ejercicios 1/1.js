function contrasenaValida(contrasena) {
  // Verificar si el string es igual a una de las contraseñas válidas
  if (contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9") {
    console.log("Contraseña válida");
    return true;
  } else {
    console.log("Contraseña inválida");
    return false;
  }
}

// Probar la función con diferentes contraseñas
contrasenaValida("2Fj(jjbFsuj"); 
contrasenaValida("123456"); 
contrasenaValida("eoZiugBf&g9"); 
