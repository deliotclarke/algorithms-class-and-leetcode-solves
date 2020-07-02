### Space Complexity

The amount of memory taken up by an operation - specifically auxillary space complexity

#### General rules:

1. Most primitives (booleans, numbers, undefined, null) are constant space
2. Strings require O(n) space (where n is the string length)
3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys for objects

O(1) aux space example:

```javascript
function sum(arr) {
  let total = 0; // one number
  for (let i = 0; i < arr.length; i++) {
    // let i = 0 is the second number
    total += arr[i];
  }
  return total;
}
```

O(n) aux space example:

```javascript
function double(arr) {
  let newArr = []; // array creation
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]); // pushing to the array based on n or the original arr
  }
  return newArr;
}
```
