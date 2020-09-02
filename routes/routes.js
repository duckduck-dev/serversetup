const passport = require('passport');
const Authentication = require('../controllers/authentication');
require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session : false } );
const requireSignin = passport.authenticate('local', { session : false } );

module.exports =  app => {

      app.get('/', requireAuth, (req, res) => res.send( { greetings:'Hi there' } ) );

      app.post('/signin', requireSignin, Authentication.signin);

      app.post( '/signup',  Authentication.signup);

} ;