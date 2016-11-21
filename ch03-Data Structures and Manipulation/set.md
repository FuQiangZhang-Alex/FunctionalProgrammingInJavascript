Set is collection of values and can be iterated in the order of the insertion. A value in a set can occur only once.

```Javascript
var s = new Set();
s.add(1);
s.add('howdy');
s.add('foo');

s.has(1);  // true
s.delete('foo');
s.size;  // 2
for( let item of s){
  console.log(item);
}
```
