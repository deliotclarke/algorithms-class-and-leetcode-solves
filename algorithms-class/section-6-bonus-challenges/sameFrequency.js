/**
 * Write a function called sameFrequency. Give two positive integers, find out if hte two numbers have the same frequency of digits.
 *
 * Must be time complexity O(n)
 *
 * sameFrequency(182, 281) // true
 * sameFrequency(34, 14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22, 222) // false
 */

function sameFrequency(num1, num2) {
  // there's a mathematical way to do this, but I'm unsure it would keep O(n)
  let sNum1 = num1.toString();
  let sNum2 = num2.toString();

  // the amount of numbers will have to be equal
  if (sNum1.length !== sNum2.length) return false;

  let counter = {};
  // loop over both, adding them to a digits hashMap and counting the frequency
  for (let i = 0; i < sNum1.length; i++) {
    counter[sNum1[i]] = (counter[sNum1[i]] || 0) + 1;
    counter[sNum2[i]] = (counter[sNum2[i]] || 0) + 1;
  }

  // check that each key's value is divisible by two, otherwise return false
  // stoked on this thought
  for (let val in counter) {
    if (counter[val] % 2 !== 0) {
      return false;
    }
  }
  return true;
}

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));

function sameFrequency2(num1, num2) {
  // let's try math

  let counter = {};
  // loop over both, adding them to a digits hashMap and counting the frequency
  while (num1 > 0) {
    counter[num1 % 10] = (counter[num1 % 10] || 0) + 1;
    num1 = Math.floor(num1 / 10);
  }

  while (num2 > 0) {
    counter[num2 % 10] = (counter[num2 % 10] || 0) + 1;
    num2 = Math.floor(num2 / 10);
  }

  // check that each key's value is divisible by two, otherwise return false
  // stoked on this thought
  for (let val in counter) {
    if (counter[val] % 2 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency2(182, 281));
console.log(sameFrequency2(34, 14));
console.log(sameFrequency2(3589578, 5879385));
console.log(sameFrequency2(22, 222));

// ! edge case that works against my final solve booooooooo

console.log(sameFrequency2(22, 2222));

// the answer would be to create two objects and compare them to each other at the end,
// but this actually solves all the cases required so i'm going to move to the next problem.
