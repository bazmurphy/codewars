// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
// Additionally, if the number is negative, return 0(for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net(Problem 1)


function solution(number) {

    // console.log('number', number)

    //     let newArr = [];

    //     for (let i = 0; i < number; i++) {
            
    //         console.log(i)

    //         if (i % 3 === 0 && i % 5 === 0) {
    //             newArr.push(i);
    //         } else if (i % 3 === 0) {
    //             newArr.push(i);
    //         } else if (i % 5 === 0) {
    //             newArr.push(i);
    //         }
    //     }

    //     console.log('newArr', newArr)

    //     let result = newArr.reduce((pV, cV) => pV + cV, 0);
    //     console.log(result)

    //     return result;

    let counter = 0;
    
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            counter += i
        }
    }

    return counter;

}


console.log(solution(10));
console.log(solution(41453));


// Solution 1
function solution(number) {
    var sum = 0;

    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum;
}


// Solution 2
function solution(number) {
    var sum = 0;
    for (var i = 3; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}


// Solution 3
function solution(number) {
    var n3 = Math.floor(--number / 3), n5 = Math.floor(number / 5), n15 = Math.floor(number / 15);
    return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15 + 1)) / 2;
}


// Solution 4
solution = n => n <= 0 ? 0 : Array.from({ length: n }, (_, i) => (i % 3 == 0 || i % 5 == 0) ? i : 0).reduce((x, y) => x + y)


// Solution 5
function solution(number) {
    return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}


// Solution 6
function solution(number) {
    sum = 0
    for (i = 3; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}


// Solution 7
function solution(number) {
    number = number - 1;
    var numFive = Math.floor(number / 5);
    var numThree = Math.floor(number / 3);
    var numFifteen = Math.floor(number / 15);

    return SAS(numFive, 5, 5 * numFive) + SAS(numThree, 3, 3 * numThree) - SAS(numFifteen, 15, 15 * numFifteen);
}

//sumArithmeticSequence
var SAS = function (n, start, end) {
    return n * (start + end) / 2;
}


// Solution 8
solution = n => {
    let s = 0;
    for (let i = 0; i < n; i++) s += i % 3 ? i % 5 ? 0 : i : i;
    return s;
}


// Solution 9
function solution(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}


// Solution 10
function solution(number) {
    return number < 3 ? 0
        : [...Array(number).keys()]
            .map(int => (int % 3 === 0 || int % 5 === 0) ? int : 0)
            .reduce((a, b) => a + b)

}