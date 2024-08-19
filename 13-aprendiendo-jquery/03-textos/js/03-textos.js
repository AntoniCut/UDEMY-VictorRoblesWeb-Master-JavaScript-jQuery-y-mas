//  **********  js/textos.js  **********

$(document).ready(function () {
    
    //console.log($('a').length);
    reloadLinks();

    $('#add_button')
    .removeAttr('disabled')
    .click( function(){
        $('#menu').append('<li><a href="' + $("#add_link").val() + '"></a></li>');
        $('#add_link').val('');
        reloadLinks();
    });

    function reloadLinks(){
        $('a').each( function(index){
            //console.log($(this));
            //console.log($(this).att
            var that = $(this);
            var enlace = that.attr("href");
            that.attr('target', '_blank');

            that.text(enlace);
        });
    }





});