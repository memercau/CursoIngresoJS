function mostrar() {
  var sexo;
  sexo = prompt("ingrese f ó m .");
  while (sexo != "f" && sexo != "m") {
    sexo = prompt("el sexo no es correcto. ingrese f ó m .");
  }
  alert("gracias por ingresar tu sexo!");
} //FIN DE LA FUNCIÓN
