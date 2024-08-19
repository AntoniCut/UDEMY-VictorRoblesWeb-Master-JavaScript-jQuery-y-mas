'use strict'

//  Ejercicio1.

//  Porgrama que pida 2 numeros y que nos diga cual es
//  el mayor, el menor, y si son iguales.

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

console.log(numero1, numero2);

if(numero1 > numero2) { 
    console.log("Primer numero " + numero1 + " es mayor que el segundo numero " + numero2);
    alert("Primer numero " + numero1 + " es mayor que el segundo numero " + numero2);
}

else if(numero1 < numero2) {
    console.log("Primer numero " + numero1 + " es menor que el segundo numero " + numero2);
    alert("Primer numero " + numero1 + " es menor que el segundo numero " + numero2);
}

else {
    console.log("Primer numero " + numero1 + " es igual que el segundo numero " + numero2);
    alert("Primer numero " + numero1 + " es igual que el segundo numero " + numero2);
}






