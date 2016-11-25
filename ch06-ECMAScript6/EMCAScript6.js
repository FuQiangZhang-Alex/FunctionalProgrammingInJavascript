// function print(a, b) {
//   console.log(a, b);
// }
// print(...[1, 2]);  // 1, 2

// var [start, end] = [0, 5];
// for(let i = start; i < end; i++) {
//   console.log(i);
// }

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
