### Solve/Simplify

If you can't solve it, solve a simpler problem - focus on what you know you can solve.

Simplify:

- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

BACK TO charCount!

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
