Map is simple key-value map and can iterate its elements in the order of their insertion.
```Javascript
var founders = new Map();
founders.set('facebook', 'mark');
founders.set('google', 'larry');
console.log(founders.size);
console.log(founders.get('twitter'));  // undefined
console.log(founders.has('yahoo'));  // false
for( var [key, value] of founders) {
  console.log(key + 'founded by ' + value);
}
```

Array is not really array in Javascript.  
Array is object that have the following characteristics:
* The length property
* The functions that inherit from Array.prototype
* Special handling for keys that are numeric keys  
When we write and array index as numbers, they get converted to strings: arr[0] internally becomes arr['0']  
Be aware of:
* Accessing array elements by an index is not a constant time operation as it is in C. As arrays are actually key-value maps, the access will depend on the layout of the map and other factors.
* Javascript arrays are sparse, which means that the array can have gaps in it.
```Javascript
// array gaps
var t = [];
t[3] = 10,
t[10] = 3;
console.log(t); // [undefined, undefined, undefined, 10, ..., 3]
```

for, for...in
```Javascript
var a = [];
a[5] = 5;
for(var i = 0;i < a.length; i++) {
  console.log(a[i]);  // [undefined, undefined, undefined, undefined, undefined, 5]
}
for(var x in a) {
  console.log(x);  // 5, ignores 0 - 4
}
```
A matter of style
* Use the literal syntax for array creation
```Javascript
// bad
const items = new Array();
// good
const items = [];
```
* Use Array#push instead of a direct assignment to add item to an array
```Javascript
const stack = [];
// bad
stack[stack.length - 1] = 'push me';
// good
stack.push('push me');
```
