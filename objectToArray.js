const obj = { a: 1, b: 2, c: 3 };

// Convert keys to an array
const keysArray = Object.keys(obj);
console.log(keysArray); // Output: ['a', 'b', 'c']

// Convert values to an array
const valuesArray = Object.values(obj);
console.log(valuesArray); // Output: [1, 2, 3]

// Convert key-value pairs to an array of arrays
const entriesArray = Object.entries(obj);
console.log(entriesArray); // Output: [['a', 1], ['b', 2], ['c', 3]]
