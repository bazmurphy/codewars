// Find the smallest integer in the array

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(args) {
      
    let currentSmallest = args[0];  
    
    for (let i = 0; i < args.length; i++) {
        
        // console.log(args[i]);
        // console.log(currentSmallest);

        if (currentSmallest > args[i]) {
            // console.log('yes smaller');
            currentSmallest = args[i];
            // console.log(currentSmallest);
        }
        // } else if (currentSmallest < args[i]) {
        //     console.log('no bigger');
        // } else if (currentSmallest === args[i])
        //     console.log('equal');
    }
    
    // console.log(currentSmallest);
    return currentSmallest;
}

findSmallestInt([78,56,232,12,8]);
//'Should return the smallest int 8'
findSmallestInt([78,56,232,12,18]);
//'Should return the smallest int 12'
findSmallestInt([78,56,232,412,228]);
// 'Should return the smallest int 56'
findSmallestInt([78,56,232,12,0]);
//'Should return the smallest int 0'
findSmallestInt([1,56,232,12,8]);
//'Should return the smallest int 1'


// Solution 1
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
}


// Solution 2
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min.apply(null, args);
    }
}


// Solution 3
class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort(function(a, b) {
      return a - b; } )
      return args[0];
    }
}


// Solution 4
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
}


// Solution 5
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.reduce(function(prev, curr, index, array) {
        return prev < curr ? prev : curr;
      });
    }
}


// Solution 6
class SmallestIntegerFinder {
    findSmallestInt(args) {
      var lowest;
      for(var i in args){
        if(i==0){
          lowest = args[i];
        }
        else {
          if(lowest >= args[i]){
          lowest = args[i];
          }
        }
      }
      return lowest;
    }
}