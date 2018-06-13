class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
      this.storage = {};
      this.key = 0;
  };

  push(value) {
    this.storage[this.key] = value;
    this.key ++;
    return value;
  };
  
  pop() {
    if (this.key > 0) {
      let popped = this.storage[this.key - 1];
      delete this.storage[this.key];
      this.key --;
      return popped;
    }
  };
  
  size() {
    return this.key;
  };
  
}