let bloomTester = function() {
  let numberOfSlots = Number(prompt('Number of slots:')) || 18;
  let numberOfHashes = Number(prompt('Number of hash functions:')) || 3;
  console.log('running tests...');
  let numberOfItems = numberOfSlots / 9;
  let numberOfTests = 10000;
  let falsePositiveRates = [];
  for (let i = 0; i < numberOfTests; i++) {
    let bFilter = new BloomFilter(numberOfSlots, numberOfHashes);
    let falsePositives = 0;
    let filterItems = generateFilterItems(numberOfItems);
    for (let key in filterItems) {
      bFilter.add(key);
    }
    let testItems = generateTestItems(numberOfSlots, filterItems);
    for (let key in testItems) {
      if (bFilter.query(key) && !filterItems.hasOwnProperty(key)) {
        falsePositives++;
      }
    }
    falsePositiveRates.push(falsePositives / Object.keys(testItems).length);
  }
  let result = (average(falsePositiveRates) * 100).toFixed(4);
  let approximateRate = (Math.pow(1 - Math.pow(Math.E, 
    (-1 * numberOfHashes * numberOfItems) / numberOfSlots), numberOfHashes) * 100).toFixed(4);
  let theorecticalMax = (Math.pow(1 - Math.pow(Math.E, 
    (-1 * numberOfHashes * (numberOfItems + 0.5)) / (numberOfSlots - 1)), numberOfHashes) * 100).toFixed(4);
  console.log(`You ran ${numberOfTests} tests with ${numberOfSlots} slots and ${numberOfHashes} hashes`);
  console.log(`The tests produced an average false positive rate of ${result}%`);
  console.log(`The theoretical approximation rate is ${approximateRate}%`);
  console.log(`The theoretical max rate is ${theorecticalMax}%`);
};

let average = function(vals) {
  let sum = vals.reduce(function(sum, val) {
    return sum + val;
  });
  return sum / vals.length;
};

let generateFilterItems = function(numberOfItems) {
  let items = {};
  for (let i = 0; i < numberOfItems; i++) {
    items[generateString()] = true;
  }
  return items;
};

let generateTestItems = function(range, filterItems) {
  let items = {};
  for (let i = 0; i < 9 * range; i++) {
    items[generateString()] = true;
  }
  for (let key in filterItems) {
    items[key] = true;
  }
  return items;
};

let generateString = function() {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

// call the tester
// bloomTester();
