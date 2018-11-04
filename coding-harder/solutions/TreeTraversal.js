/**
 * Implementation of a BinaryTree class with breadth first search and inorder,
 * preorder, and postorder depth first search functions.
 *
 * @see {@link https://en.wikipedia.org/wiki/Binary_tree}
 */
class BinarySearchTree {
  constructor(...nodes) {
    this.root = null;
    for (let node of nodes) {
      this.put(node.key, node.value);
    }
  }

  put(key, value) {
    function _put(node, key, value) {
      if (node === null) return new Node(key, value);
      else if (key < node.key) {
        node.left = _put(node.left, key, value);
      } else if (key > node.key) {
        node.right = _put(node.right, key, value);
      } else {
        node.value = value;
      }
      return node;
    }
    this.root = _put(this.root, key, value);
  }

  get(key) {
    let x = this.root;
    while (x !== null) {
      if (key < x.key) x = x.left;
      // traverse left
      else if (key > x.key) x = x.right;
      // traverse right
      else return x.value; // found it!
    }
    return x;
  }

  delete(key) {
    function _delete(node, key) {
      if (node === null) return;
      if (key < node.key) {
        node.left = _delete(node.left, key);
      } else if (key > node.key) {
        node.right = _delete(node.right, key);
      } else {
        // node.key === key
        if (node.right === null) return node.left;
        if (node.left === null) return node.right;

        let t = node;
        node = min(t.right);
        node.right = removeMin(t.right);
        node.left = t.left;
      }
      return node;
    }

    function removeMin(node) {
      if (node.left === null) return node.right;
      node.left = removeMin(node.left);
      return node;
    }

    function min(node) {
      let x = node;
      while (x.left !== null) x = x.left;
      return x;
    }

    this.root = _delete(this.root, key);
  }

  contains(key) {
    return this.get(key) !== null;
  }

  isEmpty() {
    return this.root === null;
  }

  size() {
    function _size(node) {
      return node === null ? 0 : 1 + _size(node.left) + _size(node.right);
    }
    return _size(this.root);
  }

  inorder(fn) {
    function _inorder(node) {
      if (node === null) return;
      _inorder(node.left);
      fn(node);
      _inorder(node.right);
    }
    _inorder(this.root);
  }

  preorder(fn) {
    function _preorder(node) {
      if (node === null) return;
      fn(node);
      _preorder(node.left);
      _preorder(node.right);
    }
    _preorder(this.root);
  }

  postorder(fn) {
    function _postorder(node) {
      if (node === null) return;
      _postorder(node.left);
      _postorder(node.right);
      fn(node);
    }
    _postorder(this.root);
  }

  bfs(fn) {
    if (this.root === null) return;
    let queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      let node = queue.dequeue();
      fn(node);
      if (node.left !== null) queue.enqueue(node.left);
      if (node.right !== null) queue.enqueue(node.right);
    }
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor(...items) {
    this.data = [];
    for (let item of items) {
      this.enqueue(item);
    }
  }

  enqueue(item) {
    this.data.unshift(item);
  }

  dequeue() {
    return this.data.pop();
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

module.exports = BinarySearchTree;
