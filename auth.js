const passport = require('passport');
const { Strategy } = require('passport-local');
const UserModel = require('./models/AdminUser');

function initialize() {
    passport.use(new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    }, (email, password, done) => {
        UserModel.findOne({ email, password })
            .select('name email created').exec()
            .then(user => {
                return done(null, user);
            }, () => {
                return done({
                    message: 'Invalid email or password!'
                });
            });
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        UserModel.findOne({ _id: id })
            .select('name email created').exec()
            .then(user => {
                done(null, user);
            });
    });
}

function authenticatedMiddleware(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/');
    }
}

module.exports = {initialize, authenticatedMiddleware};