//  **********  fetch.js  **********

'use strict';

//  Evento Load  -  Cargar Pagina.
window.addEventListener('load', () => { main(); });

//  *****  Fetch y peticiones a servicios / apis rest  *****

function main() {

    var url1 = 'https://jsonplaceholder.typicode.com/users';
    var url2 = 'https://reqres.in/api/users';
    peticion1(url2);

}


function peticion1(url2){

    var usuarios = [];
    

    //  Realizamos la Peticion.
    fetch(url2)
        
        .then( data => data.json())                               //  Capturamos los datos.

        .then(users => {                 //  Guardamos los datos enuna variable que es un array.
            usuarios = users.data;
            console.log("Mostramos datos : ", usuarios);

            //  Mostrar datos en el DOM.
            listarPeticionDOM(usuarios);
            
        });

        
}


//  Mostramos los datos en el DOM.
function listarPeticionDOM(usuarios) {

    var div_usuarios = document.querySelector("#usuarios");
    console.log("usuarios = ", usuarios);

    //  Recorremos el array usuarios.
    usuarios.map( (user, indice) =>{

        let nombre = document.createElement('h4');
        nombre.innerHTML = indice + " " + user.first_name + " " + user.last_name;
        div_usuarios.appendChild(nombre);
        document.querySelector(".loading").style.display ="none";

    });

}
 













//  ********************************************************