'use strict'

//  **********  Operaciones con Arrays  **********

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

var cine = [categorias, peliculas];
console.log(cine[0][1]);
console.log(cine[1][2]);

//  Operaciones con Arrays.
peliculas.push("Batman");       //  Añadimos un elemento al array.
console.log(peliculas);

var elemento = "";
do {
    if (elemento != "ACABAR") {
        elemento = prompt("Introduce tu pelicula, 'ACABAR' para salir");
        peliculas.push(elemento);
    }
} while (elemento != "ACABAR");

peliculas.pop();        //  elimina el ultimo elemento del array.

var indice = peliculas.indexOf('Gran torino');      //  Busca en el array el elemento 'Gran torino'.
if(indice > -1) {
    peliculas.splice(indice, 1);        //  elimina el elemento indice solo 1 vez.
}

console.log("indice: " + indice);
console.log(peliculas);

var peliculas_string = peliculas.join();       //  convierte un array a string. hay que guardarlo en una variable.
console.log(peliculas_string);

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");      //  Convierte un string en un array.
console.log(cadena_array);

//  Ordenacion de Arrays.
console.log("Array de peliculas: " + peliculas);

peliculas.sort();       //  Ordena el array alfabeticamente.
console.log("Array de peliculas ordenado: " + peliculas);

peliculas.reverse();        //  Ordena el array en orden inverso.
console.log("Array de peliculas ordenado inversamente: " + peliculas);

//  Recorrer un array, metodo "foreach".
document.write("<ul> recorrer con foreach");
peliculas.forEach((elemento, indice)=>{
    document.write("<li>" + indice + " - " + elemento + "</li>");
});
document.write("</ul>");

//  Recorrer un array, metodo "for in".
document.write("<ul> recorrer con for in");
for(let indice in peliculas) {
    document.write("<li>" + indice + " - " + peliculas[indice] + "</li>");
}
document.write("</ul>");

//  Buscar en un array.
var busqueda = peliculas.find(function(peliculas){
    return peliculas == "La vida es bella";
});
console.log(busqueda);

//  Busqueda en un array reduciendo la funcion de callbacks.
var busqueda = peliculas.find(peliculas => peliculas == "La vida es bella");
console.log(busqueda);

//  Busqueda en un array reduciendo la funcion de callbacks y nos muestra el indice de la busqueda.
var busqueda = peliculas.findIndex(peliculas => peliculas == "La vida es bella");
console.log(busqueda);


//  Busqueda con some. comprueba si hay valores mayores o iguales a otro. devuelve true o false.
var precios = [10, 20, 50, 80, 12];
var busqueda = precios.some(precios => precios >= "90");      //  Comprobar si hay valores mayores o iguales a 20.
console.log(busqueda);



