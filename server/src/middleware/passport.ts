import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';
import passportJWT from 'passport-jwt';

import { User } from '../models/User';

const JWTStrategy = passportJWT.Strategy;
const GoogleStrategy = passportGoogle.Strategy;

passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: (req) => req.cookies.jwt,
            secretOrKey: process.env.JWT_PRIVATE_KEY || 'privateKey'
        },
        async (jwt_payload, done) => {
            const userById = await User.findById(jwt_payload._id);
            if (userById) return done(null, userById);
        }
    )
);

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_API_CLIENT,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/google/redirect'
        },
        async (accessToken, refreshToken, profile, done) => {
            const userGoogle = await User.findOne({ googleId: profile.id });
            if (userGoogle) {
                done(null, userGoogle);
            } else {
                const newUser = await new User({
                    username: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                }).save();
                done(null, newUser);
            }
        }
    )
);
