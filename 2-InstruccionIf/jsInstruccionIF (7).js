function mostrar() {
  //tomo la edad
  var edad;
  var estadocivil;
  edad = parseInt(document.getElementById("edad").value);
  estadocivil = document.getElementById("estadoCivil").value;

  if (edad < 18 && estadocivil != "Soltero") {
    alert("es muy pequeño para no ser soltero");
  } /*else if (edad < 18 && estadocivil == "Divorciado") {
    alert("es muy pequeño para no ser soltero");
  } else {
  }*/
} //FIN DE LA FUNCIÓN
