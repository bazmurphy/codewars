// Is this a triangle ?

// Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
    // To determine if 3 side lengths are a triangle, use the triangle inequality theorem, which states that the sum of 2 sides of a triangle must be greater than the third side. 
    // Therefore, all you have to do is add together each combination of 2 sides to see if it's greater than the third side.

    let argumentsArray = Object.values(arguments)
    // console.log(argumentsArray)
    let argumentsArraySorted = argumentsArray.sort((a,b) => a - b)
    // console.log(argumentsArraySorted)
    
    if (argumentsArraySorted[0] + argumentsArraySorted[1] > argumentsArraySorted[2]) {
        return true;
    } else {
        return false;
    }

}

console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);


// Solution 1
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && c + b > a;
}


// Solution 2
var isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2


// Solution 3
function isTriangle(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        if (a < b + c && b < a + c && c < a + b) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}


// Solution 4
const isTriangle = (a$, b$, c$) => a$ + b$ > c$ && a$ + c$ > b$ && b$ + c$ > a$;


// Solution 5
function isTriangle(a, b, c) {
    var sides = [a, b, c].sort();
    return (sides[0] + sides[1] > sides[2]);
}


// Solution 6
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a
}


// Solution 7
function isTriangle(a, b, c) {
    var max = Math.max(a, b, c);
    return a + b + c - max > max;
}


// Solution 8
function isTriangle(a, b, c) {
    return Math.max(a, b, c) < (a + b + c - Math.max(a, b, c));
}


// Solution 9
function isTriangle(a, b, c) {
    return ((b + c) > a && (a + b) > c && (a + c) > b);
}


// Solution 10
const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;