
import {Router} from 'express';
const router = Router();
import {getSavedNews} from '../controllers/indexController'

router.get('/saved-news', getSavedNews);
// router.post('/saved-news', );
// router.delete('/saved-news', );

export default router;