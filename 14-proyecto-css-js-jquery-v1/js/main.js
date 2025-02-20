$(document).ready(function () {

    //  *****  Slider  *****
    if (window.location.href.indexOf('index') > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            caption: true,
            slideWidth: 1230,
            responsice: true,
            pager: true
        });
    }

    //  *****  Posts  *****
    if (window.location.href.indexOf('index') > -1) {

        var posts = [

            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
            },

            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
            },

            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
            },

            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
            },

            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
            }
        ]

        console.log(posts);


        //  *****  creacion y añadir posts  *****

        posts.forEach((item, index) => {

            var post = `
                <article class="post">
                    <h2> ${item.title} </h2>
                    <span class="date"> ${item.date} </span>
                    <p> ${item.content} </p>
                    <a class="button-more" href="#"> Leer más > </a>
                </article>
            `;

            console.log(post);

            $('#posts').append(post);

        });
    }

    //  *****  Selector de Tema  *****

    var theme = $("#theme");

    $("#to-green").click(function () {
        theme.attr("href", "css/green.css")
    });

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css")
    });

    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css")
    });


    //  *****  Scroll arriba de la web  *****

    $(".subir").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //  *****  Login falso  *****
    $("#login form").submit(function () {

        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");
    if (form_name != null && form_name != "undefined") {

        var about_parrafo = $("#about p");

        about_parrafo.html("<br> <strong> Bienvenido, " + form_name + "</strong> <br>");
        about_parrafo.append("<a href='#' id='logout'> Cerrar Sesión </a>");

        $("#login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });

    }

    //  *****  Acordeon  *****
    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    //  *****  Reloj  *****
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {
            var reloj = moment().format('hh:mm:ss');
            console.log(reloj);
            $("#reloj").html(reloj);
        }, 1000);
    }

    //  *****  Validacion Formulario  *****
    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: "es",
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });

    }
                
        
});