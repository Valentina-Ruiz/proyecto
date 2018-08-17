module.exports = (sequelize, type) => {
    return sequelize.define('editorialDigital', {
        nit: {
            type: type.INTEGER,
            primaryKey: true
          
        },

        email: {
            type: type.STRING, unique: true, allowNull: false
        },

        direccion: {
            type: type.STRING, unique: true, allowNull: false
        },

        nombre: {
            type: type.STRING, allowNull: false
        }
    });
}