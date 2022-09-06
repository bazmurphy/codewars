// Get key/value pairs as arrays

// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?


function keysAndValues(data){
    // console.log (Object.keys(data))
    // console.log (Object.values(data))
    return [Object.keys(data), Object.values(data)]
}

console.log(keysAndValues({a: 1, b: 2, c: 3}));
// [['a', 'b', 'c'], [1, 2, 3]]
console.log(keysAndValues({}));
// [[], []]
console.log(keysAndValues({1: 'a', 2: 'b', 3: 'c'})); 
// [['1', '2', '3'], ['a', 'b', 'c']]


// Solution 1
function keysAndValues(data){
    var arr = [];
    arr.push(Object.keys(data));
    arr.push(Object.keys(data).map(function(x){return data[x]}))
    return arr
}

// Solution 2
function keysAndValues(data){
    return [Object.keys(data), Object.values(data)];
}


// Solution 3
function keysAndValues(data){
    return [Object.keys(data), Object.keys(data).map(function (key) { return data[key]; })];
}


// Solution 4
function keysAndValues(data){
    var keys = [],
        vals = [];
    for (key in data) {
      if(data.hasOwnProperty(key)){
        keys.push(key);
        vals.push(data[key]);
      }
    }
    return [keys, vals];
}


// Solution 5
const keysAndValues = data => [Object.keys(data), Object.values(data)];


// Solution 6
function keysAndValues(data){
    var arr1 = Object.keys(data);
    var arr2 = Object.values(data);
    return [arr1, arr2];
}
   


// Solution 7
function keysAndValues(data){
    // TODO: complete
    var result = [];
    result[0] = [];
    result[1] = [];
    for(var k in data) {result[0].push(k); result[1].push(data[k]);}
    return result;
}


// Solution 8
function keysAndValues(data){
    return [[...Object.keys(data)],[...Object.values(data)]]
}

// Solution 9
function keysAndValues(data){
    var arr = [[],[]];
    for(var keys in data){
      if(data.hasOwnProperty(keys)){
        arr[0].push(keys);
        arr[1].push(data[keys]);
      }
    }
    return arr;
}