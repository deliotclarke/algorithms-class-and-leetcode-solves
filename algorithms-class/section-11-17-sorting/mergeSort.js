function mergeArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let newArr = [];

  while (i < arr1.length || j < arr2.length) {
    // check the two values against each other

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

// to watch closely in debugger, put breakpoint on line 27
function mergeSort(arr) {
  // we use this function to break the original array down into smaller arrays length of 0 or 1
  if (arr.length <= 1) return arr;

  // find the middle of the current array
  let mid = Math.floor(arr.length / 2);
  // capture the left side of the array to split, and call recursively
  let left = mergeSort(arr.slice(0, mid));
  // capture the right side of the array to split, and call recursively
  let right = mergeSort(arr.slice(mid));

  // merge the two arrays that have been returned
  // this will be called repeatedly until mergeSort has worked it's way down recursively to
  // the each item in it's own array and then works itself back up to the first time it is called
  // kind of insane, and also very cool
  return mergeArrays(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
