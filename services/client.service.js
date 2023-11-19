import clientRepository from '../repositories/client.repository.js';

async function createClient(client) {
    return await clientRepository.insertClient(client);
}

async function updateClient(client) {
    return await clientRepository.updateClient(client);
}

async function deleteClient(client_id) {
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
