* Regular expressions
* Exact match
* Match from a class of characters
* Repeated occurrences
* Beginning and end
* Back references
  reference group results  
  An example - /^([XYZ])a\1/, which matches a string that starts with any of X, Y, Z followed by an a and followed by whatever character matched the first capture.
  Back references are used with String's **replace()** method using the special character sequences, $1, $2 etc.
  ```Javascript
  var origin = '1234 5678';
  var re = /\d{4} \d{4}/;
  var modified = origin.replace(re, "$2 $1")
  console.log(modified);
  ```
* Greedy and lazy quantifiers
* Arrays
* Maps
* Sets
* A matter of style
