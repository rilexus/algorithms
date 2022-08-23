const linearSearch = require("./src/linearSearch");
const binarySearch = require("./src/binarySearch");
const bubbleSort = require("./src/bubbleSort");
const LinkedList = require("./src/LinkedList");
const Queue = require("./src/Queue");

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

q.dequeue();

console.log(q.toString());
