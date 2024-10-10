const { timeStamp } = require("console");

const Following = (sequelize, Sequelize) => {
    return sequelize.define('Folowing', {
        id_usuario: {
            type: Sequelize.INTENGER,
            allowNull: false,
            references: {
                model: 'Usuarios', // Nombre de la tabla a la que se hace referencia
                key: 'id', // Clave primaria de la tabla Usuarios
            },
        },
        id_usuario: {
            type: Sequelize.INTENGER,
            allowNull: false,
            references: {
                model: 'Usuarios', // Nombre de la tabla a la que se hace referencia
                key: 'id', // Clave primaria de la tabla Usuarios
            },
        },
    }, {
        timestamps: true,
        indexes: [{
            unique: true,
            fields: ['id_usuario', 'id_usuario_seguido']
        },],
    });
};