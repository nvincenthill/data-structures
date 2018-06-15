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

let HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

// Handle limit augmentation - O(n) time complexity
HashTable.prototype.resize = function(newSize) {
  let temp = [];
  for (let i = 0; i < this._limit; i++) {
    if (this._storage[i]) {
      temp.push(this._storage[i]);
    }
  }
  this._limit = newSize;
  this._storage = LimitedArray(this._limit);
  for (let i = 0; i < temp.length; i++) {
    this.insert(temp[i].key, temp[i].value);
  }
};

// Insert key-value pair into hash table - worst O(n) average O(1) time complexity
HashTable.prototype.insert = function(k, v) {
  if (this._count >= 0.67 * this._limit) {
    this.resize(this._limit * 2);  
  }
  let index = this.handleIndex(k);
  if (!this._storage.get(index)) {
    this._count++;
  }
  this._storage.set(index, {key: k, value: v});
};

// Retrieve value corresponding to k in hash table - worst O(n) average O(1) time complexity
HashTable.prototype.retrieve = function(k) {
  let index = this.handleIndex(k);
  if (this._storage.get(index)) {
    return this._storage.get(index).value;
  }
};

// Remove value for k - worst O(n) average O(1) time complexity
HashTable.prototype.remove = function(k) {
  let index = this.handleIndex(k);
  // if (this._storage.get(index)) {
    this._count--;
    this._storage.set(index, undefined);
    if (this._count < this._limit * 0.33 && this._limit > 8) {
      this.resize(this._limit / 2);  
    }
  // } 
};

// Get an index correctly - O(n) time complexity
HashTable.prototype.handleIndex = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  while (this._storage.get(index) && this._storage.get(index).key !== k) {
    index = (index + 1) % this._limit;
  }
  return index;
};
