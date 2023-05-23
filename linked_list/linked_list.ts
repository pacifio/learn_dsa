class LinkedListNode {
  data: number | null;
  next: LinkedListNode | null;
  constructor(data: number | null, next: LinkedListNode | null = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head: LinkedListNode | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first LinkedListNode
  insertFirst(data) {
    this.head = new LinkedListNode(data, this.head);
    this.size++;
  }

  // insert last node
  insertLast(data) {
    let node = new LinkedListNode(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }

  // inset at index
  insetAt(data, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new LinkedListNode(data);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; // node before
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  // get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      if (current) this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        if (current) current = current.next;
      }

      if (current) previous.next = current.next;
      this.size--;
    }
  }

  // clear list
  clearAll() {
    this.head = null;
    this.size = 0;
  }

  // print last data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(400);

ll.printListData();
