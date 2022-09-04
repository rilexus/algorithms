const linearSearch = require("./src/linearSearch");
const binarySearch = require("./src/binarySearch");
const bubbleSort = require("./src/bubbleSort");
const LinkedList = require("./src/LinkedList");
const Queue = require("./src/Queue");
const Stack = require("./src/Stack");
const deepClone = require("./src/deepClone");
const quickSort = require("./src/quickSort");
const DoublyLinkedList = require("./src/DoublyLinkedList");

const list = new DoublyLinkedList();

list.prepend(2);
list.append(4);
list.prepend(1);
list.append(5);
list.insertAt(3, 2);

list.prepend(0);
list.remove(5);
list.remove(0);
list.remove(3);

console.log(list.get(4));

console.log(list.toArray());
console.log(list.toArrayReversed());
