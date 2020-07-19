/**
 * Write a function which accepts a string and returns the length of the longest substring with all distinct characters
 *
 */

// ! This isn't finished!

function findLongestSubstring(str) {
  if (str.length === 0) return 0;
  let set = {};

  const checkSet = (char) => {
    if (set[char]) {
      set[char] = set[char] + 1;
      return true;
    } else {
      set[char] = 1;
      return false;
    }
  };

  // create set
  let fast = 0;
  let slow = 0;
  // ! if you ain't slow, you're fast

  // declare window length
  let win = 1;

  // TODO loop over string - not sure if should use slow or fast as end of loop
  while (fast < str.length) {
    // if a value doesn't exist in our set - add it
    if (checkSet(str[fast])) {
      // shrink window - moving slow up
      set[str[slow]] = set[str[slow]] - 1;
      slow++;
      fast++;
    } else if (set[str[fast]] === 1) {
      // move start forward
      fast++;
      // increase our window size reflected in our window variable
      // check max
      win = Math.max(win, fast - slow);
    } else {
      fast++;
    }
  }

  // win = Math.max(win, fast - slow) - calculate in the right place, after increase of end - should be able to get rid of + 1

  return win;
}

console.log(findLongestSubstring('codeitdude')); // 6
console.log(findLongestSubstring('bbbbbb')); // 1
