'use strict'

//  Ejercicio 6.

/*

Hacer un programa que nos diga si un numero introducido por teclado es par o impar.
1. Ventana prompt.
2. Si no es valido que nos pida el numero.

*/

var numero = parseInt(prompt("Introduce un numero:", 0));

while (isNaN(numero))
    numero = parseInt(prompt("Introduce un numero:", 0));


if (numero % 2 == 0) {
    alert("El numero " + numero + " es par");
    console.log("El numero " + numero + " es par");
}

else {
    alert("El numero " + numero + " es impar");
    console.log("El numero " + numero + " es impar");
}





