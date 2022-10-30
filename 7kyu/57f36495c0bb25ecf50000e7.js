// Sum of all the multiples of 3 or 5

// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8(3 + 5)

// findSum(10) should return 33(3 + 5 + 6 + 9 + 10)


function findSum(n) {

    let arr = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i)
        }
    }

    // console.log(arr)

    return arr.reduce((pV, cV) => pV + cV, 0)

}

console.log(findSum(5))
// 8
console.log(findSum(10))
// 33


// Solution 1
function findSum(n) {
    let result = 0;
    for (let i = 0; i <= n; i += 1) {
        if (i % 3 === 0 || i % 5 === 0) result += i
    }
    return result
}


// Solution 2
const sumMultiples = (m, n) => {
    let x = n / m | 0;
    return m * x * (x + 1) / 2;
};

const findSum = n =>
    sumMultiples(3, n) + sumMultiples(5, n) - sumMultiples(15, n);


// Solution 3
function findSum(n) {
    var res = 0;
    for (var i = 0; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            res += i;
        }
    }
    return res;
}


// Solution 4
function findSum(n) {
    return Array.from({ length: n }, (a, b) => b + 1)
        .reduce(function (curSum, val) {
            return !(val % 5 && val % 3) ? curSum + val : curSum;
        }, 0)
}


// Solution 5
function findSum(n) {
    if (n < 3) return 0
    return (n % 3 === 0 || n % 5 === 0) ? n + findSum(n - 1) : findSum(n - 1)
}


// Solution 6
const f = (k, n) => k * ~~(n / k) * ~~(n / k + 1) / 2;
const findSum = n => f(3, n) + f(5, n) - f(15, n);


// Solution 7
function findSum(n) {
    result = 0;
    for (i = 3; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) { result += i; }
    }
    return result;
}


// Solution 8
const findSum = n => [...Array(n)].map((_, i) => ++i).reduce((r, e) => r + (e % 5 && e % 3 ? 0 : e), 0);


// Solution 9
function findSum(n) {
    total = 0;
    while (n != 0) {
        if (n % 3 === 0 || n % 5 === 0) {
            total += n;
        }
        n--;
    }

    return total;

}


// Solution 10
const findSum = n => [...Array(n + 1).keys()].filter(cur => cur % 3 === 0 || cur % 5 === 0).reduce((acc, cur) => acc + cur, 0);


// Solution 11
const findSum = n =>
    [...Array(n)].reduce((pre, _, idx) => !(++idx % 3) || !(idx % 5) ? pre + idx : pre, 0);


// Solution 12
function findSum(n) {
    let n1 = Math.floor(n / 3),
        n2 = Math.floor(n / 5),
        n3 = Math.floor(n / 15);

    return 3 * n1 * (n1 + 1) / 2 +
        5 * n2 * (n2 + 1) / 2 -
        15 * n3 * (n3 + 1) / 2;
}