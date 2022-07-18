// Unfinished Loop - Bug Fixing #1

// Unfinished Loop - Bug Fixing #1

// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// function createArray(number) {
//     var newArray = [];

//     for (var counter = 1; counter <= number;) {
//         newArray.push(counter);
//     }

//     return newArray;
// }

function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log(createArray(1));
// [1]
console.log(createArray(2));
// [1, 2]
console.log(createArray(3));
// [1, 2, 3]
console.log(createArray(4));
// [1, 2, 3, 4]
console.log(createArray(5));
// [1, 2, 3, 4, 5]


// Solution 1
function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}


// Solution 2
const createArray = n => Array(...Array(n)).map((v, i) => i + 1);


// Solution 3
function createArray(number) {
    return Array.from({ length: number }, (v, i) => i + 1)
}


// Solution 4
const createArray = number =>
    [...Array(number)].map((_, idx) => ++idx);


// Solution 5
function createArray(number) {
    var newArray = [];
    var counter = 1;
    for (counter; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}


// Solution 6
function createArray(number) {
    let newArray = [];
    for (let i = 1; i <= number; i++)
        newArray.push(i);
    return newArray;
}


// Solution 7
function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter += 1) {
        newArray.push(counter);
    }

    return newArray;
}


// Solution 8
function createArray(number) {
    return Array.from({ length: number }, (_, i) => i + 1);
}


// Solution 9
createArray = number => Array.from({ length: number }, (_, index) => index + 1)