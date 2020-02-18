function mostrar() {

	var numero;
	numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while (numero < 0 || numero > 9 || isNaN(numero)) {
		numero = parseInt(prompt("Error. Reingrese un número entre 0 y 10."));
	}


}//FIN DE LA FUNCIÓN