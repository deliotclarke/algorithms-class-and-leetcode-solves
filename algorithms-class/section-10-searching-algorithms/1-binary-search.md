### Binary Search

Binary search is a much faster form of search.

Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time

Binary search only works on sorted arrays!

AKA Divide and Conquer

Write a function that accepts a sorted array of numbers and a value. Create a left pointer at the
start and a right pointer at the end of the array. While the left pointer comes before the right pointer:

- create a value in the middle
- if the middle equal to the value, then return the value
- if the value is too small, move the left pointer up
- if the value is too large, move the right pointer down
- if you never find the value return -1

```javascript
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < val) {
      left = mid + 1;
      // you add one so that you don't get stuck in a loop of constantly checking the same mid
      // because you've already checked middle and need to keep moving
    } else if (arr[mid] > val) {
      right = mid - 1; // same reason as above
    } else {
      return mid;
    }
  }
  return -1;
}
```

Colt's Refactor:

```javascript
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}
```
