const { BinarySearchTree, TreeNode } = require('./');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here 
  let current = rootNode;
  while(current.left) {
    current = current.left;
  }
  return current.val;
}

function findMaxBST (rootNode) {
  // Your code here 
  let current = rootNode;
  while(current.right) {
    current = current.right;
  }
  return current.val;
}

function findMinBT (rootNode) {
  // Your code here 
  if (!rootNode) return null;

  let min = rootNode.val;
  // let leftMin = findMaxBST(rootNode.left);
  // let rightMin = findMaxBST(rootNode.right);
  if(rootNode.left !== null) min = Math.min(min, findMinBT(rootNode.left));
  if(rootNode.right !== null) min = Math.min(min, findMinBT(rootNode.right));
  return min;
}




function findMaxBT (rootNode) {
  // Your code here 
  if(!rootNode) return null;

  let max = rootNode.val;
  if(rootNode.left !== null) max = Math.max(max, findMaxBT(rootNode.left));
  if(rootNode.right !== null) max = Math.max(max, findMaxBT(rootNode.right));
  return max;
}

function getHeight (rootNode) {
  // Your code here 
  if (!rootNode) return -1;
  let leftH = getHeight(rootNode.left);
  let rightH = getHeight(rootNode.right);

  return 1 + Math.max(leftH, rightH);
  
}

function balancedTree (rootNode) {
  // Your code here 
  if (!rootNode) return true;

  let leftH = getHeight(rootNode.left);
  let rightH = getHeight(rootNode.right);

// check if the node is balanced;

let currentB = Math.abs(leftH - rightH) <= 1;

//check if left and right are balanced;

let isLeftBalanced = balancedTree(rootNode.left);
let isRightBalanced = balancedTree(rootNode.right);

return currentB && isLeftBalanced && isRightBalanced;

}

function countNodes (rootNode) {
  // Your code here 
  if(!rootNode) return 0;
  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

function getParentNode (rootNode, target) {
  // Your code here 
  if(!rootNode || rootNode.val === target) return null;

  if((rootNode.left && rootNode.left.val === target) || (rootNode.right && rootNode.right.val === target)) {
    return rootNode;
  }
  let leftR = getParentNode(rootNode.left, target);
  let rightR = getParentNode(rootNode.right, target);
  return leftR || rightR || undefined;
}

function inOrderPredecessor (rootNode, target) {
  // Your code here 
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}










class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


const depthFirstPrint = (root) => {
  const stack = [ root ];

  while(stack.length > 0) {
    const curr = stack.pop();
    console.log(curr.val);

    if(curr.right !== null) {
      stack.push(curr.right);
    }
    if(curr.left !== null) {
      stack.push(curr.left);
    }
  }
}

depthFirstPrint(a);