import express, { Request, Response } from 'express';
import passport, { use } from 'passport';
import { Team, validateTeam } from '../models/Team';
import { User } from '../models/User';

const isAuthenticated = passport.authenticate('jwt', { session: false });

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const teams = await Team.find({});
        res.send(teams);
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

        const exists = await Team.find({ name: req.body.name });
        if (exists.length > 0) {
            return res.status(400).send('Team with that name exists');
        }
        const team = new Team({
            name: req.body.name,
            shortName: req.body.shortName,
            image: req.body.image
        });
        const { error } = validateTeam(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        await team.save();
        res.status(201).send(team);
    } catch (error) {
        res.status(500).send('Something went wrong').end();
    }
});

export default router;
