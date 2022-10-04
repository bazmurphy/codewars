// Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


function findOdd(A) {

    const listOfValues = {}

    let oddNumberOfTimes;

    A.forEach(element => {
        listOfValues[element] = (listOfValues[element] || 0 ) + 1
    })

    console.log(listOfValues)

    for (key in count) {
        if (count[key] % 2 !== 0)
            oddNumberOfTimes = Number(key);
    }

    return oddNumberOfTimes;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
-1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
5
console.log(findOdd([10]));
10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
1


// Solution 1
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// BITWISE XOR OPERATOR ^


// Solution 2
function findOdd(A) {
    var obj = {};
    A.forEach(function (el) {
        obj[el] ? obj[el]++ : obj[el] = 1;
    });

    for (prop in obj) {
        if (obj[prop] % 2 !== 0) return Number(prop);
    }
}


// Solution 3
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}


// Solution 4
function findOdd(A) {
    return A.reduce(function (c, v) { return c ^ v; }, 0);
}


// Solution 5
function findOdd(arr) {
    var result, num = 0;

    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            num++;
        } else {
            num++;
            if (num % 2 != 0) {
                result = arr[i];
                break;
            }
        }
    }
    return result;
}


// Solution 6
function findOdd(A) {
    for (var i = 0; i < A.length; i++) {
        //Query the number of times that this 'i' element appears
        //then verify if that number of times is odd. If it is true, then return
        //that 'i' element
        if ((A.filter(function (item) { 
            return item == A[i]; 
        }))
        .length % 2 != 0) {
            return A[i];
        }
    }
    return 0;
}


// Solution 7
function findOdd(A) {
    var trace = {};
    A.forEach(function (x) {
        if (trace[x]) delete trace[x];
        else trace[x] = true;
    });
    return parseInt(Object.keys(trace)[0]);
}


// Solution 8
const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);


// Solution 9
function findOdd(A) {
    //happy coding!
    var x = 0;
    for (var i = 0; i < A.length; i++) {
        x = x ^ A[i];
    }
    return x;
}


// Solution 10
const findOdd = arr => arr.reduce((pv, cv) => arr.filter(inv => inv === cv).length % 2 === 1 ? cv : pv);


// Solution 11
function findOdd(A) {
    var countOccurencesOfInt = 0;
    for (let i = 0; i < A.length; i++) {
        var currentIterationInt = A[i];
        for (let j = 0; j < A.length; j++) {
            if (currentIterationInt == A[j]) {
                countOccurencesOfInt++;
            }
        }
        if (countOccurencesOfInt % 2 != 0) {
            return currentIterationInt;
        }
    }
}


// Solution 12
function findOdd(A) {
    return A.find((number) => A.filter((n) => number === n).length % 2)
}