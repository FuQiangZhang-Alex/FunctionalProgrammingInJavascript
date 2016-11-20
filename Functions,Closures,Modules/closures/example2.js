var outer = 'outer';
var copy;
function outerFn() {
  var inner = 'inner';
  function innerFn(param) {
    console.log(outer);
    console.log(inner);
    console.log(param);
    console.log(magic);
  }
  copy = innerFn;
}

console.log(magic);
var magic = 'magic';
outerFn();
copy('copy');
