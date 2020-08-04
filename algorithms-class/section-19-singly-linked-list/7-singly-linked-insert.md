### Singly Linked List: Insert

Adding a node the Linked List at a specific location

```javascript
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }
  push(val) {
    // create new node using passed in value
    let newGuy = new Node(val);

    // if there is no head, set head AND tail equal to new node
    if (!this.head) {
      this.head = newGuy;
      this.tail = this.head;
    } else {
      // otherwise, set the current tail's next property to the new node and
      // set the tail equal to the new node as well.
      this.tail.next = newGuy;
      this.tail = newGuy;
    }
    // increase the length
    this.length++;
    // return the list
    return this;
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
      newNode.next = this.head;
      // set the head property to be the new node
      this.head = newNode;
    }
    // increment list by one
    this.length++;
    // return list
    return this;
  }
  insert(i, val) {
    if (i < 0 || i > this.length) return false;

    if (i === this.length) return !!this.push(val);

    if (i === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    // use get at index - 1;
    let previousNode = this.get(i - 1);
    // use that node to set the new node to it's next property
    newNode.next = previousNode.next;
    // set the next property on the new node to be the previous next
    previousNode.next = newNode;
    // incrment the length
    this.length++;
    // return true
    return true;
  }
}
```
