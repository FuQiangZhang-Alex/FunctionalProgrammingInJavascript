// a function returns nothing and creates nothing
function Player() {}
// Add a function to the prototype property of the function
Player.prototype.useBat = function() {
  return true;
};

console.log(Player());  // undefined
// Now we call Player() as a constructor along with new
// 1. the instance is created
// 2. method useBat() is derived from the prototype of the function
var swingJay = new Player();
console.log(swingJay.useBat());  // true

// this
function globalAlias() {
  return this;
}
console.log(globalAlias());
var f = {
  name: 'f',
  func: function() {
    return this;
  }
};
console.log(f.func());
var member = 'global';
function fun() {
  this.member = 'f';
}
var o = new fun();
console.log(o.member);
