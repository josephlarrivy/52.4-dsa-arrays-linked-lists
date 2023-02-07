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

  print() {
    let current = this.head;

    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }

  /** push(val): add new value to end of list. */
  // Appends a new node with value val to the tail. Returns undefined.
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length = this.length + 1;
  }

  /** unshift(val): add new value to start of list. */
  // Add a new node with value val to the head. Returns undefined.
  unshift(val) {
    let newNode = new Node(val);

    console.log(newNode)

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = null;
      this.length = 1;
    } else {
      let previousHead = this.head
      this.head = newNode;
      newNode.next = previousHead;
      this.length = this.length + 1;
    }
    
    
  }

  /** pop(): return & remove last item. */
  // Remove & return tail value. Throws error if list is empty.
  pop() {
    let currentValue = this.head;
    let count = 0;

    console.log(currentValue)
    while (count < this.length) {
      if (currentValue.next === null) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return currentValue.val
      } else if (currentValue.next.next !== null) {
        currentValue = currentValue.next
        count++
      } else if (currentValue.next.next === null) {
        const popVal = currentValue.next.val
        currentValue.next = null
        this.tail = currentValue
        this.length = this.length - 1;
        return popVal
      } 
    }
    
  }

  /** shift(): return & remove first item. */
  // Remove & return head value. Throws error if list is empty.
  shift() {
    let previousHead = this.head;
    this.head = previousHead.next;
    this.length = this.length - 1;

    return previousHead.val;
  }

  /** getAt(idx): get val at idx. */
  // Retrieve value at index position idx. Throws error if index is invalid.
  getAt(idx) {
    let currentValue = this.head;
    let count = 0;

    if (idx > this.length -1) {
      console.log('ERROR')
      return 'ERROR'
    }

    while (count < this.length) {
      if (count !== idx) {
        currentValue = currentValue.next
      } else {
        console.log(currentValue)
        return currentValue.val;
      }
      count++
    }

  }

  /** setAt(idx, val): set val at idx to val */
  // Set value of node at index position idx to val.Throws error if index is invalid.
  setAt(idx, val) {
    let currentValue = this.head;
    let count = 0;

    if (idx > this.length - 1) {
      console.log('ERROR')
      return 'ERROR'
    }

    while (count < this.length) {
      if (count !== idx) {
        currentValue = currentValue.next
      } else {
        currentValue.val = val
        // console.log(currentValue)
      }
      count++
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */
  // Insert a new node at position idx with value val.Throws error if index is invalid.Returns undefined.
  insertAt(idx, val) {
    // let currentValue = this.head;
    // let count = 0;

    // if (idx > this.length - 1) {
    //   console.log('ERROR')
    //   return 'ERROR'
    // }

    // while (count < this.length) {
    //   if (count !== idx) {
    //     currentValue = currentValue.next
    //   } else {
    //     let newNode = new Node(val);
    //     currentValue.next = newNode;
    //     newNode.next = currentValue.next.next

    //   }
    //   count++
    // }
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

let list = new LinkedList([5]);
// console.log(list)
console.log(' ')
// console.log(list)
list.pop()
// console.log(list)
// list.push(1)
// list.push(2)
// console.log(list)
// console.log('###########')
// console.log(' ')
// list.unshift(0)
// console.log('xxxxxxxxxxx')
// console.log(' ')
// console.log(list)
// list.shift()
// console.log('$$$$$$$$$$$$')
// console.log(' ')
// console.log(list)
// list.shift()
// console.log('$$$$$$$$$$$$')
// console.log(' ')
// console.log(list)
// list.push(3)
// list.push(4)
// list.push(5)
// console.log(list)
// console.log('$$$$$$$$$$$$')
// console.log(' ')
// list.getAt(1)