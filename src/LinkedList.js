class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    if (this.head === null) {
      // empty list
      this.head = { value, next: null };
      this.tail = this.head;
    } else {
      this.tail.next = { value, next: null };
      this.tail = this.tail.next;
    }
  }

  prepend(value) {
    if (this.head === null) {
      // empty list
      this.head = { value, next: null };
      this.tail = this.head;
    } else {
      this.head = { value, next: this.head };
    }
  }

  toArray() {
    let el = this.head;
    const res = [];
    do {
      res.push(el.value);
      el = el.next;
    } while (el !== null);

    return res;
  }

  toString() {
    return [...this].join(",");
  }

  [Symbol.iterator]() {
    let el = this.head;
    return {
      next() {
        if (el === null) {
          return { done: true, value: null };
        }
        const res = { done: false, value: el.value };
        el = el.next;
        return res;
      },
    };
  }
}

module.exports = LinkedList;
