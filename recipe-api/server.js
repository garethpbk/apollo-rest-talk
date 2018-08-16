const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);

require('./models/Recipe');

const server = express();

server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(cors());

server.get('/', (req, res) => {
  res.status(200).send('recipe-api');
});

server.use('/api/recipes', require('./routes/recipes'));

module.exports = server;
