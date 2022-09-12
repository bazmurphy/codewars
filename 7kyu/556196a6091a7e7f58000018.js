// Largest pair sum in array

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// Input sequence contains minimum two elements and every element is an integer.


function largestPairSum (numbers) {
  return numbers.sort((elementOne, elementTwo) => elementOne - elementTwo)
                .filter((element, index, array) => index === array.length -1 || index === array.length -2)
                .reduce((acc, cv) => acc + cv, 0);
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
// 42
console.log(largestPairSum([-100, -29, -24, -19, 19]))
// 0
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]))
// 10
console.log(largestPairSum([-10, -8, -16, -18, -19]))
// -18


// Solution 1
function largestPairSum(numbers) {
  numbers.sort(function (a, b) { return b - a });
  return numbers[0] + numbers[1];
}


// Solution 2
function largestPairSum(numbers) {
  var [a, b] = numbers.sort((a, b) => b - a)
  return a + b
}


// Solution 3
const largestPairSum = numbers => numbers.sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a + b);


// Solution 4
function largestPairSum(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}


// Solution 5
function largestPairSum(numbers) {

  numbers.sort(function (a, b) {
    return b - a;
  });
  return numbers.shift() + numbers.shift();

}


// Solution 6
const largestPairSum = ($) => $.sort((a, b) => a > b).slice(-2).reduce((a, b) => a + b, 0)


// Solution 7
const largestPairSum = a => a.sort((x, y) => y - x)[0] + a[1];


// Solution 8
const largestPairSum = ([max, ...a]) => a.reduce((acc, c) => acc.max + c > acc.res ? { max: c, res: acc.max + c } : acc, { max, res: -Infinity }).res


// Solution 9
function largestPairSum(numbers) {
  let firstLargest = Math.max(...numbers);
  let firstLargestIdx = numbers.indexOf(firstLargest);
  numbers.splice(firstLargestIdx, 1);

  let secondLargest = Math.max(...numbers);
  let secondLargestIdx = numbers.indexOf(secondLargest);
  numbers.splice(secondLargestIdx, 1);

  return firstLargest + secondLargest;
}


// Solution 10
function largestPairSum(numbers) {
  let firstMax = Math.max.apply(null, numbers); // highest first integer
  let removeFirstMax = numbers.splice(numbers.indexOf(firstMax), 1); // remove first max integer
  let secondMax = Math.max.apply(null, numbers); // get the second highest integer

  return firstMax + secondMax;
}


// Solution 12
function largestPairSum(numbers) {
  let res = [];
  let l1 = Math.min(...numbers);
  let l2 = Math.min(...numbers);
  for (let i in numbers) {
    if (numbers[i] > l1) {
      l2 = l1;
      l1 = numbers[i];
    } else if (numbers[i] > l2) {
      l2 = numbers[i];
    }
  }
  return l1 + l2;
}