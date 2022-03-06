// Find the first non-consecutive number

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, 
// so that's the first non-consecutive number.

// If the whole array is consecutive then return null.

// The array will always have at least 2 elements1 and all elements will be numbers. 
// The numbers will also all be unique and in ascending order. 
// The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? 
// (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// function firstNonConsecutive(array) {
//     // console.log(`array = ${array}`)
//     for (let i = 0; i < array.length; i++) {
//         // console.log(`array[i] = ${array[i]}`)
//         if ((array[i] + 1) === (array[i+1])) {
//             continue;
//         } else {
//             return array[i+1];
//         }
//     }

//     return null;

// }

function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) 
            return arr[i];
    }
    return null;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
// 6
console.log(firstNonConsecutive([5,6,7,8,9,10,11]));
// null
console.log(firstNonConsecutive([-6,-5,-4,-3,-2,-1,0,1,2,3]));
// null


// Solution 1
function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
}


// Solution 2
function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);

    return (Number.isInteger(result)) ? result : null;
}


// Solution 3
function firstNonConsecutive(arr){
    var out = null;
    for(var i = 1; i < arr.length; i++){
      if((arr[i] - arr[i - 1]) != 1){
        out = arr[i];
        break;
      }
    }
    return out;
}


// Solution 4
firstNonConsecutive = arr => arr.length == 1 ? null : arr[0] + 1 != arr[1] ? arr[1] : firstNonConsecutive(arr.slice(1)) 


// Solution 5
function firstNonConsecutive (arr) {
    for (var i = 1; i < arr.length; i++) {
      var cur = arr[i];
      var prev = arr[i-1];
      
      if (cur - prev > 1) {
        return cur;
      }
    }
    return null;
}


// Solution 6
function firstNonConsecutive (arr) {
    var length = arr.length; //get length
    var val = arr[0]; //base comparison value variable
    for(var i = 1; i < length; i++) { //comparison
      if(arr[i] != val + 1) {
        return arr[i];
      }
      val++;
    }
    return null; //default return
}