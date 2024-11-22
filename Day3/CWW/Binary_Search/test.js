const BinarySearch = require('./index');

const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;

const result = BinarySearch.search(sortedArray, target);
if (result !== -1) {
  console.log(`Element found at index: ${result}`);
} else {
  console.log('Element not found');
}
