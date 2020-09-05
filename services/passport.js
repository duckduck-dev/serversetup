const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const localStrategy = require('passport-local');
const bcrypt = require('bcrypt');

//localStrategy
const localLogin = new localStrategy( { usernameField: 'email' } , async(email, password, done) => {
    //verify the email and password, then call done with the user
    //else, call done with false
    try{
        const user = await User.findOne( { email } );
        if(!user) return done(null, false)
        //compare password
                try{
                    const Match = await bcrypt.compare(password, user.password);
                    if(Match) return done(null, user);
                    return done(null, false);
                }catch(err){
                    return done(err, false);
                    }

    }catch(err){
        return done(err, false);
    }
    

} );

//jwtStrategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
     secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy( jwtOptions, async (payload, done) => {
    //see if the user Id in the payload exists in th database
    //if it does, call  done with user obj
    //else, call done without user obj

    try{
            const user = await User.findById( payload.sub );
            if(user) return done(null, user);
            else return done(null, false);
    }
    catch(err){
        return done(err, false);
    }  
} );

passport.use(jwtLogin);
passport.use(localLogin);