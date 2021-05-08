import express from 'express';
import { getTeams, postTeam } from '../controllers/team';
import { checkAdminPermissions } from '../middleware/checkAdminPermissions';
import { isAuthenticated } from '../middleware/isAuthenticated';

const router = express.Router();

router.get('/', getTeams);

router.post('/', isAuthenticated, checkAdminPermissions, postTeam);

export default router;
