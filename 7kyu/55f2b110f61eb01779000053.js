// Beginner Series #3 Sum of Numbers

// Given two integers a and b, 
// which can be positive or negative, 
// find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b) {
    
    // arrange the parameters in order
    // run a loop starting the at the lowest parameter
    // incrementing by 1
    // push to an array
    // reduce that array of numbers to a single value

    let newArr = [];

    for (let i = Math.min(a,b); i <= Math.max(a,b); i++)
        newArr.push(i);

    return newArr.reduce((pV, cV) => pV + cV);

}

console.log(getSum(1, 0))
// 1 (1 + 0 = 1)
console.log(getSum(1, 2))
// 3 (1 + 2 = 3)
console.log(getSum(0, 1))
// 1 (0 + 1 = 1)
console.log(getSum(1, 1))
// 1 (1 since both are same)
console.log(getSum(-1, 0))
// -1 (-1 + 0 = -1)
console.log(getSum(-1, 2))
// 2 (-1 + 0 + 1 + 2 = 2)


// Solution 1
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}


// Solution 2
function GetSum(a, b) {
    if (a == b) return a;
    else if (a < b) return a + GetSum(a + 1, b);
    else return a + GetSum(a - 1, b);
}


// Solution 3
function GetSum(a, b) {
    return (Math.abs(a - b) + 1) * (a + b) / 2;
}


// Solution 4
function GetSum(a, b) {
    var result = 0;
    var bigger = a > b ? a : b;
    var smaller = a > b ? b : a;
    for (var i = smaller; i <= bigger; i++) { result += i }
    return result
}


// Solution 5
function GetSum(a, b) {
    tmp = 0;

    if (a < b)
        while (a <= b) tmp += a++;
    else
        while (a >= b) tmp += a--;

    return tmp;
}


// Solution 6
function GetSum(a, b) {
    //if both a and b are equal return a
    if (a === b) {
        return a;
    }
    var result = 0;

    var x = a, y = b;
    // check the larger and smaller numbers and assign them to x and y
    if (a > b) {
        x = b, y = a;
    }
    //in a loop add the numbers from the smaller one until it reaches the larger number
    for (var i = x; i <= y; i++) {
        result += i;
    }
    return result;

}


// Solution 7
function getSum(a, b) {
    return Array.from({ length: b >= a ? b - a + 1 : a - b + 1 }, (_, i) => b >= a ? i + a : i + b).reduce((a, b) => a + b, 0)
}


// Solution 8
function GetSum(a, b) {
    return (a + b) * (Math.abs(a - b) + 1) / 2;
}


// Solution 9
const GetSum = (a, b, x = Math.min(a, b), y = Math.max(a, b)) => (y - x + 1) * (x + y) / 2


// Solution 10
function GetSum(a, b) {
    return a > b ? GetSum(b, a) : (b - a + 1) * (b + a) / 2;
}