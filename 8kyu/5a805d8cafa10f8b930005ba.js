// Find Nearest square number

// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

function nearestSq(n) {

    return Math.round(Math.sqrt(n)) * Math.round(Math.sqrt(n));
    
}

console.log(nearestSq(1))
// 1
console.log(nearestSq(2))
// 1
console.log(nearestSq(10))
// 9
console.log(nearestSq(111))
// 121
console.log(nearestSq(9999))
// 10000


// Solution 1
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);


// Solution 2
function nearestSq(n) {
    return Math.round(n ** 0.5) ** 2
}


// Solution 3
function nearestSq(n) {
    return Math.pow(Math.round(Math.sqrt(n)), 2);
}


// Solution 4
const nearestSq = n => (Math.round(Math.sqrt(n))) ** 2


// Solution 5
function nearestSq(n) {
    let a = Math.round(Math.sqrt(n));
    return a * a;
}


// Solution 6
function nearestSq(n) {
    let higherNum = n + 1
    while (Math.sqrt(higherNum) % 1 !== 0) {
        higherNum++
    }
    let lowerNum = n - 1
    while (Math.sqrt(lowerNum) % 1 !== 0) {
        lowerNum--
    }
    if (n === 1) {
        return n
    } else if (higherNum - n < n - lowerNum) {
        return higherNum
    } else {
        return lowerNum
    }
}



// Solution 7
nearestSq = n => Math.round(Math.sqrt(n)) ** 2;


// Solution 8
nearestSq = n => Math.round(n ** .5) ** 2


// Solution 9
function nearestSq(n) {
    let num1 = n, num2 = n, answer1, answer2;
    while (answer1 == undefined) {
        if (!Number.isInteger(Math.sqrt(num1))) {
            num1++;
        } else {
            answer1 = num1;
        }
    }
    while (answer2 == undefined) {
        if (!Number.isInteger(Math.sqrt(num2))) {
            num2--;
        } else {
            answer2 = num2;
        }
    }
    return answer1 - n > n - answer2 ? answer2 : answer1;
}


// Solution 10
function nearestSq(n) {
    let ind = Math.ceil(Math.sqrt(n))
    return Math.abs(ind ** 2 - n) < Math.abs((ind - 1) ** 2 - n) ? ind ** 2 : (ind - 1) ** 2;
}


// Solution 11
let nearestSq = n => Math.round(n ** .5) ** 2


// Solution 12
function nearestSq(n) {
    const lowerSquare = Math.floor(n ** .5) ** 2
    const higherSquare = Math.ceil(n ** .5) ** 2
    const dist = (x, y) => Math.abs(x - y)
    return dist(n, lowerSquare) < dist(n, higherSquare) ? lowerSquare : higherSquare
}