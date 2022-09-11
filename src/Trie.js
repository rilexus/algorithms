class Node {
  children = {};
  isWord = false;
  previous = null;
  value = null;
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
    for (let i = 0; i < chars.length; ++i) {
      const char = chars[i];
      if (!cur.children[char]) {
        const node = new Node(char);
        node.previous = cur;
        cur.children[char] = node;
      }
      cur = cur.children[char];
    }
    cur.isWord = true;
  }

  find(word) {
    const chars = word.toLowerCase().split("");
    let cur = this.root;

    for (let i = 0; i < chars.length; ++i) {
      const char = chars[i];
      if (!cur.children[char]) {
        return false;
      }
      cur = cur.children[char];
    }

    return cur.isWord;
  }

  #walk(node, chars) {
    let cur = node;
    const path = [cur];

    for (let i = 0; i < chars.length; ++i) {
      const char = chars[i];
      cur = cur.children[char];
      path.push(cur);
    }

    return path;
  }

  suggest(word) {
    if (!word) {
      return [];
    }
    const chars = word.toLowerCase().split("");

    let path = this.#walk(this.root, chars);
    const lastCharNode = path[path.length - 1];

    const getWordNodes = (node, res) => {
      if (!node) {
        return res;
      }
      if (node.isWord) {
        res.push(node);
      }

      Object.values(node.children).forEach((child) => {
        getWordNodes(child, res);
      });
    };
    const wordNodes = [];
    getWordNodes(lastCharNode, wordNodes);

    // paths from root to isWord nodes
    let paths = Array.from({ length: wordNodes.length }).fill([]);

    // walk backwards to the node, we started at
    wordNodes.forEach((node, idx) => {
      let cur = node;
      while (cur !== lastCharNode) {
        paths[idx] = [cur, ...paths[idx]];
        cur = cur.previous;
      }
      paths[idx] = [...path, ...paths[idx]];
    });

    const suggestions = [];
    paths.forEach((path) => {
      const word = path.reduce((word, node) => {
        if (!node.value) {
          return word;
        }
        return `${word}${node.value}`;
      }, "");
      suggestions.push(word);
    });

    return suggestions;
  }
}

module.exports = Trie;
