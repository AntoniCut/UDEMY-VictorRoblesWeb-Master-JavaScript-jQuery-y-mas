'use strict'

//  **********  Arrays Multidimensionales  **********

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];
var cine = [categorias, peliculas];


console.log("Array categorias: " + categorias);
console.log("Array peliculas: " + peliculas);
console.log(cine[0][1]);
console.log(cine[1][2]);

