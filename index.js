const app = "I don't do much."



var kittens = ["Milo", "Otis", "Garfield"];
var newKittens = kittens;
var destructivelyAppendKitten = function(name){
  // kittens = ["Milo", "Otis", "Garfield"];
  kittens.push(name);
};

var destructivelyPrependKitten = function (name) {
  // kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift(name);
};

var destructivelyRemoveLastKitten = function () {
  // kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop();
};
var destructivelyRemoveFirstKitten = function () {
  // kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift();
};
var kittens = ["Milo", "Otis", "Garfield"];

var appendKitten = function(name){
    var kittens = ["Milo", "Otis", "Garfield"];
    var newKittens = kittens;
    newKittens.push(name);
    return newKittens;
};

var prependKitten = function (name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  var newKittens = kittens;
  newKittens.unshift(name);
  return newKittens;
};

var removeLastKitten = function () {
  var kittens = ["Milo", "Otis", "Garfield"];
  var newKittens = kittens;
  newKittens.pop();
  return newKittens;
};
var removeFirstKitten = function () {
  var kittens = ["Milo", "Otis", "Garfield"];
  var newKittens = kittens;
  newKittens.shift();
  return newKittens;
};
