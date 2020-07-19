/**
 * Write a function which accepts a string and returns the length of the longest substring with all distinct characters
 *
 */

// Colt's solution so I can step through

function findLongestSubstring(str) {
  if (str.length === 0) return 0;
  let longest = 0;
  let set = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (set[char]) {
      start = Math.max(start, set[char]);
    }

    longest = Math.max(longest, i - start + 1);

    set[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring('codeitdude')); // 6
console.log(findLongestSubstring('bbbbbb')); // 1

// still having a hard time with this one. want to come back to it.
