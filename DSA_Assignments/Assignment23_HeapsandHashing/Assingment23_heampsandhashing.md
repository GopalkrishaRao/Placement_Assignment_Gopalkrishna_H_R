
#
* **Question 1**

Given preorder of a binary tree, calculate its **[depth(or height)](https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/)** [starting from depth 0]. The preorder is given as a string with two possible characters.

1. ‘l’ denotes the leaf
2. ‘n’ denotes internal node

The given tree can be seen as a full binary tree where every node has 0 or two children. The two children of a node can ‘n’ or ‘l’ or mix of both.


* **Answer:**

```
function calculateDepth(preorder) {
  let depth = 0;
  for (let i = 0; i < preorder.length; i++) {
    if (preorder[i] === 'n') {
      depth++;
    }
  }
  return depth;
}

```

#
* **Question 2**
Given a Binary tree, the task is to print the **left view** of the Binary Tree. The left view of a Binary Tree is a set of leftmost nodes for every level.


* **Answer:**

```
function leftView(root) {
  const leftView = [];
  
  function dfs(node, level) {
    if (node === null) {
      return;
    }

    if (level >= leftView.length) {
      leftView.push(node.val);
    }

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root, 0);

  return leftView;
}

// Binary Tree Node
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```

#
* **Question 3**
Given a Binary Tree, print the Right view of it.

The right view of a Binary Tree is a set of nodes visible when the tree is visited from the Right side.
* **Answer:**

```
function rightView(root) {
  const rightView = [];

  function dfs(node, level) {
    if (node === null) {
      return;
    }

    if (level >= rightView.length) {
      rightView.push(node.val);
    }

    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  }

  dfs(root, 0);

  return rightView;
}

// Binary Tree Node
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```
#
* **Question 4**

Given a Binary Tree, The task is to print the bottom view from left to right. A node x is there in output if x is the bottommost node at its horizontal distance. The horizontal distance of the left child of a node x is equal to a horizontal distance of x minus 1, and that of a right child is the horizontal distance of x plus 1.

* **Answer:**

```

function bottomView(root) {
  const horizontalDistanceMap = {};

  class NodeInfo {
    constructor(node, horizontalDistance) {
      this.node = node;
      this.horizontalDistance = horizontalDistance;
    }
  }

  
  const queue = [new NodeInfo(root, 0)];

  while (queue.length > 0) {
    const { node, horizontalDistance } = queue.shift();

       horizontalDistanceMap[horizontalDistance] = node.val;


    if (node.left) {
      queue.push(new NodeInfo(node.left, horizontalDistance - 1));
    }


    if (node.right) {
      queue.push(new NodeInfo(node.right, horizontalDistance + 1));
    }
  }

  const sortedKeys = Object.keys(horizontalDistanceMap)
    .map(Number)
    .sort((a, b) => a - b);

  const result = sortedKeys.map((key) => horizontalDistanceMap[key]);
  return result;
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```