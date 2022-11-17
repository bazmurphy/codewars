// Two Sum

// Write a function that takes an array of numbers (integers for the tests) and a target number. 
// // It should find two different items in the array that, when added together, give the target value. 
// // The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    // console.log(`index i = ${i}`);
    // console.log(`value = ${numbers[i]}`);
    for (let j = 0; j < numbers.length; j++) {
      // console.log(`index j = ${j}`);
      // console.log(`value = ${numbers[j]}`);
      if (i !== j && numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    } 
  }
}

console.log(twoSum([1, 2, 3], 4));
// [0, 2]
console.log(twoSum([1234, 5678, 9012], 14690));
// [1, 2]
console.log(twoSum([2, 2, 3], 4));
// [0, 1]
console.log(twoSum([2, 3, 1], 4));
// [1, 2]


// Solution 1
function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}


// Solution 2
function twoSum(numbers, target) {
  let seen = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let x = numbers[i], y = target - x;
    if (seen.has(y))
      return [seen.get(y), i];
    seen.set(x, i);
  }
}


// Solution 3
function twoSum(numbers, target) {
  console.log([numbers, target]);
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}


// Solution 4
function twoSum(numbers, target) {
  for (i = 0; i < numbers.length; i++) {
    second = numbers.indexOf(target - numbers[i], i + 1);
    if (second > i) {
      return [i, second];
    }
  }
}


// Solution 5
function twoSum(nums, target) {
  const arr = [];
  nums.map(function (x, ind1) {
    nums.map(function (y, ind2) {
      if (x + y == target && ind1 != ind2)
        arr.push(ind1, ind2)
    });
  });
  return [arr[0], arr[1]]
}


// Solution 6
function twoSum(numbers, target) {
  var seen = {};
  for (var i = 0; i < numbers.length; i++) {
    var current = numbers[i];
    var diff = target - current;
    if (seen.hasOwnProperty(diff)) {
      return [seen[diff], i];
    }
    seen[current] = i;
  }
}


// Solution 7
const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length - 1; i++)
    for (let j = i + 1; j < numbers.length; j++)
      if (numbers[i] + numbers[j] == target) return [i, j]
}


// Solution 8
function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (i !== j && numbers[i] + numbers[j] === target) {
        return [i, j]
      }
    }
  }
  return [];
}


// Solution 9
function twoSum(numbers, target) {
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [i, map.get(target - numbers[i])]
    } else {
      map.set(numbers[i], i)
    }

  }
}


// Solution 10

// Optimal Solution => T: O(n) S: 0(n)
const twoSum = function (numbers, target){
  const map = {};
  for (let p = 0; p < numbers.length; p++){
    const currMapVal = map[numbers[p]]
     if (currMapVal >= 0){
       return [currMapVal, p]
     } else {
       const numToFind = target - numbers[p]
       map[numToFind] = p
     }
   }
  return null
}

// BRUTE FORCE SOLUTION => T: O(n^2) S: O(1)
//function twoSum(numbers, target) {
// for (let p1 = 0; p1 < numbers.length; p1++){
//  for (let p2 = p1+1; p2 < numbers.length; p2++){
//     if(numbers[p1]+numbers[p2] === target){
//       return [p1, p2]
//     }
//   }
// }
//}


// Solution 11
// recursion, iterative process
function twoSum(arr, sum, a = 0, b = 1) {
  if (b == arr.length) return twoSum(arr, sum, a + 1, 0)
  return arr[a] + arr[b] == sum ? [a, b] : twoSum(arr, sum, a, b + 1)
}


// Solution 12
const twoSum = (numbers, target, idx1 = 0) =>
  (idx2 => ~idx2 ? [idx1, idx2] : twoSum(numbers, target, ++idx1))
  (numbers.indexOf(target - numbers[idx1], idx1 + 1));


// Solution 13
function twoSum(numbers, target) {
  var firstIndex = null;
  var secondIndex = null;
      
  numbers.some(function(current, currentIndex) {    
    var newTarget = target - current;
    var remainingNumbers = numbers.slice(currentIndex + 1);
    var newTargetIndex = remainingNumbers.indexOf(newTarget);
  
    if (newTargetIndex > -1) {
      firstIndex = currentIndex;
      secondIndex = newTargetIndex + currentIndex + 1;
      return true;
    }
  });
  
  return [firstIndex, secondIndex];  
}


// Solution 14
function twoSum(numbers, target) {

  for (var a = 0; a < numbers.length; a++) {
    var c = target - numbers[a];
    var b = numbers.indexOf(c, a + 1);
    if (numbers[b] === c) return [a, b];
  }
}