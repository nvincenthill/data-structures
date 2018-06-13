var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.key = 0;
  return someInstance;
};

var stackMethods = {
    push : function(value) {
    this.storage[this.key] = value;
    this.key ++;
    return value;
  },
  pop : function() {
    if (this.key > 0) {
      let popped = this.storage[this.key - 1];
      delete this.storage[this.key];
      this.key --;
      return popped;
    }
  },
  size : function() {
    return this.key;
  }
};


