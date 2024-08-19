//  **********  JSON.js  **********

'use strict';

//  Evento Load.  
window.addEventListener('load', () => {

    //  Objeto JSON.
    var pelicula = {
        titulo: 'Batman vs Superman',
        year: 2017,
        pais: 'Estados Unidos'
    };

    pelicula.year = 2021;
    console.log(pelicula);
    console.log(pelicula.titulo);
    console.log(pelicula.year);
    console.log(pelicula.pais);

    var peliculas = [
        {titulo: "La verdad duele", year: 2016, pais: "Francia"},
        pelicula
    ]
    
    console.log(peliculas);

    var caja_peliculas = document.querySelector("#peliculas");
    
    for(var index in peliculas) {
    
        var p = document.createElement("p");        //  creamos un elemento 'p'.
        p.append(peliculas[index].titulo + " - " + peliculas[index].year + " - " + peliculas[index].pais);
        caja_peliculas.append(p);
    }



});
