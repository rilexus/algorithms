const linearSearch = require("./src/linearSearch");
const binarySearch = require("./src/binarySearch");
const bubbleSort = require("./src/bubbleSort");
const LinkedList = require("./src/LinkedList");
const Queue = require("./src/Queue");
const Stack = require("./src/Stack");
const deepClone = require("./src/deepClone");
const quickSort = require("./src/quickSort");
const DoublyLinkedList = require("./src/DoublyLinkedList");
const BinaryTree = require("./src/BinaryTree");

const tree = new BinaryTree();

tree.add(10);
tree.add(12);
tree.add(8);
tree.add(9);

console.log(tree.breathFirst());
