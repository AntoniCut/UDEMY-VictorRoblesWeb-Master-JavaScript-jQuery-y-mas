//  *******************************************
//  **********  js/selector-tema.js  **********
//  *******************************************

$(document).ready(function () {

    console.warn("-----  Selector Tema Cargado  -----"); // Para depuración

    $("#selector-theme").load("selector-tema.html", function () {

        console.log($("#to-green").length); // Debería ser 1 si el elemento existe
        console.log($("#to-red").length);   // Debería ser 1 si el elemento existe
        console.log($("#to-blue").length);  // Debería ser 1 si el elemento existe

        //  *****  Selector de Tema  *****
        var theme = $("#theme");

        $("#to-green").click(function () {
            theme.attr("href", "css/green.css")
        });
        $("#to-red").click(function () {
            theme.attr("href", "css/red.css")
        });
        $("#to-blue").click(function () {
            theme.attr("href", "css/blue.css")
        });

    });


    //  *****  Scroll arriba de la web  *****
    $(".subir").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });


});