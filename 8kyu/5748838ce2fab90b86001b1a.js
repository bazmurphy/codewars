// Area of a Square

// Complete the function that calculates the area of the red square, 
// when the length of the circular arc A is given as the input.
// Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language(Math:: PI, M_PI, math.pi, etc)

function squareArea(A) {

    // area of square = l x l
    // circumference of a circle = 2 * pi * radius
    // arc = 2 * pi * radius / 4
    // arc * 4 = 2 * pi * radius
    // 2 * pi * radius = arc * 4
    // radius = (arc * 4) / (2 * pi)

    // get the length of the square
    let radius = (A * 4) / (2 * Math.PI)
    // square the length, to get the area of the square, fixed to 2 decimals
    return Number(Math.pow(radius, 2).toFixed(2))

}

console.log(squareArea(2))
// 1.62
console.log(squareArea(0))
// 0
console.log(squareArea(14.05))
// 80


// Solution 1
function squareArea(A) {
    var circum = 4 * A;
    var radius = circum / (2 * Math.PI);
    var area = Math.pow(radius, 2);
    return Math.round(area * 100) / 100
}


// Solution 2
squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);


// Solution 3
function squareArea(A) {
    return Math.round(Math.pow(A * 2 / Math.PI, 2) * 100) / 100
}


// Solution 4
function squareArea(A) {
    return +Math.pow((4 * A) / (Math.PI * 2), 2).toFixed(2);
}


// Solution 5
function squareArea(A) {
    // Calculate the circumference of A 
    const circumference = A * 4;

    // Calculate the radius of A
    const radius = circumference / (Math.PI * 2);

    // Calculate the area of the square, rounded to 2 decimal places
    const area = Number((radius ** 2).toFixed(2));

    // Return the result
    return area;
}


// Solution 6
const squareArea = A =>
    Math.round((A / Math.PI) ** 2 * 400) / 100;


// Solution 7
const squareArea = A => Math.round(Math.pow((2 * A / Math.PI), 2) * 100) / 100


// Solution 8
function squareArea(A) {
    return Math.round(Math.pow(2 * A / Math.PI, 2) * 100) / 100;
}


// Solution 9
const squareArea = A => +Math.pow(A * 2 / Math.PI, 2).toFixed(2)


// Solution 10
squareArea = A => +((A * 2 / Math.PI) ** 2).toFixed(2);


// Solution 11
function squareArea(length) {
    var radius = 2 * length / Math.PI;
    var area = radius * radius;
    return Math.round(area * 100) / 100;
}


// Solution 12
function squareArea(A) {
    r = A * 2 / Math.PI;
    return Math.round((r * r) * 100) / 100;
}