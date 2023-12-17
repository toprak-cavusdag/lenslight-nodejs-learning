import express from 'express';
import { getAboutPage, getIndexPage } from '../controllers/pageController.js';

const router = express.Router();

router.get('/', getIndexPage);
router.get('/about', getAboutPage);

export default router;
