// Our implementation of a DFS on a graph. 
// All tests except large DFS test pass.
// Need to implement DFS tail-call recursion

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
let Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value  - O(1) time complexity
Graph.prototype.addNode = function(node) {
  if (!this.nodes.hasOwnProperty(node)) {
    this.nodes[node] = [];
  }
};

// Return a boolean value indicating if the value
// passed to contains is represented in the graph  - O(1) time complexity
Graph.prototype.contains = function(node) {
  return !!this.nodes[node];
};

// Removes a node from the graph - O(n) time complexity
Graph.prototype.removeNode = function(node) {
  for (let i = 0; i < this.nodes[node].length; i++) {
    let adjacentNode = this.nodes[node][i];
    let index = this.nodes[adjacentNode].indexOf(node);
    this.nodes[adjacentNode].splice(index, 1);
  }  
  delete this.nodes[node];
};

// Connects two nodes in a graph by adding an edge between them - O(n) time complexity
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    if (!this.nodes[fromNode].includes(toNode)) {
      this.nodes[fromNode].push(toNode);
      this.nodes[toNode].push(fromNode);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected
// Pass in the values contained in each of the two nodes - O(n) time complexity
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.contains(fromNode)) {
    return this.nodes[fromNode].includes(toNode);
  }
  return false;
};

// Remove an edge between any two specified (by value) nodes - O(n) time complexity
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    let indexFrom = this.nodes[fromNode].indexOf(toNode);
    let indexTo = this.nodes[toNode].indexOf(fromNode);    
    this.nodes[fromNode].splice(indexFrom, 1);
    this.nodes[toNode].splice(indexTo, 1);      
  }
};

// Pass in a callback which will be executed on each node of the graph - O(n) time complexity
Graph.prototype.forEachNode = function(cb) {
  for (let node in this.nodes) {
    cb.call(null, node);
  }
};

// Perform a DFS on the graph - O(n) time complexity
Graph.prototype.depthFirstSearch = function(startNode, targetNode, visitedNodes) {
  if (!this.contains(startNode) || !this.contains(targetNode)) {
    return false;
  }
  visitedNodes = visitedNodes || {};
  visitedNodes[startNode] = true;
  if (startNode === targetNode) {
    return true;
  }
  for (let i = 0; i < this.nodes[startNode].length; i++) {
    if (!visitedNodes.hasOwnProperty(this.nodes[startNode][i])) {
      if (this.depthFirstSearch(this.nodes[startNode][i], targetNode, visitedNodes)) {
        return true;
      }
    }
  }
  
  return false;
};

// TESTS
let chai = require('../../lib/chai/chai.js');
let expect = chai.expect;

describe('Advanced Graph', function() {
  var graph;

  beforeEach(function() {
    graph = new Graph();
  });

  it('should have methods named "addNode", "contains", "removeNode", "addEdge", "hasEdge", "removeEdge", "depthFirstSearch" and "forEachNode"', function() {
    expect(graph.addNode).to.be.a('function');
    expect(graph.contains).to.be.a('function');
    expect(graph.removeNode).to.be.a('function');
    expect(graph.hasEdge).to.be.a('function');
    expect(graph.addEdge).to.be.a('function');
    expect(graph.removeEdge).to.be.a('function');
    expect(graph.forEachNode).to.be.a('function');
    expect(graph.depthFirstSearch).to.be.a('function');
  });

  it('should store values as nodes that were inserted', function() {
    graph.addNode(1);
    expect(graph.contains(1)).to.equal(true);
  });

  it('should remove nodes that were inserted', function() {
    graph.addNode(2);
    expect(graph.contains(2)).to.equal(true);
    graph.removeNode(2);
    expect(graph.contains(2)).to.equal(false);
  });

  it('should create edges between two nodes', function() {
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.addEdge(3, 2);
    expect(graph.hasEdge(3, 2)).to.equal(true);
    expect(graph.hasEdge(3, 1)).to.equal(false);
  });

  it('should remove edges between nodes', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    graph.removeEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(false);
  });

  it('should remove edges between nodes when a node is removed', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    graph.removeNode(5);
    expect(graph.hasEdge(4, 5)).to.equal(false);
  });

  it('should execute a callback on each node in the graph', function() {
    var connectToFive = function(item) {
      graph.addEdge(item, 5);
    };
    graph.addNode(5);
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.forEachNode(connectToFive);
    expect(graph.hasEdge(2, 5)).to.equal(true);
    expect(graph.hasEdge(1, 5)).to.equal(true);
    expect(graph.hasEdge(3, 5)).to.equal(true);
    expect(graph.hasEdge(5, 5)).to.equal(true);
  });
  
  // student created tests
  
  it('should not allow adding an edge with a non-existent node', function() {
    graph.addNode(1);
    graph.addNode(2);
    graph.addEdge(1, 3);
    expect(graph.hasEdge(1, 3)).to.equal(false);
  });
  
  it('should perform a depth first search correctly', function() {
    let nodes = [1, 2, 3, 4, 5];
    
    for (let i = 1; i <= 5; i++) {
      graph.addNode(i);
    }
    graph.addEdge(1, 3);
    graph.addEdge(1, 2);
    graph.addEdge(2, 4);
    graph.addEdge(3, 4);
    let result1 = graph.depthFirstSearch(1, 5);
    let result2 = graph.depthFirstSearch(1, 4);
    expect(result1).to.eql(false);
    expect(result2).to.eql(true);
  });
  
  it('should perform a difficult depth first search', function() {
    for (let i = 1; i <= 10; i++) {
      graph.addNode(i);
    }
    graph.addEdge(1, 3);
    graph.addEdge(3, 5);
    graph.addEdge(5, 8);
    graph.addEdge(8, 9);
    graph.addEdge(9, 1);
    graph.addEdge(10, 7);
    graph.addEdge(2, 3);
    
    let result1 = graph.depthFirstSearch(1, 10);
    let result2 = graph.depthFirstSearch(1, 9);
    expect(result1).to.equal(false);
    expect(result2).to.equal(true);
  });
  
  it('should perform a big depth first search', function() {
    this.timeout(100000);
    let manyNodes = [];
    let bigGraph = makeGraphFromFileLines();
    let result1 = bigGraph.depthFirstSearch(312638, 10453);
    let result2 = bigGraph.depthFirstSearch(1, 600000);
    expect(result1).to.equal(true);
    expect(result2).to.equal(false);
  });
});

let fs = require('fs');

// import list
let fileLines = fs.readFileSync('../src/googleAdjacencyList.txt').toString().split('\n');

var makeGraphFromFileLines = function() {
  let graph = new Graph();
  fileLines.forEach(function(line) {  
    if (line.match(/[0-9]+[\ \t]+[0-9]+/)) {
      let nodes = line.trim().split('\t');
      graph.addNode(Number(nodes[0]));
      graph.addNode(Number(nodes[1]));
      graph.addEdge(Number(nodes[0]), Number(nodes[1]));
    }
  });
  return graph;
};
