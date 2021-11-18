
import {Router} from 'express';
const router = Router();

router.get('/saved-news', 
  (req, res) => res.send('testing route')
)

export default router;