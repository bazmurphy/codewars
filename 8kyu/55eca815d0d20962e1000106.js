// Generate range of integers

// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. 
// The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
// Task

// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]

// Note

// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)


function generateRange(min, max, step) {
    let arr = [];
    for (let i = min; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
}

console.log(generateRange(2, 10, 2));
// [2, 4, 6, 8, 10]


// Solution 1
function generateRange(min, max, step) {
    let arr = [];
    for (let i = min; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
}


// Solution 2
function generateRange(min, max, step) {
    for (var res = []; min <= max; min += step) res.push(min)
    return res
}


// Solution 3
function generateRange(min, max, step) {
    var arr = [];
    while (min <= max) {
        arr.push(min);
        min += step;
    }
    return arr
}


// Solution 4
function generateRange(min, max, step) {
    return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}


// Solution 5
function generateRange(min, max, step) {
    return [...rangeGenerator(min, max, step)];
}

function* rangeGenerator(min, max, step) {
    while (min <= max) {
        yield min;
        min += step;
    }
}


// Solution 6
function generateRange(min, max, step) {
    return Array.from({ length: 1 + (max - min) / step }, (_, i) => min + i * step);
}


// Solution 7
const generateRange = (min, max, step) =>
    [...Array((max - min) / step + 1 ^ 0)].map((_, idx) => min + step * idx);


// Solution 8
function generateRange(min, max, step) {
    var array = [];
    for (var i = min; i <= max; i += step) {
        array.push(i);
    }
    return array;
}


// Solution 9
const generateRange = (min, max, step) => Array.from(Array((max - min) / step + 1 | 0), (_, i) => min + i * step);


// Solution 10
const generateArr = (n, start, step) =>
    Array(n).fill().map((e, i) => i * step + start);

const generateRange = (min, max, step) =>
    generateArr(Math.floor((max - min) / step + 1), min, step)


// Solution 11
const generateRange = (min, max, step) => {
    const arr = [];
    for (let i = min; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
};


// Solution 12
function generateRange(min, max, step) { a = []; c = 0; for (i = min; i <= max; i += step) a[c++] = i; return a; }