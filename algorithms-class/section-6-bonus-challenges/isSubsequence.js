/**
 * Write a function called isSubsequence which takes two strings and checks whether the characters in the first string
 * form a subsequence of the characters in the second string. In other words, the function should check whether the characters
 * in the first string appear somewhere in the second string, without their order changing.
 *
 *
 */

function isSubsequence(str1, str2) {
  // two pointers
  let i = 0;
  let j = 0;

  // loop over first string
  while (i < str1.length && j < str2.length) {
    // check first letter of first string
    if (str1[i] === str2[j]) {
      if (i === str1.length - 1) {
        return true;
      } else {
        i++;
        j++;
      }
    } else {
      j++;
    }
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
console.log(isSubsequence('abc', 'ab')); // false

// ! First try with that O(n + m) yahhhh
