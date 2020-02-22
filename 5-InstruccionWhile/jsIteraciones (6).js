function mostrar() {
  var numeros;
  var contador = 0;
  var acumulador = 0;
  var promedio;

  while (respuesta==si) {
    numeros = prompt("Ingrese un Numero");
    numeros = parseInt(numeros);


   while (isNaN(numeros))  {
    numeros = prompt("Lo ingresado no es un numero, intente nuevamente");
    numeros = parseInt(numeros);
  }
  contador++;
  acumulador = acumulador + numeros;
}
while (contador < 5);
promedio = acumulador / contador;
  parseInt((document.getElementById("suma").value = acumulador));
  parseInt((document.getElementById("promedio").value = promedio));
  /*while (contador < 5) {
    numeros = parseInt(prompt("Ingrese un numero"));
    contador++;
    acumulador = acumulador + numeros;
    promedio = acumulador / 5;
  } */
} //FIN DE LA FUNCIÓN
