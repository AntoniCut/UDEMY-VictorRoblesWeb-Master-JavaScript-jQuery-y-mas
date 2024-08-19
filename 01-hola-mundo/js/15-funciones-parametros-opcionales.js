'use strict'

//  ******  Funciones con parametros Opcionales  ******

//  Una funcion es una agrupacion reutilizable de un conjunto de instrucciones.


//  Introducimos valores por teclado.
var numero1 = parseInt(prompt("Introduce un numero:", 0));
var numero2 = parseInt(prompt("Introduce un numero:", 0));

//  Defino la Funcion.
function calculadora(numero1, numero2, mostrar = false) {

    if (mostrar == false) {
        console.log("Suma de " + numero1 + " + " + numero2 + " es " + (numero1 + numero2));
        console.log("Resta de " + numero1 + " - " + numero2 + " es " + (numero1 - numero2));
        console.log("Multiplicacion de " + numero1 + " x " + numero2 + " es " + (numero1 * numero2));
        console.log("Division de " + numero1 + " / " + numero2 + " es " + (numero1 / numero2));
    }

    else {
        document.write("Suma de " + numero1 + " + " + numero2 + " es " + (numero1 + numero2) + " <br> ");
        document.write("Resta de " + numero1 + " - " + numero2 + " es " + (numero1 - numero2) + " <br> ");
        document.write("Multiplicacion de " + numero1 + " x " + numero2 + " es " + (numero1 * numero2) + " <br> ");
        document.write("Division de " + numero1 + " / " + numero2 + " es " + (numero1 / numero2) + " <br> <br> ");
    }

}

//  invocamos a la funcion.
calculadora(numero1, numero2);
calculadora(numero1, numero2, true);











