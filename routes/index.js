var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

// note not app.VERB, router.VERB
router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

// we expert the router so app.js can use it as middleware handler for all / routes and subroutes
// router allows for modular definition of routes, then export and attach the router to app
module.exports = router;