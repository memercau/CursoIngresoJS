function mostrar() {
  //tomo la edad
  var edad;

  edad = parseInt(document.getElementById("edad").value);

  if (edad < 13) {
    alert("sos un niño");
  } else if (edad < 18) {
    alert("sos adolescente");
  } else {
    alert("sos adulto");
  }
} //FIN DE LA FUNCIÓN^^
