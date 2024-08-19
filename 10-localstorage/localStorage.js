//  **********  localStorage.js  **********

'use strict';

//  Evento Load.  
window.addEventListener('load', () => { main(); } );


//  Funcion Principal.
function main() {

    //  Comprobar Disponibilidad del LocalStorage.
    if( typeof(Storage) !== 'undefined' ) console.log("LocalStorage Disponible");
    else console.log("Inconpatible LocalStorage");
    
    //  Guardar datos en el LocalStorage.
    localStorage.setItem("titulo", "curso de JS");

    //  Recuperar datos en el LocalStorage.
    var titulo = localStorage.getItem("titulo");
    console.log(titulo);

    document.querySelector("#peliculas").innerHTML = titulo;

    //  Guardar Objetos.
    var usuario = {
        nombre: "Victor Robles",
        email: "victor@victor.com",
        web: "victorroblesweb.es"
    };

    //  Convertimos el objeto JSON a Strimg para guardarlo en el LocalStorage.
    //  con el metodo 'JSON.stringify'.
    localStorage.setItem("usuario", JSON.stringify(usuario));

    //  Recuperar objeto. con JSON.parse convierto el JSON String en un objeto de JavaScript usable.
    var userjs = JSON.parse( localStorage.getItem("usuario") ) ;
    console.log(userjs);

    document.querySelector("#datos").append( userjs.nombre + " - " + userjs.email + " - " + userjs.web );

    //  Borrar los datos del localStorage.
    localStorage.removeItem("usuario");
    localStorage.clear();


}
