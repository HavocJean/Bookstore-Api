import clientRepository from '../repositories/client.repository.js';
import saleRepository from '../repositories/sale.repository.js';

async function createClient(client) {
    return await clientRepository.insertClient(client);
}

async function updateClient(client) {
    return await clientRepository.updateClient(client);
}

async function deleteClient(client_id) {
    const sale = saleRepository.getSaleByClient(client_id);

    if(sale.length > 0) {
        throw new Error('Existe vendas para esse cliente, não é possível excluir.');
    }

    await clientRepository.deleteClient(client_id);
}

async function getClients() {
    return await clientRepository.getClients();
}

async function getClient(client_id) {
    return await clientRepository.getClient(client_id);
}

export default {
    createClient,
    updateClient,
    deleteClient,
    getClients,
    getClient
}
