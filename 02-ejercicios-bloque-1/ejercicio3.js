'use strict'

//  Ejercicio 3.

/*

Hacer un programa que muestre todos los numeros entre dos numeros introducidos
por el usuario. 

*/

var numero1 = parseInt(prompt("Introduce numero 1", 0));
var numero2 = parseInt(prompt("Introduce numero 2", 0));

document.write("<h2> de " + numero1 + " a " + numero2 + " estan estos numeros . . . </h2>");

if (numero1 < numero2) {
    
    for(var i = numero1; i <= numero2; i++) {

        if (i < numero2) {
            console.log(i);
            document.write(i + ", ");
        }
        else { 
            console.log(i);
            document.write(i);
        }
    }
}

else if (numero1 > numero2) {
    
    for (var i = numero1; i >= numero2; i--) {
    
            if(i > numero2) {
                console.log(i);
                document.write(i + ", ");
            }
            else {
                console.log(i);
                document.write(i);
            }
          
    }
}

else
    console.log("Los numeros son iguales");











