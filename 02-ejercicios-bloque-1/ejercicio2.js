'use strict'

//  Ejercicio 2.

/*

Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado.

*/

var suma = 0, contador = 0, numero = 0, media = 0;

do{
    
    numero = parseInt(prompt("Introduce un numero hasta que introduzcas un numero negativo", 0));

    if(isNaN(numero)) {
        numero = 0;
    }
    else if(numero >= 0) {
        suma = suma + numero;
        contador++;
    }

    console.log("numero = ", numero, " suma = ", suma, " contador = ", contador);
        
}while(numero>-1);

media = suma / contador;
console.log("Suma = ", suma, " Media = ", media);

alert("La suma de los numeros introducidos es " + suma + " y la media es " + media);







