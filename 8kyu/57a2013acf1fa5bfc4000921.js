// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  
    if (array.length === 0) {

      return 0;

    }
    
    else {
  
      let total = 0;
  
      for(let i = 0; i < array.length; i++) {
        total += array[i]  
      }
  
      let average = total / array.length
  
      return average;

    }
  
}


console.log(find_average([1,1,1])) 
// 1
console.log(find_average([1,2,3])) 
// 2
console.log(find_average([1,2,3,4])) 
// 2.5


// Solution 1
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}


// Solution 2
function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
}


// Solution 3
const sum = array => (array) ? array.reduce((a,b)=>a+b) : 0;

const find_average = array => (array) ? sum(array)/array.length : 0 ;