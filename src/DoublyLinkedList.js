class Node {
  next = null;
  prev = null;
  value = null;
  constructor(value) {
    this.value = value;
  }

  set next(node) {
    this.next = node;
  }

  set prev(node) {
    this.prev = node;
  }

  get value() {
    return this.value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length += 1;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length += 1;
  }

  insertAt(value, index) {
    if (index > this.length) {
      return;
    } else if (index === this.length) {
      this.append(value);
      return;
    } else if (index === 0) {
      this.prepend(value);
      return;
    }

    let curr = this.head;
    for (let i = 0; i < index; ++i) {
      curr = curr.next;
    }

    const node = new Node(value);

    curr.prev.next = node;

    node.prev = curr.prev;
    node.next = curr;

    curr.prev = node;

    this.length += 1;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) {
      return;
    }

    let curr = this.head;
    for (let i = 0; i !== index; ++i) {
      curr = curr.next;
    }

    return curr.value;
  }

  toArray() {
    let current = this.head;
    const res = [];
    while (current) {
      res.push(current.value);
      current = current.next;
    }
    return res;
  }

  toArrayReversed() {
    let current = this.tail;
    const res = [];
    while (current) {
      res.push(current.value);
      current = current.prev;
    }
    return res;
  }

  remove(value) {
    let curr = this.head;

    while (curr && curr.value !== value) {
      curr = curr.next;
    }

    // is last element
    if (curr.next === null) {
      curr.prev.next = null;
      this.tail = curr.prev;
      curr.prev = null;
      this.length -= 1;
      return;
    }
    if (curr.prev === null) {
      // is first element
      this.head = curr.next;
      curr.next.prev = null;
      curr.next = null;
      this.length -= 1;
      return;
    }

    curr.next.prev = curr.prev;
    curr.prev.next = curr.next;

    curr.next = null;
    curr.prev = null;
    this.length -= 1;
  }
}

module.exports = DoublyLinkedList;
