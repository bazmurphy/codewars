// Sum of two lowest positive integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


function sumTwoSmallestNumbers(numbers) {  
    numbersPartTwo = numbers.sort((a,b) => a - b)
    return numbersPartTwo[0] + numbersPartTwo[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
// 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))
// 6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))
// 10
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))
// 24
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]))
// 16


// Solution 1
function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
};


// Solution 2
function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
}


// Solution 3
function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
};


// Solution 4
function sumTwoSmallestNumbers(numbers) {  
    var min = Number.MAX_SAFE_INTEGER;
    var secondMin = Number.MAX_SAFE_INTEGER;
    
    var n;
    for (i = 0; i < numbers.length; i++) {
      n = numbers[i];
      if(n < min) {
        secondMin = min;
        min = n;
      } else if( n < secondMin ) {
        secondMin = n;
      }
    }
    
    return min + secondMin;
}


// Solution 5
const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);


// Solution 6
var sumTwoSmallestNumbers = (numbers) => numbers.sort((a,b)=> a-b).slice(0, 2).reduce((a,b)=> a+b)


// Solution 7
function sumTwoSmallestNumbers(numbers) {  
    var smallestNumber = 0,
        secondSmallest = 0;
    
    smallestNumber = Math.min(numbers[0], numbers[1]);
    secondSmallest = Math.max(numbers[0], numbers[1]);
    
    for (var index = 2; index < numbers.length; index++) {
      if (numbers[index] < smallestNumber) {
        secondSmallest = smallestNumber;
        smallestNumber = numbers[index];
      } else if (numbers[index] < secondSmallest) {
        secondSmallest = numbers[index];
      }
    }
    
    return (smallestNumber + secondSmallest);
};