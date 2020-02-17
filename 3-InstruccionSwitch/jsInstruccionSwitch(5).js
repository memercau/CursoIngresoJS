function mostrar() {
    //tomo la edad  
    var lahora
    lahora = parseInt(document.getElementById('hora').value);

    switch (lahora) {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de Mañana");
            break;
    }
}//FIN DE LA FUNCIÓN