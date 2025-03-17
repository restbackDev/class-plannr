const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const port = process.env.PORT ? process.env.PORT : "3000";
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// GET 
app.get("/", async (req, res) => {
  res.render("index.ejs", {
    user: req.session.user,
  });
});


app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});