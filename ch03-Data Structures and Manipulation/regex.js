var origin = '1234 5678';
var re = /(\d{4}) (\d{4})/;
var modified = origin.replace(re, '$2 $1')
console.log(modified);
