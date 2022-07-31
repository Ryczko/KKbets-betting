import { Team, validateTeam } from '../models/Team';
import { Request, Response } from 'express';

export const getTeams = async (req: Request, res: Response): Promise<any> => {
  try {
    const teams = await Team.find({}).sort({ name: 1 });
    res.send(teams);
  } catch (error) {
    res.status(500).send('Something went wrong.');
  }
};

export const postTeam = async (req: Request, res: Response): Promise<any> => {
  try {
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
    res.status(500).send('Something went wrong');
  }
};
