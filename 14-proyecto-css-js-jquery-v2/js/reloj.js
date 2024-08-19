//  ***********************************
//  **********  js/reloj.js  **********
//  ***********************************

$(document).ready(function () {

    //  *****  Reloj  *****
    if (window.location.href.indexOf('reloj') > -1) {
        
        setInterval(function () {
            
            var reloj = moment().format('hh:mm:ss');
            console.log(reloj);
            $("#reloj").html(reloj);
            
        }, 1000);
    }

});