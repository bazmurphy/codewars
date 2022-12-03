// Speed Control

// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

// x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]

// The sections are:

// 0.0 - 0.19, 0.19 - 0.5, 0.5 - 0.75, 0.75 - 1.0, 1.0 - 1.25, 1.25 - 1.50, 1.5 - 1.75, 1.75 - 2.0, 2.0 - 2.25

// We can calculate John's average hourly speed on every section and we get:

// [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]

// Given s and x the task is to return as an integer the * floor * of the maximum average speed per hour obtained on the sections of x.
// If x length is less than or equal to 1 return 0 since the car didn't move.

// Example:

// with the above data your function gps(s, x)should return 74
// Note

// With floats it can happen that results depends on the operations order.To calculate hourly speed you can use:

// (3600 * delta_distance) / s.


function gps(s, x) {

    if (x.length <= 1) {
        return 0;
    }

    let distance = 0;
    let averageHourlySpeed = 0;
    let speedArray = [];
    
    for (let i = 0; i < x.length -1; i++) {
        
        distance = x[i+1] - x[i];
        // console.log(distance)

        averageHourlySpeed = (3600 * distance) / s
        // console.log(averageHourlySpeed)

        speedArray.push(averageHourlySpeed)
    }

    // console.log(speed)

    return Math.floor(Math.max(...speedArray));

}

console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]));
// 41

console.log(gps(12, [0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25]));
// 219

console.log(gps(20, [0.0, 0.18, 0.36, 0.54, 0.72, 1.05, 1.26, 1.47, 1.92, 2.16, 2.4, 2.64, 2.88, 3.12, 3.36, 3.6, 3.84]));
// 80


// Solution 1
const gps = (s, x) => {

    if (x.length <= 1) {
        return 0;
    }

    let output = [];
    for (let i = 0; i < x.length - 1; i++) {
        output.push((x[i + 1] - x[i]) * 3600 / s);
    }

    return Math.max(...output);
}


// Solution 2
/**
 * @param {Number} a Start
 * @param {Number} b End
 * @param {Number} s Speed
 * @returns {Number} Speed on section from a to b
 */
const getSpeed = (a, b, s) => Math.floor((b - a) / s * 60 * 60);

/**
 * @param {Number} s Speed
 * @param {Number[]} x X-axis values
 * @returns {Number[]} Array of speed values on passed sections
 */
const reduceRecords = (s, x) => x.reduce(
    (p, c, i, a) => i === 0 ? p : p.concat(getSpeed(a[i - 1], c, s)),
    []
);

const gps = (s, x) => x.length < 2 ? 0 : Math.max(...(reduceRecords(s, x)));

/**
 * Hint:
 *
 * arr.reduce and arr.concat is native array methods
 * "a ? b : c" is ternary operator
 * => is arrow functions from ECMAScript-2015
 * const is ECMAScript-2015 feature
 * func(...arr) is spread operator from ECMAScript-2015
 */


// Solution 3
const gps = (s, x) => Math.floor(3600 * x.slice(1).reduce((m, d, i) => Math.max(m, d - x[i]), 0) / s);


// Solution 4
function gps(s, x) {
    return Math.max(...x.slice(1).map((a, i) => (a - x[i]) / s * 3600)) | 0
}


// Solution 5
const gps = (s, x) => x.length <= 1 ? 0 : Math.max(...x.slice(1).map((el, i) => (el - x[i]) * 3600 / s))


// Solution 6
function gps(s, x) {
    if (x.length < 2) return 0;
    let a = x.map((v, i, a) => 3600 * (v - (a[i - 1] || 0)) / s);
    return Math.floor(Math.max.apply(null, a));
}


// Solution 7
const gps = (s, x) => x.length > 1 ? Math.max.apply(this, x.map((a, i) => (x[i + 1] || 0) - a)) * 3600 / s : 0;


// Solution 8
const gps = (s, x) =>
    Math.max(...x.slice(1).map((val, idx) => 3600 * (val - x[idx]) / s)) ^ 0;


// Solution 9
function gps(s, x) {
    let distArr = x.map((point, index) => {
        if (point == x[0]) return point
        return x[index] - x[index - 1]
    });
    if (distArr.length != 0) {
        return Math.floor((3600 * Math.max(...distArr)) / s);
    }
    return 0;
}


// Solution 10
function gps(s, x) {
    var i, m;
    if (2 > x.length) {
        return 0;
    }
    m = 0;
    for (i = 1; i < x.length; i += 1) {
        m = Math.max(m, x[i] - x[i - 1]);
    }

    return Math.floor(3600 * m / s);
}


// Solution 11
function gps(s, x) {
    if (x.length <= 1)
        return 0
    return Math.max(...x.map((el, i, arr) => {
        if (i == 0)
            return 0
        return (el - arr[i - 1]) / s * 3600
    }))
}


// Solution 12
function gps(s, x) {
    if (x.length <= 1) { return 0 }
    var arr = [];
    for (var i = 1; i < x.length; i++) { arr.push(x[i] - x[i - 1]) }
    return Math.max.apply(null, arr.map(function (value) { return value * 3600 / s; }));
}