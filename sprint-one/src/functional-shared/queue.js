var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
  let someInstance = {};
  someInstance.storage = {};
  someInstance.length = 0;
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    for (let i = 0; i < this.length; i++) {
      this.storage[i + 1] = this.storage[i];
    }
    this.length ++;
    this.storage[0] = value;
    return value;
  },
  dequeue: function() {
    if (this.length > 0) {
      let dequeued = this.storage[this.length - 1];
      delete this.storage[this.length];
      this.length --;
      return dequeued;
    }
  },
  size: function() {
    return this.length;
  }
};


