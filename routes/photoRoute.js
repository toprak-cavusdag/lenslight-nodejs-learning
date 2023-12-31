import express from 'express';
import { createPhoto, getAllPhotos } from '../controllers/photoController.js';

const router = express.Router();

router.route('/').post(createPhoto).get(getAllPhotos);

export default router;
