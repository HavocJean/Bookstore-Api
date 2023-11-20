import express from 'express';
import saleController from '../controllers/sale.controller.js';

const router = express.Router();

router.post('/', saleController.createSale);
router.get('/:id', saleController.getSale);
router.get('/', saleController.getAllSales);

export default router;