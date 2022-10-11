var express = require('express');
var indexRouter = express.Router();

const messages = [
  {
    title: 'Hi there!',
    user: 'Amando',
    mainContent: 'I feel great!',
    added: new Date(),
  }, 
  {
    title: 'Hello World!',
    user: 'Charles',
    mainContent: 'What is up?',
    added: new Date(),
  },
];

/* GET home page. */
indexRouter.get('/', function(req, res, next) {

  res.render('index', { 
    title: 'Express', 
    messages
  });
});

module.exports = {indexRouter, messages};
