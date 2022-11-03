// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) 
// returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let zeros = [];
    let notZeros = [];
    for (let item of arr) {
        if (item === 0) {
            zeros.push(item);
        } else {
            notZeros.push(item);
        }
    }
    return notZeros.concat(zeros);
}

function moveZeros(arr) {
    return arr.filter((element) => element !== 0).concat(arr.filter((element) => element === 0));
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))
// [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]


// Solution 1
var moveZeros = function (arr) {
    return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
}


// Solution 2
var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num) { return num !== 0; });
    var zeroList = arr.filter(function (num) { return num === 0; });
    return filtedList.concat(zeroList);
}


// Solution 3
var moveZeros = function (arr) {
    return [
        ...(arr.filter(n => n !== 0)),
        ...(arr.filter(n => n === 0))
    ];
}


// Solution 4
var moveZeros = function (arr) {
    return arr
        .filter((val) => val !== 0)
        .concat(arr.filter((val) => val === 0));
}


// Solution 5
var moveZeros = function (arr) {
    let result = arr.filter(c => c !== 0)
    let count = arr.length - result.length

    return result.concat(Array(count).fill(0))
}


// Solution 6
var moveZeros = function (arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}


// Solution 7
let moveZeros = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));


// Solution 8
var moveZeros = function (arr) {
    return arr.reduceRight(function (prev, curr) {
        if (curr !== 0) {
            prev.unshift(curr);
        }
        else {
            prev.push(curr);
        }
        return prev;
    }, []);
}


// Solution 9
var moveZeros = function (arr) {

    var result = [];
    var zeros = [];

    for (var i in arr) {
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        } else if (arr[i] !== 0) {
            result.push(arr[i]);
        }
    }
    return result.concat(zeros);
}


// Solution 10
var moveZeros = function (arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
}


// Solution 11
function moveZeros(arr) {
    return arr.sort((a, b) => b === 0 ? -1 : 0);
}


// Solution 12
var moveZeros = function (arr) {
    var zeroes = [];
    var withoutZeros = arr.filter(function (value) {
        if (value === 0) {
            zeroes.push(0);
            return false;
        }
        return true;
    });

    return withoutZeros.concat(zeroes);
}