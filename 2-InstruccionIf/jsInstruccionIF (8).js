function mostrar() {
  //tomo la edad
  var edad;
  edad = parseInt(document.getElementById("edad").value);
  estadocivil = document.getElementById("estadoCivil").value;

  if (edad > 17 && estadocivil == "Soltero") {
    alert("usted es soltero, ni es menor");
  }
} //FIN DE LA FUNCIÓN
