var express = require('express');
var router = express.Router();
const messages = require('../public/javascripts/messages');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express', 
    messages
  });
});

module.exports = router;
