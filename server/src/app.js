const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
const cors = require('cors');
const index = require('./routes/index');
const albumRoute = require('./routes/albumRoute');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', index);
app.use('/albums', albumRoute);

module.exports = app;