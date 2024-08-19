
//     **********  EVENTOS  **********
 //  Un evento es una funcion que se ejecuta cuando sucede algo.

'use strict';


//  Evento Load.  
window.addEventListener('load', () => {

 
    //  *****  Eventos del Ratón  *****

    function cambiarColor() {

        console.log("me has dado click");
        var bg = boton.style.background;

        if (bg == "green") {
            boton.style.background = "red";

        } else {
            boton.style.background = "green";
        }

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";

        console.log(bg);

    }


    var boton = document.querySelector("#boton");

    //  ejecutar un evento dentro de JS - addEvenListener..
    //  Evento - click.
    boton.addEventListener('click', function () {
        cambiarColor();
        console.log(this);
        this.style.border = "10px solid black";
    });

    //  Evento -  mouseover.
    boton.addEventListener('mouseover', function () {
        boton.style.background = "yellow";
        boton.style.color = "black";
    });


    //  Evento -  mouseout.
    boton.addEventListener('mouseout', function () {
        boton.style.background = "black";
        boton.style.color = "white";
    });


    //  *****  Eventos Focus  *****

    var input = document.querySelector("#campo_nombre");

    //  focus. pinchar dentro.
    input.addEventListener('focus', function () {
        console.log("focus - Estas dentro del input");
    });

    //  blur.  pinchar fuera.
    input.addEventListener('blur', function () {
        console.log("blur - Estas fuera del input");
    });

    //  *****  Eventos de Teclado.

    //  keydown.  pulsar una tecla.
    input.addEventListener('keydown', function (event) {
        console.log("keydown - Pulsando la tecla", String.fromCharCode(event.keyCode));        //  fromCharCode()  captura la tecla del teclado que pulsamos.
    });

    //  keypress. dejo de pulsar una tecla.
    input.addEventListener('keypress', function (event) {
        console.log("keypress - Tecla presionada", String.fromCharCode(event.keyCode));        //  fromCharCode()  captura la tecla del teclado que pulsamos.
    });


    //keyup.  cuando levanto el dedo de la tecla.
    input.addEventListener('keyup', function (event) {
        console.log("keyup - Levanto el dedo de la tecla", String.fromCharCode(event.keyCode));        //  fromCharCode()  captura la tecla del teclado que pulsamos.
    });


});  //  Final del 'load'.




