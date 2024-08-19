
//     **********  TIMERS  **********
//  Un evento es una funcion que se ejecuta cuando sucede algo.

'use strict';

window.addEventListener('load', function () {

    //  Timers - setInterval.

    function intervalo() {

        var tiempo = setInterval(function () {
            console.log("SetInterval ejecutado");

            var encabezado = document.querySelector("h1");

            if (encabezado.style.fontSize == "50px") {

                encabezado.style.fontSize = "30px";

            } else {

                encabezado.style.fontSize = "50px";
            }

        }, 1000);

        return tiempo;
    }

    var tiempo = intervalo();

    //  Timers - setTimeout.

    /*
    var tiempo = setTimeout( function(){
        console.log("SetTimeout ejecutado");
        
        var encabezado = document.querySelector("h2");
        
        if(encabezado.style.fontSize == "50px") {
        
            encabezado.style.fontSize = "30px";
        
        } else {
        
            encabezado.style.fontSize = "50px";
        }
    
    }, 5000);
    */



    var start = document.querySelector("#start");
    start.addEventListener("click", function () {
        intervalo();
        alert("Has Iniciado el intervalo en bucle");
    });


    var stop = document.querySelector("#stop");
    stop.addEventListener("click", function () {
        clearInterval(tiempo);
        alert("Has Parado el intervalo en bucle");
    });



});
