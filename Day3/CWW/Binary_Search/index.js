class BinarySearch {
    /**
     * Performs a binary search to find the target element in a sorted array.
     * @param {Array} array - The sorted array to search.
     * @param {number|string} target - The element to search for.
     * @returns {number} The index of the target element if found, or -1 if not found.
     */
    static search(array, target) {
      let left = 0;
      let right = array.length - 1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (array[mid] === target) {
          return mid;
        } else if (array[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return -1; // Element not found
    }
  }
  
  module.exports = BinarySearch;
  