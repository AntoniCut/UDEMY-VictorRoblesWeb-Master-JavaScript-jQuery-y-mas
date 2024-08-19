
//  **********  Funciones de Fechas  **********
var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

var textoHora = `
    El año es: ${year}
    El mes es: ${mes+1}
    El dia es ${dia}
    La hora es ${hora}
    Los minutos son ${minutos}
    Los segundos son ${segundos}
`;

//console.log(fecha);
//alert(fecha);
console.log(textoHora);


//  **********  Funciones Matematicas  **********
var aleatorio = Math.random() * 100;
console.log(aleatorio);

//  convertimos en un entero.
console.log(Math.ceil(aleatorio));
