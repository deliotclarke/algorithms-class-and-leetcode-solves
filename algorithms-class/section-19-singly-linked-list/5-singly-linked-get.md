### Singly Linked List: Get

Retrieving a node by it's postion in the list

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
  get(i) {
    // if the index is less than zero or greater than or equal to the lenght of the list, return null
    if (i < 0 || i >= this.length) return null;
    // loop through the list until you reach the index and return the node at that index
    // hint: counter var
    let counter = 0;
    let currentNode = this.head;
    while (counter !== i) {
      currentNode = currentNode.next;
      counter++;
    }
    // return value
    return currentNode.val;
  }
}
```

Colt's solve was exactly like mine. :thumbs up:
