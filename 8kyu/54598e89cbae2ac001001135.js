// Enumerable Magic #2 - True for Any?

// Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

function any(arr, fun){
  return arr.some(fun);
}

console.log(any([1,2,3,4], function(v,i){return v>3}));
// true
console.log(any([1,2,3,4], function(v,i){return v>4}));
// false


// Solution 1
function any(arr, fun){
  return arr.some(fun)
}


// Solution 2
const any = (arr, fun) => arr.some(fun);


// Solution 3
function any(arr, fun){
  return arr.filter(fun).length > 0;
}


// Solution 4
var any = Function.prototype.call.bind(Array.prototype.some);


// Solution 5
function any(arr, fun){
  for (var i=0; i<arr.length; ++i)
    if (fun(arr[i]))
      return true;
  return false;
}


// Solution 6
const any = (arr, fn) => arr.some(fn);


// Solution 7
function any(arr, fun){
  return Boolean(arr.filter(a => fun(a, 0)).length);
}


// Solution 8
any = (arr, fun) => arr.some(fun);


// Solution 9
function any(arr, fun){
  if (arr.length === 0) {
    return false;
  }
  return !!arr.filter(fun).length;
}


// Solution 10
function any(arr, fun){
  for (var i=0; i < arr.length; i++) {
    if(fun(arr[i])) {
      return true;
    }
  }
  return false;
}


// Solution 11
function any(arr, fun){
  return arr.length==0?false:arr.some(fun);
}


// Solution 12
const any = (array, func) => array.some(func)


// Solution 13
any = (a, f) => a.some(f)


// Solution 15
function any(arr, fun){
	var result = false;
  arr.forEach(function(val){
  	if (fun(val)){
    	result = true;
    }
  });
  return result;
}