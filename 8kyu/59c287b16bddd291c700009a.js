// For Twins: 2. Math operations

// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:

// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);

// And return volume of ice brick that magician managed to put into a bottle.

// illustration

// Note:

// All inputs are integers. 
// Assume no irregularities to the cuboid brick. 
// You may assume the bottle is shaped like a cylinder. The brick cannot fit inside the rim. The ice brick placed into the bottle is the largest possible cuboid that could actually fit inside the inner volume.

// Example 1:

// radius = 1
// bottle_length = 10
// rim_length = 2

// volume = 16

// Example 2:

// radius = 5
// bottle_length = 30
// rim_length = 7

// volume = 1150

function iceBrickVolume(radius, bottleLength, rimLength) {
    
    let maxHeight = bottleLength - rimLength;
    console.log('maxHeight:', maxHeight)

    let maxWidth = Math.sqrt(2) * radius;
    console.log('maxWidth:', maxWidth)

    return parseInt(maxWidth * maxWidth * maxHeight);

}

// const iceBrickVolume = (radius, bottleLength, rimLength) => parseInt((Math.sqrt(2) * radius) * (Math.sqrt(2) * radius) * (bottleLength - rimLength));

console.log(iceBrickVolume(1, 10, 2));
// 16, "radius = 1, bottleLength = 10, rimLength = 2");
console.log(iceBrickVolume(5, 30, 7));
// 1150, "radius = 5, bottleLength = 30, rimLength = 7");


// Solution 1
const iceBrickVolume = (r, x, y) => 2 * r * r * (x - y);


// Solution 2
function iceBrickVolume(radius, bottleLength, rimLength) {
    var brickLength = bottleLength - rimLength;
    var brickDepth = radius * 2;
    var brickHeight = radius;

    return brickLength * brickDepth * brickHeight;

}

//bottle length - rim length will give you the height of the brick = (brick height x width x depth)
//radius x 2 = width of the brick
//

//the bottle volume = volume = r squared x height x pi = 31.4
//radius = 1
//bottlelength = 10
//rimlength = 2

//the brick volume = 16
//brick length = 8
//brick depth = 1 x 2 (double the radius)
//brick height = 1

//brick volume = 1150
//brick length = 23
//brick depth = 5 x 2 (double the radius)
//brick height = 5 


// Solution 3
const iceBrickVolume = (radius, bottleLength, rimLength) => radius * radius * (bottleLength - rimLength) * 2;


// Solution 4
const iceBrickVolume = (radius, bottleLength, rimLength) =>
    (bottleLength - rimLength) * 2 * radius ** 2;


// Solution 5
function iceBrickVolume(radius, bottleLength, rimLength) {
    let height = bottleLength - rimLength
    return radius * radius * (height + height)
}


// Solution 6
iceBrickVolume = (r, h, d) => 2 * r * r * (h - d)


// Solution 7
function iceBrickVolume(radius, bottleLength, rimLength) {
    var length = bottleLength - rimLength;
    var side = Math.sqrt(radius * radius + radius * radius);
    return Math.round(side * side * length);
}


// Solution 8
const iceBrickVolume = (radius, bottleLength, rimLength) => radius ** 2 * 2 * (bottleLength - rimLength);


// Solution 9
const iceBrickVolume = (r, b, l) => 2 * r * r * (b - l);


// Solution 10
function iceBrickVolume(radius, bottleLength, rimLength) {
    const side = radius * 2;
    return side * side * (bottleLength - rimLength) / 2
}


// Solution 11
iceBrickVolume = (r, b, l) => Math.pow(r, 2) * (b - l) * 2


// Solution 12
iceBrickVolume = (r, b, t) => 2 * r * r * (b - t)