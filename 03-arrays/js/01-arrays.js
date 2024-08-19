'use strict'

//  **********  Arrays, Arreglos, Matrices, Colecciones  **********

//  Variable.
var nombre = "Victor Robles";

//  Array   -         0                1                   2          3    4.
var nombres = ["Victor Robles", "Antonio Cutillas", "Manolo Garcia", 52, true];

//  Array con Objeto.
var lenguajes = new Array("PHP", "JS", "GO", "Java", "C#", "Pascal");

console.log(nombres);
console.log(lenguajes);

//  recorro el array nombres y hago un console.log.
for (var i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
if (elemento >= nombres.length) {
    alert("Introduce el numero Correcto menor que " + nombres.length);
}
else {
    alert("El usuario seleccionado es: " + nombres[elemento]);
}



//  Recorro el array lenguajes y lo muestro en una lista en el documento.
document.write("<h1> Lenguajes de programacion </h1>");
document.write("<ul>");

for (var i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i] + "</li>");
}

document.write("</ul>");

/*
//  Recorrer el Array con foreach().  Funcion de callbacks dentro del foreach.
document.write("<h1> Lenguajes de programacion </h1>");
document.write("<ul>");

lenguajes.forEach((elemento, indice, arreglo) => {
    console.log(arreglo);
    document.write("<li>" + indice + " - " + elemento + "</li>");
});

document.write("</ul");
*/


//  Recorrer el Array con foreach().  Funcion de callbacks dentro del foreach.
document.write("<h1> Lenguajes de programacion </h1>");
document.write("<ul>");
lenguajes.forEach(  
    (elemento, indice, dato)=>{
        document.write("<li>" + indice + " - " + elemento + " &nbsp &nbsp &nbsp  dato -     " + dato + "</li>");
    
    }
);
