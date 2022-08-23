const linearSearch = require("./src/linearSearch");
const binarySearch = require("./src/binarySearch");
const bubbleSort = require("./src/bubbleSort");
const LinkedList = require("./src/LinkedList");

const list = new LinkedList();

list.append(1);
list.append(4);
list.prepend(2);
list.prepend(1);
list.append(5);

console.log(list.toString());
