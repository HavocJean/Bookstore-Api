import authorService from '../services/author.service.js';

async function createAuthor(req, res, next) {
    try {
        const author = req.body;
        
        if(!author.name || !author.email || !author.phone) {
            throw new Error('Existe informações obrigátorios não enviadas.');
        }

        res.send(await authorService.createAuthor(author));
        logger.info(`Cadastro de um novo autor ${JSON.stringify(author)}`);
    } catch (err) {
        next(err);
    }
}

async function updateAuthor(req, res, next) {
    try {
        const author = req.body;

        if(!author.authorId || !author.name || !author.email || !author.phone) {
            throw new Error('Envie todas as informações para realizar a atualização.')
        }

        res.send(await authorService.updateAuthor(author));
        logger.info(`Atualizando o autor ${json.stringify(author)}`);
    } catch (err) {
        next(err);
    }
}


async function deleteAuthor(req, res, next) {
    try {
        const author_id = req.params.id;

        if(!author_id || isNaN(author_id)) {
            throw new Error('Existe informações incorretas que foram enviadas.');
        }
        
        await authorService.deleteAuthor(author_id);
        res.end();
        logger.info(`Excluindo autor: ${author_id}`);
    } catch (err) {
        next(err);
    }
}

async function getAllAuthors(req, res, next) {
    try {
        res.send(await authorService.getAuthors());
        logger.info('Buscando todos os autores');
    } catch(err) {
        next(err);
    }
}

async function getAuthor(req, res, next) {
    try {
        const author_id = req.params.id;

        if(!author_id || isNaN(author_id)) {
            throw new Error('Não foi possível reconhecer o autor informado.');
        }

        res.send(await authorService.getAuthor(author_id));
        logger.info(`Buscando autor ${author_id}`);
    } catch (err) {
        next(err);
    }
}

export default {
    createAuthor,
    updateAuthor,
    deleteAuthor,
    getAllAuthors,
    getAuthor
}