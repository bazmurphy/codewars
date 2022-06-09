// Grasshopper - Terminal game combat function

// Create a combat function that takes the player's current health and the amount of damage recieved, 
// and returns the player's new health.
// Health can't be less than 0.

function combat(health, damage) {
    return health - damage >= 0 ? health - damage : 0;
}

console.log(combat(100, 5))
// 95
console.log(combat(92, 8))
// 84
console.log(combat(20, 30))
// 0 "Health cannot go below 0"


// Solution 1
function combat(health, damage) {
    return health < damage ? 0 : health - damage
}


// Solution 2
const combat = (health, damage) => Math.max(0, health - damage);


// Solution 3
function combat(health, damage) {
    return Math.max(health - damage, 0);
}


// Solution 4
function combat(health, damage) {
    if (health - damage < 0) {
        return 0;
    } else {
        return health - damage;
    }
}


// Solution 5
combat = (h, d) => (h = h - d) < 0 ? 0 : h;


// Solution 6
function combat(health, damage) {
    if (isNaN(health) || isNaN(damage)) return;
    return health > damage ? health - damage : 0;
}


// Solution 7
function combat(health, damage) {
    return health - damage < 0 ? 0 : health - damage;
}


// Solution 8
function combat(health, damage) {
    return (health -= damage) < 0 ? 0 : health;
}


// Solution 9
function combat(health, damage) {
    let newHealth = health - damage
    console.log(newHealth)
    if (newHealth >= 1) {
        return newHealth
    }
    else if (newHealth <= 0) {
        return 0
    }

}


// Solution 10
const combat = (h, d) => (x => x * ((x > 0) - (x < 0)) + x)(h - d) / 2;


// Solution 11
combat = (health, damage) => damage > health ? 0 : health - damage


// Solution 12
function combat(health, damage) {
    // Write your code here
    let result = 0;
    if (health - damage <= 0) result = 0;
    else result = health - damage;
    return result;
}