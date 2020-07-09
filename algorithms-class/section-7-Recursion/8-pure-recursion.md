### Pure Recursion

Pure Recursion - The function is fully self-contained and recursive

This is a different solution to the same problem in the helper method recursion example.

```javascript
function collectOddValues(arr) {
  let newArr = [];

  // base case
  if (arr.length === 0) return newArr;

  // if the value is odd, add it to newArr
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  // changing data
  // we assign newArr to equal
  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}

// here's what happens:
collectOddValues([1, 2, 3, 4, 5]);
// 1 is odd
[1].concat(collectOddValues([2, 3, 4, 5]))
// 2 is not odd
    [].concat(collectOddValues([3, 4, 5]))
// 3 is odd
        [3].concat(collectOddValues([4, 5]))
// NOPE
            [].concat(collectOddValues([5]));
// YUP
                [5].concat(collectOddValues([]))
                // Which when ran with arr.length = 0, returns newArr = []
                [5].concat([])
            // returns an array with the integer 5
            [].concat[5] = [5]
        [3].concat[5] = [3, 5]
    //empty
    [].concat[3, 5]
[1].concat[3, 5] = [1, 3, 5]
// final value

newArr = [1, 3, 5];
```

Pure Recursion Tips:

- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.
- Remember strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- To make copies of objects use Object.assign or the spread operator
