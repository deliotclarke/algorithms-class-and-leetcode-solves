/**
 *
 * Write a function called power which accepts a base and an exponent. The function should return the power
 * of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry
 * about negative bases and exponents.
 */

function power(base, exponent) {
  // edge case, power of 0
  if (exponent === 0) return 1;

  // base case - we can use our exponent as our base case. once it hits 1 return 1?
  if (exponent === 1) return base;

  // changing data
  return base * power(base, exponent - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
console.log(power(5, 2)); // 25
