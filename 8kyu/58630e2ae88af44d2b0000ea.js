// Thinkful - Number Drills: Pixelart planning

// You're laying out a rad pixel art mural to paint on your living room wall in homage to Paul Robertson, your favorite pixel artist.

// You want your work to be perfect down to the millimeter. 
// You haven't decided on the dimensions of your piece, how large you want your pixels to be, or which wall you want to use. 
// You just know that you want to fit an exact number of pixels.

// To help decide those things you've decided to write a function, is_divisible() that will tell you whether a wall of a certain length can exactly fit an integer number of pixels of a certain length.

// Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters. It should return True if you can fit an exact number of pixels on the wall, otherwise it should return False. 
// For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False.

// >>> def equals_three(num):
// >>>     return num == 3
// >>> equals_three(5)
// False
// >>> equals_three(3)
// True


function isDivisible(wallLength, pixelSize) {
    return wallLength % pixelSize === 0;
}

console.log(isDivisible(4050, 27));
// true
console.log(isDivisible(4066, 27));
// false
console.log(isDivisible(10000, 20));
// true
console.log(isDivisible(10005, 20));
// false
console.log(isDivisible(10005, 1));
// true


// Solution 1
function isDivisible(wallLength, pixelSize) {
    return wallLength % pixelSize === 0;
}


// Solution 2
function isDivisible(wallLength, pixelSize) {
    return wallLength % pixelSize == 0;
}


// Solution 3
let isDivisible = (a, b) => a % b === 0;


// Solution 4
const isDivisible = (x, y) => !(x % y)


// Solution 5
function isDivisible(w, p) {
    return Number.isInteger(w / p)
}


// Solution 6
const isDivisible = (a, b) => a % b === 0;


// Solution 7
const isDivisible = (wallLength, pixelSize) => (wallLength % pixelSize) == 0;


// Solution 8
function isDivisible(wL, pS) {
    return wL % pS == 0
}


// Solution 9
const isDivisible = (wallLength, pixelSize) => !(wallLength % pixelSize)


// Solution 10
function isDivisible(wallLength, pixelSize) {
    return wallLength % pixelSize == 0 ? true : false;
}


// Solution 11
const isDivisible = (Wall, Pix) => Wall % Pix == 0;


// Solution 12
function isDivisible(wallLength, pixelSize) {
    return !(wallLength % pixelSize);
}