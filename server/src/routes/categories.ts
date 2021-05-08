import express from 'express';
import { getCategories, postCategory } from '../controllers/category';
import { checkAdminPermissions } from '../middleware/checkAdminPermissions';
import { isAuthenticated } from '../middleware/isAuthenticated';

const router = express.Router();

router.get('/', getCategories);
router.post('/', isAuthenticated, checkAdminPermissions, postCategory);

export default router;
