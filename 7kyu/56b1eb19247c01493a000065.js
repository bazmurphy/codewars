// Unique Sum

// Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

// For example:

// [ 1, 2, 3] ==> 6

// [ 1, 3, 8, 1, 8] ==> 12

// [ -1, -1, 5, 2, -7] ==> -1

// [] ==> null


function uniqueSum(lst){
    return lst.length ? Array.from(new Set(lst)).reduce((pV,cV) => pV + cV) : null;
}

// you can put null as the reduce initial value
// this removes the need for the ternary
function uniqueSum(lst){
    return Array.from(new Set(lst)).reduce((pV,cV) => pV + cV, null);
}

// you can also use the spread operator instead of Array.from
// [...new Set(lst)]

const uniqueSum = (lst) => Array.from(new Set(lst)).reduce((pV, cV) => pV + cV, null);


console.log(uniqueSum([1,2,3]));
// 6
console.log(uniqueSum([1,3,8,1,8]));
// 12
console.log(uniqueSum([-1,-1,5,2,-7]));
// -1
console.log(uniqueSum([]));
// null


// Solution 1
function uniqueSum(lst){
  return [...new Set(lst)].reduce((a,b)=>a+b,null);
}


// Solution 2
function uniqueSum(lst){
  return lst.length > 0 ? [...new Set(lst)].reduce((s,n)=> s + n, 0) : null
}


// Solution 3
function uniqueSum(lst){
  return lst.length === 0 ? null : lst
    .reduce((a, b) => a.includes(b) ? a : [...a, b], [])
    .reduce((a, b) => a + b);
}


// Solution 4
function uniqueSum(lst){
  return lst.filter((a,b,c) => c.indexOf(a) == b).reduce((a,b)=> a+b,null);
}


// Solution 5
const uniqueSum = lst =>
  [...new Set(lst)].reduce((pre, val) => pre + val, null);


// Solution 6
function uniqueSum(lst){
  return lst.length > 0 ? [...new Set(lst)].reduce((a,b)=>a+b) : null 
}


// Solution 8
var uniqueSum = lst => Array.from(new Set(lst)).length !== 0 ? Array.from(new Set(lst)).reduce((a, b) => a + b, 0) : null;


// Solution 9
function uniqueSum(lst){
  let sum = null;
  Array.from(new Set(lst)).map(item=>{
    sum += item;
  })
  return sum;
}


// Solution 10
const uniqueSum = x => x.reduce((p, c, i) => x.includes(c, i + 1) ? p : p + c, null);