import Sequelize from 'sequelize';
import db from "../repositories/db.js";

const Client = db.define('clients', {
    clientId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

// db.sync()
//   .then(() => {
//     console.log('Tabelas criadas com sucesso!');
//   })
//   .catch((err) => {
//     console.error('Erro ao criar tabelas:', err);
//   });

export default Client;