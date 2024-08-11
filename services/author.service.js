import authorRepository from '../repositories/author.repository.js';
import bookRepository from '../repositories/book.repository.js';

async function createAuthor(author) {
    return await authorRepository.insertAuthor(author);
}

async function updateAuthor(author) {
    return await authorRepository.updateAuthor(author);
}

async function deleteAuthor(author_id) {
    const book = bookRepository.getBooksByAuthor(author_id);

    if(book.length > 0) {
        throw new Error('Existe livros para esse esse autor, não é possível excluir.');
    }

    await authorRepository.deleteAuthor(author_id);
}

async function getAuthors() {
    return await authorRepository.getAuthors();
}

async function getAuthor(author_id) {
    return await authorRepository.getAuthor(author_id);
}

export default {
    createAuthor,
    updateAuthor,
    deleteAuthor,
    getAuthors,
    getAuthor
}
