'use strict'

//  Ejercicio 4.

/*

Mostrar todos los numeros impares entre 2 numeros introducidos por teclado.

*/

var numero1 = parseInt(prompt("Introduce numero 1", 0));
var numero2 = parseInt(prompt("Introduce numero 2", 0));

document.write("<h2> Numeros Impares entre " + numero1 + " y " + numero2 + " son . . . </h1>");

if (numero1 < numero2) {
    
    for(var i = numero1; i <= numero2; i++) {

        if (i < numero2) {
            
            if(i%2!=0) {
                console.log(i);
                document.write(i + ", ");
            }
        }
        else { 
            
            if(i%2!=0) {
                console.log(i);
                document.write(i);
            }
        }
    }
}

else if (numero1 > numero2) {
    
    for (var i = numero1; i >= numero2; i--) {
    
            if(i > numero2) {
                
                if(i%2!=0) {
                    console.log(i);
                    document.write(i + ", ");
                }


            }
            else {
                
                if(i%2!=0) {
                    console.log(i);
                    document.write(i);
                }
            }
    }
}

else
    console.log("Los numeros son iguales");











