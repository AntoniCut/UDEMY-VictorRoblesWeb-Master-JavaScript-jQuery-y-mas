//  **********  fetch.js  **********

'use strict'


//  **********  Fetch y Peticiones a Servicios / apis rest  **********

var usuarios = [];
var div_usuarios = document.querySelector("#usuarios");

fetch('https://jsonplaceholder.typicode.com/users')

    .then(data => data.json())

    .then(user => {
        usuarios = user;
        console.log(usuarios);
        
        usuarios.map( (user, i) => {
            let  nombre_apellidos = document.createElement('h4');
            nombre_apellidos.innerHTML = i + ". " + user.name + " " + user.username;
            div_usuarios.appendChild(nombre_apellidos);
            document.querySelector('.loading').style.display = 'none';
        });
        


    });