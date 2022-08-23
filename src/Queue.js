const LinkedList = require("./LinkedList");

class Queue extends LinkedList {
  enqueue(value) {
    // add to queue
    this.append(value);
  }
  dequeue() {
    // remove from queue
    if (this.head === null) return;

    if (this.head.next === null) {
      const v = this.head.value;
      this.head = null;
      return v;
    }
    const v = this.head.value;
    this.head = this.head.next;
    return v;
  }

  peek() {
    return this.head?.value;
  }
}

module.exports = Queue;
