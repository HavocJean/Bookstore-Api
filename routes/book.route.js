import express from 'express';
import bookController from '../controllers/book.controller.js';

const router = express.Router();

router.post('/', bookController.createBook);
router.put('/', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBook);

router.post('/info', bookController.createInfo);
router.put('/info', bookController.updateInfo);
router.delete('/info/:id', bookController.deleteInfo);

router.post('/info/:id/rate', bookController.createRate);
router.delete('/info/:id/rate/:position', bookController.deleteRate);

export default router;