var express = require('express');
var router = express.Router();
var foo = require('../lavenues');


function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Venues Worldwide', sprite: makeid(), context: JSON.stringify(foo) });
});

module.exports = router;
