### Let's QUICK SORT!

Psuedocode:

- Call the pivot helper on the array
- When the helper returns the updated index, recursively call the pivot helper on the subarray
  to the left of that index, and the subarry to the right of that index
- base case: check if sub array has 1 item

```javascript
function pivotHelper(arr, start = 0, end = arr.length - 1) {
  let pivotIndex = start;
  let pivotValue = arr[pivotIndex];

  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      pivotIndex++;
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
    }
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
```

Big O of Quick Sort:

Time Complexity - Best and Average O(n log n), Worst case O(n^2)

The current worst case is the chance that you've chosen the minimum number OR if the array is already sorted and you're choosing the first element in that array like we have. You could choose a random number or try to get the median... _shrug_

Space Complexity - O(n log n)
