import * as express from 'express';
import { getBonus } from '../controllers/bonus';

import { isAuthenticated } from '../middleware/isAuthenticated';

const router = express.Router();

router.get('/', isAuthenticated, getBonus);

export default router;
