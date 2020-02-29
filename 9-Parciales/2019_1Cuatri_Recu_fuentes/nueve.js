/*Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre y temperatura del animal más pesado
c) La cantidad de animales que viven a menos de 0 grados.
d) El promedio del peso de todos los animales.
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/

function mostrar() {
    var animal;
    var peso;
    var temphab;
    var respuesta = "si";
    var nomanimalpesado;
    var animalpesado;
    var contanimalpesado = 0;
    var contador = 0;
    var contadortemp = 0;
    var contadortempani = 0;
    var contadortemppar = 0;
    var contadortemppes = 0;
    var contadorani0g = 0;
    var contadorpeso0 = 0;

    while (respuesta = "si") {
        animal = prompt("Ingrese el Animal");
        while (!isNaN(animal)) {
            animal = prompt("Reingrese Animal");
        }

        peso = prompt("Ingrese su peso");
        while (isNaN(peso)) {
            animal = prompt("Reingrese Peso valido");
        }

        temphab = prompt("Ingrese Temperatura de su Habitat");
        while (!isNaN(temphab) || temphab > -30 && temphab < 30) {
            animal = prompt("Reingrese Temperatura Valida");
        }
    }

    if (temperhab % 2 == 0){
    contadortemp = temphab;
    contadortemp++;
    }

    if (contanimalpesado == 0){
    animalpesado = peso;
    nomanimalpesado = animal;
    contanimalpesado = 1;
    }
    if (contadortemp==0) {

    }






    contador++;




}
