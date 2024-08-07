// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here 
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor(root = null) {
      this.root = root;
    }
  
    insert(val, currentNode=this.root) {
      if (!this.root) {
        this.root = new TreeNode(val);
        return;
      }
  
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = new TreeNode(val);
        } else {
          this.insert(val, currentNode.left);
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = new TreeNode(val);
        } else {
          this.insert(val, currentNode.right);
        }
      }
    }
    search(val, currentNode = this.root) {
      if (!currentNode) {
        return false;
      }
      
      if (val === currentNode.val) {
        return true;
      }
      
      if (val < currentNode.val) {
        return this.search(val, currentNode.left);
      } else {
        return this.search(val, currentNode.right);
      }
    }
  
  
    preOrderTraversal(currentNode = this.root) {
      if (!currentNode) return;
  
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
  
    inOrderTraversal(currentNode = this.root) {
      if (!currentNode) return;
  
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      if (!currentNode) return;
  
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // If the tree is empty, return immediately
      if (!this.root) return;
  
      // Initialize a queue with the root node
      const queue = [this.root];
  
      // Continue traversing while there are nodes in the queue
      while (queue.length > 0) {
        // Remove the first node from the queue
        const currentNode = queue.shift();
        
        // Print the value of the current node
        console.log(currentNode.val);
  
        // If the current node has a left child, add it to the queue
        if (currentNode.left) queue.push(currentNode.left);
        
        // If the current node has a right child, add it to the queue
        if (currentNode.right) queue.push(currentNode.right);
      }
    }
  
  
    depthFirstTraversal() {
      // Check if the tree is empty
      if (!this.root) return;
  
      // initialize a stack with the root node
      const stack = [this.root];
  
      // while the stack is not empty
      while (stack.length > 0) {
        // print and remove first node in stack
        const currentNode = stack.pop();
        console.log(currentNode.val);
  
        // if the node has a right node
        if (currentNode.left) {
          // push the right node on the back of the stack
          stack.push(currentNode.left);
        }
        // if the node has a left node
        if (currentNode.right) {
          // push the left node on the back of the stack
          stack.push(currentNode.right);
        }
      }
    }
  }

module.exports = { BinarySearchTree, TreeNode };
  