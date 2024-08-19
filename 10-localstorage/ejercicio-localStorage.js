//  **********  ejercicio-localStorage.js  **********

'use strict';

//  Evento Load  -  Cargar Pagina.
window.addEventListener('load', () => { main(); });


//  Funcion Principal.
function main() {

    var formulario = document.querySelector("#formPeliculas");

    formulario.addEventListener('submit', () => {

        //  Añadimos elementos en el localStorage.
        var titulo = document.querySelector("#addPeliculas").value;
        if (titulo.length >= 1) localStorage.setItem(titulo, titulo);  //  Añadimos en el localStorage.
        
    });

    mostrarPeliculas();


    function mostrarPeliculas() {

        //  Recorrer los elementos del localStorage y mostrar en el DOM.
        var ul = document.querySelector("#peliculas-list")
        for (var indice in localStorage) {
            console.log(localStorage[indice]);

            if (typeof localStorage[indice] == 'string') {

                //  Creamos elementos en el DOM.
                var li = document.createElement("li");
                li.append(localStorage[indice]);
                ul.append(li);
            }
        }
    }


    var formularioBorrar = document.querySelector("#formBorrarPeliculas");

    formularioBorrar.addEventListener('submit', () => {

        //  Añadimos elementos en el localStorage.
        var titulo = document.querySelector("#borrarPeliculas").value;
        if (titulo.length >= 1) localStorage.removeItem(titulo);  //  eliminamos en el localStorage.
        
    });


}
