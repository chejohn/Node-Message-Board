const moment = require('moment');

const messages = [
  {
    title: 'Hi there!',
    user: 'Amando',
    mainContent:
      'I feel great! hbaewfbhjfabfkhebahkebekhbfejkhabwfejhkbfejhkbefkjhbfejkhbfejhkbekjhebfkjhfeabwkjhfbekjhefbfekjhbfekjhbfekjhbfekhjefabkfejhb',
    added: moment(new Date()).fromNow(),
  },
  {
    title: 'Hello World!',
    user: 'Charles',
    mainContent: 'I love pie! Do you as well?',
    added: moment(new Date()).fromNow(),
  },
];

module.exports = messages;
