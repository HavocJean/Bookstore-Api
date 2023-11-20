import bookService from '../services/book.service.js';

async function createBook(req, res, next) {
    try {
        const book = req.body;

        if(!book.name || !book.value || !book.authorId || !book.stock) {
            throw new Error('Existe informações obrigátorios não enviadas.');
        }

        res.send(await bookService.createBook(book));
        logger.info(`Cadastro de um novo livro ${JSON.stringify(book)}`);
    } catch (err) {
        next(err);
    }
}

async function updateBook(req, res, next) {
    try {
        const book = req.body;

        if(!book.bookId || !book.value || !book.stock) {
            throw new Error('Existe informações obrigátorios não enviadas.');
        }

        res.send(await bookService.updateBook(book));
        logger.info(`Cadastro de um novo livro ${JSON.stringify(book)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteBook(req, res, next) {
    try {
        const book_id = req.params.id;

        if(!book_id) {
            throw new Error('Não foi encontrado o livro desejado.');
        }

        await bookService.deleteBook(book_id);
        res.end();
        logger.info(`Excluindo livro: ${book_id}`)
    } catch (err) {
        next(err);
    }
}

async function getAllBooks(req, res, next) {
    try {
        const author_id = req.query.authorId;

        res.send(await bookService.getBooks(author_id));
        logger.info(`Buscando todos os livros: ${author_id}`);
    } catch (err) {
        next(err);
    }
}

async function getBook(req, res, next) {
    try {
        const book_id = req.params.id;

        if(!book_id) {
            throw new Error('Não foi possivel encontrar esse livro');
        }

        res.send(await bookService.getBook(book_id));
        logger.info(`Buscando livro: ${book_id}`);
    } catch (err) {
        next(err);
    }
}

async function createInfo(req, res, next) {
    try {
        const book = req.body;

        if(!book.bookId || !book.description || !book.publishing || !book.rate) {
            throw new Error('Existe informações obrigátorios não enviadas.');
        }

        res.send(await bookService.createInfo(book));
        logger.info(`Cadastro de novas informações do livro ${JSON.stringify(book)}`);

    } catch (err) {
        next(err);
    }
}

async function updateInfo(req, res, next) {
    try {
        const book = req.body;

        if(!book.bookId || !book.description || !book.publishing || !book.rate) {
            throw new Error('Existe informações obrigátorios não enviadas.');
        }

        res.send(await bookService.updateInfo(book));
        logger.info(`Atualização de novas informações do livro ${JSON.stringify(book)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteInfo(req, res, next) {
    try {
        const book_id = req.params.id;

        if(!book_id) {
            throw new Error('Não foi encontrado o livro desejado.');
        }

        await bookService.deleteInfo(book_id);
        res.end();
        logger.info(`Excluindo informações do livro: ${book_id}`)
    } catch (err) {
        next(err);
    }
}

async function createRate(req, res, next) {
    try {
        const book_id = req.params.id;
        const rate = req.body;

        if(!book_id || !rate.name || !rate.rating || !rate.comment) {
            throw new Error('Preencha todas as informações para realizar a avaliação.');
        }

        await bookService.createRate(book_id, rate);
        res.end();
        logger.info(`Excluindo informações do livro: ${book_id, rate}`)
    } catch (err) {
        next(err);
    }
}

async function deleteRate(req, res, next) {
    try {
        const book_id = req.params.id;
        const position = req.params.position;

        if(!book_id || !position) {
            throw new Error('Necessário enviar todas as informações para ser realizado a exclusão.');
        }

        await bookService.deleteRate(book_id, position);
        res.end();
        logger.info(`Excluindo comentario do livro: ${book_id, position}`)
    } catch (err) {
        next(err);
    }
}

export default {
    createBook,
    updateBook,
    deleteBook,
    getAllBooks,
    getBook,
    createInfo,
    updateInfo,
    deleteInfo,
    createRate,
    deleteRate
}