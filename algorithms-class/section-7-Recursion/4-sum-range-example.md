### Second example with function sumRange

```javascript
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
```

As the functions get added to the callstack, each are waiting on the call inside their own return. That
is until num === 1. When 1 is returned to the function that was called with 2 + sumRange(2 - 1)/2 + sumRange(num - 1) can
resolve itself returning 3, to the function that was called with 3 + sumRange(3 - 1) and so on.
