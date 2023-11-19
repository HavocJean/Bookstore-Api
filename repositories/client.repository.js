import Client from '../models/client.model.js';
import bcrypt from 'bcrypt';

async function insertClient(client) {
    try {
        client.password = await bcrypt.hash(client.password, 10);

        return await Client.create(client);
    } catch (err) {
        throw err;
    }
}

async function updateClient(client) {
    try {    
        client.password = await bcrypt.hash(client.password, 10);

        await Client.update(client, {
            where: {
                clientId: client.clientId
            }
        });

        return client;
    } catch (err) {
        throw err;
    }
}

async function deleteClient(client_id) {
    try {
        await Client.destroy({
            where: {
                clientId: client_id
            }
        });
    } catch (err) {
        throw err;
    }
}

async function getClients() {
    try {
        return await Client.findAll({
            attributes: { exclude: ['password'] }
        });
    } catch (err) {
        throw err;
    }
}

async function getClient(client_id) {
    try {
        return await Client.findByPk(client_id, {
            attributes: { exclude: ['password'] }
        });
    } catch (err) {
        throw err;
    }
}

export default {
    insertClient,
    updateClient,
    deleteClient,
    getClients,
    getClient,
}