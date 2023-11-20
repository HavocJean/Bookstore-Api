import express from 'express';
import authorController from '../controllers/author.controller.js';

const router = express.Router();

router.post('/', authorController.createAuthor);
router.put('/', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);
router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthor);

export default router;