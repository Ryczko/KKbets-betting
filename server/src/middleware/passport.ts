import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';
import { User } from '../models/User';

const GoogleStrategy = passportGoogle.Strategy;

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
