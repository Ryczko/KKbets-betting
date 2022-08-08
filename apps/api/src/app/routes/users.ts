import * as express from 'express';
import { editUser, getBestUsers, getUser } from '../controllers/user';
import { isAuthenticated } from '../middleware/isAuthenticated';
const router = express.Router();

router.get('/:username', getUser);
router.get('/', getBestUsers);
router.patch('/', isAuthenticated, editUser);

export default router;
