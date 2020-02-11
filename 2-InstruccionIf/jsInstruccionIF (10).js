function mostrar() {
  //Genero el número RANDOM entre 1 y 10
  var resultado;

  resultado = Math.floor(Math.random() * 11);

  if (resultado >= 9) {
    alert(resultado + " excelente");
  } else if (resultado >= 4) {
    alert(resultado + " estas aprobado");
  } else {
    alert(resultado + " vamos, la proxima se puede");
  }
} //FIN DE LA FUNCIÓN
