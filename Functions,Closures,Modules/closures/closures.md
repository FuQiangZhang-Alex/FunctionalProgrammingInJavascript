# What is closure ?
> closure is the scope created when a function is declared that allows the function to access and manipulate variables that are external to this function

> closures allow a function to access all the variables, as well as other functions, that are in scope when the function itself is declared.

```javascript
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
/* output
outer
inner
*/
```
>***Note***  
What phenomenon allows the inner variable to still be available when we execute the inner function, long after the scope in which it was created has gone away? When we declared **innerFn()** in **outerFn**, not only was the function declaration defined, but a closure was also created that encompasses not only the function declaration, but also the variables that are in scope at the point of the declaration. When **innerFn()**  executes, even if it's executed after the scope in which it was declared goes away, it has access to the original scope in which it was declared through its closure.

```javascript
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
```
>***Note***
Parameters are also part of the closure.  
* All variables in an outer scope are included even if they are declared after the function is declared. This makes it possible for the line:
  ```Javascript
  console.log(magic);
  ```
  in innerFn(), to work.
* However, the same line, in the global scope will fail because even with the same scope, variables not yet defined cannot be referenced.

# Popular patterns around closures
## Timer and callback
```Javascript
function delay(message) {
  setTimeout(function timerFn() {
    console.log(message);
  }, 1000);
}
delay('Hello Javascript');
```
>***Note***
We pass the inner **timerFn()** to the built-in library function **setTimeout()**. However, **timerFn()** has a scope closure over the scope of **delay()**, and hence it can reference the variable message.

## Private variables
closures are frequently used to encapsulate some information as private variables. Javascript does not have this feature, but by using closures, we can achieve similar encapsulation.
```Javascript
function privateTest() {
  var points = 0;
  this.getPoints = function() {
    return points;
  };
  this.score = function() {
    points++;
  };
}
var private = new privateTest();
private.score();
console.log(private.points);
console.log(private.getPoints());
/* output:
undefined
1
*/
```
> ***Note***
We are creating a function that we intend to call as a constructor. In this **privateTest()** function, we are creating a variable *points = 0* as a function-scoped variable. This variable is available only **privateTest()**. But we can access this variable through **getPoints()** and **score()** like setters and getters in Java.  
This pattern can be very useful when you are writing libraries where you want to control how variables are accessed based on a contract and pre-established interface.

## Loops and closures
```Javascript
for( var i = 0;i <= 5; i++) {
  setTimeout(function delay(){
    console.log(i);
  }, i*100);
}
/* output:
6
6
6
6
6
6
*/
```
> ***Note***
It should print 1, 2, 3, 4, 5 at an interval of 100 ms. but instead, it prints 6, 6, 6, 6, 6 at an interval 100 ms. What is this happening ?  
Here, we encounter a common issue with closures and looping.  
The *i* variable is being updated after the function is bound. This means that every bound function handler will always print the last value stored in *i*. In fact, the timeout function callbacks are running after the completion of the loop.

**How can we fix this?**  
We can introduce a function scope and local copy of the *i* variable.
```Javascript
for(var i = 0; i <= 5; i++) {
  (
    function(j) {
      setTimeout(function delay() {
        console.log(j);
      }, j*100);
    }
  )(i);
}
```
