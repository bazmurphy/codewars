// Find the middle element

// Description:

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers(Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example(just to make sure it is clear):

// gimme([5, 10, 14]) => 1

// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(triplet) {

    // console.log('triplet:', triplet);

    // if you use sort on the original triplet it mutates the original triplet
    // let sortedTriplet = triplet.sort((a,b) => a - b)
    let sortedTriplet = [...triplet].sort((a,b) => a - b);
    
    // console.log('sortedTriplet:', sortedTriplet);

    // console.log('triplet:', triplet);

    let middleElement = sortedTriplet[1];
    // console.log('middleElement:', middleElement);

    // console.log('triplet.indexOf(middleElement):', triplet.indexOf(middleElement));
    return triplet.indexOf(middleElement);

}

console.log(gimme([2, 3, 1]));
// 0
console.log(gimme([5, 10, 14]));
// 1
console.log(gimme([2.1, 3.2, 1.4]));
// 0
console.log(gimme([5.9, 10.4, 14.2]));
// 1
console.log(gimme([-2, -3, -1]));
// 0
console.log(gimme([-5, -10, -14]));
// 0
console.log(gimme([-2, -3.2, 1]));
// 0
console.log(gimme([-5.2, -10.6, 14]));
// 0



// Solution 1
function gimme(a) {
    return a.indexOf(a.concat().sort(function (a, b) { return a - b })[1])
}


// Solution 2
const gimme = function (arr) {
    return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};


// Solution 3
var gimme = function (inputArray) {
    return inputArray.indexOf(inputArray.slice(0).sort(function (a, b) { return a - b; })[1]);
};


// Solution 4
var gimme = function (inputArray) {
    let index = 0;
    let max = Math.max(...inputArray);
    let min = Math.min(...inputArray);
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] !== max && inputArray[i] !== min) {
            index = i;
        }
    }
    return index;
};


// Solution 5
var gimme = function (inputArray) {
    if ((inputArray[0] < inputArray[1] && inputArray[0] > inputArray[2])
        || (inputArray[0] > inputArray[1] && inputArray[0] < inputArray[2]))
        return 0;

    if ((inputArray[1] < inputArray[0] && inputArray[1] > inputArray[2])
        || (inputArray[1] > inputArray[0] && inputArray[1] < inputArray[2]))
        return 1;

    if ((inputArray[2] < inputArray[0] && inputArray[2] > inputArray[1])
        || (inputArray[2] > inputArray[0] && inputArray[2] < inputArray[1]))
        return 2;
};


// Solution 6
var gimme = function (inputArray) {
    var order = inputArray.slice().sort(function (a, b) { return a - b; });
    return inputArray.indexOf(order[1]);

};


// Solution 7
var gimme = function (inputArray) {
    return inputArray.indexOf(inputArray.slice().sort(function (a, b) { return a - b })[1])
};


// Solution 8
const asc = (a, b) => a - b;
const gimme = arr =>
    arr.indexOf(arr.slice().sort(asc)[1]);


// Solution 9
var gimme = function (inputArray) {

    let highNum = Math.max(...inputArray)
    let lowNum = Math.min(...inputArray)

    return inputArray.findIndex((item) => {

        if (item > lowNum && item < highNum) {
            return item
        }
    })

};


// Solution 10
var gimme = function (a) {
    // Implement this function 
    var copy = [];
    copy.push(a[0], a[1], a[2]);
    var x = a.sort(function (a, b) {
        return a - b;
    });
    return copy.indexOf(x[1]);
};


// Solution 11
const gimme = arr => arr.indexOf([...arr].sort((a, b) => a - b)[1]);


// Solution 12
const gimme = inputArray => {
    let sorting = [...inputArray].sort((a, b) => a - b)[1];
    return inputArray.indexOf(sorting)
}