
import {Router} from 'express';
const router = Router();
import { getSavedNews, storeNews, deleteNews} from '../controllers/indexController'

router.get('/saved-news', getSavedNews);
router.post('/saved-news', storeNews);
router.delete('/saved-news/:id', deleteNews);

export default router;