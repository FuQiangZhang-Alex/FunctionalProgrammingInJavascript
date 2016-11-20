var outer = 'outer';
var copy;
function outerFn() {
  var inner = 'inner';

  function innerFn() {
    console.log(outer);
    console.log(inner);
  }
  copy = innerFn;
}
outerFn();
copy();
