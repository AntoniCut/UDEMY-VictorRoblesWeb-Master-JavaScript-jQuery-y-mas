
//  **********  ejercicioDOM.js  **********

/*
        1.  Formulario campos: Nombre, Apellidos y Edad.
        2.  Boton de Enviar el formulario: submit.
        3.  Mostrar los datos por pantalla.
        4.  Tener un boton que al darle click nos muestra los datos actuales del formulario.
        5.  Validacion del formulario.
*/

'use strict';

window.addEventListener('load', function () {
    //alert("DOM cargado!!");

    var formulario = document.querySelector("#formulario");

    var box_dashed = this.document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function () {

        console.log("Evento submit capturado");

        //  con value sacamos el valor del contenido del formulario.
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        
        //  Validamos el formulario.
        if (nombre.trim() == null || nombre.trim().length == 0 || !isNaN(nombre)) {
            //alert("Nombre no valido");
            console.log(typeof nombre);
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;
        } else {
            document.querySelector("#error_nombre").style.display = "none";
        }


        if (apellidos.trim() == null || apellidos.trim().length == 0 || !isNaN(apellidos)){
            //alert("Apellidos no valido");
            document.querySelector("#error_apellidos").innerHTML = "Los apellidos no son validos";
            return false;
        } else {
            document.querySelector("#error_apellidos").style.display = "none";
        }


        if (edad == null || edad <= 0 || isNaN(edad)) {
            //alert("Edad no valida");
            document.querySelector("#error_edad").innerHTML = "La edad no es valida";
            return false;
        } else {
            document.querySelector("#error_edad").style.display = "none";
        }
        

        box_dashed.style.display = "block";

        //console.log(nombre, apellidos, edad);

        /*
        var datos_usuario = [nombre, apellidos, edad];

        for(var indice in datos_usuario) {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }

        */
        //  seleccionamos los id p_nombre y la etiqueta span .
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        //  añadimos en esas etiquetas lo que hemos recogido del formulario.
        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;


    });

    /*
    //  funcion que valida los datos del formulario.
    function validarDatos(nombre, apellidos, edad) {
        
        //var resultado;

        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("Nombre no valido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;
        } else {
            document.querySelector("#error_nombre").style.display = "none";
            return true;
        }

        if (apellidos.trim() == null || apellidos.trim().length == 0) {
            alert("Apellidos no valido");
            document.querySelector("#error_apellidos").innerHTML = "Los apellidos no son validos";
            return false;
        } else {
            document.querySelector("#error_apellidos").style.display = "none";
            resultado = true;
        }


        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert("Edad no valida");
            document.querySelector("#error_edad").innerHTML = "La edad no es valida";
            return false;
        } else {
            document.querySelector("#error_edad").style.display = "none";
            resultado = true;
        }

        //return resultado;

    }
    */




});  //  Fin 