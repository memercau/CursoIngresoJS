/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
  var dividiendo = parseInt(document.getElementById("numeroDividendo").value);
  var divisor = parseInt(document.getElementById("numeroDivisor").value);
  var resultadodiv;
  var resto;

  resultado = divisor / dividiendo
  resto = (resultado %100)

  alert("el resto es " + resto);




}
