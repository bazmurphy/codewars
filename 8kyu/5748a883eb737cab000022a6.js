// Pirates!! Are the Cannons ready! ??

// Ahoy Matey!

// Welcome to the seven seas.

// You are the captain of a pirate ship.

// You are in battle against the royal navy.

// You have cannons at the ready.... or are they?

// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 2, 3 or 4.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay

// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

const cannonsReady = (gunners) => {
    for (crew in gunners)
        if (gunners[crew] === 'aye')
            continue;
        else {
            return 'Shiver me timbers!'
        }
    return 'Fire!'
}

let a = { 'Mike': 'aye', 'Joe': 'aye', 'Johnson': 'aye', 'Peter': 'aye' };
let b = { 'Mike': 'aye', 'Joe': 'nay', 'Johnson': 'aye', 'Peter': 'aye' };

console.log(cannonsReady(a)); 
// 'Fire!'
console.log(cannonsReady(b));
// 'Shiver me timbers!'


// Solution 1
const cannonsReady = (gunners) => {
    return Object.values(gunners).some(m => m === 'nay') ? 'Shiver me timbers!' : 'Fire!';
}


// Solution 2
const cannonsReady = (gunners) => {
    for (var i in gunners) {
        if (gunners[i] == "nay") {
            return "Shiver me timbers!"
        }
    }
    return "Fire!"
}


// Solution 3
const cannonsReady = (gunners) => {
    return Object.values(gunners).includes('nay') ? 'Shiver me timbers!' : 'Fire!';
}


// Solution 4
const cannonsReady = a => Object.keys(a).every(g => a[g] === "aye") ? "Fire!" : "Shiver me timbers!";


// Solution 5
const cannonsReady = (gunners) => {
    for (name in gunners)
        if (gunners[name] === 'nay')
            return 'Shiver me timbers!'
    return 'Fire!'
}


// Solution 6
const cannonsReady = (gunners) => Object.values(gunners).every(e => e === 'aye') ? 'Fire!' : 'Shiver me timbers!'


// Solution 7
const cannonsReady = gunners =>
    Object.values(gunners).every(val => val === `aye`) ? `Fire!` : `Shiver me timbers!`;


// Solution 8
const cannonsReady = g => Object.values(g).includes('nay') ? "Shiver me timbers!" : "Fire!"


// Solution 9
const cannonsReady = (gunners) => {
    var helper = true;
    for (var i in gunners) {
        if (gunners[i] === 'nay') {
            helper = false;
        }
    }
    return helper ? 'Fire!' : 'Shiver me timbers!';
}


// Solution 10
// destructing assignment
cannonsReady = ({ Mike: a, Joe: b, Johnson: c, Peter: d }) => [a, b, c, d].some(i => i == 'nay') ? 'Shiver me timbers!' : 'Fire!'

// values() & some()
cannonsReady = (g) => Object.values(g).some(i => i == 'nay') ? 'Shiver me timbers!' : 'Fire!'

// values() & match()
cannonsReady = (g) => `${Object.values(g)}`.match('nay') ? 'Shiver me timbers!' : 'Fire!'

// values() & includes()
cannonsReady = (g) => Object.values(g).includes('nay') ? 'Shiver me timbers!' : 'Fire!'


// Solution 11
const cannonsReady = function (gunners) {
    return Object.keys(gunners).map(pirate => gunners[pirate]).includes('nay') ? 'Shiver me timbers!' : 'Fire!'
};


// Solution 12
const cannonsReady = (gunners) => {
    return Object.values(gunners).some(s => s === 'nay') ? 'Shiver me timbers!' : 'Fire!'
}