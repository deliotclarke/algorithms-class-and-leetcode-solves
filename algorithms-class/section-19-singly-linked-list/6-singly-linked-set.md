### Singly Linked List: Set

Changing the value of a node based on the position in the Linked List

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  contructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  set(i, val) {
    // really similar to get
    // early exit
    if (i < 0 || i >= this.length) return null;

    // create a counter and currentNode
    let counter = 0;
    let currentNode = this.head;

    // loop
    while (counter !== i) {
      // keep moving
      currentNode = currentNode.next;
      counter++;
    }
    // set current node's val to passed in value
    currentNode.val = val;
    return currentNode;
  }
  // or!!
  set2(i, val) {
    let node = this.get(i);
    if (!node) return false;
    node.val = val;
    return true;
  }
}
```

Colt's Solution:

```javascript
set(index, val) {
  let foundNode = this.get(index);
  if (foundNode) {
    foundNode.val = val;
    return true;
  }
  return false;
}
```
