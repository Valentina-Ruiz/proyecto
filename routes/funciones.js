const { usuario, categoria, libro, editorialDigital, } = require('../conexion');
exports.mostrarLibros = (res) => {
    libro.findAll().then((libros) => {
        for (let i = 0; i < libros.length; i++) {
           
            
        }
        console.log(libros)
        res.render('index')

        
    })
}


exports.obtenerLibros= (res) => {
    libro.findAll().then((libros) => {
        
        console.log(libros)
    

        res.json(libros)
    })
}
