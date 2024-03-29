// The highest profit wins!

// Story

// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task

// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples

// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]

// Remarks

// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.


function minMax(arr){

    const sorted = arr.sort((a,b) => a - b)
    const min = sorted[0]
    const max = sorted[sorted.length -1]

    return [min, max]

}

console.log(minMax([1,2,3,4,5]));
// [1,5]
console.log(minMax([2334454,5]));
// [5, 2334454]
console.log(minMax([1]));
// [1, 1]


// Solution 1
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}


// Solution 2
function minMax(arr){
    return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}


// Solution 3
function minMax(arr) {
    var a = arr.sort(function(a,b) {return a-b});
    return [a[0], a[a.length-1]];
}


// Solution 4
const minMax = arr => [ Math.min(...arr), Math.max(...arr) ];


// Solution 5
function minMax(arr){
    var max = arr[0], min = arr[0];
    for(var i=0; i<arr.length; i++) {
      if(arr[i]>max) max = arr[i];
      if(arr[i]<min) min = arr[i];
    }
    return [min,max];
}


// Solution 6
function minMax(arr){
    var min = Math.min.apply(null, arr),
        max = Math.max.apply(null, arr);
    return [min, max];
}


// Solution 7
var minMax = arr => [Math.min.apply(null, arr), Math.max.apply(null, arr)];