### Linear Search

Given an array, the simplest way to search for a value is to look at every element
in the array and check if it's the value we want.

JavaScript search methods:

- indexOf
- includes
- find
- findIndex

But how do they work??

A function that accepts an array and a value and checks the array for the value, returning the index. If it does not exist in
the array, return -1.

```javascript
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
```
