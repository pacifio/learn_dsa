class BinaryNode {
  value: number;
  left: BinaryNode | null;
  right: BinaryNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addNode(n: BinaryNode) {
    if (n.value < this.value) {
      if (this.left == null) {
        this.left = n;
      } else {
        this.left.addNode(n);
      }
    } else if (n.value > this.value) {
      if (this.right == null) {
        this.right = n;
      } else {
        this.right.addNode(n);
      }
    }
  }

  visit() {
    this.left?.visit();
    console.log(this.value);
    this.right?.visit();
  }

  search(val: number): BinaryNode | null | undefined {
    if (this.value == val) {
      console.log("found ", val);
      return this;
    } else if (val < this.value) {
      return this.left?.search(val);
    } else if (val > this.value) {
      return this.right?.search(val);
    }

    return null;
  }
}

class Tree {
  root: BinaryNode | null;
  constructor() {
    this.root = null;
  }

  add(value: number) {
    const node: BinaryNode = new BinaryNode(value);
    if (this.root == null) {
      this.root = node;
    } else {
      this.root.addNode(node);
    }
  }

  traverse() {
    this.root?.visit();
  }

  search(val: number): BinaryNode | null | undefined {
    return this.root?.search(val);
  }
}

// CODE FROM GEEKS FOR GEEKS
function height(root: BinaryNode | null): number | null {
  if (root === null) {
    return 0;
  }
  return Math.max(height(root.left) ?? 0, height(root.right) ?? 0) + 1;
}

function getCol(h: number): number {
  if (h === 1) {
    return 1;
  }
  return getCol(h - 1) + getCol(h - 1) + 1;
}

function printTree(
  M: number[][],
  root: BinaryNode | null,
  col: number,
  row: number,
  height: number
) {
  if (root === null) {
    return;
  }
  M[row][col] = root.value;
  printTree(M, root.left, col - Math.pow(2, height - 2), row + 1, height - 1);
  printTree(M, root.right, col + Math.pow(2, height - 2), row + 1, height - 1);
}

const myTree: Tree = new Tree();
myTree.root = new BinaryNode(1);
myTree.root.left = new BinaryNode(2);
myTree.root.right = new BinaryNode(3);
myTree.root.left.left = new BinaryNode(4);
myTree.root.left.right = new BinaryNode(5);
myTree.root.right.left = new BinaryNode(6);
myTree.root.right.right = new BinaryNode(7);

const h = height(myTree.root);
const col = getCol(h ?? 0);
const M = new Array(h).fill(100).map(() => new Array(col).fill(0));
printTree(M, myTree.root, Math.floor(col / 2), 0, h ?? 0);

for (let i = 0; i < M.length; i++) {
  let row = "";
  for (let j = 0; j < M[i].length; j++) {
    if (M[i][j] === 0) {
      row = row + " ";
    } else {
      row = row + M[i][j] + " ";
    }
  }
  console.log(row);
}
