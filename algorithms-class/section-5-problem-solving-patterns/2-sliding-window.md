### Sliding Window

This pattern involves creating a window which can either be an array or number from one position to another.

Depending on a certain condition, the window either increases or closes (and a new window is created).

Very useful for keeping track of a subset of data in an array/string etc

Write a function called maxSubarraySum which accepts an array of intergers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

```javascript
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // null
```

Naive Example, Time Complexity - O(n^2):

```javascript
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity; // account for an array that may have all negative numbers
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
```

Refactor Example, Time Complexity - O(n):

```javascript
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```
