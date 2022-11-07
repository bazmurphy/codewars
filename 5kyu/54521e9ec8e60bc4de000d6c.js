// Maximum subarray sum

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(arr) {
  // console.log(arr);
  
  let greatestSlice = [];
  let greatestSliceTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    // console.log(`Outer Loop Iteration: ${i+1}`)

    for (let j = i + 1; j <= arr.length; j++) {

      const currentSlice = arr.slice(i, j);
      const currentSliceTotal = currentSlice.reduce((arr, cv) => arr + cv, 0);
      // console.log(`currentSlice: ${currentSlice}`);
      // console.log(`currentSlice: ${currentSliceTotal}`);
   
      if (greatestSliceTotal < currentSliceTotal) {
        greatestSlice = currentSlice;
        greatestSliceTotal = currentSliceTotal;
      }

    }
    // console.log(`greatestSlice: ${greatestSlice}`);
    // console.log(`greatestSliceTotal: ${greatestSliceTotal}`);
  }

  console.log(`the maxSequence is ${greatestSlice} \nwith a total of ${greatestSliceTotal}`);
  return greatestSlice.reduce((arr, cv) => arr + cv, 0);
}


// "should work on an empty array"
console.log(maxSequence([]));
// 0

// "should work on the example"
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// 6

console.log(maxSequence([
  7,   4, 11, -11,  39, 36,
 10,  -6, 37, -10, -32, 44,
-26, -34, 43,  43
]));
// 155

console.log(maxSequence([
  -46, -24, -41, -19, -9,  45, -32,  24,   0,  47, -29, -13,
   19,  44,  38,  15, 11, -13,  16,   9,  -4,  39,  -7, -15,
   24, -26,  27,  -0, 24, -21,  16,  42,  31, -50,  18,   1,
   25,  37,  35,  11, 47, -20,  33,  -1, -19,  28,  11, -37,
  -12,  20,  36,  27, 42, -17,  41, -11, -10,  31, -19, -12,
   47,  38,  -5,  21, 12,  23,  28
]));
// 710


// Solution 1
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}


// Solution 2
var maxSequence = function(arr){
  var currentSum = 0;
  return arr.reduce(function(maxSum, number){
      currentSum = Math.max(currentSum+number, 0);
      return Math.max(currentSum, maxSum);
  }, 0);
}


// Solution 3
var maxSequence = function(arr){
  var max = 0;
  var cur = 0;
  arr.forEach(function(i){
    cur = Math.max(0, cur + i);
    max = Math.max(max, cur);
  });
  return max;
}


// Solution 4
function maxSequence(arr) {
  var max = 0
  
  for (var i = 0; i < arr.length; i++) {
    for (var sum = 0, j = i; j < arr.length; j++) {
      sum += arr[j]
      if (sum > max) max = sum
    }
  }
  
  return max
}


// Solution 5
var maxSequence = function(arr){
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = arr.length; j > i; j--) {
      var total = arr.slice(i,j).reduce(function(a, b){ return a + b; });
      if (max < total) max = total
    }
  }
  return max;
}


// Solution 6
const maxSequence = (a,sum=0) => a.reduce((max,v) => Math.max(sum = Math.max(sum + v, 0), max), 0);


// Solution 7
var maxSequence = function(arr){
  var maxSum = 0;
  var currentSum = 0;
  
  for (var i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    
    if (currentSum <= 0) {
      currentSum = 0;
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}


// Solution 8
var maxSequence = function(arr){
  let currentVal = 0;
  let highestVal = 0
  for(let val of arr){
    currentVal += val;
    if(currentVal < 0) currentVal = 0;
    else if(currentVal > highestVal) highestVal = currentVal
  }
  return highestVal
}


// Solution 9
let allPositives = arr => arr.every(n => n > 0)
let allNegatives = arr => arr.every(n => n < 0)
let sum = arr => arr.reduce((prev, curr) => curr + prev, 0)

const maxSequence = function(arr){
  if(arr.length === 0 || allNegatives(arr)) return 0
  if(allPositives(arr)) return sum(arr)
  let sums = []
  for(let i = 0; i < arr.length; i++){
    for(var j = arr.length; j > 0 ; j--) {
      let innerSub = sum(arr.slice(i))
      let outerSub = sum(arr.slice(j - 1))
      let inBetween = sum(arr.slice(i, j - 1))
      sums.push(...[innerSub, outerSub, inBetween])
    }
  }
  return Math.max(...sums)
}


// Solution 10
var maxSequence = function(arr){
  var i, j, k = 0, r;
  for(i = 0; i < arr.length; ++i){    
    for(r = 0, j = i; j < arr.length; ++j){
      r += arr[j];
      k = Math.max(k,r);
    }
  }
  return k;
}


// Solution 11
function maxSequence(arr) {
  let sum = 0;
  let subtotal = 0;

  for (let i of arr) {
      subtotal += i;
      if (subtotal < 0) subtotal = 0;
      if (subtotal > sum) sum = subtotal;
  }
  return sum;
}


// Solution 12
const maxSequence = (arr, sum = 0) =>
  arr.reduce((pre, val) => Math.max(sum = Math.max(sum + val, 0), pre), 0);


// Solution 13
const maxSequence = arr => {
  let max = 0,
      sum = 0,
      min = 0;
  arr.forEach(el => {
      sum += el;
      min = Math.min(sum, min);
      max = Math.max(max, sum-min); 
  }) 
  return max;
}


// Solution 14
const maxSequence = (arr, currSum = 0) => arr.reduce((maxSum, num) => (currSum = Math.max(currSum + num, 0), Math.max(currSum, maxSum)), 0);