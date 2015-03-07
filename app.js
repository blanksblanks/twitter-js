var express = require( 'express' );
var morgan = require('morgan');
var swig = require('swig');

var app = express();

app.use(morgan('dev'));

// function to actually render html
app.engine('html', swig.renderFile);
// set default view engine to html
// so we don't have to specify every render
app.set('view engine', 'html');
// set views path to views folder (where we store templates)
app.set('views', './views'); // __dirname +

// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });
// only re-render view of data has actually changed, annoying in dev environment
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!

app.get('/', function (req, res) {
  // res.send('hello, world!')
  var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render('index', {title: 'Hall of Fame', people: people});
});

app.listen(3000, function() {
  console.log("server listening on http://localhost:3000");
});