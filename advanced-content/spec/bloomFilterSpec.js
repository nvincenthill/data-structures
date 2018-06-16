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
  
  // check if an item 
  it('should contain an item that has been added', function() {
    bloomFilter.addItem('test');
    expect(bloomFilter.query('test')).to.equal(true);
  });
  
});

describe('doublyLinkedList', function() {
  let doublyLinkedList;
  
  beforeEach(function() {
    // doublyLinkedList = new doublyLinkedList();
  });

  it('test test', function() {
    expect(true).to.be.a('boolean');

  });
  
  // // check if an item 
  // it('should contain an item that has been added', function() {
  //   bloomFilter.addItem('test');
  //   expect(bloomFilter.query('test')).to.equal(true);
  // });
  
});