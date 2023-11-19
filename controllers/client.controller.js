import clientService from '../services/client.service.js';

async function createClient(req, res, next) {
    try {
        const client = req.body;

        if(!client.name || !client.email || !client.password || !client.phone || !client.address) {
            throw new Error('Existe informações obrigátorios não enviadas.');
        }

        res.send(await clientService.createClient(client));
        logger.info(`Cadastro de um novo cliente ${JSON.stringify(client)}`);
    } catch (err) {
        next(err);
    }
}

async function updateClient(req, res, next) {
    try {
        let client = req.body;

        if(!client.clientId || !client.name || !client.email || !client.password || !client.phone || !client.address) {
            throw new Error('Todas as informações são obrigátorios.');
        }

        client = await clientService.updateClient(client);
        res.send(client);
        logger.info(`Atualizando um novo cliente ${JSON.stringify(client)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteClient(req, res, next) {
    try {
        const client_id = req.params.id;

        if(!client_id || isNaN(client_id)) {
            throw new Error('Existe informações incorretas que foram enviadas.');
        }
        
        await clientService.deleteClient(client_id);
        res.end();
        logger.info(`Excluindo cliente: ${client_id}`);
    } catch (err) {
        next(err);
    }
}

async function getAllClients(req, res, next) {
    try {
        res.send(await clientService.getClients());
        logger.info('Buscando todos os clientes');
    } catch(err) {
        next(err);
    }
}

async function getClient(req, res, next) {
    try {
        const client_id = req.params.id;

        if(!client_id || isNaN(client_id)) {
            throw new Error('Não foi possível reconhecer o cliente informado.');
        }

        res.send(await clientService.getClient(client_id));
        logger.info(`Buscando cliente ${client_id}`);
    } catch (err) {
        next(err);
    }
}

export default {
    createClient,
    updateClient,
    deleteClient,
    getAllClients,
    getClient,
}