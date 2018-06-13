// Specification:

// Inputs
// Outputs
// Constraints
// Edge Cases
  
// Justification - 

// Explanation -

// *** WHITE BOARD FIRST *** 

// *** PSUEDOCODE FIRST *** 

// *** WHEN ALL ABOVE ARE FULLY COMPLETE THEN TYPE SOME CODE ***

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


