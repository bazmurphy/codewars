// Grasshopper - If /else syntax debug

// If /else syntax debug

// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive / CheckAlive / check_alive.Unfortunately, Greg made some errors while creating the function.

// checkAlive / CheckAlive / check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between - 10 and 10.


function checkAlive(health) {
    if (health <= 0) {
        return false;
    }
    return true;
}

console.log(checkAlive(5))
// true
console.log(checkAlive(0))
// false


// Solution 1
function checkAlive(health) {
    return health > 0;
}


// Solution 3
function checkAlive(health) {
    return health > 0 ? true : false;
}


// Solution 4
const checkAlive = h => h > 0;


// Solution 7
function checkAlive(health) {
    if (health > 0 && health < 11) {
        return true;
    } else if (health <= 0 && health > -11) {
        return false;
    }
}



// Solution 8
function checkAlive(health) {
    if (health > 0) {
        return true;
    } else (health <= 0); {
        return false;
    }
}


// Solution 9
function checkAlive(health) {
    if (health <= 0) {
        return false;
    }
    else {
        return true;
    }
}


// Solution 10
var checkAlive = health => health > 0 ? true : false


// Solution 11
const checkAlive = h => !isDead(h)
const isDead = h => h < 1;


// Solution 12
const checkAlive = _ => _ < 1 && '(ง ͠° ͟ل͜ ͡°)ง' < '(ง°ل͜°)ง' && '(ﾉ◕ヮ◕)ﾉ*' + '*ヽ(◕ヮ◕ヽ)' ? !!0 : !0