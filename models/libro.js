module.exports = (sequelize, type) => {
    return sequelize.define('libro', {
        isbn: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        titulo: {
            type: type.STRING,
            allowNull: false
        },

        autor: {
            type: type.STRING,
            allowNull: false
        },

        descripcion: {
            type: type.STRING,
            allowNull: false
        },

        serial: {
            type: type.INTEGER,
            allowNull: false
        },

        edicion: {
            type: type.INTEGER,
            allowNull: false
        },

        ruta:{
            type:type.STRING
        }

    },{
        createdAt:false,
        updatedAt:false
    });
}