### Singly Linked List: Reverse

You reverse your list IN PLACE

```javascript
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  reverse() {
    // swap the head and the tail
    let temp = this.tail;
    this.tail = this.head;
    this.head = temp;

    //create a variable for current, next, previous
    let current = this.tail;
    let prev;
    let next;

    // loop
    while (counter < this.length) {
      // set the next to be the next property on what current is
      next = current.next;
      // set the next property on the current to be whatever prev is
      current.next = prev;
      // set prev to be the value of the current var
      prev = current;
      // set the current var to be the value of the next variable
      current = next;
      if (current === null) {
        this.tail.next = null;
        return this;
      }
    }
  }
}
```

Colt's Solution:

```javascript
reverse() {
  let node = this.head;
  this.head = this.tail;
  this.tail = node;

  let prev = null;
  let next;

  for (let i = 0; i < this.length; i++) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return this
}
```
