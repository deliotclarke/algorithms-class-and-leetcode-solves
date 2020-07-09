### Helper Method Recursion

This function allows us to collect all of our odd values in a new array and return that array. A recursive solution
to an iterative problem without losing the value of result every time the recursive function is called.

```javascript
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    // if the original arr input has nothing left we return
    if (helperInput.length === 0) return;

    // if the first value in arr is odd, we push it onto the outside reference of result
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);

    // then we recursively call helper with everything in the array except the first value
    helper(helperInput.slice(1));
  }

  helper(arr);

  // we return all the odd values collected in result
  return result;
}
```
