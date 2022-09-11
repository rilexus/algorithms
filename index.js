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
const Trie = require("./src/Trie");
const Graph = require("./src/Graph");

const graphList = [
  [
    // 0
    {
      to: 1,
    },
    {
      to: 4,
    },
  ],
  [
    // 1
    {
      to: 2,
    },
  ],
  [
    // 2
  ],
  [
    // 3
    { to: 1 },
    { to: 2 },
  ],
  [
    // 4
    { to: 1 },
    { to: 3 },
  ],
];

const graph = new Graph(graphList);

console.log(graph.find(3, 0));
