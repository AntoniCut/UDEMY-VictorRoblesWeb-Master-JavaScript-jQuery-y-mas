'use strict'

//  ******  Funciones con parametros  ******

//  Una funcion es una agrupacion reutilizable de un conjunto de instrucciones.

//  Defino la Funcion.
function calculadora(numero1, numero2) {

    console.log("Suma de " + numero1 + " + " + numero2 + " es " + (numero1 + numero2));
    document.write("Suma de " + numero1 + " + " + numero2 + " es " + (numero1 + numero2) + " <br> ");
    
    console.log("Resta de " + numero1 + " - " + numero2 + " es " + (numero1 - numero2));
    document.write("Resta de " + numero1 + " - " + numero2 + " es " + (numero1 - numero2) + " <br> ");

    console.log("Multiplicacion de " + numero1 + " x " + numero2 + " es " + (numero1 * numero2));
    document.write("Multiplicacion de " + numero1 + " x " + numero2 + " es " + (numero1 * numero2) + " <br> ");

    console.log("Division de " + numero1 + " / " + numero2 + " es " + (numero1 / numero2));
    document.write("Division de " + numero1 + " / " + numero2 + " es " + (numero1 / numero2) + " <br> <br> ");
    
}

for(var i=1; i<=5; i++) {

    //  Introducimos valores por teclado.
    var numero1 = parseInt(prompt("Introduce un numero:", 0));
    var numero2 = parseInt(prompt("Introduce un numero:", 0));

    console.log(i + "ª Iteracion ");
    document.write(i + "ª Iteracion <br>");
    
    //  invoco a la funcion.
    calculadora(numero1, numero2);

}










