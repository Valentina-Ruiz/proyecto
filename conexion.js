// en este archivo se creara el servicio  de conexion a la base de datos

const Sequelize = require('sequelize'); // se crea la variable que empaqueta el sequelize 
const usuarioModel = require('./models/usuario');
const categoriaModel = require('./models/categoria');
const libroModel = require('./models/libro');
const editorialDigitalModel = require('./models/editorialDigital');

const sequelize = new Sequelize('bibliodigital', 'postgres', '1-876-888', { // 

    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});

//BlogTag will be our way of tracking relationship Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs

const usuario = usuarioModel(sequelize, Sequelize)
const categoria = categoriaModel(sequelize, Sequelize)
const editorialDigital = editorialDigitalModel(sequelize, Sequelize)
const libro = libroModel(sequelize, Sequelize)

const usuarioCategoria = sequelize.define('usuarioCategoria', {})
const libroEditorial = sequelize.define('libroEditorial', {})
const libroCategoria = sequelize.define('libroCategoria', {})
const usuarioLibro = sequelize.define('usuarioLibro', {})

usuario.belongsToMany(categoria, { through: usuarioCategoria, unique: false })
categoria.belongsToMany(usuario, { through: usuarioCategoria, unique: false })

libro.belongsToMany(editorialDigital, { through: libroEditorial, unique: false })
editorialDigital.belongsToMany(libro, { through: libroEditorial, unique: false })

libro.belongsToMany(categoria, { through: libroCategoria, unique: false })
categoria.belongsToMany(libro, { through: libroCategoria, unique: false })

usuario.belongsToMany(libro, { through: usuarioLibro, unique: false })
libro.belongsToMany(usuario, { through: usuarioLibro, unique: false })


//crea el registro en la tabla usuario.. y asi con las demas tablas
/*usuario.create({
    longitud: 'jbhjsf',
    latitud: 'jbfdsjfjs',
    nombre: 'Valentina',
    email:'dfdfgdgd'
})

categoria.create({
    nombre: 'oriental',
    descripcion: 'descripcion'
})

editorialDigital.create({
    nit: '2514',
    email: 'valen@gmail.com',
    direccion: 'calle',
    nombre: 'vivir'

})

libro.create({
    isbn: '5845',
    titulo: 'el libro tibetano de la vida y la muerte',
    autor: 'sogyal rimpoche',
    descripcion: 'descripcion',
    serial: '4578',
    edicion: '20'
})

libroCategoria.create({
   libroIsbn: '5845',
   categoriumIdCategoria: '1'
})
*/
//consulta a la base de datos
// usuario.findAll({ 
//     attributes: ['codigo_usuario', 'nombre']
// });



sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`)
    })


module.exports = {
    usuario,
    categoria,
    libro,
    editorialDigital
}
















