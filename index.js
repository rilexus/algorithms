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

const trie = new Trie();

trie.insert("some");
trie.insert("sapa");

console.log(trie.root.children.s.children.a.children.p.children.a);
