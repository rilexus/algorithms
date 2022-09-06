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

const tree1 = new BinaryTree();
const tree2 = new BinaryTree();

tree1.add(10);
tree1.add(12);
tree1.add(8);
tree1.add(9);

tree2.add(10);
tree2.add(12);
tree2.add(8);
tree2.add(9);
tree2.add(11);

console.log(tree1.find(33));
