// this line lets you access the file system. You'll learn more about it later in the course
var fs = require('fs');

// read the `adjacency-list` file in this directory (you might have named the file differently) and split it on new lines into an array
var fileLines = fs.readFileSync('./adjacencyList.txt').toString().split('\n');

// you may have to do this 0 or more times, to remove blank lines from fileLines
fileLines.pop();

fileLines.forEach(function(line) {
// here you have access to each line of the adjacency list
  console.log(line);
});

// Specification:

// Inputs - none
// Outputs - object
// Constraints - time complexity?
// Edge Cases - ???
  
// Justification - To create a graph data structure 

// Explanation - Data structure storing a sequence of elements. Each element is a node that contains a data value and a reference to the next element.

// *** WHITE BOARD FIRST *** 

// *** PSUEDOCODE FIRST *** 

// *** WHEN ALL ABOVE ARE FULLY COMPLETE THEN TYPE SOME CODE ***

// *** PSUEDOCODE FIRST *** 

// *** WHEN ALL ABOVE ARE FULLY COMPLETE THEN TYPE SOME CODE ***

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value  - O(1) time complexity
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value
// passed to contains is represented in the graph  - O(n) time complexity
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph - O(n) time complexity
Graph.prototype.removeNode = function(node) {
  let toRemove = this.nodes.indexOf(node);
  this.nodes.splice(toRemove, 1);
  for (let i = this.edges.length - 1; i >= 0; i--) {
    this.edges.splice(i, 1);
  }
};

// Connects two nodes in a graph by adding an edge between them - O(n) time complexity
Graph.prototype.addEdge = function(fromNode, toNode) {
  // if (this.contains(fromNode) && this.contains(toNode)) {
  this.edges.push([fromNode, toNode]);
  // }
};

// Returns a boolean indicating whether two specified nodes are connected
// Pass in the values contained in each of the two nodes - O(n) time complexity
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      return true;
    }
  }
  return false;
};

// Remove an edge between any two specified (by value) nodes - O(n) time complexity
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph - O(n) time complexity
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};