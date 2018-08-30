$(function () {

    obtener();

  

   



    $("#btnListo").click(function (e) {
        e.preventDefault();
        let nombre = $('#txtNombre').val();
        let email = $('#txtEmail').val();
        let password = $('#txtPassword').val();
        $.ajax({
            type: "POST", //tipo de peticion
            url: "http://localhost:8080/registroUsuario",
            data: {
                Nombre: nombre,
                Email: email,
                Password: password
            },
        }).done(function (data) {
            alert("Se ha registrado correctamente")
            //respuesta del servidor cuando es afirmativa
        }).fail(function () {
            //ingresa cuando la peticion genero un error
        });


    });






    $('#btnIniciar').click(() => {
        let nombre = $('#name').val();
        let password = $('#password').val();
        $.ajax({
            type: "POST", //tipo de peticion
            url: "http://localhost:8080/inicioUsuario",
            data: {
                Nombre: nombre,
                Password: password
            },
        }).done(function (data) {
            alert(data.nombre)
            //respuesta del servidor cuando es afirmativa
            window.location = 'cuenta.html'
        }).fail(function () {
            alert("Error")
            //ingresa cuando la peticion genero un error
        });

        res.sendFile('cuenta.html');

    })

    //cargar libro
    $("#modaTib").click(function (e) {
        e.preventDefault();

        $('#centralModalSuccess1').modal('toggle');

    });

    $("#modaGit").click(function (e) {
        e.preventDefault();

        $('#centralModalSuccess2').modal('toggle');

    });

    $("#modaVal").click(function (e) {
        e.preventDefault();

        $('#centralModalSuccess3').modal('toggle');

    });

    $("#modaCam").click(function (e) {
        e.preventDefault();

        $('#centralModalSuccess4').modal('toggle');

    });

    $("#modaTeo").click(function (e) {
        e.preventDefault();

        $('#centralModalSuccess5').modal('toggle');

    });

    $("#modaPri").click(function (e) {
        e.preventDefault();

        $('#centralModalSuccess6').modal('toggle');

    });

    $("#modaAna").click(function (e) {
        e.preventDefault();

        $('#centralModalSuccess7').modal('toggle');

    });

    //funcion contenedor libro
    $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function () {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function () {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    });
});




let obtener = () => {

    $.ajax({
        type: "GET", //tipo de peticion
        url: "http://localhost:8080/obtenerLibros",

    }).done(function (data) {
        // $("#renderBook").html(`<p>hola mundo</p>`);


        //respuesta del servidor cuando es afirmativa
        console.log(data[0]['titulo'])

        let html = '';

        

        
         html=`<script src="js/cardLibro.js"></script>`

        for (const key in data) {
            console.log(key)
            html += ` <div class="col-md-4 col-sm-6 col-xs-12">
            <article class="material-card Red">
                <h2>
                    <span>${data[key]['titulo']}</span>
                   
                </h2>
                <div class="mc-content">
                    <div class="img-container">
                    <img class="img-responsive" src="img/${data[key]['ruta']}" width="654" height="654">
                    </div>
                    <!--<div class="mc-description">
                        He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall, The Prophecy trilogy, The Dogs of War ...
                    </div>-->
                </div>
                <a class="mc-btn-action">
                    <i class="fa fa-bars"></i>
                </a>
                <div class="mc-footer">

                <div class="text-center">
                    <a  class="fa fa-fw fa-align-center" id="modaTib" data-target="#centralModalSuccess"></a>
                </div>

                

                <script>
                    $('#modaTib').click(()=>{
                       
                        $('#centralModalSuccess').modal(); 
                    })
                </script>

                

                
            </article>
        </div>`
        }



        $("#renderBook").append(html);


        for (const iterator of data) {


            $("#renderBook").append(data.titulo);

        }
    }).fail(function (error, data) {
        console.log('Error' + error)
        //ingresa cuando la peticion genero un error
    });

}

let btn = () => {

}
