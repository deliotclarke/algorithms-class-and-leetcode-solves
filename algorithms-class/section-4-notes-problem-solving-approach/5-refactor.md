### Look back and refactor

The best place to improve as a developer is in refactoring

Refactoring Questions:

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance?
- Can you think of other ways to refactor?
- How have other people solved this problem?

BACK TO charCount... again!!

```javascript
function charCount(str) {
  //make object to return at end
  let result = {};
  //loop over string
  for (let i = 0; i < str.length; i++) {
    //if the char is a number/letter and a key in our object add 1 to count
    let char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      //if the char is a number/letter and isn't in our object add it and set value to 1
      result[char] = 1;
    }
    //if char is something else (space, period, etc) don't do anything
  }
  //return object
  return result;
}
```

```javascript
// THE REFACTOR
// maybe change the for loop to a for of loop for readability and less complexity

function isAlphaNumeric(char) {
  if (/[a-z0-9]/.test(char)) return true; // charCodeAt() --> is actually faster

  return false;
}

function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    // I would prefer moving the regex outside of the function to eliminate confusing the problem
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1; // i don't know if this is more readable personally
    }
  }
  return obj;
}
```

\*\* tested in RunJS! It works :)
