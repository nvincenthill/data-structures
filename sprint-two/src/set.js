// Specification:

// Inputs - none
// Outputs - object
// Constraints - time complexity?
// Edge Cases - ???
  
// Justification - To create a Set.

// Explanation - Sets contain unique values in no particular order.

// *** WHITE BOARD FIRST *** 

// *** PSUEDOCODE FIRST *** 

// *** WHEN ALL ABOVE ARE FULLY COMPLETE THEN TYPE SOME CODE ***

var Set = function() {
  var set = Object.create(setPrototype);
  set._dataStorage = {};
  return set;
};

var setPrototype = {};

// - O(1) time complexity
setPrototype.add = function(item) {
  this._dataStorage[JSON.stringify(item)] = true;
};

// - O(1) time complexity
setPrototype.contains = function(item) {
  return this._dataStorage.hasOwnProperty(JSON.stringify(item));
};

// - O(1) time complexity
setPrototype.remove = function(item) {
  delete this._dataStorage[JSON.stringify(item)];
};
