//  **********  js/04-efectos.js  **********

$(document).ready(function () {

    //  **********  efectos  **********

    var caja = $("#caja");
    var caja2 = $("#caja2");

    var mostrar = $("#mostrar");
    var ocultar = $("#ocultar");
    var toggleSH = $("#toggleShowHide");
        
    var mostrarIn = $("#mostrarIn");
    var ocultarOut = $("#ocultarOut");
    var toggleInOut = $("#toggleInOut");

    var mostrarTo = $("#mostrarInTo");
    var ocultarTo = $("#ocultarOutTo");
    var fadeToggle = $("#fadeToggle");

    var slideDown = $("#slideDown");
    var slideUp = $("#slideUp");
    var slideToggle = $("#slideToggle");

    var animame = $("#animame");


    //  *****  efectos hide(), show() y toggle()  *****
    mostrar.click(function () {
        mostrar.hide('fast');
        ocultar.show('fast');
        caja.show('slow');
    });

    ocultar.click(function () {
        ocultar.hide('fast');
        mostrar.show('fast');
        caja.hide('slow');
    });

    toggleSH.click(function () {
        caja.toggle('slow');

    });

    //  *****  efectos fadeIn(), fadeOut(), fadeToggle()  *****
    mostrarIn.click(function () {
        mostrarIn.hide('slow');
        ocultarOut.show('slow');
        caja.fadeIn('slow');
    });

    ocultarOut.click(function () {
        ocultarOut.hide('slow');
        mostrarIn.show('slow');
        caja.fadeOut('slow');
    });

    toggleInOut.click(function () {
        caja.fadeToggle('slow');

    });

    //  *****  efectos fadeTo y fadeToggle()  *****
    mostrarTo.click(function () {
        mostrarTo.hide('fast');
        ocultarTo.show('fast');
        caja.fadeTo('slow', 0.8);
    });

    ocultarTo.click(function () {
        ocultarTo.hide('fast');
        mostrarTo.show('fast');
        caja.fadeTo('slow', 0.2);
    });

    fadeToggle.click(function () {
        caja.fadeToggle('slow');
    });


    //  *****  efectos slideDown(), slideUp() y slideToggle()  *****
    slideDown.click(function () {
        slideDown.slideUp();
        slideUp.slideDown();
        caja.slideDown('slow');
    });
    
    slideUp.click(function () {
        slideUp.slideUp();
        slideDown.slideDown();
        caja.slideUp('slow');
    });
    
    slideToggle.click(function () {
        caja.slideToggle('slow');
    });

    animame.click( function(){
        
        caja2.animate({
            marginLeft: '500px',
            fontSize:   '40px',
            fontFamily: 'Tahoma',
            height:     '110px'
        }, 'slow')

            .animate({
                borderRadius:  '900px',
                lineHeight:    '110px',
                marginTop:     '80px'
            }, 'slow')

            .animate({
                borderRadius:  '0px',
                marginLeft:    '0px'
            }, 'slow')

            .animate({
                borderRadius:  '0px',
                marginTop:    '15px',
                height:       '50px',
                lineHeight:   '50px',
                fontFamily:   'Verdana',
                fontSize:     '19px'
            }, 'slow')
    });


    



});