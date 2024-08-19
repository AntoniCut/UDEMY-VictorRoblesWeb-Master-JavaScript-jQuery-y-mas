'use strict'

//  Ejercicio 5.

/*

Mostrar todos los numeros divisores de un numero introducidos por teclado.

*/

var numero = parseInt(prompt("Introduce un numero:", 0));

document.write("<h3> Los divisores del numero " + numero + " son . . . </h3>" );

for(var i=2; i<=numero; i++) {

    if(numero%i==0) {
        
        if(i<numero) {
            console.log(i);
            document.write(i, ", ");
        }
        else {
            console.log(i);
            document.write(i);
        }
        
    }

}






