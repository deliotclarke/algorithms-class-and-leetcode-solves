### Arrays

Ordered lists - by index

Big O of Arrays:

Insertion - it depends
Removal - it depends
Searching - O(n)
Access - O(1) ex. names[0]

```javascript
let names = ['bob', 'tom', 'george'];
```

When to use arrays:

1. When you need order
2. When you need fast acces/insertion and removal (sort of)

Insertion complexity:

```javascript
names.push('Raj'); // O(1) - same for .pop()
names.unshift('Raj'); // O(n) - adding to the beginning because this requires reindexing every element
names.shift('Raj'); // O(n) - removing from beginning also requires reindexing all elements
```

Big O of Built-In Array Options:

- push O(1)
- pop O(1)
- shift O(n)
- unshift O(n)
- concat O(n)
- slice O(n)
- splice O(n)
- sort O(n \* log n)
- forEach/map/filter/reduce/etc O(n)
