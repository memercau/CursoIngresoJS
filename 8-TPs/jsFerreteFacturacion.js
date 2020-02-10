/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var preciouno = parseInt(document.getElementById("PrecioUno").value);
    var preciodos = parseInt(document.getElementById("PrecioDos").value);
    var preciotres = parseInt(document.getElementById("PrecioTres").value);
    var resultado;

    resultado = (preciouno + preciodos + preciotres);
    alert("la suma da " + resultado);


}
function Promedio () 
{
    var preciouno = parseInt(document.getElementById("PrecioUno").value);
    var preciodos = parseInt(document.getElementById("PrecioDos").value);
    var preciotres = parseInt(document.getElementById("PrecioTres").value);
    var resultado;

    resultado = (preciouno + preciodos + preciotres) / 3;
    alert("el promedio es " + resultado);

}
function PrecioFinal () 
{
    var preciouno = parseInt(document.getElementById("PrecioUno").value);
    var preciodos = parseInt(document.getElementById("PrecioDos").value);
    var preciotres = parseInt(document.getElementById("PrecioTres").value);
    var iva21;
    var resultado;
    
    iva21 = (preciouno + preciodos + preciotres) * 0.21;
    resultado = (preciouno + preciodos + preciotres) + iva21;

    alert("el precio final es " + resultado);
	
}