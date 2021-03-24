const express = require("express");
const app = express();
var cors = require('cors')
const functions = require('firebase-functions');

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(express.json());
app.use(cors({origin: '*'}));
//app.use(cors({origin: 'https://inscripciones-6247c.web.app'}));

//routes
app.use(require('./routes'));

exports.app = functions.https.onRequest(app);

