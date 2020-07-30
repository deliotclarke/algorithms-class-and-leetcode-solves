### Singly Linked List: Push

```javascript
// piece of data - val
// and a reference to the next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var first = new Node('hi');
first.next = new Node('my dude');
first.next.next = new Node('but why though?');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
}

var list = new SinglyLinkedList();

list.push('hi');
list.push('hell0');
list.push('bing');
list.push('bong');
console.log(list);
```
