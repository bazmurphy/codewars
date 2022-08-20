// Online RPG: player to qualifying stage ?

// Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.

// Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.

// Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.

// In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".

// Otherwise return, False / false(according to the language in use).

function playerRankUp(points) {
    return points >= 100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : false;
}

console.log(playerRankUp(64))
// false
console.log(playerRankUp(101))
// "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."


// Solution 1
function playerRankUp(points) {
    return points < 100 ? false : "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
}


// Solution 2
function playerRankUp(points) {
    return points >= 100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : false;
}


// Solution 3
function playerRankUp(points) {
    var winStr = "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
    return (points > 99) ? winStr : false;
}


// Solution 4
function playerRankUp (points) {
  var msg = 'Well done! You have advanced to the qualifying stage. ' + 
            'Win 2 out of your next 3 games to rank up.';
  return points >= 100 && msg;
}


// Solution 5
function playerRankUp(points) {
    return points >= 100 && 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.';
}


// Solution 6
/*
function playerRankUp (points) {
  if (points < 100){
    return false
  }else{
    return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
  }
}
*/

const playerRankUp = points => points < 100 ? false : "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."


// Solution 7
function playerRankUp(points) {
    var wellDone =
        "Well done! You have advanced to the qualifying stage. " +
        "Win 2 out of your next 3 games to rank up.";
    return points >= 100 ? wellDone : false;
}


// Solution 8
const playerRankUp = points => points >= 100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : points >= 100


// Solution 9
const playerRankUp = points =>
    points >= 100 && `Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.`;


// Solution 10
function playerRankUp(points) {
    if (points < 100) {
        return false;
    }
    return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
}


// Solution 11
function playerRankUp(points) {
    if (points >= 100) {
        return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
    } else {
        return false;
    }
}


// Solution 12
function playerRankUp(p) {
    return p >= 100 && "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
}