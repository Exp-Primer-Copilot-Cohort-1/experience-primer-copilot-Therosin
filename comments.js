// Create web server

// import express
const express = require('express');
// import body-parser
const bodyParser = require('body-parser');
// import mongoose
const mongoose = require('mongoose');
// import cors
const cors = require('cors');
// import path
const path = require('path');

// import routes
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');

// create express app
const app = express();

// connect to database with mongoose
mongoose.connect('mongodb://localhost:27017/sauces', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log('Connexion à MongoDB échouée !', err));

// use body-parser
app.use(bodyParser.json());

// use cors
app.use(cors());

// use static files in folder images
app.use('/images', express.static(path.join(__dirname, 'images')));

// use routes
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

// export app
module.exports = app;