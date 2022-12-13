// Sum of Cubes

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)



function sumCubes(n) {
    let newArr = [];
    for (let i = 1; i <= n; i++) {
        newArr.push(Math.pow(i, 3));
    }
    return newArr.reduce((pV,cV) => pV + cV);
}

const sumCubes = (n) => Array.from({ length: n }, (e, i) => Math.pow(i + 1, 3)).reduce((pV, cV) => pV + cV);

console.log(sumCubes(1));
console.log(sumCubes(2));
console.log(sumCubes(3));


// Solution 1
function sumCubes(n) {
    if (n == 1) {
        return n ** 3;
    } else {
        return n ** 3 + sumCubes(n - 1);
    }
}


// Solution 2
function sumCubes(n) {
    return (n * (n + 1) / 2) ** 2;
}


// Solution 3
const sumCubes = n => [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3);


// Solution 4
const sumCubes = n =>
    (n * ++n / 2) ** 2;


// Solution 5
sumCubes = n => n < 2 ? 1 : n ** 3 + sumCubes(n - 1)


// Solution 6
const sumCubes = (n, total = 0, i = 1) => i > n ? total : sumCubes(n, total += Math.pow(i, 3), ++i)


// Solution 7
const sumCubes = (n) => Array.from({ length: n }, (_, i) => i + 1).map(el => el ** 3).reduce((a, b) => a + b, 0)


// Solution 8
function sumCubes(n) {
    let sum = 0;
    while (n > 0) {
        sum += n ** 3;
        n--;
    }
    return sum;
}


// Solution 9
function sumCubes(n) {
    let sum = 0;
    for (let i = 0; i <= n; ++i) {
        sum += Math.pow(i, 3);
    }
    return sum;
}


// Solution 10
function sumCubes(n) {
    var sum = 0;
    for (var i = 1; i <= n; ++i)
        sum += i * i * i;
    return sum;
}


// Solution 11
function sumCubes(n) {
    return n === 1 ? 1 : Math.pow(n, 3) + sumCubes(n - 1);
}


// Solution 12
sumCubes = r => (r * (r + 1) / 2) ** 2;