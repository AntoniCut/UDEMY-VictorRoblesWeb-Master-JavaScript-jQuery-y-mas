'use strict'

//  ******  Metodos de Busquedas  ******

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript el curso de Victor Robles";
var texto2 = "es muy buen curso";
var busqueda;

busqueda = texto1.indexOf("curso");
console.log("indexOf: " + busqueda);

busqueda = texto1.lastIndexOf("curso");
console.log("lastIndexOf: " + busqueda);

busqueda = texto1.search("curso");
console.log("search: " + busqueda);

busqueda = texto1.match("curso");       //  devuelve un array.
console.log("match: " + busqueda);

busqueda = texto1.substr(14, 5);       //  saca los caracteres del 14 al 18.
console.log("substr: " + busqueda);

busqueda = texto1.charAt(18);       //  devuelve la posicion 18.
console.log("charAt: " + busqueda);

busqueda = texto1.startsWith("Bien");       //  Busca un texto al inicio del string. Devuelve true o false.
console.log("startsWith: " + busqueda);

busqueda = texto1.includes("JavaScript");       //  Busca una palabra en el string. Devuelve true o false.
console.log("includes: " + busqueda);
