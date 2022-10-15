const express = require('express');
const router = express.Router();
const messages = require('../public/javascripts/messages');
const moment = require('moment');

// Get /new page
router.get('/', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  
  messages.forEach((message) => {
    const initialDate = message.initialDate;
    message.timeElapsed = moment(initialDate).fromNow();
  });

  messages.unshift({
    title: req.body.title,
    user: req.body.username,
    mainContent: req.body.mainContent,
    initialDate: new Date(),
    timeElapsed: moment(this.initialDate).fromNow(),
  });
  res.redirect('/');
});

module.exports = router;
