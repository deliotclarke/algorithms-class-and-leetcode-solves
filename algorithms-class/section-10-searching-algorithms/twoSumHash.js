/**
 *
 * I was working on a better solve for the twoSum problem on LeetCode.
 * Originally I thought it was safe to assume that the arrays to search would be sorted,
 * so I thought I would practice binary search on the problem. Turns out that wasn't the
 * case. What I ended up doing was figuring with the help of LeetCode that a Hash Map
 * would be be a better solution. So here's a solution with a "Hash Map"/Object for
 * reference.
 *
 * The solution assumes there is always a match
 *
 * Complement - the value you must add to something to make it whole
 *
 * for instance, if our target is 9 and our nums = {2, 5, 11, 7, 21}
 * if we're checking 2. 9 - 2 = 7. so our relative complement is 7.
 *
 */

function twoSum(nums, target) {
  let hashMap = {};

  // create a hash map of all numbers and their index value
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i;
  }

  // loop again to check for sum
  for (let j = 0; j < nums.length; j++) {
    // find the complement of our value
    let complement = target - nums[j];
    // we check if our complement exists in our object and that it's index value isn't the same index we're on
    // otherwise, the number would be the same number and not within the bounds of our success
    if (hashMap[complement] && hashMap[complement] !== j) {
      // then we return the value of the index we're at, and the value, which is the index, of the complement that exists in our hashMap
      return [j, hashMap[complement]];
    }
  }
}

console.log(twoSum([2, 15, 7, 12, 48], 9)); // 0, 2
console.log(twoSum([7, 2, 15, 48, 12], 9)); // 0, 1
console.log(twoSum([48, 7, 15, 48, 2], 9)); // 1, 4
