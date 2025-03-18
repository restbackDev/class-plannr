const express = require('express');
const router = express.Router();
const User = require('../models/user.js');


// GET /users/:userId/applications
router.get('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    res.render('applications/index.ejs', {
      user: currentUser //shows "Hello <Jason>" in dasboardPage
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

// POST /users/:userId/applications
router.post('/', async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // Push req.body (the new form data object) to the
    // applications array of the current user
    currentUser.applications.push(req.body);
    // Save changes to the user
    await currentUser.save();
    // Redirect back to the applications index view
    res.redirect(`/users/${currentUser._id}/applications`);
  } catch (error) {
    // If any errors, log them and redirect back home
    console.log(error);
    res.redirect('/');
  }
});

// GET /users/:userId/applications
router.get('/', async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // Render index.ejs, passing in all of the current user's
    // applications as data in the context object.
    res.render('applications/index.ejs', {
      applications: currentUser.applications,
    });
  } catch (error) {
    // If any errors, log them and redirect back home
    console.log(error);
    res.redirect('/');
  }
});

// GET /users/:userId/applications/:applicationId
router.get('/:applicationId', async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // Find the application by the applicationId supplied from req.params
    const application = currentUser.applications.id(req.params.applicationId);
    // Render the show view, passing the application data in the context object
    res.render('applications/show.ejs', {
      application: application,
    });
  } catch (error) {
    // If any errors, log them and redirect back home
    console.log(error);
    res.redirect('/');
  }
});





module.exports = router;
