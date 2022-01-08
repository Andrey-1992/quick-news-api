
import {Router} from 'express';
const router = Router();
import {getSavedNews} from '../controllers/index.controller'

router.get('/saved-news', (req, res) => res.send('testing route'));

export default router;