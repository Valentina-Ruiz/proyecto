module.exports = (sequelize, type) => {
    return sequelize.define('usuario', {

        codigo_usuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: type.STRING, unique: true, allowNull: false
        },

        nombre: {
            type: type.STRING, allowNull: false
        },
        password: {
            type: type.STRING
        }

    });
}
