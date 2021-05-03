import express, { Request, Response } from 'express';
import passport from 'passport';
import { Category, validateCategory } from '../models/Category';
import { User } from '../models/User';

const isAuthenticated = passport.authenticate('jwt', { session: false });

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const categories = await Category.find({});
        res.send(categories);
    } catch (error) {
        res.status(500).send('Something went wrong.').end();
    }
});

router.post('/', isAuthenticated, async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user.admin) {
            return res.status(400).send('You do not have permission');
        }

        const exists = await Category.find({ name: req.body.name });
        if (exists.length > 0) {
            return res.status(400).send('Category with that name exists');
        }
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
