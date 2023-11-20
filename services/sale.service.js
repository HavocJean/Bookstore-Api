import saleRepository from '../repositories/sale.repository.js';
import bookRepository from '../repositories/book.repository.js';

async function createSale(sale) {
    let book = await bookRepository.getBookStockValue(sale.bookId);

    if(book.stock <= 0) {
        throw new Error('Estoque desse produto indisponível.');
    }

    book.bookId = sale.bookId;
    book.stock = book.stock-1;

    await bookRepository.updateBook(book);

    sale.value = book.value;
    return await saleRepository.insertSale(sale);
}

async function getSales(client_id, book_id, author_id) {
    if(client_id) {
        return await saleRepository.getSaleByClient(client_id);
    }

    if(book_id) {
        return await saleRepository.getSaleByBook(book_id);
    }

    if(author_id) {
        return await saleRepository.getSalebyAuthor(author_id);
    }

    return await saleRepository.getSales();
}

async function getSale(sale_id) {
    return await saleRepository.getSale(sale_id);
}

export default {
    createSale,
    getSales,
    getSale
}
