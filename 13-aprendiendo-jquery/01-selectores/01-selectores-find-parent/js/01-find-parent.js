//  **********  js/01-selectores.js  **********

$(document).ready(function () {

    //  ***********  Selector ID  **********

    var rojo = $("#rojo")
        .css("background", "red")
        .css("color", "white");

    var amarillo = $("#amarillo")
        .css("background", "yellow")
        .css("color", "green");

    var verde = $("#verde")
        .css("background", "green")
        .css("color", "white");


    //  **********  Selectores de Clase  **********

    $(".rojo")
        .css("background", "red")
        .css("color", "white");

    $(".amarillo")
        .css("background", "yellow")
        .css("color", "green");

    $(".verde")
        .css("background", "green")
        .css("color", "white");

    $(".zebra")
        .css("border", "5px solid red")
        .css("background", "black")
        .css("color", "white")
        .click(function () {
            $(this)
                .text("ahora ya no soy blanco")
                .css("color", "orange")
        });


    //  **********  Selectores de Etiqueta  **********

    var parrafos = $('p').css('cursor', 'pointer');

    parrafos.dblclick(function () {

        var that = $(this);
        if (!that.hasClass('grande')) that.addClass('grande');
        else that.removeClass('grande');
    });


    //  **********  Selectores de Atributo  **********

    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'green');


    //  **********  find y parent  **********
    
    //$('p, a').addClass('margen-superior');
    var busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
    console.log(busqueda);

    var busqueda2 = $('#elemento2').parent().parent().find('.resaltado');
    console.log(busqueda2);





});