'use strict'

//  ******  Funciones Anonimas y Callbacks  ******
//  Es una funcion que no tiene nombre.

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

sumame(5, 7, function(dato) {
    console.log("La suma es:", dato);
},

function(dato) {
    console.log("La suma por dos es: ", (dato*2));
} );











