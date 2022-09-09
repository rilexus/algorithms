class Node {
  children = {};
  value = null;
  isWord = false;
  constructor(value) {
    this.value = value;
  }
}

class Trie {
  root = null;

  constructor() {
    this.root = new Node();
  }

  insert(str) {
    // TODO: remove numbers and symbols
    const chars = str.toLowerCase().split("");

    let cur = this.root;
    chars.forEach((char) => {
      if (cur.children[char]) {
        cur = cur.children[char];
        return;
      }
      cur.children[char] = new Node(char);
      cur = cur.children[char];
    });
    cur.isWord = true;
  }
}

module.exports = Trie;
