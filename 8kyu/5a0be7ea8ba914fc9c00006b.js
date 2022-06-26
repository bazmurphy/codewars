// The falling speed of petals

// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. 
// The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0


function sakuraFall(v) {

    // if (v <= 0 ) {
    //     return 0;
    // } else {
    //     return 400 / v
    // }

    return v <= 0 ? 0 : 400 / v;

}

console.log(sakuraFall(5));
// 80
console.log(sakuraFall(10));
// 40
console.log(sakuraFall(-1));
// 0


// Solution 1
const sakuraFall = velocity => velocity > 0 ? 400 / velocity : 0;


// Solution 2
function sakuraFall(v) {
    let distToGround = 5 * 80; // distance from branch to ground = 400 centimeters
    let time = 0;

    if (v > 0) {
        time = distToGround / v;
    }

    return time;
}


// Solution 3
function sakuraFall(v) {
    return v < 1 ? 0 : 400 / v;
}


// Solution 4
const sakuraFall = v => v > 0 ? 400 / v : 0;


// Solution 5
function sakuraFall(v) {
    return v <= 0 ? 0 : 400 / v;
}


// Solution 6
function sakuraFall(v) {
    return v > 0 ? 400 / v : 0
}


// Solution 7
const sakuraFall = (U) => U > 0 ? 400 / U : 0;


// Solution 8
const sakuraFall = Vlif => Vlif <= 0 ? 0 : 400 / Vlif;


// Solution 9
const sakuraFall = x => x <= 0 ? 0 : 400 / x;


// Solution 10
function sakuraFall(speed) {
    return 400 / speed < 0 || 400 / speed === Infinity ? 0 : 400 / speed
}


// Solution 11
function sakuraFall(v) {
    v = Number(v)
    const s = 400

    if (v > 0) {
        return s / v
    }

    return 0
}


// Solution 12
function sakuraFall(v) {
    return v < 1 ? 0 : 80 * 5 / v;
}