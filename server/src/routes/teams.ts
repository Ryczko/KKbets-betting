import express, { Request, Response } from 'express';
import { Team, validateTeam } from '../models/Team';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const teams = await Team.find({});
        res.send(teams);
    } catch (error) {
        res.status(500).send('Something went wrong.').end();
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
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
