class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    let current = this.root;

    if (this.root == null) {
      this.root = node;
      return this;
    }

    while (true) {
      if (value == current.value) return false;
      if (value > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(value) {
    let current = this.root;

    while (current) {
      if (current.value === value) return true;
      if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return false;
  }
}

let tree = new BST();

tree.insert(7);
tree.insert(5);
tree.insert(9);
tree.insert(3);
tree.insert(2);
tree.insert(12);
tree.insert(10);
tree.insert(8);
tree.insert(6);
tree.insert(4);

console.log(tree.find(10));
