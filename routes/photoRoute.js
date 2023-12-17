import express from 'express';
import { createPhoto } from '../controllers/photoController.js';

const router = express.Router();

router.route('/').post(createPhoto);

export default router;
