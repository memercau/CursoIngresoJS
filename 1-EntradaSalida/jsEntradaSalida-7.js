/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{
  var numerouno = parseInt(document.getElementById("numeroUno").value);
  var numerodos = parseInt(document.getElementById("numeroDos").value);
  var resultado

  resultado = numerouno + numerodos;

  alert("la suma es " + resultado);



}

function restar()
{

  var numerouno = parseInt(document.getElementById("numeroUno").value);
  var numerodos = parseInt(document.getElementById("numeroDos").value);
  var resultado;

  resultado = numerouno - numerodos;

  alert("la resta es " + resultado);
}

function multiplicar()
{

  var numerouno = parseInt(document.getElementById("numeroUno").value);
  var numerodos = parseInt(document.getElementById("numeroDos").value);
  var resultado;

  resultado = numerouno * numerodos;

  alert("la multiplicacion es " + resultado);
}

function dividir()
{

  var numerouno = parseInt(document.getElementById("numeroUno").value);
  var numerodos = parseInt(document.getElementById("numeroDos").value);
  var resultado;

  resultado = numerouno / numerodos;

  alert(" la division es " + resultado);
}

