// Maximum Multiple

// Task

// Given a Divisor and a Bound, Find the largest integer N, Such That,
//     Conditions :

//     N is divisible by divisor

//     N is less than or equal to bound

//     N is greater than 0.

// Notes

//     The parameters(divisor, bound) passed to the function are only positive values.
//     It's guaranteed that a divisor is Found .
// Input >> Output Examples

// maxMultiple(2, 7) ==> return (6)

// Explanation:

// (6) is divisible by(2), (6) is less than or equal to bound(7), and(6) is > 0.

//     maxMultiple(10, 50) ==> return (50)

// Explanation:

// (50) is divisible by(10), (50) is less than or equal to bound(50), and(50) is > 0.*

//     maxMultiple(37, 200) ==> return (185)

// Explanation:

// (185) is divisible by(37), (185) is less than or equal to bound(200), and(185) is > 0.



function maxMultiple(divisor, bound) {

    let sum = divisor;

    for (let i = 1; sum <= bound - divisor; i++) {
        sum = i * divisor;
        // console.log(`divisor:${divisor} i:${i} sum:${sum} bound:${bound}`)
    }

    return sum;

}

console.log(maxMultiple(2, 7));
// 6
console.log(maxMultiple(3, 10));
// 9
console.log(maxMultiple(7, 17));
// 14
console.log(maxMultiple(10, 50));
// 50
console.log(maxMultiple(37, 200));
// 185
console.log(maxMultiple(7, 100));
// 98


// Solution 1
function maxMultiple(divisor, bound) {
    return bound - bound % divisor
}


// Solution 2
const maxMultiple = (divisor, bound) => bound - bound % divisor;


// Solution 3
function maxMultiple(divisor, bound) {
    return Math.floor(bound / divisor) * divisor;
}


// Solution 4
function maxMultiple(divisor, bound) {
    while (bound % divisor) {
        bound--;
    }

    return bound;
}


// Solution 5
function maxMultiple(divisor, bound) {
    return bound - (bound % divisor)
}


// Solution 6
function maxMultiple(divisor, bound) {
    var max = 0;
    for (let j = divisor; j <= bound; j++) {
        if (j % divisor == 0 && j > max) {
            max = j;
        }
    }
    return max;


}


// Solution 7
const maxMultiple = (d, b) => (b / d - b / d % 1) * d;


// Solution 8
const maxMultiple = (divisor, bound, out = bound % divisor) => bound - out


// Solution 9
function maxMultiple(divisor, bound) {
    const massiveLength = bound - divisor + 1;

    let numbers = []

    for (let i = divisor; i <= bound; i++) {
        let number = i
        numbers.push(number)
    }

    const newNumbers = numbers.filter(v => v % divisor === 0 && v <= bound && v > 0);

    const maxNumber = Math.max.apply(null, newNumbers);

    return maxNumber

}


// Solution 10
function maxMultiple(divisor, bound) {
    let total = bound % divisor

    return bound - total
}


// Solution 11
function maxMultiple(divisor, bound) {
    return (bound % divisor === 0) ? bound : maxMultiple(divisor, bound - 1)
}


// Solution 12
function maxMultiple(divisor, bound) {
    let array = [];
    let cloneDivisor = divisor;
    for (cloneDivisor; cloneDivisor < bound + 1; cloneDivisor++) {
        let someNumbers = cloneDivisor;
        array.push(someNumbers);
    }
    const result = Math.max.apply(null, array.filter(item => item > 0 && item % divisor == 0 && item <= bound));
    return result;
}