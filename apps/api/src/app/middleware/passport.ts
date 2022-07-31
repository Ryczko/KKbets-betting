import * as passport from 'passport';
import * as passportJWT from 'passport-jwt';
import * as passportGoogle from 'passport-google-oauth20';
import * as randomstring from 'randomstring';

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
      callbackURL: '/api/google/redirect'
    },
    async (accessToken, refreshToken, profile, done) => {
      const userGoogle = await User.findOne({ googleId: profile.id });
      if (userGoogle) {
        await userGoogle.updateOne({ avatarUrl: profile._json.picture });
        done(null, userGoogle);
      } else {
        let username = profile.name.givenName.trim();

        if (profile.name.familyName) {
          username = `${username} ${profile.name.familyName.trim()}`;
        }

        if (username.length > 19) {
          username = username.slice(0, 19);
        }

        let exUsersLen = (await User.find({ username })).length;
        while (exUsersLen > 0) {
          const hash = randomstring.generate({ length: 5, charset: 'alphanumeric' });
          username = exUsersLen > 0 ? `${username}#${hash}` : username;
          exUsersLen = (await User.find({ username })).length;
        }

        const newUser = await new User({
          username: username,
          email: profile.emails[0].value,
          googleId: profile.id,
          avatarUrl: profile._json.picture
        }).save();
        done(null, newUser);
      }
    }
  )
);
