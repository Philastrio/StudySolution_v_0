import passport from 'passport';
import GithubStrategy from 'passport-github';
import User from './models/User';

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: 'http://localhost:4000/auth/github/callback',
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());