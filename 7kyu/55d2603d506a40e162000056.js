// Reducing Problems - Bug Fixing #8

// Oh no! Timmy's reduce is causing problems, Timmy's goal is to calculate the two teams scores and return the winner but timmy has gotten confused and sometimes teams don't enter their scores, total the scores out of 3! Help timmy fix his program!

// Return true if team 1 wins or false if team 2 wins!

function calculateTotal(team1, team2) {
  var t1s = team1.reduce((t, c) => t + c, 0);
  var t2s = team2.reduce((t, c) => t + c, 0);
  return t1s > t2s;
}

console.log(calculateTotal([1,2,2],[1,0,0]));
// true
console.log(calculateTotal([6,45,1],[1,55,0]));
// false
console.log(calculateTotal([57,2,1],[]));
// true
console.log(calculateTotal([],[3,4,3]));
// false


// Solution 1
function calculateTotal(team1, team2) {
  var t1s = team1.reduce((t, c) => t + c, 0);
  var t2s = team2.reduce((t, c) => t + c, 0);
  return t1s > t2s;
}


// Solution 2
function calculateTotal(team1, team2) {
  var f = ((prev, curr) => prev + curr);
  var t1s = team1.reduce(f, 0);
  var t2s = team2.reduce(f, 0);
  return t1s > t2s;
}


// Solution 3
let calculateTotal = (team1, team2) => team1.reduce((t, c) => t + c, 0) > team2.reduce((t, c) => t + c, 0);


// Solution 4
const sum            = (a) => a.reduce((a, b) => a + b, 0),
      calculateTotal = (team1, team2) => sum(team1) > sum(team2);


// Solution 5
const calculateTotal = (team1, team2) =>
  team1.reduce((pre, val) => pre + val, 0) > team2.reduce((pre, val) => pre + val, 0);


// Solution 6
var calculateTotal = (team1, team2) => team1.reduce((t, c) => t + c, 0) > team2.reduce((t, c) => t + c, 0);


// Solution 7
function calculateTotal(team1, team2) {
  const t1s = team1.reduce((a, b) => a + b, 0);
  const t2s = team2.reduce((a, b) => a + b, 0);
  return t1s > t2s;
}


// Solution 8
const calculateTotal = ([a = 0, b = 0, c = 0], [x = 0, y = 0, z = 0]) => a + b + c > x + y + z;


// Solution 9
function calculateTotal(team1, team2) {
  return [team1, team2].map(t => t.reduce((prev, curr) => prev + curr,0)).reduce((prev, curr) => prev > curr);
}