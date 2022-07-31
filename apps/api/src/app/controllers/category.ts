import { Request, Response } from 'express';
import { Category, validateCategory } from '../models/Category';

export const getCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    const categories = await Category.find({}).sort({ name: 1 });
    res.send(categories);
  } catch (error) {
    res.status(500).send('Something went wrong.');
  }
};

export const postCategory = async (req: Request, res: Response): Promise<any> => {
  try {
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
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send('Something went wrong');
  }
};
