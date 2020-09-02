const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

const tokenForUser = user => {
    const timeStamp = new Date().getTime();
    return jwt.encode( { sub: user.id, iat: timeStamp }, config.secret );
};

exports.signin = (req, res, next) => res.send( { token:  tokenForUser(req.user) } );

exports.signup = async(req, res, next) => {
    const { email, password } = req.body;

    if( !email || !password ) return res.status(422).send( { error : 'You must provide  email and password' } );

    try{
        const ExistingUser = await User.findOne( { email  } );
        //checks for the existence
        if(ExistingUser) return res.status(422).send( { error : 'Email already in use' } ) ;
            //If not user exist create a user record.
            try{
                const newUser = await new User( { email, password } ).save();
                //respond to request indicating the user  record is created
                res.json( { token : tokenForUser(newUser) } );
                }
                catch(err){
                    next(err);
            }
        
        }

    catch (err){
          next(err);
                        }
};