var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

// note not app.VERB, router.VERB
router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});


router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  //console.log(list);
  res.render( 'index', {title: 'Twitter.js - Posts by '+ name, tweets: list } );
});


router.get('/users/:name/tweets/:id', function(req, res) {
  var id = parseInt(req.params.id);
  var list = tweetBank.find( {id: id} );
  console.log(list);
  res.render( 'index', {title: 'Tweet '+ id, tweets: list } );
});

// router.get('/users/:name', function(req, res) {
//   var name = req.params.name;
//   var list = tweetBank.find( {name: name} );
//   var title = 'Twitter.js - Posts by ' + name;
//   res.render( 'index', { title: title, list: list } );
// });
// we expert the router so app.js can use it as middleware handler for all / routes and subroutes
// router allows for modular definition of routes, then export and attach the router to app
module.exports = router;