import * as express from 'express';
import { getMessages, postMessage } from '../controllers/message';
import { isAuthenticated } from '../middleware/isAuthenticated';

const router = express.Router();

router.get('/', getMessages);
router.post('/', isAuthenticated, postMessage);

export default router;
