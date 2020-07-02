### Objects

Unordered data structures with key value pairs

When you don't need order or want fast access for insertion, removal, and reading -- all constant time O(1)

Searching though is O(n) -- not using a key, using a key would be constant time

```javascript
let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};
```

#### Object Methods:

```javascript
Object.keys(instructor); // O(n)
Object.values(instructor); // O(n)
Object.entries(instructor); // O(n)
Object.hasOwnProperty('firstName'); // O(1)
```
