import express, { Request, Response } from 'express';
import { Category, validateCategory } from '../models/Category';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const categories = await Category.find({});
        res.send(categories);
    } catch (error) {
        res.status(500).send('Something went wrong.').end();
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const category = new Category({
            name: req.body.name
        });
        const { error } = validateCategory(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        await category.save();
        res.status(201).send(category);
    } catch (error) {
        res.status(500).send('Something went wrong').end();
    }
});

export default router;
