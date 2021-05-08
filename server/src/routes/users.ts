import express from 'express';
import { getBestUsers } from '../controllers/user';
const router = express.Router();

router.get('/', getBestUsers);

export default router;
