import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import * as passport from 'passport';

const router = express.Router();

router.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/redirect', (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('google', { session: false }, (err, user) => {
    const token = user.generateAuthToken();
    res.cookie('jwt', token);
    res.redirect(`${process.env.APP_URL || 'http://localhost:4200'}`);
  })(req, res, next);
});

export default router;
