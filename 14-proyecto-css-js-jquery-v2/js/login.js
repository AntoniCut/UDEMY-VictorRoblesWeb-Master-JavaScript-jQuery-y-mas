//  ************************************
//  **********  js/login.js  **********
//  ************************************

$(document).ready(function () {

    // Cargar aside.html
    $("#sidebar").load("aside.html", function () {

        //  *****  Login falso  *****
        $("#login form").submit(function (e) {
            
            console.log("Entra a el submit del formulario");
            
            e.preventDefault(); // Prevenir el envío del formulario

            var form_name = $("#form_name").val(); // Obtener el valor del campo de texto
            localStorage.setItem("form_name", form_name); // Guardar el nombre en el localStorage

            // Recargar la página para reflejar el cambio (opcional)
            location.reload();

        });


        // Obtener el nombre del localStorage
        var form_name = localStorage.getItem("form_name");

        if (form_name != null && form_name != "undefined") {
            var about_parrafo = $("#about p");
            about_parrafo.html("<br> <strong> Bienvenido, " + form_name + "</strong> <br>");
            about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");

            $("#login").hide(); // Ocultar el formulario de login

            // Cerrar sesión
            $("#logout").click(function () {
                localStorage.clear();
                location.reload(); // Recargar la página para reflejar el cierre de sesión
            });

            console.log("El formulario se ha enviado");
            console.log("Nombre guardado: " + form_name);
        }
    });
});

















