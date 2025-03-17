const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

const authController = require('./controllers/auth.js');

const port = process.env.PORT ? process.env.PORT : '3000';

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// GET 
app.get("/", async (req, res) => {
  res.send("hello, friend!");
});

app.use('/auth', authController);

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});