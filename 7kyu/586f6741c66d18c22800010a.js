// Sum of a sequence

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non - negative values: begin, end, step(inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2, 2, 2 -- > 2
// 2, 6, 2 -- > 12(2 + 4 + 6)
// 1, 5, 1 -- > 15(1 + 2 + 3 + 4 + 5)
// 1, 5, 3  -- > 5(1 + 4)

// Count from begin to end with step increment.
// sequenceSum(begin = 0, end = 45, step = 5) 0 + 5 + 10 + 15 + 20 + 25 + 30 + 35 + 40 + 45 == 225


const sequenceSum = (begin, end, step) => {

    let sum = 0;

    for (let i = begin; i <= end; i = i + step) {
        sum = sum + i;
    }
    
    return sum;

};

console.log(sequenceSum(2, 6, 2))
// 12
console.log(sequenceSum(1, 5, 1))
// 15
console.log(sequenceSum(1, 5, 3))
// 5


// Solution 1
const sequenceSum = (begin, end, step) => {
    var sum = 0;
    for (var i = begin; i <= end; i += step) {
        sum += i;
    }
    return sum;
};


// Solution 2
const sequenceSum = (begin, end, step) => {
    if (begin > end) {
        return 0;
    }
    return begin + sequenceSum(begin + step, end, step);
};


// Solution 3
function sequenceSum(begin, end, step) {
    let sum = 0
    for (let i = begin; i <= end; i += step) {
        sum += i
    }
    return sum
}


// Solution 4
sequenceSum = (b, e, s) => b > e ? 0 : b + sequenceSum(b + s, e, s);


// Solution 5
const sequenceSum = (begin, end, step) => {
    if (begin > end)
        return 0;
    const n = Math.floor((end - begin) / step) + 1;
    return (2 * begin + step * (n - 1)) * n / 2;
};


// Solution 6
const sequenceSum = (begin, end, step) => {
    return begin > end ? 0 : begin + sequenceSum(begin + step, end, step)
};


// Solution 7
const sequenceSum = (begin, end, step) => {
    let n = Math.floor((end - begin) / step + 1);
    return n <= 0 ? 0 : n * (begin + (begin + (n - 1) * step)) / 2;
};


// Solution 8
function sequenceSum($, $2, stp) {
    let out = 0;
    for (let i = $; i <= $2; i += stp) {
        if (i <= $2) out += i;
    }
    return out;
}


// Solution 9
const sequenceSum = (a, b, c) => (
    k => (k + 1) * (2 * a + c * k) / 2
)(a > b ? -1 : (b - a) / c | 0);


// Solution 10
sequenceSum = (begin, end, step) => begin > end ? 0 : begin + sequenceSum(begin + step, end, step)


// Solution 11
const sequenceSum = (begin, end, step) => {
    if ((begin < end && step <= 0) || (begin > end && step >= 0)) return 0;
    var n = Math.floor((end - begin + step) / step);
    return n * (2 * begin + (n - 1) * step) / 2;
};


// Solution 12
const sequenceSum = (begin, end, step) => begin > end ? 0 : begin + sequenceSum(begin + step, end, step);

