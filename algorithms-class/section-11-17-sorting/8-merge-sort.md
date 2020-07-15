### Merge Sort Part 1

Psuedocode Steps:

- Break up the arry into halves until you have arrays that are empty or have one element
- Once you have the smaller sorted arrays, merge those arrays with other sorted arrays until
  you are back at the full length of the array
- Once the array has been merged back together, return the merged (and sorted) array

```javascript
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10, 24, 76, 73, 72, 1, 9]);
```

Big O Complexity:

Time Complexity - Best, average and worst are all O(n log n)

Space Complexity - O(n)
