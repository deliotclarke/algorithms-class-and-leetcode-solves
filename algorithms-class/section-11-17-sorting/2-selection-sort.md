### Selection Sort

Similar to bubble sort, but instead of first placing the large values into sorted position, it places small values into sorted position.

Moving the smallest item in the array/data set to the beginning.

First try:

- store the first element as the smallest value you've seen
- compare this item to the next item in the array until you find a smaller number
- save the index of the new minimum value
- if the minimum is not the index you began with, swap the two values
- repeat this process from the next index

```javascript
function selectionSort(arr) {
  // this loop will give us our initial index to check
  for (let i = 0; i < arr.length; i++) {
    // store the value of min or the first integer you come across
    let min = i;
    // write a second loop to move through the rest of the values
    // you could start j at 1, i think, you'd never have to check 0 against 0
    for (let j = i + 1; j < arr.length; j++) {
      // if the value is less than the min from the i loop, set min = to the new index
      if (arr[j] < arr[min]) min = j;
    }
    // if min does not equal the starting index, swap the values

    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];

    // this works but there's two passes too many.
    // couldn't get a noSwap var to work
  }
  return arr;
}
```

Colt's:

```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}
// pretty much the same!
```
