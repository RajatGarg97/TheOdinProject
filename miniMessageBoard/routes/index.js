var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Rajat",
    added: new Date()
  },
  {
    text: "Hi buddy!",
    user: "Sajal",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Mini Message Board',
    messages: messages
  });
});

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/new', (req, res) => {
  messages.push({
    text: req.body.msg,
    user: req.body.user,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;
