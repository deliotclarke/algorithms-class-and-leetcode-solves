### String Search

Searching sub strings in a larger string.

Find "omg" in "wowomgzomg"

- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the loop
- If you complete the inner loop and find the match increment the count of matches
- Return the Count

My Naive Solution:

```javascript
function subString(long, short) {
  let matchCounter = 0;
  // loop over longer string
  for (let i = 0; i < long.length; i++) {
    // loop over longer string
    let nIndex = i;
    for (let j = 0; j < short.length; j++) {
      if (long[nIndex] !== short[j]) {
        j = short.length;
      } else if (long[nIndex] === short[j]) {
        if (j === short.length - 1) {
          matchCounter++;
        }
        nIndex++;
      }
    }
  }
  return matchCounter;
}
```
