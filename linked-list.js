/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  // Appends a new node with value val to the tail.Returns undefined.
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length = this.length +1
  }

  /** unshift(val): add new value to start of list. */
  // Add a new node with value val to the head.Returns undefined.
  unshift(val) {

  }

  /** pop(): return & remove last item. */
  // Remove & return tail value.Throws error if list is empty.
  pop() {

  }

  /** shift(): return & remove first item. */
  // Remove & return head value.Throws error if list is empty.
  shift() {

  }

  /** getAt(idx): get val at idx. */
  // Retrieve value at index position idx. Throws error if index is invalid.
  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */
  // Set value of node at index position idx to val.Throws error if index is invalid.
  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */
  // Insert a new node at position idx with value val.Throws error if index is invalid.Returns undefined.
  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */
  // Remove & return value at position idx.Throws error if index is invalid.
  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */
  // Given a linked list containing numbers, return the average of those numbers.
  average() {
    
  }
}

module.exports = LinkedList;

let list = new LinkedList();
console.log(list)
list.push(1)
console.log(list)
list.push(2)
// console.log(list)
list.push(3)
list.push(4)
list.push(5)
console.log(list)
