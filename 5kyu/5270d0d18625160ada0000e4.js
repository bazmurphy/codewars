// Greed is Good

// Greed is a dice game played with five six-sided dice.
// Your mission, should you choose to accept it, is to score a throw according to these rules.
// You will always be given an array with five six-sided dice values.

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

// A single die can only be counted once in each roll.
// For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points,
// but not both in the same roll.

// Example scoring

// Throw       Score
// ---------   ------------------
// 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
// 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
// 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

// In some languages, it is possible to mutate the input to the function.
// This is something that you should never do.
// If you mutate the input, you will not be able to pass all the tests.

function score(dice) {
  const diceMap = new Map();

  for (let rollIndex = 0; rollIndex < dice.length; rollIndex++) {
    if (diceMap.has(dice[rollIndex])) {
      diceMap.set(dice[rollIndex], diceMap.get(dice[rollIndex]) + 1);
    } else {
      diceMap.set(dice[rollIndex], 1);
    }
  }
  // console.log(diceMap);

  let points = 0;

  function lookForTriples(value, pointsAmount) {
    if (diceMap.get(value) >= 3) {
      points += pointsAmount;
      diceMap.set(value, diceMap.get(value) - 3);
    }
  }

  lookForTriples(1, 1000);
  lookForTriples(6, 600);
  lookForTriples(5, 500);
  lookForTriples(4, 400);
  lookForTriples(3, 300);
  lookForTriples(2, 200);

  function lookForSingles(value, pointsAmount) {
    while (diceMap.get(value) > 0) {
      points += pointsAmount;
      diceMap.set(value, diceMap.get(value) - 1);
    }
  }

  lookForSingles(1, 100);
  lookForSingles(5, 50);

  return points;
}

// "should value this as worthless",
console.log(score([2, 3, 4, 6, 2]));
// "Should be 0 :-(" );

// "should value this triplet correctly"
console.log(score([4, 4, 4, 3, 3]));
// "Should be 400"

// "should value this mixed set correctly"
console.log(score([2, 4, 4, 5, 4]));
// "Should be 450"

console.log(score([5, 1, 3, 4, 1]));
// 250
// 50 (for the 5) + 2 * 100 (for the 1s)

console.log(score([1, 1, 1, 3, 1]));
// 1100
// 1000 (for three 1s) + 100 (for the other 1)

console.log(score([5, 5, 5, 3, 3]));
// 500
