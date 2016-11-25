# ES6 syntax changes
ES6 brings in significant syntactic changes to JavaScript.
## Block scoping
To achieve block scope in JavaScript, Us **Immediately-invoked function expressions**(IIFE).
```JavaScript
var a = 1;
(function blockscope() {
  var a = 2;
  console.log(a);  // 2
})();
console.log(a);  // 1
```
You can enclose any statement(s) in a {}. Instead of using **var**, you can declare a variable using **let** in the block scope.
```JavaScript
"use strict";
var a = 1;
{
  let a = 2;
  console.log(a);  // 2
}
console.log(a);  // 1
```
One difference between **var** and **let** is that variables declared with **var** are attached to the entire function scope, while variables declared using **let** are attached to the block scope and they are not initialized unitil they appear in the block. You cannot access a variable declared with **let** earlier than its declaration, whereas with variables declared using **var**, the ordering doesn't matter.
```JavaScript
function fooey() {
  console.log(foo);  // reference error
  let foo = 5000;
}
```
Use **let** in for loops.
```JavaScript
for(let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);  // undefined
```
Using **const** keyword, you can create constants in the block scope.
```JavaScript
if(true) {
  const = 1;
  console.log(a);
  a = 100;  // "a" is read-only
}
```
> The same block scope rules apply to functions also. When a function is declared inside a block, it is available only within that scope.

## Default parameters
```JavaScript
function sum(a, b) {
  a = a || 0;
  b = b || 0;
  return (a + b);
}
console.log(sum(9, 9));  // 18
console.log(sum(9)); // 9
```
> || (the OR operator)

```JavaScript
function sum(a=0, b=0) {
  return (a + b);
}
console.log(sum(9, 9));
console.log(sum(9));
```

## Spread and rest
Spreads the element of the array in individual variables in the function parameters.
```JavaScript
function print(a, b) {
  console.log(a, b);
}
print(...[1, 2]);  // 1, 2
print(...[1, 2, 3]);  // 1, 2
```
Use spread in array assignment
```JavaScript
var a = [1, 2];
var b = [0, ...a, 3];
console.log(b);  // [0, 1, 2, 3]
```
the rest
```JavaScript
function print(a, ...b){
  console.log(a, b);
}
console.log(print(1, 2, 3, 4, 5));  // 1 [2, 3, 4, 5]
```

## Destructuring
The concept of pattern match.
```JavaScript
var [start, end] = [0, 5];
for(let i = start; i < end; i++) {
  console.log(i);
}
```
```JavaScript
function fn() {
  return [1, 2, 3];
}
var [a, b, c] = fn();
console.log(a, b, c);  // 1 2 3
var [d,, f] = fn();
console.log(d, f);  // 1 3
var [e, ] = fn();
console.log(e);  // 1
```
```JavaScript
function f() {
  return {
    a: 'a',
    b: 'b',
    c: 'c'
  };
}
var {a: a, b: b, c: c} = f();
console.log(a, b, c);
```

## Object literals

## Template literals

## Maps and sets

## Symbols

## Iterators
```JavaScript
var a = [1, 2];
var i = a[Symbol.iterator]();
console.log(i.next());  // {value: 1, done: false}
console.log(i.next());  // {value: 2, done: false}
console.log(i.next());  // {value: undefined, done: true}
```

## for .. of loops
```JavaScript
var list = ['Sun', 'Mon', 'Tue'];
for( let i in list ) {
  console.log(i);  // 0 1 2 - iterate index
}
for( let i of list ) {
  console.log((i));  // 'Sun' 'Mon' 'Tue' - iterate values
}
```
## Arrow functions
```JavaScript
// traditional function
function multiply(a, b) {
  return a * b;
}
// Arrow
var multiply = (a, b) => a * b;
console.log(multiply(1, 2));  // 2

// single argument single statement
// arg => expression;
var f1 = x => console.log('just X');

// multiple arguments, single statement
// (arg1, [, arg2]) => expression;
var f2 = (x, y) => x * y;
console.log(f2(2, 2));  // 4

// single argument, multiple statements
// arg => {
//      statements;
//}
var f3 = x => {
  if(x > 5) {
    console.log(x);
  } else {
    console.log(x + 5);
  }
}
f3(6); // 6

// multiple arguments, multiple statements
// (arg1 [, arg2]) => {
//               statements;
// }
var f4 = (x, y) => {
  if(x != 0 && y != 0) {
    return x * y;
  }
}
console.log(f4(2, 2));  // 4

// with no argument, single statement
// () => expression;
var f5 = () => 2*2;
console.log(f5()); // 4

// IIFE
console.log((x => x * 3)(3));  // 9
```
