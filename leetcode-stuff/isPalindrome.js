// write a function to determine if the input, which is an integer, is a palindrome

function isPalindrome(x) {
  if (x < 0) return false;
  if (!Number.isInteger(x)) return false;
  if (x >= 0 && x < 10) return true;

  let digits = [];
  let digits2 = [];
  while (x > 0) {
    digits.unshift(x % 10);
    digits2.push(x % 10);
    x = Math.floor(x / 10);
  }

  let finalBool = true;

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== digits2[i]) {
      finalBool = false;
    }
  }

  return finalBool;
}

console.log(isPalindrome(123123));
console.log(isPalindrome(12321));
