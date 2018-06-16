// Specification:

// Inputs - m, k as positive integers where m > k
// Outputs - object
// Constraints - time complexity?
// Edge Cases - ???
  
// Justification - To create a Bloom filter.

// Explanation - A Bloom filter is a space-efficient probabilistic data structure

// *** WHITE BOARD FIRST *** 

// *** PSUEDOCODE FIRST *** 

// *** WHEN ALL ABOVE ARE FULLY COMPLETE THEN TYPE SOME CODE ***

// Instantiate a bloom filter
var BloomFilter = function(m, k) {
  this.bits = new Array(m);
  this.hashes = generateHashFunctions(k, m);
};

// ???  - O(?) time complexity
BloomFilter.prototype.addItem = function(item) {
  for (var i = 0; i < this.hashes.length; i++) {
    this.bits[this.hashes[i](JSON.stringify(item))] = 1;
  }
};

// ???  - O(?) time complexity
BloomFilter.prototype.query = function(item) {
  for (var i = 0; i < this.hashes.length; i++) {
    if (!this.bits[this.hashes[i](JSON.stringify(item))]) {
      return false;
    }
  }
  return true;
};



