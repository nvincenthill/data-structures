// FNV-1a Hash
let fnv32a = function(init, limit) {
  return function(str) {
    var hval = init;
    for (var i = 0; i < str.length; ++i) {
      hval ^= str.charCodeAt(i);
      hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    return (hval >>> 0) % limit;
  };
};

// ???  - O(?) time complexity
let generateHashFunctions = function(m, k) {
  let hashes = [];
  let init = Math.floor(10000 * Math.random());
  for (let i = init; i < init + k; i++) {
    hashes.push(fnv32a(i, m));
  }
  return hashes;
};
