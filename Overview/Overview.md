# comments
```Javascript
// a one line comment
/* this is a longer,
   multi-line comment
*/
```

# Variables
* Starts with a letter, underscore, or dollar sign($)
```Javascript
var a;  // declare a variable but it's undefined
var b = 0;
console.log(b); // 0
console.log(a); // undefined
console.log(a+b); // NaN
```
>**NaN** value is a special value that indicates that the entity is not a number

# constants
create a read-only constant with **const** keyword.
```Javascript
const area_code = '515';
```
Javascript supports the standard variations of types:
* Number
* String
* Boolean
* Symbol(new in ECMAScript 6)
* Objects:
  * Function
  * Array
  * Date
  * RegExp
* Null
* Undefined

# Number
```Javascript
var aNumber = 555;
var aFloat = 555.0;
var addition = 0.1 + 0. 2;  // 0.30000000000000004. Use big.js to solve this problem
```
## special numbers
Number.MAX_VALUE, Number.MIN_VALUE - define the outer bounds of the Number value set.
result is greater than Number.MAX_VALUE will give us Number.POSITIVE_INFINITY
result is less than Number.MIN_VALUE will give us Number.NEGATIVE_INFINITY
> Use **isInfinity** method to verify if the result is an is infinity

```Javascript
isNaN(NaN); // true
NaN == NaN; //false
isNaN('elephant'); // true
NaN + 5; // NaN
```
## **Math** global object
```Javascript
Math.E; // 2.718281828459045
Math.SQRT2; // 1.4142135623730951
Math.abs(-200); // 200
Math.pow(2, 3); // 8
```
## parseInt(), parseFloat()
```Javascript
parseInt('230', 10); // 230
parseInt("010", 10); //10
parseInt("010", 8);  // octal base, 8
parseInt("010", 2); // binary, 2
```

# String
* \n Newline
* \t Tab
* \b Backspace
* \r Carriage return
* \\ Backslash
* \' Single quote
* \" Double quote
Support for special characters and Unicode literals
```Javascript
'\xA9'; // ©
'\u00A9'; // ©
```

Usage of the wrapper objects
```Javascript
var s = new String("dummy");
console.log(s); // "dummy"
console.log(typeof(s)); // object
var nonOjbect = "1" + "2";
console.log(typeof(nonOjbect)); // "string"
// Helper functions
console.log("hello".length); // 5
console.log("hello".charAt(0)); // "h"
console.log("hello".indexOf("e")); // 1
console.log("hello".lastIndexOf("l")); // 3
console.log("hello".startsWith("h")); // true
console.log("hello".endsWith("o")); // true
console.log("hello".includes("x")); // false
var split = "hello world".split(" ");
console.log(split); // ["hello", "world"]
var splitByChar = "hello world".split("");
console.log(splitByChar); // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
console.log("lower".toUpperCase()); // LOWER
console.log("UPPER".toLowerCase()); // upper
console.log("trim     ".trim()); // "trim"
```

# Undefined values
```Javascript
var x;
console.log(x); // undefined
console.log(null == undefined); // true
```

# Boolean
* empty string, NaN, null, and undefined are represented as false
* everything else is true

# the instanceof operator
Using **typeof** returns **object** no matter what type of object if being referenced
```Javascript
var s = new String("string");
console.log(s instanceof(String)); // true
console.log("string" instanceof String); // false
```
# Date object
```Javascript
var d = new Date([parameters]);
```
The parameters:
* No parameters - creates today's date and time.
* A string representing a date as Month day, year hours:minutes:seconds. if omit hours, minutes, seconds, the value will be 0.
  ```Javascript
  var d = new Date('December 31, 2016')
  ```
* A set of integer values for year, month, day
  ```Javascript
  var d = new Date(2015, 11, 25)
  ```
* A set of integer values for year, month, day, hour, minute, second.
  ```Javascript
  var d = new Date(2015, 11, 25, 21, 00, 0);
  ```

Example
```Javascript
var d = new Date();
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getTime());
console.log(d.getTimezoneOffset());
```

> Control date and time using libraries - **Moment.js**, **Timezone.js**, **date.js**

# The **+** operator
> When applied to a string, it converts it to numbers  

```Javascript
var a = 25; // 25
a = +a; // 25
var b = '7'; // '7'
b = +b; // 7
typeof(b); // number
var c = 'foo';
c = +c; // NaN
var zero = '';
zero = +zero; // convert empty string to 0
```

# ++ --
# Boolean operation
&&  
||  
!  
boolean_expression ? value_expression : value_expression
# Equality
* Strict equality ===
  '' === '0' false  
  0 === '0' false  
  false === 'false' false  
  false === '0' false  
  false === undefined false  
  false === null false  
  null === undefined false  
* Week Equality
'' == 0 false  
0 == ' ' true  
0 == '0' true  
false == 'false' false  
false == '0' true  
false == undefined  
false == null false  
null == undefined true  

# Javascript types
> Javascript is dynamic language, unlike strongly typed language such as Java, C++

# Automatic semicolon insertion
Javascript is not a semicolon language. Javascript parser automatically inserts them whenever it encounters a parse error due to a missing semicolon.  
ASI will only take effect in the presence of a new line. Semicolons are not inserted in the middle of a line.

# Naming
```Javascript
// avoid letter names
// bad
function q() {}
// good
function query() {}

// Use camelCase when naming objects, functions, and instances
// bad
const Object = {};
const this_is_object = {};
// good
const thisIsObject = {};
function thisIsFunction() {};

// Use PascalCase when naming constructors or classes.
// bad
function user(options) {
  this.name = options.name;
}
const bad = new user({
  name: 'nope',
});
// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}
const good = new User({
  name: 'yup',
});

// Use leading underscore when naming private properties.
// bad
this._firstname__ = 'Panda';
this.firstname_ = 'Panda';

// good
this._firstname = 'Panda';
```

# eval() is evil
The **eval()** method, which takes a String containing Javascript code, compiles it and runs it, is one of the most misused methods in Javascript. There are a few situations where you will find yourself using eval(), for example, when you are building an expression based on the user input.  
However, most of the time, eval() is used is just because it gets the job done. The eval() method is too hacky and makes the code unpredictable. It's slow, unwieldy, and tends to magnify the damage when you make mistake. If you are considering using eval(), then there is probably a better way.
```Javascript
var expression = "1 + 1";
console.log(eval(expression.toString())); // 2
```
