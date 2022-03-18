// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
// Fundamentals
// Arrays
// Numbers

function positiveSum(arr) {
  
    let sum = 0;
    // console.log(sum);
    
    for (let element of arr) {
      if (arr[element] > 0) {
        // console.log(arr[element]);
        sum += arr[element];
        // console.log(sum);
      }
    }

    // console.log(sum);
    return sum;
}

console.log(positiveSum([1,2,3,4,5]));
// 14


// Solution 1
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}


// Solution 2
function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}


// Solution 3
function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}


// Solution 4
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);


// Solution 5
function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
}


// Solution 6
function positiveSum( obj ) {
  return obj.map(el => el < 0 ? 0 : el).reduce((acc, i)=> acc + i, 0)
}