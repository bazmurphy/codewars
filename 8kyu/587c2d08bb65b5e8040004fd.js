// NBA full 48 minutes average

// An NBA game runs 48 minutes (Four 12 minute quarters). 
// Players do not typically play the full game, subbing in and out as necessary. 
// Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// Examples:

// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0

// Notes:
// All inputs will be either be an integer or float.
// Follow your dreams!



function pointsPer48(ppg, mpg) {

    if (ppg === 0 || mpg === 0) {
        return 0;
    } else {
        return parseFloat(((48 / mpg) * ppg).toFixed(1));
    }

}

const pointsPer48 = (ppg, mpg) => ppg === 0 || mpg === 0 ? 0 : parseFloat(((48 / mpg) * ppg).toFixed(1));


console.log(pointsPer48(12, 20));
// 28.8
console.log(pointsPer48(10, 10));
// 48.0
console.log(pointsPer48(5, 17));
// 14.1
console.log(pointsPer48(0, 0));
// 0
console.log(pointsPer48(30.8, 34.7));
// 42.6  // Russell Westbrook 1/15/1
console.log(pointsPer48(22.9, 33.8));
// 32.5  // Kemba Walker 1/15/1


// Solution 1
function pointsPer48(ppg, mpg) {
    return +(ppg / mpg * 48).toFixed(1) || 0
}


// Solution 2
const pointsPer48 = (ppg, mpg) => mpg ? +(ppg * 48 / mpg).toFixed(1) : 0;


// Solution 3
function pointsPer48(ppg, mpg) {
    return mpg ? Number((ppg * (48 / mpg)).toFixed(1)) : 0
}
// const pointsPer48 = (ppg, mpg) =>
//   mpg ? Number((ppg * (48 / mpg)).toFixed(1)) : 0


// Solution 4
function pointsPer48(ppg, mpg) {
    if (mpg === 0) {
        return 0;
    } else {
        return redondeo(ppg / mpg * 48);
    }
}

function redondeo(num) {
    var n = Math.trunc(num * 100);
    if (n - Math.trunc(num * 10) * 10 < 5) {
        return (Math.trunc(num * 10)) / 10;
    } else {
        return (Math.trunc(num * 10) + 1) / 10;
    }
}


// Solution 5
function pointsPer48(ppg, mpg) {
    var num = (48 / mpg) * ppg
    return +num.toFixed(1) || 0
}


// Solution 6
var pointsPer48 = (ppg, mpg) => mpg == 0 ? 0 : Math.round(ppg / mpg * 48 * 10) / 10


// Solution 7
let pointsPer48 = (a, b) => a === 0 && b === 0 ? 0 : Math.round(480 * a / b) / 10;


// Solution 8
function pointsPer48(ppg, mpg) {

    if (ppg == 0) {
        return 0
    }

    return +((48 / mpg) * ppg).toFixed(1)
}


// Solution 9
pointsPer48 = (p, m) => +(p * 48 / m).toFixed(1) || 0;


// Solution 10
const pointsPer48 = (ppg, mpg) => Math.round(ppg * 48 / mpg * 10) / 10 || 0


// Solution 11
pointsPer48 = (ppg, mpg) => +(ppg * 48 / mpg).toFixed(1) || 0


// Solution 12
function pointsPer48(ppg, mpg) {
    if (ppg == 0 || mpg == 0) return 0;
    return Number((ppg / mpg * 48).toFixed(1));
}