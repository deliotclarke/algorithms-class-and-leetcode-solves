### Insertion Sort

Builds up the sort by gradually creating a larger left portion which is always sorted.

First try:

- start at second element in the array
- now compare the second element to the one before it and swap if necessary
- continue to the next element and if it is in the incorrect order, iterate through the sorted portion, to place the element in the correct place
- repeat until the array is sorted

```javascript
function insertionSort(arr) {
  // start by looping through the array at the second element
  for (let i = 1; i < arr.length; i++) {
    let toCheck = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[toCheck] < arr[j]) {
        [arr[j], arr[toCheck]] = [arr[toCheck], arr[j]];
        toCheck = j;
      } else if (arr[toCheck] > arr[j]) {
        break;
      }
    }
  }
  return arr;
}
```

```javascript
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // because we know the loop would stop if currentVal was were less than j
      // we know that we can use the statement below to move our larger value backwards
      // [1, 2, 9, 76, 20] -> if arr[j] = 76, arr[j + 1] is changed from 20 to 76
      // we still have 20 saved as currentVal, being used in our loop and after our loop ends to set the correct index to current value
      arr[j + 1] = arr[j];
    }
    // we always replace the last value before j that we hit,
    // because j will always be less than currentVal the way our loop is set up
    // when the loop ends because we check 20 against 9
    // [1, 2, 9, 76, 76] -> since is at 9, 9 is less than 20, we replace arr[j + 1] with currentVal, 20
    arr[j + 1] = currentVal;
    // arr now equals [1, 2, 9, 20, 76]
  }
}
```

[2, 1, 9, 76, 20, 0]
outer loop:
currentVal = 1
inner loop:
[2, 2, 9, 76, 20, 0]

[1, 2, 9, 76, 20, 0]
outer loop:
currentVal = 9
because 2 isn't greater than currentVal inner loop breaks
arr[j + 1] is the index of 9 so 9 is set to currentVal which is 9
[1, 2, 9, 76, 20, 0]
outer loop:
currentVal = 76
because 9 isn't greater than currentVal inner loop breaks
76 = 76
[1, 2, 9, 76, 20, 0]
outer loop:
currentVal = 20
inner loop:
[1, 2, 9, 76, 76, 0]

[1, 2, 9, 20, 76, 0]
outerloop:
currentVal = 0
i = 5
j = 4
[1, 2, 9, 20, 76, 76]
j = 3
[1, 2, 9, 20, 20, 76]
j = 2
[1, 2, 9, 9, 20, 76]
j = 1
[1, 2, 2, 9, 20, 76]
j = 0
[1, 1, 2, 9, 20, 76]
j = -1
j is less than 0 so inner loop breaks
and arr[-1 + 1] = currentVal
[0, 1, 2, 9, 20, 76]

Time Complexity of Insertion Sort:

- worst case - O(n^2)
