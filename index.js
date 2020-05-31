var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}
function appendKitten(name){
  var addKitten = [...kittens, name]
  return addKitten;
}
function prependKitten(name){
  var reKitten = [name, ... kittens];
  return reKitten;
}
//Arrays removeLastKitten() removes the last kitten in the kittens array and returns a new array,
// leaving the kittens array unchanged:
function removeLastKitten() {
var  removeKitten = kittens.pop();
return removeKitten;
}
