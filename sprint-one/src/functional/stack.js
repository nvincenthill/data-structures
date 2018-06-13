let Stack = function() {
  
  let someInstance = {};

  // Use an object with numeric keys to store values
  let storage = {};
  let key = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key ++;
    return value;
  };

  someInstance.pop = function() {
    if (key > 0) {
      let popped = storage[key - 1];
      delete storage[key];
      key --;
      return popped;
    }
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
