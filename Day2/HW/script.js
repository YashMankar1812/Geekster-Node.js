//  A) 2666. Allow One Function Call  

Solution : function once(fn) {
    let called = false;
    return function (...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
    };
}




// ****************************************************************


//  B) 2629. Function Composition 

Solution : var compose = function(functions) {
    return function(x) {
        let result = x;
        // Loop through the functions in reverse order
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    };
};

// ****************************************************************

//  C) 2635. Apply Transform Over Each Element in Array 

Solution :  var map = function(arr, fn) {
    let result = [];  // This will hold the transformed elements
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));  // Apply the function to each element and its index
    }
    return result;  // Return the transformed array
};
 

// **************************************************************** 
//  D) 2634. Filter Elements from Array  

Solution :    var filter = function (arr, fn) {
  const returnedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      returnedArr.push(arr[i]);
    }
  }
  return returnedArr;
};

// **************************************************************** 

// E ) 2626. Array Reduce Transformation 

Solution : var reduce = function (nums, fn, init) {
    let value = init;
  
    for (const num of nums) {
      value = fn(value, num);
    }
  
    return value;
  };

  // **************************************************************** 

 
