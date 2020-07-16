### Radix Sort Helpers

In order to impelement radix sort, it's helpful to build a few helper functions first.

getDigit(num, place) - returns the digit in num at the given place value

```javascript
getDigit(12345, 0); // 5
getDigit(12345, 3); // 2
```

MATH IT:

```javascript
function getDigit(num, i) {
  // .abs is for dealing with negative numbers
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
```

Next we need to know how many digits are in a number.

```javascript
digitCount(1); // 1
digitCount(314); // 3
```

MORE MATH:

```javascript
function digitCount(num) {
  if (num === 0) return 1;
  // log10 asks, 10 to what power gives us this number
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
```

Last we need to know which number has the most numbers in it in an array.

```javascript
function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
```
