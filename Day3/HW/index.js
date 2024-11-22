class ArrayHelper {
    constructor(array) {
      if (!Array.isArray(array)) {
        throw new Error("Input must be an array");
      }
      this.array = array;
    }
  
    // 1. Get the sum of all elements
    getSum() {
      return this.array.reduce((sum, num) => sum + num, 0);
    }
  
    // 2. Remove duplicate elements
    removeDuplicates() {
      return [...new Set(this.array)];
    }
  
    // 3. Get the product of all elements
    getProduct() {
      return this.array.reduce((product, num) => product * num, 1);
    }
  
    // 4. Find the largest number
    findMax() {
      return Math.max(...this.array);
    }
  
    // 5. Find the smallest number
    findMin() {
      return Math.min(...this.array);
    }
  
    // 6. Count occurrences of each element
    countOccurrences() {
      return this.array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
      }, {});
    }
  
    // 7. Check if all elements are even
    allEven() {
      return this.array.every(num => num % 2 === 0);
    }
  
    // 8. Find numbers divisible by a given number
    divisibleBy(n) {
      return this.array.filter(num => num % n === 0);
    }
  
    // 9. Sort the array in ascending order
    sortAscending() {
      return [...this.array].sort((a, b) => a - b);
    }
  
    // 10. Reverse the array
    reverseArray() {
      return [...this.array].reverse();
    }
  }
  
  // Export the class for usage in other projects
  module.exports = ArrayHelper;
  