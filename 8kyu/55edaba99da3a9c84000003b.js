// Find numbers which are divisible by given number

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) 
// [2, 4, 6]


function divisibleBy(numbers, divisor){

    return numbers.filter( element => element % divisor === 0)

}

divisibleBy([1,2,3,4,5,6], 2)
// [2,4,6]
divisibleBy([1,2,3,4,5,6], 3)
// [3,6]
divisibleBy([0,1,2,3,4,5,6], 4)
// [0,4]
divisibleBy([0], 4)
// [0]
divisibleBy([1,3,5], 2)
// []


// Solution 1
function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
}

// Solution 2
function divisibleBy(numbers, divisor) {
    var newArr = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % divisor === 0) {
        newArr.push(numbers[i]);
      } 
    }
  return newArr;
}

// Solution 3
const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));

// Solution 4
function divisibleBy(numbers, divisor){
    return numbers.filter(function(number){
      return number % divisor === 0;
    })
}

// Solution 5
const divisibleBy = (numbers, divisor) => numbers.filter(v => !(v % divisor));