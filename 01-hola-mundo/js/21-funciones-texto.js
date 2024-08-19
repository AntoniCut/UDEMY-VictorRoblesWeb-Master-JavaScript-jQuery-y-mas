'use strict'

//  ******  Funciones para Transformar Textos  ******

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

var dato;

//  Convierte un entero a String.
dato = numero.toString();       
console.log(dato);
console.log( typeof dato);


//  Convierte la cadena a mayusculas.
dato = texto1.toUpperCase();       
console.log(dato);

//  Convierte la cadena a Mayusculas.
dato = texto1.toLowerCase();       
console.log(dato);

//  Calcular Longitud de un String, array, etc.
var nombre = "Antonio";
console.log(nombre.length);

var nombre = ["hola", "antonio"];
console.log(nombre.length);

//  Concatenar String.
var textoTotal = texto1 + " " + texto2;
console.log(textoTotal);
textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);