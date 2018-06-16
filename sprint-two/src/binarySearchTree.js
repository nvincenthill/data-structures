// Specification:

// Inputs - none
// Outputs - object
// Constraints - time complexity?
// Edge Cases - ???
  
// Justification - To create a binary search tree

// Explanation -

// *** WHITE BOARD FIRST *** 

// *** PSUEDOCODE FIRST *** 

// *** WHEN ALL ABOVE ARE FULLY COMPLETE THEN TYPE SOME CODE ***

class BinarySearchTree {
  
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
  
  // Insert a new value into the tree in the correct position - O(log n) time complexity
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }
  
  // Check if value is contained in tree - O(log n) time complexity
  contains(value) {
    if (value === this.value) {
      return true;
    }
    if (value < this.value && this.left) {
      return this.left.contains(value);
    }
    if (value > this.value && this.right) {
      return this.right.contains(value);
    }
    
    return false;
  }
  
  // Call function on every value in the tree - O(n) time complexity
  depthFirstLog(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstLog(cb); 
    }
    if (this.right) {
      this.right.depthFirstLog(cb); 
    }
  }
  
}