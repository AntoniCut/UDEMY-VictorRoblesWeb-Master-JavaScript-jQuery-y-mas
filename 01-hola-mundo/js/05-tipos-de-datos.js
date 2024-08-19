'use strict'

//  ******  Operadores  ******
var numero1 = 7;
var numero2 = 12;

alert("Tenemos los siguientes numeros: " + numero1 + " y " + numero2);
var operacion1 = numero1 + numero2;
var operacion2 = numero1 - numero2;
var operacion3 = numero1 * numero2;
var operacion4 = numero1 / numero2;
var operacion5 = numero1 % numero2;

alert("El resultado de las operacion son: " 
      + "suma = " + operacion1 + " resta = " + operacion2 
      + " multiplicacion = " + operacion3 + " division = " + operacion4 
      + " y resto = " + operacion5);


//  ******  Tipos de datos  ******

var numero_entero = 48;
var cadena_texto = "Hola 'que' tal";
var verdadero_o_falso = true;

var numero_falso = "33";
console.log(Number(numero_falso) + 7);
console.log(String(numero_entero) + 7);

console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);

//  funciones de conversion - parseInt y parseFloat -



console.log(cadena_texto, verdadero_o_falso);
//console.log(verdadero_o_falso);

