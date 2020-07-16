### LETS GET RAD-IX!

- Define a function that accepts a list of numbers
- Figure out how many digits the largest number has
- Loop from k=0 up to this largest number of digits
- For each iteration of the loop:
  - Create buckets for each digit (0 to 9)
  - Place each number in the corresponding bucket based on the kth digit
- Replace our existing array with values in our buckets, starting with 0 and going up to 9
- return list at the end

My Solution:

```javascript
function getDigit(num, i) {
  // .abs is for dealing with negative numbers
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  // log10 asks, 10 to what power gives us this number
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  let max = mostDigits(arr);

  for (let k = 0; k < max; k++) {
    let buckets = [[], [], [], [], [], [], [], [], [], []];
    arr.forEach((num) => {
      let bucket = getDigit(num, k);
      buckets[bucket].push(num);
    });
    let newArr = [];
    buckets.forEach((bucket) => {
      if (bucket.length > 0) {
        bucket.forEach((num) => newArr.push(num));
      }
    });
    arr.splice(0, arr.length, ...newArr);
  }
  return arr;
}
```

It's not perfect! But it worked! I can't think of a better way to do the original arr in place.

Colt's Solution:

```javascript
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // DAAAAAANG!!!
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
```

Radix Big O Notation:

Time Complexity - Best, average, worst is O(nk)

Space Complexity - O(n + k)
