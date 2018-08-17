module.exports = (sequelize, type) => {
    return sequelize.define('categoria', {
        id_categoria: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING,
            //allowNull: false
        },
        descripcion: {
            type: type.STRING,
            //allowNull: false
        }

    });
}