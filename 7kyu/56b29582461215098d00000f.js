// Lario and Muigi Pipe Problem

// Issue

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
// Task

// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example

// Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8


function pipeFix(numbers){
  
    let newArr = [];
    
    for (let i = numbers[0]; i <= numbers[numbers.length -1]; i++) {
      newArr.push(i)
    }
    
    return newArr;

}

console.log(pipeFix([1,2,3,5,6,8,9]));
// [1,2,3,4,5,6,7,8,9]
console.log(pipeFix([1,2,3,12]));
// [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(pipeFix([6,9]));
// [6,7,8,9]
console.log(pipeFix([-1,4]));
// [-1,0,1,2,3,4]
console.log(pipeFix([1,2,3]));
// [1,2,3]


// Solution 1
function pipeFix(numbers){
    var first = numbers[0];
    var last = numbers[numbers.length-1];
    
    var arr = [];
    for(var i = first; i <= last; i++) {
      arr.push(i);
    }
    return arr;
}


// Solution 2
let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);


// Solution 3
function pipeFix(numbers){
    var min = numbers[0];
    var max = numbers[numbers.length - 1];
    var array = [];
    
    for(var i = min; i<=max; i++)
    {
      array.push(i);
    }
    
    return array;
}


// Solution 4
function getMaxOfArray(numbers) {
    return Math.max.apply(null, numbers);
  }
  
  function getMinOfArray(numbers) {
    return Math.min.apply(null, numbers);
  }
  
  function pipeFix(numbers){
    var newArray = [];
    var min = getMinOfArray(numbers);
    var max = getMaxOfArray(numbers);
    for (var i = min; i <= max; i++) {
      newArray.push(i);
    }
    return newArray;
}


// Solution 5
function pipeFix(num, arr = [] ){
    for ( let i = num[0]; i <= num.slice(-1)[0]; i++){
      arr.push(i)
    }
    return arr
}


// Solution 6
function pipeFix(numbers){
    var n_array = [];
    for(var i=numbers[0];i<=numbers[numbers.length-1];i++){
      n_array.push(i);
    }
    return n_array;
}


// Solution 7
function pipeFix(numbers){
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] !== numbers[i+1]-1 && i < numbers.length-1 ) {
        numbers.splice(i+1,0,numbers[i]+1);
      } 
    }
    return numbers;
}


// Solution 8
const pipeFix = arr => Array(arr.pop() - arr[0] + 1).fill(0).map((e,i) => i + arr[0])


// Solution 9
function pipeFix(numbers) {
    return Array.from(
      {length: numbers[numbers.length - 1] - numbers[0] + 1},
      (_, i) => numbers[0] + i
    )
}


// Solution 10
const pipeFix = (numbers) =>
  [...Array(numbers[numbers.length - 1] - numbers[0] + 1)].map((_, idx) => numbers[0] + idx);