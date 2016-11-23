
function is2Power(n) {
  return (n & (n - 1)) == 0;
}
console.log(is2Power(8));
console.log(is2Power(10));
