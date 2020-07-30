### Singly Linked List: Pop

Removing an element from the end of the list

guess: (if next === tail)??

In order to Pop off the last element we need to loop through the list:

```javascript
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  traverseExample() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }
  pop() {
    // check that the list has nodes - with length for instance - return undefined
    if (this.length === 0) return undefined;
    // loop through the list until you reach the tail
    let current = this.head;
    let pre = current;
    let returnedVal = null;
    while (current) {
      if (current.next === null) {
        returnedVal = current;
        // set the next property of the 2nd to last node to be null
        current = null;
        pre.next = null;
        // set the tail to be the 2nd to last node
        this.tail = pre;
        // decrement length by 1
        this.length--;
      } else {
        pre = current;
        current = current.next;
      }
    }
    // return removed value
    return returnedVal;
  }
}
```

I don't think my solution takes into account a list with only two values.

Colt's solution:

```javascript
pop() {
  if (!this.head) return undefined;
  var current = this.head;
  var newTail = current;
  while (current.next) {
    newTail = current;
    current = current.next;
  }
  this.tail = newTail;
  this.tail.next = null;
  this.length--;
  if (this.length === 0) {
    this.head = null;
    this.tail = null;
  }
  return current;
}
```

My refactor to solve two issues, a list with only item and deleting from a list with two items:

```javascript
pop() {
  // check that the list has nodes - with length for instance - return undefined
  if (this.length === 0) return undefined;
  if (this.length === 1) {
    let val = this.head;
    this.head = null;
    this.tail = null;
    this.length--;
    return val;
  }
  // loop through the list until you reach the tail
  let current = this.head;
  let pre = current;
  while (current) {
    if (current.next === null) {
      let val = current;
      // set the next property of the 2nd to last node to be null
      pre.next = null;
      // set the tail to be the 2nd to last node
      this.tail = pre;
      // decrement length by 1
      this.length--;
      return current;
    } else {
      pre = current;
      current = current.next;
    }
  }
}
```
