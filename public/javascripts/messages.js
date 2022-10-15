const moment = require('moment');

const messages = [
  {
    title: 'Hi there!',
    user: 'Amando',
    mainContent:
      'I feel great! hbaewfbhjfabfkhebahkebekhbfejkhabwfejhkbfejhkbefkjhbfejkhbfejhkbekjhebfkjhfeabwkjhfbekjhefbfekjhbfekjhbfekjhbfekhjefabkfejhb',
    initialDate: new Date(),
    timeElapsed: moment(this.initialDate).fromNow(),
  },
  {
    title: 'Hello World!',
    user: 'Charles',
    mainContent: 'I love pie! Do you as well?',
    initialDate: new Date(),
    timeElapsed: moment(this.initialDate).fromNow(),
  },
];

module.exports = messages;
