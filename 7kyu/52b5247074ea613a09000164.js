// Boiled Eggs

// You are the greatest chef on earth. No one boils eggs like you! 
// Your restaurant is always full of guests, who love your boiled eggs. 
// But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. 
// How much time do you need?

// Your Task

// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. 
// It must return the time in minutes (integer), which it takes to have all the eggs boiled.

// Rules

// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

// Example (Input --> Output)

// 0 --> 0
// 5 --> 5
// 10 --> 10

function cookingTime(eggs) {
    return Math.ceil(eggs / 8) * 5;
}

console.log(cookingTime(0));
// 0
console.log(cookingTime(5));
// 5
console.log(cookingTime(10));
// 10


// Solution 1
function cookingTime(eggs) {
    return 5 * Math.ceil(eggs / 8);
}


// Solution 2
function cookingTime(eggs) {
    var maxEggs = 8;
    var time = 5;
    return Math.ceil(eggs / maxEggs) * time;
}


// Solution 3
function cookingTime(eggs) {
    return Math.ceil(eggs / 8) * 5;
}


// Solution 4
function cookingTime(numberOfEggs) {
    var POT_CAPACITY = 8,
        MINUTES_PER_ROUND = 5;

    var rounds = Math.ceil(numberOfEggs / POT_CAPACITY);

    return MINUTES_PER_ROUND * rounds;
}


// Solution 5
const cookingTime = eggs => Math.ceil(eggs / 8) * 5;


// Solution 6
function cookingTime(eggs) {
    var min = 0;
    for (var i = 0; i < eggs; i += 8)
        min += 5;
    return min;
}


// Solution 7
function cookingTime(eggssss) {
    return Math.ceil(eggssss / 8) * 5
}


// Solution 8
const cookingTime = e => ~~((e + 7) / 8) * 5;


// Solution 9
function cookingTime(eggs) {
    if (eggs === 0) return 0;
    if (eggs <= 8) return 5;
    return Math.ceil(eggs / 8) * 5;
}


// Solution 10
function cookingTime(eggs) {
    let time = 0

    while (eggs >= 8) {
        time += 5
        eggs -= 8
    }
    if (eggs > 0 && eggs < 8) {
        time += 5;
    }
    return time
}


// Solution 11
function cookingTime(eggs) {

    if (Number.isInteger(eggs / 8)) {
        time = Math.floor(eggs / 8) * 5
    } else {
        time = Math.floor(eggs / 8) * 5 + 5
    }

    return time
}


// Solution 12
function cookingTime(eggs) {
    return (Math.floor(eggs / 8) + Math.ceil(eggs % 8 / 10)) * 5;
}