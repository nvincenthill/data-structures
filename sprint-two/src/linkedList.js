// Specification:

// Inputs - none
// Outputs - object
// Constraints - time complexity?
// Edge Cases - ???
  
// Justification - To create a linked list data structure 

// Explanation - Data structure storing a sequence of elements. Each element is a node that contains a data value and a reference to the next element.

// *** WHITE BOARD FIRST *** 

// *** PSUEDOCODE FIRST *** 

// *** WHEN ALL ABOVE ARE FULLY COMPLETE THEN TYPE SOME CODE ***

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = Node(value);
    if (list.head === null) {
      list.head = node;
    } else {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    let formerHead = list.head.value;
    if (list.head !== null) {
      list.head = list.head.next;
      if (list.head === null) {
        list.tail = null;
      }
    }   
    return formerHead;
  };

  list.contains = function(target) {
    let currentNode = list.head;
    while (currentNode !== null) {
      if (target === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };
  
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
