import * as express from 'express';
import { getEvents, postEvent, updateEvent } from '../controllers/event';
import { checkAdminPermissions } from '../middleware/checkAdminPermissions';
import { isAuthenticated } from '../middleware/isAuthenticated';

const router = express.Router();

router.get('/', getEvents);

router.patch('/:id', isAuthenticated, checkAdminPermissions, updateEvent);

router.post('/', isAuthenticated, checkAdminPermissions, postEvent);

export default router;
