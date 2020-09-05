const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('./models/user');

//DB setup
mongoose.connect('mongodb://localhost:auth/auth', { useFindAndModify: false, useNewUrlParser: true,  useUnifiedTopology: true  } );


//app.use(bodyParser.urlencoded( { extended : true } ) );
app.use(bodyParser.json( { type: '*/*' } ) );
app.use(cors());
app.use(morgan());
require('./routes/routes') (app);

//server setup
const port = process.env.PORT || 5000;
app.listen( port );
