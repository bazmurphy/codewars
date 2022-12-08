// Simple Fun #261: Whose Move

// Task

// Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

// Input/Output

// [input] string lastPlayer/$last_player

// "black" or "white" - whose move it was during the previous round.

// [input] boolean win/$win

// true if the player who made a move during the previous round won, false otherwise.

// [output] a string

// Return "white" if white is to move on the next round, and "black" otherwise.

// Example

// For lastPlayer = "black" and win = false, the output should be "white".

// For lastPlayer = "white" and win = true, the output should be "white".

function whoseMove(lastPlayer, win) {
  if (win && lastPlayer === "white" || !win && lastPlayer === "black") {
    return "white";
  } else if (win && lastPlayer === "black" || !win && lastPlayer === "white") {
    return "black";
  }
}

console.log(whoseMove("black",false));
// "white"
console.log(whoseMove("white",true));
// "white"
console.log(whoseMove("white",false));
// "black"


// Solution 1
function whoseMove(lastPlayer, win) {
  return win?lastPlayer:lastPlayer=="white"?"black":"white"
}


// Solution 2
function whoseMove(lastPlayer, win) {
  const opp = lastPlayer === 'black' ? 'white' : 'black';
  return  win ? lastPlayer : opp;
}


// Solution 3
function whoseMove(lastPlayer, win) {
  return win?lastPlayer:lastPlayer==='black'?'white':'black';
}


// Solution 4
whoseMove = (l, w) => w ? l : l === 'black' ? 'white' : 'black';


// Solution 5
function whoseMove(lastPlayer, win) {
  if (lastPlayer === 'black' && win === true) {
    return 'black';
  } else if (lastPlayer === 'black' && win === false) {
    return 'white';
  } else if (lastPlayer === 'white' && win === true) {
    return 'white';
  } else {
    return 'black';
  }
}


// Solution 6
const whoseMove = (lastPlayer, win) =>
  lastPlayer === `black` ^ win ? `white` : `black`;


// Solution 7
function whoseMove(lastPlayer, win) {
  return lastPlayer && win ? lastPlayer : {'black':'white','white':'black'}[lastPlayer];
}


// Solution 8
const whoseMove = (lastPlayer, win) => win ? lastPlayer : lastPlayer == 'white' ? 'black' : 'white' 


// Solution 9
whoseMove = (l, w) =>  ['black','white'][(+w-(l=='black'?-1:0))%2];


// Solution 10
const whoseMove = (lastPlayer, win) =>
	win
  	? lastPlayer
    : lastPlayer === 'white'
                   ? 'black'
                   : 'white'


// Solution 11
function whoseMove (current, shouldContinue) {
  const players = ['black', 'white'];
  return players.find((player) => {
    return shouldContinue ? player === current : player !== current;
  });
}


// Solution 12
function whoseMove(lastPlayer, win) {  
  if(win) return lastPlayer;
  else if(lastPlayer == 'white') return lastPlayer = 'black';
  return lastPlayer = 'white';
}


// Solution 13
function whoseMove(lastPlayer, win) {
  let map = {'black': 'white', 'white': 'black'}
  return win ? lastPlayer : map[lastPlayer]
}


// Solution 14
var whoseMove = (lastPlayer, win) => win ? lastPlayer : lastPlayer == "black" ? "white" : 'black'