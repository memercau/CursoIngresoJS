function mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);

if (edad <= 17){
    alert("sos menor de edad");
}

else {
    alert("sos mayor de edad");
}

}//FIN DE LA FUNCIÓN