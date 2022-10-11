const express = require('express');
const router = express.Router();
const {messages} = require('./index');

// Get /new page
router.get('/', (req, res) => {
    res.render('form');
});

router.post('/', (req, res) => {
    messages.push({
        title: req.body.title,
        user: req.body.username,
        mainContent: req.body.mainContent,
        added: new Date(), 
    });
    res.redirect('/');
});

module.exports = router;