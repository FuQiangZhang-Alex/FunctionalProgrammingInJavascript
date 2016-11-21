# Definition
An array is an ordered set of values. You can refer to the array elements with a name and index.  
3 ways to create arrays
```Javascript
var a = new Array(1, 2, 3);
var a = Array(1, 2, 3);
var a = [1, 2, 3]
```
> If you pass a single number value to the **Array()** constructor or function, Javascript considers this parameter as the length of the array, not as single element.

```Javascript
var days = [];
days[0] = 'Sunday';
days[1] = 'Monday'
```
Javascript internally stores array elements as standard object properties, using index as the property name. The length property always returns the index of last element plus one.
```Javascript
var colors = [];
colors[30] = ['Green'];
console.log(colors.length);  // 31
```
You can also assign to the length property. Writing 0 empties it entirely.
```Javascript
var colors = ['red', 'blue', 'yellow'];
console.log(colors.length);
colors.length = 2;
console.log(colors);  // ['red', 'blue'] - yellow has been removed
colors.length = 0;
console.log(colors);  // [] the colors array is empty
colors.length = 3;
console.log(colors);  // [undefined, undefined, undefined]
```
If you query a non-existent array index, you get *undefined*  
Using **forEach()** iterating array:
```Javascript
var colors = ['red', 'blue', 'yellow'];
colors.forEach(function(color) {
  console.log(color);
});
```
Other useful methods
* concat() - join 2 arrays and returns a new array
* join() - join all elements into a string, default delimiter is comma(,).
* pop() - removes the last element and returns that element.
* push() - adds one or more elements to the end of an array and returns the resulting length of the array.
* shift() - removes the first element and returns that element.
* unshift() - adds one or more elements to the front of an array and return the new length
* reverse()
* sort() - can take a callback function to define how the elements are compared.

## underscore.js
Like jQuery's $ module, Underscore comes with a _ module defined. You will call all functions using this module reference.
* ***each()***
```Javascript
var _ = require('underscore');
function print(n) {
  console.log(n);
}
_.each([1, 2, 3], print);
```
* ***range() & map()***
```Javascript
console.log(_.range(10)); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(_.range(1, 11));  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(_.range(0, 30, 5));  // [ 0, 5, 10, 15, 20, 25 ]
console.log(_.range(0, -10, -1));  // [ 0, -1, -2, -3, -4, -5, -6, -7, -8, -9 ]
console.log(_.range(0));  // []
// fast and convenient way to create and initialize an array with values.
console.log(_.range(3).map(function() {return 'a';}));  // [ 'a', 'a', 'a' ]
```
* ***reduce()***
```Javascript
var sum = _.reduce([1, 2, 3], function(accumulator, num) {return accumulator + num;}, 0);
console.log(sum);
```
* ***filter()***
```Javascript
var evens = _.filter(_.range(11), function(num) {return num % 2 == 0;});
console.log(evens);
```
* ***invoke***  
It calls a specific function on each element.
```Javascript
console.log(_.invoke([[5, 1, 7], [3, 2, 1]], 'sort'));  // [ [ 1, 5, 7 ], [ 1, 2, 3 ] ]
// console.log(_.invoke(['new', 'old', 'cat'], 'sort')); error: sort is not one of String's method
console.log(_.invoke(['new', 'old', 'cat'], 'toUpperCase'));
```
* ***uniq()***  
removes all duplicates of an array
```Javascript
console.log(_.uniq([1, 1, 2, 2, 3]));  // [ 1, 2, 3 ]
```
* ***partition()***  
splits the array into two; one whose elements satisfy the predicate and the other don't.
```Javascript
function isOdd(n) {
  return n%2 != 0;
}
console.log(_.partition(_.range(11), isOdd));  // [ [ 1, 3, 5, 7, 9 ], [ 0, 2, 4, 6, 8, 10 ] ]
```
* ***compact()***  
returns a copy of the array without all falsy values(false, null, 0, '', undefined, NaN)
```Javascript
console.log(_.compact([0, 1, false, 2, '', 3, null, NaN]));  // [ 1, 2, 3 ]
```
* ***without()***  
returns a copy of the array with all instances of the specific values removed.
```Javascript
console.log(_.without([1, 2, 3, 4, 5, 6, 1, 2, 0, 1, 1], 0, 1, 2)); // [ 3, 4, 5, 6 ]
```
