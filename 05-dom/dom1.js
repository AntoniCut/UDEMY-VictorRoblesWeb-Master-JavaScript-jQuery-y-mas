//     **********  Introduccion al DOM  -  Document Object Model  **********

'use strict'

function cambiaColor(color) {
    caja.style.background = color;
}

//  ******  Seleccionar un elemento por el ID  ******
var caja = document.getElementById("micaja");


//  para Escribir en el DOM.
caja.innerHTML = "¡Texto en la caja desde JS!";

//  Cambiar las propiedades del DOM con reglas de CSS.
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola1 hola2";


//  ******  Seleccionar un elemento por Selector  ******
var caja = document.querySelector("#micaja");


//  ******  Conseguir elementos por su Etiqueta  ******

var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

var contenidoEnTexto = todosLosDivs[2].textContent;        //  saco el contenido de la posicion 2 y lo guarda en la variable.
console.log(contenidoEnTexto);

contenidoEnTexto = todosLosDivs[2];               
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";     //  Cambiamos el contenido.
contenidoEnTexto.style.background = "red";
console.log(contenidoEnTexto);


var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

//  creamos elementos con un for in.
for (var valor in todosLosDivs) {
    
    console.log(todosLosDivs[valor]);

    if( typeof todosLosDivs[valor].textContent == 'string' ) {
        var parrafo = document.createElement("p");                                 //  creamos un parrafo.
        var texto = document.createTextNode(todosLosDivs[valor].textContent);      //  creamos un texto.
        parrafo.append(texto);                                                     //  añadimos texto al parrafo.                     append = añade despues.
        seccion.append(parrafo);                                                  //  metemos el parrafo dentro de la etiqueta.     prepend = añade antes.
    }
    
}

seccion.append(hr);



//  ******  Conseguir elementos por su Clase  ******






/*
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

caja.className = "hola hola2";

console.log(caja);
*/




