var express = require('express'), path = require('path'); // se crea express y el path
let app = express(); //se inicializa express
var jwt = require('jsonwebtoken');
var cons = require('consolidate');
var bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname, './public')))
app.set('port', process.env.PORT || 8080); // se establece el puerto para la recepcion del servidor

app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/public'));
app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
//Store all JS and CSS in Scripts folder.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var Server = require("./server"); // se crea una instancia de la clase. 
Server.iniciar(app); // snpm install viewere inicia el metodo que se tiene en la clase server y se le envia la configuracion de app 

// se cargan las plantillas para cada url amigable
/*app.get("/", (req, res) => {
    res.render("template", { title: 'Hey', message: 'Hello there' }
    );
});
*/
