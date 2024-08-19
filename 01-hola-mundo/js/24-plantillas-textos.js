'use strict'

//  ******  Plantillas para Textos  ******

var nombre = prompt("Mete tu nombre: ");
var apellidos = prompt("Mete tus apellidos: ");

var texto = " Mi nombre es: " + nombre + " Mis apellidos son: " + apellidos;

document.write(texto);

var plantilla = `
    <h1> Hola que tal </h1>
    <h3> mi nombre es: ${nombre} </h3>
    <h3> mis apellidos son ${apellidos} </h3>
`;

document.write(plantilla);