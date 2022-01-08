
import {Router} from 'express';
const router = Router();
import {getSavedNews} from '../controllers/indexController'

router.get('/saved-news', (req, res) => res.send('testing route'));
// router.post('/saved-news', (req, res) => res.send('testing route'));
// router.delete('/saved-news', (req, res) => res.send('testing route'));

export default router;