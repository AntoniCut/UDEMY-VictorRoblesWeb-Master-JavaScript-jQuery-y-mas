'use strict'

//  ******  Funciones Flecha  ******
//  Se le quita la palabra function y se pone una flecha.

var pelicula = function(nombre) {
    return "La pelicula es: " + nombre;
}


//  Una funcion "Callbacks" es una funcion anonima que se le pasa
//  como parametro otra funcion.

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
 
}

sumame(5, 7, dato => {
    console.log("La suma es:", dato);
},

dato => {
    console.log("La suma por dos es: ", (dato*2));
} );











