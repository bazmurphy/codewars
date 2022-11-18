// Return Two Highest Values in List

// Description:

// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

function twoHighest(arr) {
  if (!arr.length) {
    return arr;
  } else if (new Set(arr).size < 2) {
    return arr.slice(0,1);
  } else {
    return [...new Set(arr)].sort((elementOne, elementTwo) => elementTwo - elementOne).slice(0,2);
  }
}

console.log(twoHighest([]));
// []
console.log(twoHighest([15]));
// [15]
console.log(twoHighest([15, 20, 20, 17]));
// [20, 17]


// Solution 1
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}


// Solution 2
const twoHighest = ($) => [...new Set($)].sort((a,b)=>b-a).slice(0,2)


// Solution 3
const twoHighest = a => a
  .filter((e, i) => i === a.lastIndexOf(e))
  .sort((x, y) => y - x)
  .slice(0, 2);


// Solution 4
function twoHighest(arr) {
  if (!arr.length) return [];
  const max1 = Math.max(...arr);
  let max2;
  const filteredArr = arr.filter((el) => el !== max1);
  if (filteredArr.length) {
    max2 = Math.max(...filteredArr);
  }
  return max2 ? [max1, max2] : [max1];
}


// Solution 5
function twoHighest(arr) {
  let newSet = new Set(arr)
  return Array.from(newSet).sort((a,b) => b - a).slice(0, 2)
}


// Solution 6
function twoHighest(arr) {
  let a = [...new Set(arr)];
  return a.length != 0 ? a.sort((a, b)=> b -a).slice(0, 2) : []
}


// Solution 7
function twoHighest (numbers) {
  if (numbers.length < 2) return numbers

  let highest = -Infinity
  let secondHighest = -Infinity

  for (let number of numbers) {
    if (number > highest) {
      secondHighest = highest
      highest = number
      continue      
    }
    
    if (number !== highest && number > secondHighest) {
      secondHighest = number
    }
  }

  return [highest, secondHighest]
}


// Solution 8
function twoHighest(arr) {
  let biggest = 0;
  let preBiggest = 0;
  
  if (arr.length === 0){
    return arr;
  }
  else if (arr.length === 1){
    return arr;
  }
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > biggest){
      preBiggest = biggest;
      biggest = arr[i];
    }
    else if (arr[i] < biggest && arr[i] > preBiggest){
      preBiggest = arr[i];
    }
  }
  return [biggest, preBiggest];
}


// Solution 9
function twoHighest(arr) {
  
  return [...new Set(arr.sort((s, b) => b - s))].filter((_, x) => x < 2);
}


// Solution 10
twoHighest = (arr) => [...new Set(arr.sort((a,b) => b - a))].slice(0,2)


// Solution 11
function twoHighest(arr) {
  arr = arr.filter((item, pos) => arr.indexOf(item) == pos).sort((a, b) => b - a);
  return arr.slice(0, 2);
}


// Solution 12
const twoHighest = (function() {
  const unique = (e, i, arr) => i === 0 || e !== arr[i-1];

  return arr => arr.slice().sort((a,b) => b-a).filter(unique).slice(0,2);
})();


// Solution 13
function twoHighest(arr) {
  return arr
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort((a, b) => b - a)
    .slice(0, 2);
}


// Solution 14
function twoHighest(arr) {
  return arr = arr.sort((a,b) => b - a).filter((x,i) => arr.indexOf(x) == i).slice(0,2);
}