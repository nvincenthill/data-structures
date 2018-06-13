class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
      this.storage = {};
      this.length = 0;
  };

  enqueue(value) {
    console.log(this);
    for (let i = 0; i < this.length; i++) {
      this.storage[i + 1] = this.storage[i]
    }
    this.length ++;
    this.storage[0] = value;
    return value;
  };
  
  dequeue() {
    if (this.length > 0) {
      let dequeued = this.storage[this.length - 1];
      delete this.storage[this.length];
      this.length --;
      return dequeued;
    }
  };
  
  size() {
    return this.length;
  };
  
}