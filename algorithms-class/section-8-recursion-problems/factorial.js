/**
 * Write a function which accepts a number and returns the factorial of that number. - factorial zero 0! is always 1.
 */

function factorial(num) {
  //base case
  if (num === 0) return 1;

  // changing data
  return num * factorial(num - 1);
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
