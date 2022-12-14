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

  #find(node, value) {
    if (!node) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    if (value >= node.value) {
      return this.#find(node.right, value);
    }
    if (value <= node.value) {
      return this.#find(node.left, value);
    }
  }

  find(value) {
    return this.#find(this.root, value);
  }

  compare(node1, node2) {
    if (node1 === null && node2 === null) {
      return true;
    }
    if (node1 === null || node2 === null) {
      return false;
    }
    if (node1.value !== node2.value) {
      return false;
    }
    console.log(node1.value, node2.value);

    return (
      this.compare(node1.left, node2.left) &&
      this.compare(node1.right, node2.right)
    );
  }
}

module.exports = BinaryTree;
