// Remove duplicates from list

// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
    return [...new Set(a)];
}

console.log(distinct([1]));
// [1]
console.log(distinct([1, 2]));
// [1, 2]
console.log(distinct([1, 1, 2]));
// [1, 2]


// Solution 1
function distinct(a) {
    return [...new Set(a)];
}


// Solution 2
function distinct(a) {
    return Array.from(new Set(a));
}


// Solution 3
const distinct = a => a.filter((item, index) => a.indexOf(item) === index);


// Solution 4

function distinct(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}


// Solution 5
const distinct = a => [...new Set(a)];


// Solution 6
const distinct = ﬂ => [...new Set(ﬂ)];


// Solution 7
const distinct = arr => arr.filter((item, i, arr) => arr.indexOf(item) == i);


// Solution 8
function distinct(a) {
    return a.filter((e, i) => a.indexOf(e) === a.indexOf(e, i))
}


// Solution 9
function distinct(a) {
    return a.filter((item, index) => a.indexOf(item) === a.indexOf(item, index));
}


// Solution 10
const distinct = a => [...new Set(a)];

// function distinct(a) {
//   return [...new Set(a)];
// }


// Solution 11
function distinct(a) {
    return a.reduce((acc, rec) => {
        return (!acc.includes(rec)) ? [...acc, rec] : acc
    }, [])
}


// Solution 12
distinct = a => Array.from(new Set(a));