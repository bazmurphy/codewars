// Find Maximum and Minimum Values of a List

// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) 
// that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// Notes
// You may consider that there will not be any empty arrays/vectors.


function min(array) {

    let currentMin = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < currentMin)
            currentMin = array[i]
    }

    return currentMin;
}
  
function max(array) {

    let currentMax = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > currentMax)
            currentMax = array[i]
    }

    return currentMax;
}


// SORT WORKS FOR STRINGS COMPARING UNICODE VALUES
// function min(array) {
//     const sortedArray = array.sort();
//     console.log(sortedArray)
//     return sortedArray[0];
// }

// function max(array) {
//     const sortedArray = array.sort();
//     console.log(sortedArray)
//     return sortedArray[sortedArray.length - 1];
// }

console.log(min([4,6,2,1,9,63,-134,566]));
console.log(max([4,6,2,1,9,63,-134,566]));
console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]));
console.log(max([42, 54, 65, 87, 0]));
console.log(min([5]));
console.log(max([5]));


// Solution 1
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


// Solution 2
var min = function(list){
    return Math.min.apply(null,list);
}

var max = function(list){
    return Math.max.apply(null,list);
}


// Solution 3
var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}


// Solution 4
var min = function(list){
    return Math.min(...list)
}

var max = function(list){
    
    return Math.max(...list)
}


// Solution 5
var min = function(list){
    var min =list[0];
    for(var i=0; i<list.length; i++){
       var cur = list[i];
       if (cur<min) min=cur;
    }
    return min;
}

var max = function(list){
    var max =list[0];
    for(var i=0; i<list.length; i++){
       var cur = list[i];
       if (cur>max) max=cur;
    }
    return max;
}