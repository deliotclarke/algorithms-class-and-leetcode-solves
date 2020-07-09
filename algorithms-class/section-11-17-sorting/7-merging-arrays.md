### Merging Arrays

Learning to merge sorted arrays!

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Give two arrays which are sorted, this helper function should create a new array hich is also sorted and consists of
  the elements in the two input arrays
- This function should run in O(n + m) time and space and should not modify the parameters passed to it.

Get it:

- Create an empty array, take a look at the smallest values in each input array - i, j - while loop?
- while there are still values we haven't looked at...
  - If the value of the first array is smaller than the value in the second array, push the value in the first array into our results
    and move on to the next value in the first array
  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and
    move onto the next value in the second array
  - Once we exhaust one array, we just move all the remaining values into the results array

Mine:

```javascript
function mergeArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let newArr = [];

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      newArr.push(arr2[j]);
      j++;
    } else if (i === arr1.length) {
      newArr.push(arr2[j]);
      j++;
    } else if (j === arr2.length) {
      newArr.push(arr1[i]);
      i++;
    }
  }
  return newArr;
}
```

Colt's solve:

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
    results.push(arr1[j]);
    j++;
  }

  return results;
}
```
