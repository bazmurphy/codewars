// Predict your age!

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great - grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

// Example

// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation.Simply resubmit if that happens to you.


function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
      
    // let arr = [...arguments]

    // let sum = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i] * arr[i];
    // }

    // sum = Math.sqrt(sum);

    // sum = sum / 2;

    // sum = Math.floor(sum)

    // return sum;

    return Math.floor(Math.sqrt([...arguments].reduce((pv,cv) => pv += (cv * cv), 0)) / 2)

}


console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))
// 86


// Solution 1
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
    return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b, c) => b + c)) / 2)
}


// Solution 2
const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;


// Solution 3
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let sum = [...arguments]
        .map(x => x ** 2)
        .reduce((sum, v) => sum + v, 0)
    return Math.floor(Math.sqrt(sum) / 2)
}


// Solution 4
function predictAge(...n) {
    return (Math.hypot(...n) / 2) >> 0
}


// Solution 5
function predictAge(...a) {
    return ~~(a.reduce((a, x) => a + x * x, 0) ** 0.5 / 2)
}


// Solution 6
const predictAge = (...a) => Math.floor(Math.sqrt(a.reduce((s, n) => s + n * n, 0)) / 2);


// Solution 7
const predictAge = (...args) => Math.hypot(...args) >> 1;


// Solution 8
function predictAge(...age) {
    var sum = 0
    for (var i = 0; i < age.length; i++) {
        sum = (age[i] * age[i]) + sum
    }

    return Math.floor(Math.sqrt(sum) / 2)
}


// Solution 9
// functional helpers
const pipe = (...fns) => input => fns.reduce((f, g) => g(f), input)
const map = fn => arr => arr.map(fn)
const fold = fn => arr => arr.reduce(fn)

// unit functions
const square = x => Math.pow(x, 2)
const sum = (x, y) => x + y
const half = x => x / 2

const predictAge = (...ages) =>
    pipe(
        map(square),
        fold(sum),
        Math.sqrt,
        half,
        Math.floor
    )(ages)


// Solution 10
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    return Math.floor(Math.sqrt([age1, age2, age3, age4, age5, age6, age7, age8].reduce((acc, age) => { return acc += age * age; }, 0)) / 2);
}


// Solution 11
const predictAge = (...a) => Math.hypot(...a) / 2 >> 0


// Solution 12
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let ages = [age1, age2, age3, age4, age5, age6, age7, age8]
    let c = 0
    ages.forEach(age => c += age * age)
    return Math.floor(Math.sqrt(c) / 2)
}