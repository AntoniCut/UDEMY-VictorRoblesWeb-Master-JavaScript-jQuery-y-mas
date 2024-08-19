'use strict'

//  Ejercicio 7.

/*

Tabla de multiplicar de un numero introducido por pantalla.

*/

var numero = parseInt(prompt("Introduce un numero:", 0));
document.write("<h3> Tabla de multiplicar del numero " + numero + " . . . </h3>");

for(var i=1; i<=10; i++) {
    document.write(numero + " X " + i + " = " + numero*i + "<br>");
}

document.write("<br> <br>");

//  Todas las tablas de multiplicar.
for(var c=1; c<=10; c++) {

    document.write("<h3> Tabla de multiplicar del " + c + "</h3>" + "<br>");
    for(var i=1; i<=10; i++) {
        document.write(c + " X " + i + " = " + c*i + "<br>");
    }
    document.write("<br>");

}







