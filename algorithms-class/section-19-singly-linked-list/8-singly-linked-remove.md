### Singly Linked List: Remove

Remove the element at the index provided

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
  remove(i) {
    if (i < 0 || i >= this.length) return undefined;
    if (i === this.length - 1) return this.pop();
    if (i === 0) return this.shift();

    let prev = this.get(i - 1);
    let remove = prev.next;
    prev.next = remove.next;
    length--;

    return remove;
  }
}
```
