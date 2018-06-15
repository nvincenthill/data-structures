// Specification:

// Inputs - none
// Outputs - object
// Constraints - time complexity?
// Edge Cases - ???
  
// Justification - To create a Hash Table object

// Explanation - Hash tables (sometimes called hash maps) store key value pairs. 
// They do so in a memory efficient way by using a 'hashing function' that translates keys into numerical indices located within a fixed block of memory (think about the contiguous blocks of memory used in arrays).
// Hash tables only increase their size in memory when necessary, and reduce their size in memory when possible.

// *** WHITE BOARD FIRST *** 

// *** PSUEDOCODE FIRST *** 

// *** WHEN ALL ABOVE ARE FULLY COMPLETE THEN TYPE SOME CODE ***

var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

// Handle limit augmentation - O(1) time complexity
HashTable.prototype.handleLimit = function() {
  if (this._count === this._limit) {
    this._limit *= 2;
  } 
};

// Insert key-value pair into hash table - O(1) time complexity
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  while (this._storage.get(index) !== undefined && !this._storage.get(index)[k]) {
    index = (index + 1) % this._limit;
  }
  var obj = {};
  obj[k] = v;
  this._count++;
  this.handleLimit();  
  this._storage.set(index, obj);
};

// Retrieve value corresponding to k in hash table - O(1) time complexity
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return;
  }
  while (!this._storage.get(index)[k]) {
    index = (index + 1) % this._limit;
  }
  return this._storage.get(index)[k];
};

// Remove value for k - O(1) time complexity
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._count--;

  this._storage.set(index, undefined);
};
