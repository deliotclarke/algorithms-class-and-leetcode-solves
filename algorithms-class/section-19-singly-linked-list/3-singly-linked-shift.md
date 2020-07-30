### Singly Linked List: Shift

Remove an element from the beginning of the linked list

```javascript
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  shift() {
    // if no nodes return undefined
    if (!this.head) return undefined;
    // store the current head property in a variable
    let oldHead = this.head;
    // set head property to be current head's next property
    this.head = oldHead.next;
    // decrement length by 1
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    // return removed value
    return oldHead;
  }
}

let list = new SinglyLinkedList();
```

Colt's Solve:

```javascript
shift() {
  if (!this.head) return undefined;

  let currentHead = this.head;
  this.head = currentHead.next;
  this.length--;
  if (this.length === 0) {
    this.tail = null;
  }
  return currentHead;
}
```
