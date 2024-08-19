'use strict'

//  *****  ejercicio-arrays.js  *****

//  1.  Porgrama que pida 6 numeros por pantalla y los meta en un array.
//  2.  Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola.
//  3.  Ordenarlo y mostrarlo.
//  4.  Invertir su orden y mostrarlo.
//  5.  Mostrar cuantos elementos tiene el array.
//  6.  Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice.


//  Definimos la funcion que nos muestra el array.
function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1> Contenido del Array " + textoCustom + " . . . </h1>");
    document.write("<ul>");
    elementos.forEach((elemento, indice) => {
        document.write("<li> <strong>" + elemento + "</strong> </li>");
    });
    document.write("</ul>");
}



//  *****  1.  Porgrama que pida 6 numeros por pantalla y los meta en un array.  *****

//  var numeros = new Array(6);
var numeros = [];

for (var i = 0; i <= 5; i++) {
    //numeros[i] = parseInt(prompt("Introduce numero " + (i+1), 0));
    numeros.push(parseInt(prompt("Introduce numero " + (i + 1), 0)));
}


//  *****  2.  Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola.  *****

//  Mostrar el array por la consola.
console.log(numeros);

//  Mostrar el array en el cuerpo de la pagina.
mostrarArray(numeros);


//  *****  3.  Ordenarlo numericamente y mostrarlo.  *****

numeros.sort(function (a, b) { return a - b });    //  sort con esta funcion callbacks lo ordena numericamente.

console.log(numeros);
mostrarArray(numeros, "Ordenado");


//  *****  4.  Invertir su orden y mostrarlo.  *****
numeros.reverse();
console.log(numeros);
mostrarArray(numeros, "Revertido");



//  *****  5.  Mostrar cuantos elementos tiene el array.  *****

console.log(numeros.length);
document.write("<h1> El array tiene " + numeros.length + " elementos </h1>");


//  *****  6.  Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice.  *****

var busqueda = parseInt(prompt("Busca un numero", 0));

var posicion = numeros.findIndex( numero => numero == busqueda);    //  findIndex se utiliza con una funcion de callbacks.

if (posicion && posicion != -1) {
    document.write("<h1> ¡ Encontrado ! </h1>");
    document.write("<h1> Posicion de la busqueda: " + posicion + "</h1>");
}
else {
    document.write("<h1> ¡ No Encontrado ! </h1>");
}



