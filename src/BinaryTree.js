class Node {
  value = null;
  left = null;
  right = null;

  constructor(value) {
    this.value = value;
  }
}

class BinaryTree {
  root = null;
  constructor() {}

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    this._append(this.root, new Node(value));
  }

  _append(root, node) {
    if (node.value <= root.value && root.left === null) {
      root.left = node;
      return;
    }
    if (node.value > root.value && root.right === null) {
      root.right = node;
      return;
    }
    if (node.value <= root.value) {
      return this._append(root.left, node);
    }

    if (node.value > root.value) {
      return this._append(root.right, node);
    }
  }

  preOrder() {
    const walk = (node, array) => {
      if (!node) {
        return array;
      }

      array.push(node.value);

      walk(node.left, array);
      walk(node.right, array);

      return array;
    };

    return walk(this.root, []);
  }

  inOrder() {
    const walk = (node, array) => {
      if (!node) {
        return array;
      }

      walk(node.left, array);

      array.push(node.value);

      walk(node.right, array);

      return array;
    };

    return walk(this.root, []);
  }

  postOrder() {
    const walk = (node, array) => {
      if (!node) {
        return array;
      }

      walk(node.left, array);
      walk(node.right, array);

      array.push(node.value);

      return array;
    };

    return walk(this.root, []);
  }

  breathFirst() {
    const queue = [this.root];
    const res = [];

    while (queue.length) {
      const cur = queue.shift();

      res.push(cur.value);

      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }

    return res;
  }
}

module.exports = BinaryTree;
