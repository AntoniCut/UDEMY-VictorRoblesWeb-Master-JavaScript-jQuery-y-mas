//  **********  js/02-eventos.js  **********

$(document).ready(function () {

    //  ***********  Eventos - mouseOver y mouseOut  **********
   
    var caja = $("#caja");

    /*
    caja.mouseover(function() { 
        $(this).css("background", "red");
    });

    caja.mouseout(function() { 
        $(this).css("background", "green");
    });
    */


    //  **********  Eventos - Hover  **********

    function cambiaRojo() {
        $(this).css("background", "red");
    }

    function cambiaVerde() {
        $(this).css("background", "green");
    }

    caja.hover(cambiaRojo, cambiaVerde);
     

    //  **********  Eventos - click y Doble click  **********

    caja.click(function () { 
        $(this).css({
            "background": "blue", 
            "color": "white"
        });
     });
        
     caja.dblclick(function () {
        $(this).css({
            "background": "pink",
            "color": "yellow"
        });
     });


    //  **********  Eventos - Focus y Blur  **********
  
     var nombre = $("#nombre");
     var datos = $("#datos");

     nombre.focus(function() { 
        $(this).css("border", "10px solid red");
    });

    nombre.blur(function() { 
        $(this).css("border", "1px solid #ccc");
        datos
            .text($(this).val())    
            .show();
    });


    //  **********  Eventos - mouseDown y mouseUp  **********

    datos.mousedown( function() { $(this).css("border-color", "gray"); });
    datos.mouseup( function() { $(this).css("border-color", "blue"); });


    //  **********  Eventos - mouseMove  **********
    $(document).mousemove( function() { 
        console.log("en X: " + event.clientX);
        console.log("en Y: " + event.clientY);
        $('body').css("cursor", "none")
        $("#sigueme").css({
            "left": event.clientX,
            "top": event.clientY
        });
    });



});