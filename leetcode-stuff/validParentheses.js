/**
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
 */

function brackets(s) {
  if (s.length === 0) return true;
  if (s.length === 1) return false;
  if (s.length % 2 !== 0) return false;

  let brackets = s.split('');

  const bracketDict = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  let stack = [];
  let keys = Object.keys(bracketDict);

  for (let i = 0; i < brackets.length; i++) {
    if (!keys.includes(brackets[i])) {
      stack.unshift(brackets[i]);
    } else if (
      keys.includes(brackets[i]) &&
      stack[0] === bracketDict[brackets[i]]
    ) {
      stack.shift();
    }
  }

  if (stack.length > 0) return false;

  return true;
}

console.log(brackets('(())'));
console.log(brackets('({[}])'));
