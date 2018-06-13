let Queue = function() {
  let someInstance = {};

  // Use an object with numeric keys to store values
  let storage = {};
  let length = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    for (let i = 0; i < length; i++) {
      storage[i + 1] = storage[i]
    }
    length ++;
    storage[0] = value;
    return value;
  };

  someInstance.dequeue = function() {
    if (length > 0) {
      let dequeued = storage[length - 1];
      delete storage[length];
      length --;
      return dequeued;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
