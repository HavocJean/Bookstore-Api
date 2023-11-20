import Book from '../models/book.model.js';
import { getClient } from './mongo.db.js';

async function insertBook(book) {
    try {
        return await Book.create(book);
    } catch (err) {
        throw err;
    }
}

async function updateBook(book) {
    try {
        await Book.update({
            value: book.value,
            stock: book.stock
        }, {
            where: {
                bookId: book.bookId
            }
        });

        return book;
    } catch (err) {
        throw err;
    }
}

async function deleteBook(book_id) {
    try {
        await Book.destroy({
            where: {
                bookId: book_id
            }
        });
    } catch (err) {
        throw err;
    }
}

async function getBooks() {
    try {
        return await Book.findAll();
    } catch (err) {
        throw err;
    }
}

async function getBooksByAuthor(author_id) {
    try {
        return await Book.findAll({
            where: {
                authorId: author_id
            }
        });
    } catch (err) {
        throw err;
    }
}

async function getBook(book_id) {
    const connect = getClient()
    try {
        const book = await Book.findByPk(book_id);

        if(book) {
            await connect.connect();
            const infos_book = await connect.db("bookstore").collection("bookinfo").find(
                { bookId: parseInt(book_id) }
            ).toArray();
            
            return {
                book,
                infos_book
            }
        }

        return null;
    } catch (err) {
        throw err;
    } finally {
        await connect.close();
    }
}

async function insertInfo(book) {
    const connect = getClient();
    try {
        await connect.connect();
        await connect.db("bookstore").collection("bookinfo").insertOne(book);

        return book;
    } catch (err) {
        throw err;
    } finally {
        await connect.close();
    }
}

async function updateInfo(book) {
    const connect = getClient();
    try {
        await connect.connect();
        await connect.db("bookstore").collection("bookinfo").updateOne(
            { bookId: parseInt(book.bookId) },
            { $set: {
                    description: book.description,
                    publishing: book.publishing
                }
            }
        );

        return book;
    } catch (err) {
        throw err;
    } finally {
        await connect.close();
    }
}

async function deleteInfo(book_id) {
    const connect = getClient();
    try {
        await connect.connect();
        await connect.db("bookstore").collection("bookinfo").deleteOne(
            { bookId: parseInt(book_id) },
        );
    } catch (err) {
        throw err;
    } finally {
        await connect.close();
    }
}

async function createRate(book_id, rate) {
    const connect = getClient();
    try {
        await connect.connect();
        await connect.db("bookstore").collection("bookinfo").updateOne(
            { bookId: parseInt(book_id) },
            {
                $push: {
                    rate: {
                        name: rate.name,
                        rating: rate.rating,
                        comment: rate.comment
                    }
                }
            }
        );
    } catch (err) {
        throw err;
    } finally {
        await connect.close();
    }
}

async function deleteRate(book_id, position) {
    const connect = getClient();
    try {
        await connect.connect();
        await connect.db("bookstore").collection("bookinfo").updateOne(
            { bookId: parseInt(book_id) },
            {
                $unset: {
                    [`rate.${position}`]: 1
                },
            }
        );

        await connect.db("bookstore").collection("bookinfo").updateOne(
            { bookId: parseInt(book_id) },
            {
                $pull: {
                    rate: null
                }
            }
        );
    } catch (err) {
        throw err;
    } finally {
        await connect.close();
    }
}

async function getBookStockValue(book_id) {
    try {
        return await Book.findByPk(book_id, {
            attributes: ['value', 'stock']
        });
    } catch (err) {
        throw err;
    }
}

export default {
    insertBook,
    updateBook,
    deleteBook,
    getBooks,
    getBook,
    getBooksByAuthor,
    insertInfo,
    updateInfo,
    deleteInfo,
    createRate,
    deleteRate,
    getBookStockValue
}
