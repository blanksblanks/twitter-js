var _ = require('underscore');

data = []

var add = function (name, text) {
  data.push({ name: name, text: text });
};

// look up clone and where

var list = function () {
  return _.clone(data);
};

var find = function (properties) {
  return _.where(data, properties);
};

module.exports = { add: add, list: list, find: find };


var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Happy', 'Lucky', 'Hapi', 'Haps', 'Hahahappy','Happylicious','Happay','Happito','Happy-go-lucky'];
  var fakeLasts = ['Shiba', 'the Shiba', 'Puppy', 'the Dog', 'the Inu', 'Inu', 'Shiba Inu', 'Papi', 'the Shiba Inu', 'the Puppy Inu'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing','tasty','fantastic','captivating','cute','beautiful','amazeballs'];
  return "Molly is " + randArrayEl(awesome_adj) + "! You are just so " + randArrayEl(awesome_adj) + ". #whenhappymetmolly #shibacatlove";
};

for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

console.log(data);