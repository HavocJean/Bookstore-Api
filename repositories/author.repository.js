import Author from '../models/author.model.js'

async function insertAuthor(author) {
    try {
        return await Author.create(author);
    } catch (err) {
        throw err;
    }
}

async function updateAuthor(author) {
    try {
        await Author.update(author, {
            where: {
                authorId: author.authorId
            }
        });
        return author;
    } catch (err) {
        throw err;
    }
}

async function deleteAuthor(author_id) {
    try {
        await Author.destroy({
            where: {
                authorId: author_id
            }
        });
    } catch (err) {
        throw err;
    }
}

async function getAuthors() {
    try {
        return await Author.findAll();
    } catch (err) {
        throw err;
    }
}

async function getAuthor(author_id) {
    try {
        return await Author.findByPk(author_id);
    } catch (err) {
        throw err;
    }
}

export default {
    insertAuthor,
    updateAuthor,
    deleteAuthor,
    getAuthors,
    getAuthor
}