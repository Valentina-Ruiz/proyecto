const funciones = require('./funciones');
module.exports = function (app) {

    const { usuario, categoria, libro, editorialDigital, } = require('../conexion')

    //create a user
    // app.post('api/usuarios', (req, res) => {  //especifica si será una petición POST o GET
    //     console.log(req.body)
    //     usuario.create(req.body)
    //         .then(user => res.json(user))
    // })

    // get all users
    app.get('/cuenta', (req, res) => {
        res.render('cuenta');
    });

    app.get('/obtenerLibros' , (req, res) => {
        funciones.obtenerLibros(res);
        //res.render('index');
    });

    app.get('/inicio', (req, res) => {
        funciones.mostrarLibros(res);
        //res.render('index');
    });

    app.get('/inicioSesion', (req, res) => {
        res.render('inicioSesion');
    });

    app.post('/inicioUsuario', (req, res) => {
        var Nombre = req.body.Nombre;
        var Password = req.body.Password;

        usuario.findAll({
            where: {
                nombre: Nombre,
                password: Password
            }

        }).then(function (val) {
            
            res.send(val);
            //res.sendFile('vista/cuenta.html');
            //console.log(Nombre);
        });
    });
    
    //get all users
    app.get('/inicioUsuario', (req, res) => {
        // res.sendfile('vista/inicioSesion.html');
    });


    app.get('/registro', (req, res) => {
        res.render('registro');
    });

    app.post('/registroUsuario', (req, res) => {
        var Nombre = req.body.Nombre;
        var Email = req.body.Email;
        var Password = req.body.Password;

        usuario.create({
            nombre: Nombre,
            email: Email,
            password: Password

        }).then(function (val) {
            res.send(val);
        })
        console.log(Nombre);
    });

    //get all users
    app.get('/registroUsuario', (req, res) => {
        res.sendfile('vista/registro.html');
    });
    
//login


}