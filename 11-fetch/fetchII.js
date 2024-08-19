//  **********  fetchII.js  **********

'use strict';

//  Evento Load  -  Cargar Pagina.
window.addEventListener('load', () => { main(); });

//  *****  Fetch y peticiones a servicios / apis rest  *****

function main() {

    var url1 = 'https://reqres.in/api/users';
    var url2 = 'https://reqres.in/api/users/2';
    
    getUsuarios(url1)

        .then(data => data.json())                               //  Capturamos los datos.
        .then(users => {                 //  Guardamos los datos enuna variable que es un array.
            listarUsuariosDOM(users.data, "#usuarios");      //  Mostrar datos en el DOM.
            return getJanet(url2);
        })

        .then(data => data.json())
        .then(user => {

            listarUsuariosJanetDOM(user.data, "#janet");
        });
}



function getUsuarios(url1) {
    return fetch(url1);     //  Realizamos la Peticion.
}

function getJanet(url2) {
    return fetch(url2);     //  Realizamos la Peticion.
}


//  Mostramos los datos en el DOM.
function listarUsuariosDOM(usuarios , id) {

    var div_usuarios = document.querySelector(id);
    console.log("usuarios = ", usuarios);

    //  Recorremos el array usuarios.
    usuarios.map((user, indice) => {

        let nombre = document.createElement('h4');
        nombre.innerHTML = indice + " - " + user.first_name + " " + user.last_name;
        div_usuarios.appendChild(nombre);
        document.querySelector(".loading").style.display = "none";

    });

}

//  Mostrar Datos en el DOM.
//  Mostramos los datos en el DOM.
function listarUsuariosJanetDOM(user , id) {

    var div_janet = document.querySelector(id);
    let janet = document.createElement('h5');
    let avatar = document.createElement('img');
    
    janet.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';

    div_janet.appendChild(janet);
    div_janet.appendChild(avatar);

    document.querySelector(".loading2").style.display = "none";

    
}





//  ********************************************************