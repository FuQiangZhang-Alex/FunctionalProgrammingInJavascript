// number
var addtion = 0.1 + 0.2;
console.log(addtion);
console.log(Math.E);
console.log(Math.SQRT2);

// String
console.log('\xA9');
console.log('\u00A9');

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

// undefined values
var x;
console.log(x); // undefined
console.log(null == undefined); // true

// instanceof
var s = new String("string");
console.log(s instanceof(String)); // true
console.log("string" instanceof String); // false

// Date
console.log(new Date('December 31, 2016'));
var d = new Date();
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getTime());
console.log(d.getTimezoneOffset());

var x = null;
console.log(x === null);

var expression = '1 + 1';
console.log(eval(expression.toString()));
