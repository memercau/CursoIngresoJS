
function mostrar() {
    var huesped;
    var cantpers;
    var dias;
    var pagos;
    var respuestas;
    var flag = 0;
    var acumulador = 0;
    var maxpers;
    var maxpershuespes;
    var diasmax;
    var diasmaxcant;
    var pagoqr;
    var pagoefec;
    var pagotarj;
    var contadorreserv;
    var acumdias;

    contadorqr = 0;
    contadorefec = 0;
    contadortarj = 0;
    acumdias = 0;

    respuestas = "s"
    while (respuestas == "s") {
        nombre = prompt("ingrese nombre");
        while (!isNaN(nombre)); {
            nombre = prompt("reingrese");
            cantpers = prompt("ingrese cantidad de personas");
            cantpers = parseInt(cantpers);
            while (isNaN(cantpers)) || cantpers < 0
        }

        pagos = prompt("Ingrese forma de pago. Efectivo ò Tarjeta");
        while (!isNaN(pagos)); {
            nombre = prompt("reingrese");


        }
        if (contreserv == 1 || maxpers < cantpers) {
            maxpers = cantpers;
            maxpershuespes = nombre;
        }

        if (contreserv == 1 || diasmax < dias) {
            diasmax = diasmaxcant;
            diasmaxcant = dias;
        }
        switch (pagos)
        case "qr":
            contadorqr++;
            break;
            
            acumdias = acumdias + dias;
        }

        promedio = acumdias/contreserv
        if (contadorqr > contadorefec && contadorqr > contadortarj)
        {
            pa
        }

            /* while () {
                huesped = prompt("ingrese su nombre");
                cantpers = parseInt(prompt("Ingrese Cantidad de personas"));
                dias = parseInt(prompt("ingrese la cantidad de dias de estadia"));
                pagos = prompt("Ingrese forma de pago. Efectivo ò Tarjeta");
        
                while (cantpers == isNaN)
                   cantpers = parseInt(prompt("Reingrese un numero valido"));
                
                while (pagos != "efectivo" && pagos != "qr" && pagos != "tarjeta")
                pagos = promtp("Forma de pago, incorrecta. Reingrese");            
               }
                       if (contador <0){
                    
                } */


        }
