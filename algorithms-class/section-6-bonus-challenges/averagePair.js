/**
 * Write a function called averagePair. Give a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where the average is equal to the
 * targets value. There may be more than one pair that matches the average target.
 *
 * Bonus Contraints:
 * Time O(n)
 * Space O(1)
 *
 * averagePair([1,2,3], 2.5) // true
 * averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
 * averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
 * averagePair([], 4) // false
 */

function averagePair(arr, target) {
  // write an early exit for arr.length = 0
  if (!arr.length) return false;

  // create two pointers on either end
  let left = 0;
  let right = arr.length - 1;

  // loop through while left < right
  while (left < right) {
    // calculate average of the two numbers
    let avg = (arr[left] + arr[right]) / 2;
    // if the average of the two numbers is the target return true
    if (avg === target) return true;
    // if the average of the two numbers is greater than the target move right down
    else if (avg > target) right--;
    // else move left up
    else left++;
  }
  // if the loop never returns true, return false
  return false;
}

console.log(averagePair([], 4)); // false
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false

// ! First try Wednesday!
