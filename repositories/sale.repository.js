import Sale from '../models/sale.model.js';
import Book from '../models/book.model.js';

async function insertSale(sale) {
    try {
        return await Sale.create(sale);
    } catch (err) {
        throw err;
    }
}

async function getSales() {
    try {
        return await Sale.findAll();
    } catch (err) {
        throw err;
    }
}

async function getSale(sale_id) {
    try {
        return await Sale.findByPk(sale_id);
    } catch (err) {
        throw err;
    }
}

async function getSaleByClient(client_id) {
    try {
        return await Sale.findAll({
            where: {
                clientId: client_id
            }
        })
    } catch (err) {
        throw err;
    }
}

async function getSaleByBook(book_id) {
    try {
        return await Sale.findAll({
            where: {
                bookId: book_id
            }
        })
    } catch (err) {
        throw err;
    }
}

async function getSalebyAuthor(author_id) {
    try {
        return await Sale.findAll({
            include: [
                {
                    model: Book,
                    where: {
                        authorId: author_id
                    }
                }
            ]
        })
    } catch (err) {
        throw err;
    }
}

export default {
    insertSale,
    getSales,
    getSale,
    getSaleByClient,
    getSaleByBook,
    getSalebyAuthor
}