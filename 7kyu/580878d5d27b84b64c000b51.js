// Sum of Triangular Numbers

// Your task is to return the sum of Triangular Numbers up - to - and - including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02[03]
// 04 05[06]
// 07 08 09[10]
// 11 12 13 14[15]
// 16 17 18 19 20[21]

// e.g.If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

function sumTriangularNumbers(n) {

    let sum = 0;

    while (n > 0) {
        sum += (n * (n + 1)) / 2
        n--;
    }

    return sum;

}

console.log(sumTriangularNumbers(4));
// 20
console.log(sumTriangularNumbers(6));
// 56
console.log(sumTriangularNumbers(34));
// 7140
console.log(sumTriangularNumbers(-291));
// 0
console.log(sumTriangularNumbers(943));
// 140205240
console.log(sumTriangularNumbers(-971));
// 0



// Solution 1
function sumTriangularNumbers(n) {
    return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
}


// Solution 2
function sumTriangularNumbers(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += (i * (i + 1)) / 2;
    }
    return sum;
}


// Solution 3
function sumTriangularNumbers(n) {
    if (n < 0) {
        return 0;
    }
    else {
        return n * (n + 1) / 2 + sumTriangularNumbers(n - 1);
    }
}


// Solution 4
function sumTriangularNumbers(n) {
    let sum = 0
    for (let i = 0, j = 1; i < n; i++, j += i + 1) {
        sum += j
    }
    return sum
}


// Solution 5
function sumTriangularNumbers(n) {
    const arr = [1]
    for (let i = 2; i < n + 1; i++) {
        let a = +arr.slice(-1) + i
        arr.push(a)
    }
    return n < 1 ? 0 : arr.reduce((a, b) => a + b)
}


// Solution 6
function sumTriangularNumbers(n) {
    if (n < 0) {
        return 0;
    } else {
        var count = 0;
        var result = 0;
        for (var i = 0; i < n; i++) {
            count++
            result += count
            count += 1 + i
        }
    }
    return result
}


// Solution 7
const sumTriangularNumbers = n => n > 0 | 0 && n++ * n++ * n / 6;


// Solution 8
function sumTriangularNumbers(n) {
    let sum = 0;

    if (n < 0) {
        return sum;
    }
    else {
        sum = sumTriangularNumbers(n - 1);

        return sum + (n * (n + 1)) / 2;
    }
}


// Solution 9
sumTriangularNumbers = n => n > 0 ? n * (n + 1) / 2 + sumTriangularNumbers(n - 1) : 0


// Solution 10
const sumTriangularNumbers = n => n > 0 ? Array.from(Array(n), (_, i) => (i + 1) * (i + 2) / 2).reduce((s, e) => s + e) : 0;


// Solution 11
function sumTriangularNumbers(n) {
    if (n > 0) return n * (n + 1) * (n + 2) / 6;
    return 0;
}


// Solution 12
function sumTriangularNumbers(n) {
    let sum = 0;
    if (n < 1) { return 0; }
    else {
        for (let i = n; i > 0; i--) {
            sum = sum + 0.5 * (i * i + i);
        }
        return sum;
    }
}