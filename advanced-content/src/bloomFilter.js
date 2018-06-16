// Specification:

// Inputs - m, k as positive integers where m > k
// Outputs - object
// Constraints - time complexity?
// Edge Cases - ???
  
// Justification - To create a Bloom filter.

// Explanation - A Bloom filter is a space-efficient probabilistic data structure. The classic example is using bloom filters to reduce expensive disk
// (or network) lookups for non-existent keys. 
// Bloom filters are being used by NoSQL database engines, 
// especially by key/value stores in order to efficiently query data stores.

// *** WHITE BOARD FIRST *** 

// *** PSUEDOCODE FIRST *** 

// *** WHEN ALL ABOVE ARE FULLY COMPLETE THEN TYPE SOME CODE ***

// Instantiate a bloom filter
var BloomFilter = function(m, k) {
  this.bits = new Array(m);
  this.hashes = generateHashFunctions(m, k);
};

// ???  - O(k) time complexity
BloomFilter.prototype.add = function(item) {
  for (let i = 0; i < this.hashes.length; i++) {
    this.bits[this.hashes[i](JSON.stringify(item))] = 1;
  }
};

// ???  - O(k) time complexity
BloomFilter.prototype.query = function(item) {
  for (let i = 0; i < this.hashes.length; i++) {
    if (!this.bits[this.hashes[i](JSON.stringify(item))]) {
      return false;
    }
  }
  return true;
};
