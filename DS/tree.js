class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let random = Math.floor(Math.random() * 1 + 1);
    let current = this.root;
    while (true) {
      if (current.right === null) {
        current.right = node;
        return true;
      } else if (current.left === null) {
        current.left = node;
        return true;
      } else {
        current = random == 1 ? current.right : current.left;
      }
    }
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

  BFS() {
    let queue = [];
    let visited = [];
    let node = this.root;

    if (this.root) queue.push(node);
    else return false;

    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return visited;
  }

  DFS_Pre() {
    let data = [];
    let root = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(root);

    return data;
  }

  DFS_Post() {
    let data = [];
    let root = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(root);

    return data;
  }

  DFS_In() {
    let data = [];
    let root = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(root);

    return data;
  }
}

let tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.insert(12);
tree.insert(1);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(16);

//            10
//          /    \
//         6      15
//        / \    /  \
//       3   8  12   20
//      /\      /\   /
//     1 5     11 13 16

console.log(tree);

console.log(tree.DFS_In());
