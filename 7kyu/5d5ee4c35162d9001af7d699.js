// Sum of Minimums!

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, 
// your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]

// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.


function sumOfMinimums(arr) {

    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += Math.min(...arr[i])
    }

    return sum;

}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));
// 9
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]));
// 76



// Solution 1
function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
}


// Solution 2
function sumOfMinimums(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += Math.min(...arr[i])
    }

    return total;
}


// Solution 3
function bubbleSort(array, type) {
    var string = "";
    var n = 0;
    var array2 = [];
    var text00001 = 0;
    for (var i = 0; i < array.length; i++) {
        array2.push(array[i]);
    }
    for (var j = 0; j < array.length; j++) {
        var changes = false;
        for (var i = 0; i < array.length - 1; i++) {
            n = array2[i];
            if (array2[i] > array2[i + 1]) {
                array2[i] = array2[i + 1];
                array2[i + 1] = n;
                changes = true;
            }
        }
        if (!changes) {
            if (type == "array") {
                return array2;
            }
            else {
                for (var r = 0; r < array2.length; r++) {
                    string = string + array2[r];
                }
                return string
            }
        }
    }
    if (type == "array") {
        return array2;
    }
    else {
        for (var r = 0; r < array2.length; r++) {
            string = string + array2[r];
        }
        return string;
    }
}

function sumOfMinimums(arr) {
    var arr2 = [];
    var total = 0;
    for (var r = 0; r < arr.length; r++) {
        arr[r] = bubbleSort(arr[r], "array")
        arr2.push(arr[r]);
    }
    for (var i = 0; i < arr.length; i++) {
        total = total + arr2[i][0];
    }
    return total;
}


// Solution 4
const sumOfMinimums = arr => arr.reduce((a, v) => a + Math.min(...v), 0);


// Solution 5
const sumOfMinimums = (array) => array.map(el => Math.min(...el)).reduce((a, b) => a + b, 0)


// Solution 6
function sumOfMinimums(arr) {
    return arr.reduce((a, b) => a + Math.min(...b), 0);
}


// Solution 7
function sumOfMinimums(arr) {
    let sum = 0;
    for (let a of arr) {
        sum += Math.min.apply(Math, a);
    }
    return sum;
}


// Solution 8
const sumOfMinimums = arr =>
    arr.reduce((pre, val) => pre + Math.min(...val), 0);


// Solution 9
function sumOfMinimums(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; ++i) {
        var min = Infinity;
        for (var j = 0; j < arr[i].length; ++j)
            if (min > arr[i][j])
                min = arr[i][j];
        sum += min;
    }
    return sum;
}


// Solution 10
const _ = require('lodash/fp');

const sumOfMinimums = _.sumBy(_.min);


// Solution 11
const sumOfMinimums = (arr) => arr.reduce((v, x) => Math.min(...x) + v, 0);


// Solution 12
sumOfMinimums = a => a.reduce((a, b) => a + Math.min(...b), 0)