
import {Router} from 'express';
import {getSavedNews} from '../controllers/index.controller'
const router = Router();

router.get('/saved-news', 
  (req, res) => res.send('testing route')
)

export default router;