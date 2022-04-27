// Grasshopper - Terminal game move function

// Terminal game move function

// In this game, the hero moves from left to right. 
// The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:

// move(3, 6) should equal 15

function move(position, roll) {
    return position + (roll * 2);
}

console.log(move(0, 4));
// 8
console.log(move(3, 6));
// 15
console.log(move(2, 5));
// 12


// Solution 1
const move = (position, roll) => position + roll * 2


// Solution 2
function move(position, roll) {
    return position + roll * 2
}


// Solution 3
const move = (p, r) => p + r * 2;


// Solution 4
const move = (_, $, _$) => (_ + [_$ = -~[], ++_$][-~[]] * $)


// Solution 5
function move(position, roll) {
    // return the new position
    return roll >= 1 && roll <= 6 ? roll * 2 + position : null;
}


// Solution 6
const move = (position, roll) => position + 2 * roll


// Solution 7
function move(position, roll) {
    return position + (2 * roll)
}


// Solution 8
function move(position, roll) {
    const newPosition = position + roll * 2;

    return newPosition;
}


// Solution 9
function move(position, roll) {
    return position += roll * 2
}


// Solution 10
move = (_, __) => _ + 2 * (__)


// Solution 11
function move(position, roll) {
    let direct = position + roll * 2;
    return direct
}


// Solution 12
function move(position, roll) {
    let rolls = roll * 2;//roll * 2
    let total = position + rolls;
    return total;
}