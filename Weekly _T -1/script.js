// A ) 2648. Generate Fibonacci Sequence  

Solution : 
var fibGenerator = function*() {
    let a = 0;
    let b = 1;
    
    while(true){
        yield a;
        let tmp = a;
        a = b;
        b += tmp;
    }
    
}; 

// ****************************************************

// B ) Sort By 

Solution : function sortBy(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
  } 

  // **************************************************** 

//   C ) 1929. Concatenation of Array   

Solution : var getConcatenation = function(nums) {
    return nums.concat(nums);
};
 
  // **************************************************** 

//  D ) Counter  

Solution : var createCounter = function(n) {

    return function() {
        return n++;
    };
};

 // **************************************************** 

//  E ) 2667. Create Hello World Function  

Solution : var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};

// **************************************************** 

// F ) 205. Isomorphic Strings 

Solution : 
        var isIsomorphic = function(s, t) {
            let mapS = new Map();
            let mapT = new Map();
            
            for (let i = 0; i < s.length; i++) {
                let charS = s[i];
                let charT = t[i];
                
                // Check if there's already a mapping for s[i]
                if (mapS.has(charS) && mapS.get(charS) !== charT) {
                    return false;
                }
                
                // Check if there's already a mapping for t[i]
                if (mapT.has(charT) && mapT.get(charT) !== charS) {
                    return false;
                }
                
                // Create the mapping
                mapS.set(charS, charT);
                mapT.set(charT, charS);
            }
            
            return true;
        };
        
// **************************************************** 