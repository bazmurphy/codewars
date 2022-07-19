// Thinkful - Number Drills: Blue and red marbles

// You and a friend have decided to play a game to drill your statistical intuitions.

// The game works like this:

// You have a bunch of red and blue marbles.
// To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in.
// You take turns reaching into the bag, guessing a color, and then pulling one marble out.
// You get a point if you guessed correctly.
// The trick is you only have three seconds to make your guess, so you have to think quickly.

// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:

// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far(always lower than the starting number of blue marbles)
// the number of red marbles pulled out so far(always lower than the starting number of red marbles)

// guessBlue() should return the probability of drawing a blue marble, expressed as a float.

// For example, guessBlue(5, 5, 2, 3) should return 0.6.

function guessBlue(blueStart, redStart, bluePulled, redPulled) {

    // let blueRemaining = blueStart - bluePulled;
    // let redRemaining = redStart - redPulled;

    // console.log('blueRemaining', blueRemaining)
    // console.log('redRemaining', redRemaining)
    
    // let blueChance = blueRemaining / (blueRemaining + redRemaining);
    // let redChance =  redRemaining / (blueRemaining + redRemaining);

    // console.log('blueChance', blueChance)
    // console.log('redChance', redChance)

    return (blueStart - bluePulled) / ((blueStart - bluePulled) + (redStart - redPulled));
}

const guessBlue = (blueStart, redStart, bluePulled, redPulled) => (blueStart - bluePulled) / ((blueStart - bluePulled) + (redStart - redPulled));

console.log(guessBlue(5, 5, 2, 3));
// 0.6
console.log(guessBlue(5, 7, 4, 3));
// 0.2
console.log(guessBlue(12, 18, 4, 6));
// 0.4


// Solution 1
const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
    return (blueStart - bluePulled) / ((blueStart - bluePulled) + (redStart - redPulled));
};


// Solution 2
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    var blueLeft = blueStart - bluePulled;
    var redLeft = redStart - redPulled;
    var allLeft = blueLeft + redLeft;

    return blueLeft / allLeft;
}


// Solution 3
const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
    const blue = blueStart - bluePulled;
    const red = redStart - redPulled;
    return blue / (blue + red);
};


// Solution 4
// function guessBlue(blueStart, redStart, bluePulled, redPulled) {
//   let blueIn = (blueStart - bluePulled),
//       redIn = (redStart - redPulled);
//   return blueIn / (blueIn + redIn);
// }

// or ES6 and one liner
const guessBlue = (bs, rs, bp, rp) => (bs - bp) / (bs - bp + rs - rp);


// Solution 5
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let blueLeft = blueStart - bluePulled;
    let redLeft = redStart - redPulled;
    return blueLeft / (redLeft + blueLeft);
}


// Solution 6
guessBlue = (b1, r1, b2, r2) => (b1 - b2) / (b1 + r1 - b2 - r2)


// Solution 7
guessBlue = (blueStart, redStart, bluePulled, redPulled) => (blueStart - bluePulled) / (blueStart + redStart - bluePulled - redPulled)


// Solution 8
var guessBlue = (bS, rS, bP, rP) => (bS - bP) / (bS - bP + rS - rP) // dupa


// Solution 9
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    const redInBag = redStart - redPulled;
    const blueInBag = blueStart - bluePulled;
    const totalInBag = blueInBag + redInBag;
    return blueInBag / totalInBag;
}


// Solution 10
const guessBlue = (a1, b1, a2, b2) => (a1 = a1 - a2) / (a1 + b1 - b2);


// Solution 11
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let b = blueStart - bluePulled
    let r = redStart - redPulled
    let c = b + r
    let result = b / c
    return result
}


// Solution 12
const guessBlue = (blueStart, redStart, bluePulled, redPulled) => (blueStart - bluePulled) / (blueStart + redStart - bluePulled - redPulled);