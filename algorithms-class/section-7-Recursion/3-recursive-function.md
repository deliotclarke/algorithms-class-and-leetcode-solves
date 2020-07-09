### How Recursion Works

Invoke the same function with a different input until you reach your base case!

Base Case - The condition when the recursion ends.

This is the most important concept to understand.

Two essential parts of every recursive function:

1. Base Case
2. Changing Data

```javascript
function countdown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countdown(num);
}
```
