### The Pivot Helper

- In order to implement quick sort, it's useful to first implement a function restponsible for arranging elements
  in an array on either side of a pivot
- Give an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the aray so that all the values less than the pivot
  are moved to the left and all the values greater than the pivot are moved to the right
- The order of elements on either side of the pivot don't matter
- The helper should do this in place, not create a new array
- When complete, the helper should return the index of the pivot

Picking a pivot:

1. The runtime of quick sort depends in part on how one selects the pivot
2. Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
3. For simplicity, we'll always choose the pivot to be the first element (consequences later)

Psuedocode:

- It will accept three arguments: an array, a start index, and an end index (these can default to 0 and array length - 1)
- Grab the pivot from the start of the array
- Store the current pivot index in a variable (where the pivot will end up)
- Loop through the array start to end
  - if the pivot is greater than the current element, increment pivot index variable and then swap the current element
    with the element at the pivot index
- Swap the starting element (ie pivot) with the pivot index

My Solution:

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
```

Colt's Solution:

```javascript
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}
```
