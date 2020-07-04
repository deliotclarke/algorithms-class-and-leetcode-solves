/**
 *
 * Implement strStr().
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * I added this to my code for this course becaue it was a problem i was working on at LeetCode
 * that I was sure could be solved with sliding window and that's kind of correct. Lots of solves actually.
 *
 */

// ! my solve - clunky and brute force-y, with slice i think the method is O(n^2) but at least i didn't go deeper!!

function needler(haystack, needle) {
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;

  let savedIndex = -1;
  let tempString = '';
  let window = needle.length;

  // first loop to grab initial tempString
  for (let i = 0; i < needle.length; i++) {
    tempString += haystack[i];
  }

  if (tempString === needle) return 0;

  // loop over haystack, haystack[i]
  for (let j = window; j < haystack.length + 1; j++) {
    // remove first letter and add new letter of temp string
    console.log(tempString, j);
    if (tempString === needle) {
      return j - window;
    }
    tempString = tempString.slice(1, window);
    tempString += haystack[j];
  }
  return savedIndex;
}

console.log(needler('mississippi', 'ppi'));

// ! not my solve - super cool though, no built-in methods. is this technically two pointers?

function needler2(haystack, needle) {
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;

  let nIndex = 0;

  for (let i = 0; i < haystack.length; i++) {
    // check if first letters match
    if (haystack[i] === needle[nIndex]) {
      // if they do increase needle index
      if (nIndex === needle.length - 1) {
        return i - nIndex;
      } else {
        nIndex++;
      }
    } else if (nIndex > 0) {
      i = i - nIndex;
      nIndex = 0;
    }
  }
  return -1;
}

// ! not my solve, but recreated from memory after referencing. needed to learn how to use substring properly.

function needler3(haystack, needle) {
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;

  const len = needle.length;

  // loop once using substring to create a string to compare to needle
  for (let i = 0; i < haystack.length; i++) {
    if (needle === haystack.substring(i, i + len)) {
      return i;
    }
  }
  return -1;
}

console.log(needler3('mississippi', 'ppi'));
console.log(needler3('hello', 'll'));
