import bookRepository from '../repositories/book.repository.js';

async function createBook(book) {
    return await bookRepository.insertBook(book);
}

async function updateBook(book) {
    return await bookRepository.updateBook(book);
}

async function deleteBook(book_id) {
    await bookRepository.deleteBook(book_id);
}

async function getBooks(author_id) {
    if(author_id) {
        return await bookRepository.getBooksByAuthor(author_id);
    }

    return await bookRepository.getBooks();
}

async function getBook(book_id) {
    return await bookRepository.getBook(book_id);
}

async function createInfo(book) {
    return await bookRepository.insertInfo(book);
}

async function updateInfo(book) {
    return await bookRepository.updateInfo(book);
}

async function deleteInfo(book_id) {
    return await bookRepository.deleteInfo(book_id);
}

async function createRate(book_id, rate) {
    return await bookRepository.createRate(book_id, rate);
}

async function deleteRate(book_id, position) {
    return await bookRepository.deleteRate(book_id, position);
}

export default {
    createBook,
    updateBook,
    deleteBook,
    getBooks,
    getBook,
    createInfo,
    updateInfo,
    deleteInfo,
    createRate,
    deleteRate
}
