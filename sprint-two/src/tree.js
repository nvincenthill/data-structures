// Specification:

// Inputs - none
// Outputs - object
// Constraints - time complexity?
// Edge Cases - ???
  
// Justification - To create a tree data structure 

// Explanation - A tree is a hierarchical data structure consisting of a node (potentially) with children.
// The children are trees unto themselves, that is, nodes with (potential) children.
// For this reason the tree is referred to as a recursive data structure.

// *** WHITE BOARD FIRST *** 

// *** PSUEDOCODE FIRST *** 

// *** WHEN ALL ABOVE ARE FULLY COMPLETE THEN TYPE SOME CODE ***

// create a tree
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  Object.assign(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {
  
  // add a tree to of children of a tree - O(1) time complexity
  addChild: function(value) {
    var child = Tree(value);
    this.children.push(child);
  },

  // check if a value is contained in the tree - O(n) time complexity
  contains: function(target) {
    if (target === this.value) {
      return true;
    }
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
