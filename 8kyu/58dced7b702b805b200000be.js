// Geometry Basics: Distance between points in 2D

// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes(X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.

function distanceBetweenPoints(a, b) {
    return Math.sqrt(Math.pow((a.x - b.x),2) + Math.pow((a.y - b.y),2));
}

console.log(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)));
// 0
console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)));
// 5
console.log(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6));
// 10.728001


// Solution 1
function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}


// Solution 2
distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);


// Solution 3
function distanceBetweenPoints(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}


// Solution 4
const distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);


// Solution 5
var distanceBetweenPoints = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => Math.hypot(x1 - x2, y1 - y2)


// Solution 6
function distanceBetweenPoints(a, b) {
    const xA = a.x
    const yA = a.y
    const xB = b.x
    const yB = b.y
    const michel = xA - xB
    const jacky = yA - yB
    return Math.sqrt((michel * michel) + (jacky * jacky))
};


// Solution 7
function distanceBetweenPoints(a, b) {
    const pointOne = a;
    const pointTwo = b;

    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    const differenceX = pointTwo.x - pointOne.x
    const differenceY = pointTwo.y - pointOne.y
    const tempSum = Math.pow(differenceX, 2) + Math.pow(differenceY, 2);
    const distance = Math.sqrt(tempSum);
    return distance;
}


// Solution 8
const distanceBetweenPoints = (a, b) => Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);


// Solution 9
function distanceBetweenPoints(a, b) {
    var a1 = [], a2 = [];
    for (var i in a)
        a1.push(a[i]);
    for (var i in b)
        a2.push(b[i]);
    return Math.sqrt((a1[0] - a2[0]) * (a1[0] - a2[0]) + (a1[1] - a2[1]) * (a1[1] - a2[1]))
}


// Solution 10
function distanceBetweenPoints(a, b) {
    const katetX = Math.pow(a.x - b.x, 2)
    const katetY = Math.pow(a.y - b.y, 2)

    return Math.sqrt(katetX + katetY);
}


// Solution 11
function distanceBetweenPoints(a, b) {
    return Math.round(Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2) * 1000000) / 1000000
}


// Solution 12
function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y)//.toFixed(6)
}