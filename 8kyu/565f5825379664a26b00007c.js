// Surface Area and Volume of a Box

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
    return [
        2 * (width * height + width * depth + height * depth),
        width * height * depth
    ]
}

console.log(getSize(4, 2, 6));
// [88, 48]
console.log(getSize(10, 10, 10));
// [600, 1000]


// Solution 1
function getSize(width, height, depth) {
    var box = { width: width, height: height, depth: depth };

    return [getArea(box), getVolume(box)];
}


function getArea(box) {
    return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
}

function getVolume(box) {
    return box.width * box.height * box.depth;
}


// Solution 2
const getSize = (w, h, d) => [
    (w * h + w * d + h * d) * 2,
    w * h * d
];


// Solution 3
function getSize(w, h, d) {
    var area = (2 * d * h) + (2 * w * h) + (2 * d * w);
    var volume = d * w * h;
    return [area, volume];
}


// Solution 4
const getSize = (width, height, depth) => [(width * height + width * depth + height * depth) * 2, width * height * depth];


// Solution 5
const getSize = (a, b, c) => [2 * (a * b + b * c + a * c), a * b * c]


// Solution 6
let getSize = (x, y, z) => [((x + y) << 1) * z + (x * y << 1), x * y * z];


// Solution 7
const getSize = (width, height, depth) => [2 * (width * height + height * depth + width * depth), width * height * depth];


// Solution 8
const getSize = (x, y, z) => [2 * x * y + 2 * y * z + 2 * x * z, x * y * z]


// Solution 9
const getSize = (w, h, d) => {
    const area = (w * h * 2) + (w * d * 2) + (h * d * 2)
    const volume = w * h * d
    return [area, volume]
}


// Solution 10
const getSize = (l, w, h) => {
    let sa = (2 * l * w) + (2 * w * h) + (2 * l * h),
        v = l * w * h
    return [sa, v]
}


// Solution 11
function getSize(width, height, depth) {
    let volume = width * height * depth;
    let area = 2 * (width * height + height * depth + depth * width);
    return [area, volume];
}


// Solution 12
getSize = (w, h, d) => [w * h * 2 + w * d * 2 + h * d * 2, w * h * d]