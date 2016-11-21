// each
var _ = require('./underscore');
function print(n) {
  console.log(n);
}
_.each([1, 2, 3], print);

// range
console.log(_.range(10)); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(_.range(1, 11));  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(_.range(0, 30, 5));  // [ 0, 5, 10, 15, 20, 25 ]
console.log(_.range(0, -10, -1));  // [ 0, -1, -2, -3, -4, -5, -6, -7, -8, -9 ]
console.log(_.range(0));  // []
// fast and convenient way to create and initialize an array with values.
console.log(_.range(3).map(function() {return 'a';}));  // [ 'a', 'a', 'a' ]

// reduce()
var sum = _.reduce([1, 2, 3], function(accumulator, num) {return accumulator + num;}, 0);
console.log(sum);

// filter()
var evens = _.filter(_.range(11), function(num) {return num % 2 == 0;});
console.log(evens);

// invoke
console.log(_.invoke([[5, 1, 7], [3, 2, 1]], 'sort'));  // [ [ 1, 5, 7 ], [ 1, 2, 3 ] ]
// console.log(_.invoke(['new', 'old', 'cat'], 'sort')); error: sort is not one of String's method
console.log(_.invoke(['new', 'old', 'cat'], 'toUpperCase'));

// uniq()
console.log(_.uniq([1, 1, 2, 2, 3]));  // [ 1, 2, 3 ]

// partition()
function isOdd(n) {
  return n%2 != 0;
}
console.log(_.partition(_.range(11), isOdd));  // [ [ 1, 3, 5, 7, 9 ], [ 0, 2, 4, 6, 8, 10 ] ]

// compact()
console.log(_.compact([0, 1, false, 2, '', 3, null, NaN]));  // [ 1, 2, 3 ]

// without()
console.log(_.without([1, 2, 3, 4, 5, 6, 1, 2, 0, 1, 1], 0, 1, 2)); // [ 3, 4, 5, 6 ]
