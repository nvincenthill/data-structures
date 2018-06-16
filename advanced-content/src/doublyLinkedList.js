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

// create a linked list
var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // add a node to head of list - O(1) time complexity
  list.addToHead = function(value) {
    let node = Node(value);
    if (!list.head) {
      list.tail = node;
    } else {
      list.head.prev = node;
      node.next = list.head;
    }
    list.head = node;
  };

  // add a node to tail of list - O(1) time complexity
  list.addToTail = function(value) {
    let node = Node(value);
    if (!list.head) {
      list.head = node;
    } else {
      list.tail.next = node;
      node.prev = list.tail;
    }
    list.tail = node;
  };

  // remove the node at the head - O(1) time complexity
  list.removeHead = function() {
    let formerHead = list.head.value;
    if (list.head) {
      list.head = list.head.next;
      if (!list.head) {
        list.tail = null;
      } else {
        list.head.prev = null;        
      }
    }   
    return formerHead;
  };
  
  // remove the node at the tail - O(1) time complexity
  list.removeTail = function() {
    let formerTail = list.tail.value;
    if (list.tail) {
      list.tail = list.tail.prev;
      if (!list.tail) {
        list.head = null;
      } else {
        list.tail.next = null;
      }
    } 
    return formerTail;
  };

  // check to see if value is contained in list - O(n) time complexity
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

// create a node
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
