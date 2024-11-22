# array-helper-utils

`array-helper-utils` is a Node.js utility package designed to simplify common array operations. This package provides helper methods for tasks such as finding sums, removing duplicates, counting occurrences, sorting, and more.

## Installation

Install the package using npm:

```bash
npm install array-helper-utils
```

## Usage

Import the `ArrayHelper` class and initialize it with an array to perform various operations.

### Example

```javascript
const ArrayHelper = require('array-helper-utils');

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
```

## API Methods

### 1. `getSum()`
Returns the sum of all elements in the array.

### 2. `removeDuplicates()`
Removes duplicate elements from the array and returns a new array.

### 3. `getProduct()`
Returns the product of all elements in the array.

### 4. `findMax()`
Finds and returns the largest number in the array.

### 5. `findMin()`
Finds and returns the smallest number in the array.

### 6. `countOccurrences()`
Returns an object representing the count of each element in the array.

### 7. `allEven()`
Checks if all elements in the array are even. Returns `true` or `false`.

### 8. `divisibleBy(n)`
Finds all numbers in the array divisible by the specified number `n`.

### 9. `sortAscending()`
Sorts the array in ascending order and returns the sorted array.

### 10. `reverseArray()`
Reverses the array and returns the reversed array.

## Features
- Easy-to-use utility methods for array manipulation.
- Handles edge cases like empty arrays and invalid input.
- Fully modular and customizable for various use cases.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

Yash Mankar

---

Start simplifying your array operations with `array-helper-utils`!
