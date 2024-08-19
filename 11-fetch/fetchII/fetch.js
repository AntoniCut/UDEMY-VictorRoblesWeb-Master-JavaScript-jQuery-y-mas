//  **********  fetch.js  **********

'use strict'


//  **********  Fetch y Peticiones a Servicios / apis rest  **********


var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");

//  peticion 1.
getUsuarios()

    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);

        return getInfo();

    })

    .then(data => {
        //console.log(data);
        //mostrarProfesor(profesor);
        div_profesor.innerHTML = data;


        return getJanet();
    })

    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
    })

    .catch(error => {
        console.log(error);
        alert("error en las peticiones");
    });



function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2');
}

//  Creacion de una promesa.
function getInfo() {

    var profesor = {
        nombre: 'Antonio',
        apellidos: 'Cutillas',
        url: 'https://antonydev.es/pruebas'
    };

    return new Promise((resolve, reject) => {

        var profesor_string = "";
        setTimeout(function () {
            profesor_string = JSON.stringify(profesor);
            //if( typeof profesor_string != 'string' || profesor_string != "") return reject('error 1');
            return resolve(profesor_string);
        }, 3000);

    });
}


function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre_apellidos = document.createElement('h4');
        nombre_apellidos.innerHTML = i + ". " + user.first_name + " " + user.last_name;
        div_usuarios.appendChild(nombre_apellidos);
        document.querySelector('.loading').style.display = 'none';
    });
}


function mostrarJanet(user) {
    //console.log(user);

    let nombre_apellidos = document.createElement('h5');
    let avatar = document.createElement('img');

    nombre_apellidos.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';

    div_janet.appendChild(nombre_apellidos);
    div_janet.appendChild(avatar);
    document.querySelector('#janet .loading').style.display = 'none';

}


function mostrarProfesor(data) {
    console.log(data);
    let nombre_apellidos_profesor = document.createElement('h5');
    div_profesor.innerHTML = data.nombre + " " + data.apellidos;
    div_profesor.appendChild(nombre_apellidos_profesor);
    document.querySelector('#profesor .loading').style.display = 'none';
}











