const linearSearch = require("./src/linearSearch");
const binarySearch = require("./src/binarySearch");
const bubbleSort = require("./src/bubbleSort");
const LinkedList = require("./src/LinkedList");
const Queue = require("./src/Queue");
const Stack = require("./src/Stack");
const deepClone = require("./src/deepClone");

const source = { k: () => {}, s: "stan", a: [1, { m: 2, k: { h: 2 } }] };

const clone = deepClone(source);
