$(function () {
    alert("hola");

    $("#btnListo").click(function (e) {
        e.preventDefault();
        let nombre = $('#txtNombre').val();
        let email = $('#txtEmail').val();
        let password = $('#txtPassword').val();
        $.ajax({
            type: "POST", //tipo de peticion
            url: "http://localhost:3000/registroUsuario",
            data: {
                Nombre: nombre,
                Email: email,
                Password: password
            },
        }).done(function (data) {
            alert(data.nombre)
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
            url: "http://localhost:3000/inicioUsuario",
            data: {
                Nombre: nombre,
                Password: password
            },
        }).done(function (data) {
            alert(data.nombre)
            //respuesta del servidor cuando es afirmativa
            window.location = 'cuenta.html'
        }).fail(function () {
            //ingresa cuando la peticion genero un error
        });

        res.sendFile('cuenta.html');

    })



});

