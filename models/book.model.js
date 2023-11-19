import Sequelize from 'sequelize';
import db from "../repositories/db.js";
import Author from './author.model.js';

const Book = db.define('books', {
    bookId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    authorId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Book.belongsTo(Author, { foreignKey: "authorId" });

export default Book;