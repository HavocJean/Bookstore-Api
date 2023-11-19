import Sequelize from 'sequelize';
import db from "../repositories/db.js";
import Book from './book.model.js';
import Client from './client.model.js';

const Sale = db.define('sales', {
    saleId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    clientId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bookId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Sale.belongsTo(Client, { foreignKey: "clientId" });
Sale.belongsTo(Book, { foreignKey: "bookId" });

export default Sale;