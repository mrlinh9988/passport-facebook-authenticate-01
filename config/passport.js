var FacebookStrategy = require('passport-facebook').Strategy;
var LocalStrategy = require('passport-local').Strategy;
const mongoose = require('../config/database');


module.exports = function (passport) {
    // Facebook Strategy
    passport.use(new FacebookStrategy({
        clientID: 577997806089812,
        clientSecret: 'e8db94e14aac039db5b49736481e7e7b',
        callbackURL: "https://9e6ef755.ngrok.io/auth/facebook/callback"
    },
        function (accessToken, refreshToken, profile, done) {
            
            console.log('refeshToken: ', refreshToken.session);
            const data = {
                accessToken, refreshToken, profile
            }
            done(null, data);
            // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
            //     return cb(err, user);
            // });
        }
    ));

    passport.serializeUser(function (user, done) {
        console.log('serialize user: ', user);
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        console.log('deserialize user: ', user);

        done(null, user)
        // User.findById(id, function (err, user) {
        //     done(err, user);
        // });
    });
}