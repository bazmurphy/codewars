// Enumerable Magic #4 - True for None?

// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

function none(arr, fun){
  for (let item of arr) {
    if (!fun(item)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(none([1,2,3,4,5],function(item){ return item > 5 }));
// true
console.log(none([1,2,3,4,5],function(item){ return item > 4 }));
// false


// Solution 1
function none(arr, fun){
  return !arr.some(fun);
}


// Solution 2
const none = (arr, fun) => !arr.some(fun);


// Solution 3
function none(arr, fun){
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i]) == true) {
      return false;
    }
  }
  
  return true;
}


// Solution 4
function none(arr, fun){
  return !arr.some(fun)
}


// Solution 5
const none = (arr, fun) => arr.filter(a => fun(a)).length == 0;


// Solution 6
var none = (a, fn) => !a.some(fn);


// Solution 7
none=(arr,fun)=>!arr.some(fun);


// Solution 8
function none(arr, fun) {
  return !arr.reduce( (none, item) => fun(item), false );
}


// Solution 9
function none(arr, fun){
  for (let i = 0; i < arr.length; i++) {
    
    if (fun (arr[i]) == true) {
      return false;
    }
  }
  return true;
}


// Solution 10
const none = (arr, fun) => { return arr.every(e => !fun(e)) } 


// Solution 11
function none(array, func){
  if (!array.length)return true
  for (let arr of array){
    if (func(arr) == true)
      return false
  }
  return true
}


// Solution 12
const none = (arr, fn) => !arr.some(fn)


// Solution 13
function none(arr, fn) {
  return !arr.some(fn)
}


// Solution 14
function none(arr, fun){
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i])) { return false; }
  }
  return true;
}