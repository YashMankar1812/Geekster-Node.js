const ArrayHelper = require('./index');

const numbers = [2, 4, 6, 2, 8, 6, 10];

const helper = new ArrayHelper(numbers);

console.log("Sum:", helper.getSum());
console.log("Unique elements:", helper.removeDuplicates());
console.log("Product:", helper.getProduct());
console.log("Max:", helper.findMax());
console.log("Min:", helper.findMin());
console.log("Occurrences:", helper.countOccurrences());
console.log("All Even:", helper.allEven());
console.log("Divisible by 2:", helper.divisibleBy(2));
console.log("Sorted Ascending:", helper.sortAscending());
console.log("Reversed:", helper.reverseArray());
