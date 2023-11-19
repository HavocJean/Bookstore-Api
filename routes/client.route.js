import express from 'express';
import clientController from '../controllers/client.controller.js';

const router = express.Router();

router.post('/', clientController.createClient);
router.put('/', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);
router.get('/', clientController.getAllClients);
router.get('/:id', clientController.getClient);

export default router;