var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {};
  someInstance.storage = {};
  someInstance.key = 0;
  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
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
