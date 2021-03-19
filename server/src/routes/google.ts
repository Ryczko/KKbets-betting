import express, { NextFunction, Request, Response } from 'express';
import passport from 'passport';

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
        res.redirect('../../');
    })(req, res, next);
});

export default router;
