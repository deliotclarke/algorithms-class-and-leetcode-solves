// this is wrong. needs more inch worm and less shrinking window.
// hint: Math.min(min, end - start);

function minSubArrayLen(arr, num) {
  if (arr.length === 0) return 0;
  let minWin = Infinity;

  // two moving values - the inch worm
  let first = 0;
  let last = 0;
  // if you're not first, you're last - starting both at zero to check the very first number
  let tempSum = 0;

  // loop through values
  while (last < arr.length) {
    // if both values not greater than or equal to num, move up first - increase window, not minWin

    if (tempSum < num && first < arr.length) {
      // move first forward
      tempSum += arr[first];
      first++;
    } else if (tempSum >= num) {
      minWin = Math.min(minWin, first - last);
      tempSum -= arr[last];
      last++;
    } else {
      break;
    }
  }
  return minWin === Infinity ? 0 : minWin;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
