import express, { Request, Response } from 'express';

const router = express.Router();

// test route
router.post('/', (req: Request, res: Response) => {
    res.status(200).send(`response`);
});

export default router;
