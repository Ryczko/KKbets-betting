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
                await userGoogle.updateOne({ avatarUrl: profile._json.picture });

                done(null, userGoogle);
            } else {
                const exUsers = await User.find({ username: new RegExp('^' + profile.displayName + '$', 'i') });
                const name = exUsers.length > 0 ? `${profile.displayName} (${exUsers.length})` : profile.displayName;
                const newUser = await new User({
                    username: name,
                    email: profile.emails[0].value,
                    googleId: profile.id,
                    avatarUrl: profile._json.picture
                }).save();
                done(null, newUser);
            }
        }
    )
);
