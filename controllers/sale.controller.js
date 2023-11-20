import saleService from '../services/sale.service.js';

async function createSale(req, res, next) {
    try {
        const sale = req.body;

        if(!sale.clientId || !sale.bookId || !sale.date) {
            throw new Error('Existe informações obrigátorios não enviadas.');
        }

        res.send(await saleService.createSale(sale));
        logger.info(`Cadastro de um novo venda ${JSON.stringify(sale)}`);
    } catch (err) {
        next(err);
    }
}

async function getAllSales(req, res, next) {
    try {
        const client_id = req.query.clientId;
        const book_id = req.query.bookId;
        const author_id = req.query.authorId;

        res.send(await saleService.getSales(client_id, book_id, author_id));
        logger.info('Buscando todos os venda');
    } catch(err) {
        next(err);
    }
}

async function getSale(req, res, next) {
    try {
        const sale_id = req.params.id;

        if(!sale_id || isNaN(sale_id)) {
            throw new Error('Não foi possível reconhecer o a venda informado.');
        }

        res.send(await saleService.getSale(sale_id));
        logger.info(`Buscando venda ${sale_id}`);
    } catch (err) {
        next(err);
    }
}

export default {
    createSale,
    getAllSales,
    getSale,
}