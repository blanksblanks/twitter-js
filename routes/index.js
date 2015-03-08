var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');

// now every request body will be transformed into a body object and
// attached to the req object. So we can access body variables like
// req.body.name and req.body.text

module.exports = function(io) {

  router.use(bodyParser.urlencoded({
          extended: false
  }));

  router.use(bodyParser.json());

  // note not app.VERB, router.VERB
  router.get('/', function (req, res) {
    var tweets = tweetBank.list();
    res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
  });


  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    //console.log(list);
    res.render( 'index', {title: 'Twitter.js - Posts by '+ name, tweets: list, showForm: true } );
  });


  router.get('/users/:name/tweets/:id', function(req, res) {
    var id = parseInt(req.params.id);
    var list = tweetBank.find( {id: id} );
    console.log(list);
    res.render( 'index', {title: 'Tweet '+ id, tweets: list, showForm: true } );
  });

  // pull form info out of req.body and push into data astore
  router.post('/submit', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/'); // refresh page immediately see new tweet
  });

  return router
}

// we expert the router so app.js can use it as middleware handler for all / routes and subroutes
// router allows for modular definition of routes, then export and attach the router to app
// module.exports = router;