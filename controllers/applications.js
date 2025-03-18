const express = require('express');
const router = express.Router();
const User = require('../models/user.js');


// controllers/applications.js

router.get('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    res.render('applications/index.ejs', {
      user: currentUser
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// GET /users/:userId/applications/new
router.get('/new', async (req, res) => {
  res.render('applications/new.ejs');
});



module.exports = router;
