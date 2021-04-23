import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', async (req: Request, res: Response, next) => {
    try {
        res.send(req.user);
    } catch (error) {
        next(error);
    }
});

export default router;
