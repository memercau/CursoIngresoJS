function mostrar() {

	var contador = 0;
	var numeros;
	var acumulador = 0;
	var respuestas = "si";
	var suma = 0;
	var promedio = 0;

	while (respuestas == "si") {
		numeros = prompt("Ingrese su numero");
		numeros = parseInt(numeros);
		while (isNaN(numeros)) {
			numeros = prompt("Error. Reingrese un numoero");
			numeros = parseInt(numeros);
		}
		contador++;
		acumulador = acumulador + numeros;
		suma = acumulador;
		respuestas = prompt("¿Desea continuar?");
	}
	while (respuestas != "si") { }

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN<