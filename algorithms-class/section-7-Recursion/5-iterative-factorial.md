### Writing Factorial Iteratively

Factorial ex:

```javascript
const factorialOfFour = 4 * 3 * 2 * 1;
```

What is our base case? num = 1.
What is our changing data? num - 1.

```javascript
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
```
