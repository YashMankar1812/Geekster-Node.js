# binary-search-utils

`binary-search-utils` is a lightweight Node.js package providing efficient binary search functionality. Ideal for sorted datasets, this package allows you to quickly search for elements with ease.

## Installation

Install the package using npm:

```bash
npm install binary-search-utils
```

## Usage

Import the `BinarySearch` class and use its methods for binary search operations.

### Example

```javascript
const BinarySearch = require('binary-search-utils');

const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;

const searchResult = BinarySearch.search(sortedArray, target);

if (searchResult !== -1) {
  console.log(`Element found at index: ${searchResult}`);
} else {
  console.log("Element not found");
}
```

## API Methods

### 1. `search(array, target)`
Performs a binary search on a sorted array to find the target element.

- **Parameters:**
  - `array` (Array): A sorted array of numbers or strings.
  - `target` (Number | String): The element to search for.

- **Returns:**
  - The index of the target element if found, or `-1` if the element is not present.

### Example

```javascript
const result = BinarySearch.search([1, 2, 3, 4, 5], 3);
console.log(result); // Output: 2
```

## Features
- Simple and efficient binary search implementation.
- Works with both numeric and string arrays.
- Handles edge cases such as empty arrays and non-existent targets.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

Yash Mankar

---

Speed up your search operations with `binary-search-utils`!
