'use strict'

//  ******  Funciones de Reemplazo  ******

var numero = 444;
var texto1 = "   Bienvenido al curso de JavaScript el curso de Victor Robles   ";
var texto2 = "es muy buen curso";
var busqueda;

busqueda = texto1.replace("JavaScript", "Symfony");     //  Reemplaza un texto por otro.
console.log("replace: " + busqueda);


busqueda = texto1.slice(14, 22);     //  corta el texto a partir del caracter 14 al 22.
console.log("slice: " + busqueda);

busqueda = texto1.split(" ");     //  Recorta las palabras y las mete en un array separadas por un espacio.
console.log("split: " + busqueda);

busqueda = texto1.trim();     //  Recorta los espacios por delante y por detras del string.
console.log("trim: " + busqueda);




