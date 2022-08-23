const LinkedList = require("./LinkedList");

class Stack extends LinkedList {
  push(value) {
    this.prepend(value);
  }

  pop() {
    if (this.head === null) return;

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    this.head = this.head.next;
  }
}

module.exports = Stack;
