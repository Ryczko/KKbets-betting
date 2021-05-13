import express from 'express';
import { editUser, getBestUsers } from '../controllers/user';
import { isAuthenticated } from '../middleware/isAuthenticated';
const router = express.Router();

router.get('/', getBestUsers);
router.patch('/', isAuthenticated, editUser);

export default router;
