//  ***********************************
//  **********  js/posts.js  **********
//  ***********************************


$(document).ready(function () {

    //  ***** CREAR  Posts  **********
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY") + ' a las ' + moment().format("HH:mm:ss"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY") + ' a las ' + moment().format("HH:mm:ss"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY") + ' a las ' + moment().format("HH:mm:ss"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY") + ' a las ' + moment().format("HH:mm:ss"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY") + ' a las ' + moment().format("HH:mm:ss"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
        }
    ]
    //console.log(posts);

    //  *****  AÑADIR posts  -  Creacion y Añadir Posts  *****
    posts.forEach((item, index) => {
        var post = `
            <article class="post">
                <h2> ${item.title} </h2>
                <span class="date"> ${item.date} </span>
                <p> ${item.content} </p>
                <a class="button-more" href="#"> Leer más > </a>
            </article>
        `;
        //console.log(post);
        $('#posts').append(post);

    });


});