### Singly Linked List: Unshift

Adding a new element to the beginning of a list

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  unshift(val) {
    // create a new node using the value passed in
    let newGuy = new Node(val);
    // if there is no head property on the list, set the head and tail to the new value
    if (!this.head) {
      this.head = newGuy;
      this.tail = newGuy;
    } else {
      // otherwise set the new node's next property to be the current head property on the list
      newGuy.next = this.head;
      // set the head property to be the new node
      this.head = newGuy;
    }
    // increment list by one
    this.length++;
    // return list
    return this;
  }
}
```

Colt's Solve

```javascript
unshift(val) {
  var newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  }
  // requires an else to run correctly... which i did. boom!
  newNode.next = this.head
  this.head = newNode;
  this.length++;
  return this;
}
```
