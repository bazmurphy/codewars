// Find out whether the shape is a cube

// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: the sides must be integers


let cubeChecker = function (volume, side) {
    if (volume <= 0 ||  side <= 0) {
      return false;
    } else {
      return Math.cbrt(volume) === side;
    }
};

const cubeChecker = (volume, side) => volume <= 0 || side <= 0 ? false : Math.cbrt(volume) === side;

console.log(cubeChecker(56.3, 1));
// false
console.log(cubeChecker(-1, 2));
// false
console.log(cubeChecker(8, 3));
// false
console.log(cubeChecker(8, 2));
// true
console.log(cubeChecker(-8, -2));
// false
console.log(cubeChecker(0, 0));
// false
console.log(cubeChecker(1, 5));
// false
console.log(cubeChecker(125, 5));
// true
console.log(cubeChecker(125, -5));
// false


// Solution 1
var cubeChecker = function (v, s) {
    return s > 0 && v == s * s * s;
};


// Solution 2
var cubeChecker = function (volume, side) {
    return Math.pow(side, 3) === volume && side > 0;
};


// Solution 3
var cubeChecker = function (volume, side) {
    if (side <= 0 || volume <= 0) {
        return false;
    } else if (Math.pow(side, 3) !== volume) {
        return false;
    } else {
        return true;
    }
};


// Solution 4
const cubeChecker = (volume, side) => volume > 0 && side > 0 && volume === Math.pow(side, 3);


// Solution 5
var cubeChecker = function (volume, side) {
    return volume === side ** 2 * side && volume > 0;
};


// Solution 6
cubeChecker = (v, s) => s > 0 && v === s ** 3;


// Solution 7
var cubeChecker = function (volume, side) {
    return side > 0 && Math.pow(side, 3) === volume;
};


// Solution 8
cubeChecker = (v, s) => s > 0 && v === Math.pow(s, 3)


// Solution 9
var cubeChecker = function (volume, side) {
    let testVolume = side * side * side;
    //guard clause
    //if volume is zero return false || if sign of volume is - return false
    if (volume === 0 || Math.sign(volume) === -1) {
        return false
    }
    //is sides volume equal to test volume
    if (testVolume === volume) {
        return true
    }

    return false;
};


// Solution 10
var cubeChecker = function (volume, side) {
    return volume > 0 ? side * side * side === volume : false;
};


// Solution 11
cubeChecker = (volume, side) => volume / side ** 2 == side && side > 0


// Solution 12
var cubeChecker = (volume, side) => Math.cbrt(volume) !== side || volume <= 0 ? false : true;