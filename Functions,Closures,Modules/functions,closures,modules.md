# Function
>functions are first-class objects.

* They can be created via literals
* They can be assigned to variables, array entries, and properties of other objects
* They can be passed as arguments to functions
* They can be returned as values from functons
* They can process properties that can be dynamically created and assigned
## function declaration
```Javascript
function add(a, b) {
  return a + b;
}
c = add(1, 2);
console.log(c); // 3

var add = function(a, b) {
  return a + b;
};
c = add(1, 2);
console.log(c); // 3

var fact = function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(fact(3)); // 6

// self-invoking function expressions
(function sayHello(){
  console.log('Hello');
})();
```

## functions as data
```Javascript
var say = console.log;
say('I can alse say things.')
```
```Javascript
var validateDataForAge = function(data) {
  person = data();
  console.log(person);
  if (person.age < 1 || person.age > 99) {
    return true;
  } else {
    return false;
  }
};

var errorHandlerForAge = function(error) {
  console.log('error while processing age.');
};

function parseRequest(data, validateData, errorHandler) {
  var error = validateData(data);
  if (!error) {
    console.log('no error.');
  } else {
    errorHandler();
  }
}

var generateDataForScientist = function() {
  return {
    name: 'Albert Einstein',
    age: Math.floor(Math.random() * (100 - 1)) + 1,
  };
};

var generateDataForComposer = function() {
  return {
    name: 'J S Bach',
    age: Math.floor(Math.random() * (100 - 1)) + 1,
  };
};

// pares request
parseRequest(generateDataForScientist, validateDataForAge, errorHandlerForAge);
parseRequest(generateDataForComposer, validateDataForAge, errorHandlerForAge);
```

## Scoping
> Any variable that you declare is by default defined in globle scope

### Inline function expressions
```Javascript
function setActiveTab(handler, tab) {
  // set active tab
  // call handler
  handler();
}
setActiveTab(function(){
  console.log('Setting active tab.');
}, 1);
```

### Block scopes
```Javascript
console.log(a);
var a = 1;
// would actually be executed as follows
var a; // Compilation phase
console.log(a);
a = 1; // execution phase
```
```Javascript
a = 1;
var a;
console.log(a); // 1

// would actually be executed as follows
var a; // Compilation phase
a = 1; // execution phase
console.log(a);
```
**variable and function declarations are moved up to the top of the code during compilation. - known as hoisting**
```Javascript
foo();
function foo() {
  console.log(a); // undefined
  var a = 1;
}
```
> the declaration of the **foo()** function is hoisted such that we are able to execute the function before defining it.
within the **foo()** function, declaration of the *a* variable will be hoisted to the top of the **foo()** function, and not to the top of the program.

## Function declaration versus function expressions
```Javascript
// function expression
functionOne();
// error
// TypeError: functionOne is not a function

var functionOne = function() {
  console.log('functionOne');
};

// function declaration
functionTwo();
// no error
// print functionTwo

function functionTwo() {
  console.log('functionTwo');
}
```
> you should never use function declarations conditionally. this behavior is non-standardized and can behave defferently across platforms.

**However, it's perfectly safe and, in fact, smart to do the same with function expressions: ***
```Javascript
var sayMoo;
if(true) {
  sayMoo = function() {
    return 'trueMoo';
  };
} else {
  sayMoo = function() {
    return 'falseMoo';
  };
}
```
## The arguments parameter
```Javascript
var sum = function() {
  var i, total = 0;
  for(i = 0;i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));
```
> arguments is not really an array. But we can convert it to an array

```Javascript
var args = Array.prototype.slice.call(arguments);
```
### The **this** parameter
An implicit parameter named **this** is also passed to the function. It refers to an object that is implicitly associated with the function invocation, termed as a **function context**.
#### invocation as function
If a function is not invoked as a method, constructor, or via **apply()** or **call()**, it's simply invoked as a function:
```Javascript
function add() {}
add();
var substract = function() {};
substract();
```
**this** is bound to the global object. Many experts believe this to be a bad design choice.
#### invocation as a method
A method is a function tied to a property on an object. For methods, **this** is bound to the object on invocation:
```Javascript
var person = {
  name: 'Albert Einstein',
  age: 66,
  greet: function() {
    console.log('this.name');
  }
};
person.greet();
```
#### invocation as a constructor
```Javascript
var Person = function(name) {
  this.name = name;
};
Person.prototype.greet = function() {
  return this.name;
};
var albert = new Person('Albert Einstein');
console.log(albert.greet());
```
#### invocation using **apply()** and **call()** methods
to invoke a function using **apply()**, we pass 2 parameters: the object to be used as the function context and an array of values to be used as the invocation arguments.  
The **call()** is used in a similar manner, except that the arguments are passed directly in the argument list rather than as an array.

## Anonymous functions
Used in cases where the function does not need to have a name for later reference.
### anonymous functions while creating an object
```Javascript
var santa = {
  say: function() {
    console.log('ho ho ho');
  }
};
```
### anonymous functions while creating a list
```Javascript
var things = [
  function() {},
  function() {},
];
for(var i = 0;i < things.length; i++) {
  things[i]();
}
```
### anonymous functions as a parameter to another function
```Javascript
function eventHandler(event){event();}
eventHandler(function(){
  console.log('event fired');
});
```
### anonymous functions in conditional logic
```Javascript
var shape;
if(shape === 'square') {
  shape = function() {
    return 'square'
  };
} else {
  shape = function() {
    return 'rectangle'
  };
}
```
