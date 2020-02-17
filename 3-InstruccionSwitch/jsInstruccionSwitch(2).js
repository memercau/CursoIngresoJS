function mostrar() {
    //tomo la edad  
    var mes;
    mes = document.getElementById('mes').value;

    switch (mes) {
        case ("Julio"):
        case ("Agosto"):
            alert("Abrigate que hace Frio");
            break;
        case ("Enero"):
        case ("Febrero"):
        case ("Marzo"):
        case ("Abril"):
        case ("Mayo"):
        case ("Junio"):
            alert("Falta para el Invierno");
            break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Ya pasamos el invierno");
            break;

    }





}//FIN DE LA FUNCIÓN