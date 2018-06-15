// Bloom filter TDD

describe('bloomFilter', function() {
  let bloomFilter;
  let m = 18;
  let k = 3;
  
  beforeEach(function() {
    bloomFilter = new BloomFilter(m, k);
  });

  it('should have methods named "addItem" and "query"', function() {
    expect(bloomFilter.addItem).to.be.a('function');
    expect(bloomFilter.query).to.be.a('function');

  });
  
  // what other tests do we need?
  
  
  
});