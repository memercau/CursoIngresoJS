function mostrar() {
    //tomo la edad  
    var mes;
    mes = document.getElementById('mes').value;

    switch (mes) {
        case "Febrero":
            alert("Tiene 28 dias");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Tiene 30 dias");
            break;
        default:
            alert("Tiene 31 dias");
    }





}//FIN DE LA FUNCIÓN