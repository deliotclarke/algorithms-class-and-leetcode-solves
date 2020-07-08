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

console.log(insertionSort([2, 3, 1, 9, 5, 101, 4]));
