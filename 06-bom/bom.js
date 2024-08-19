//     **********  Introduccion al BOM  -  Browser Object Model  **********

'use strict';

function getBom() {
    console.log(window.innerWidth)              //  saca la anchura de la ventana.
    console.log(window.innerHeight);            //  saca la altura de la ventana.
    console.log(screen.width);                  //  saca la anchura de la pantalla.
    console.log(screen.height);                 //  saca la altura de la pantalla.
    console.log(window.location);               //  saca el objeto location.
    console.log(window.location.href);          //  saca la URL.
}

function redirect(url) {
    window.location.href = url;
}

function abrirVentana(url) {
    window.open(url, "", "width=400, height=300");
}

getBom();


//     ****************************************************************************

