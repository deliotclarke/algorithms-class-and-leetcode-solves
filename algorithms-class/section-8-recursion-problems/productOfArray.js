/**
 * Write a function which takes an array of numbers and returns the product of them all
 */

function productOfArray(arr) {
  // i want to try to write this with a helper first and then pure
  let result = 1;

  // helper function
  function helper(helperInput) {
    // base case
    if (helperInput.length === 0) return;

    // add to result
    result = result * helperInput[0];

    // changing data
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

function pureProductOfArray(arr) {
  if (arr.lenght === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

console.log(pureProductOfArray([1, 2, 3])); // 6
console.log(pureProductOfArray([1, 2, 3, 10])); // 60
