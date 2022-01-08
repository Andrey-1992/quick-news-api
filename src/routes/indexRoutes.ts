
import {Router} from 'express';
const router = Router();
import { getSavedNews, storeNews} from '../controllers/indexController'

router.get('/saved-news', getSavedNews);
router.post('/saved-news', storeNews);
// router.delete('/saved-news', );

export default router;