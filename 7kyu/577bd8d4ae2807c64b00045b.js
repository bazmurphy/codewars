// Two fighters, one winner.

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious.
// Death is defined as having health <= 0.

// Each fighter will be a Fighter object / instance.See the Fighter class below in your chosen language.

// Both health and damagePerAttack(damage_per_attack for python) will be integers larger than 0. 
// You can mutate the Fighter objects.

// Example:

// declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") 
// => "Lew"

// Lew attacks Harry; Harry now has 3 health.
// Harry attacks Lew; Lew now has 6 health.
// Lew attacks Harry; Harry now has 1 health.
// Harry attacks Lew; Lew now has 2 health.
// Lew attacks Harry: Harry now has - 1 health and is dead.Lew wins.

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {

    if (firstAttacker === fighter1.name) {
        fighter1 = fighter1;
    } else {
        let copyOfFighter2 = fighter2;
        fighter2 = fighter1;
        fighter1 = copyOfFighter2;
    }

    function fighter1Attack() {
        fighter2.health = fighter2.health - fighter1.damagePerAttack;
        console.log(`${fighter1.name} attacks ${fighter2.name} dealing ${fighter1.damagePerAttack} damage.`)
    }

    function fighter2Attack() {
        fighter1.health = fighter1.health - fighter2.damagePerAttack;
        console.log(`${fighter2.name} attacks ${fighter1.name} dealing ${fighter2.damagePerAttack} damage.`)
    }

    function fighter1Health() {
        console.log(`${fighter1.name} now has ${fighter1.health} health`)
    }

    function fighter2Health() {
        console.log(`${fighter2.name} now has ${fighter2.health} health`)
    }

    while (fighter1.health > 0 || fighter1.health > 0) {
        fighter1Attack()
        fighter2Health()
            if (fighter2.health <= 0) {
                return fighter1.name;
            }
        fighter2Attack()
        fighter1Health()
            if (fighter1.health <= 0) {
                return fighter2.name;
            }
    }

}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"));
// "Lew"
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"));
// "Harry"
// console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"));
// // "Harald"
// console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"));
// // "Harald"
// console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"));
// // "Harald"
// console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"));
// // "Harald"


// Solution 1
function declareWinner(fighter1, fighter2, firstAttacker) {
    var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
    if (fac1 < fac2) {
        return fighter2.name;
    } else if (fac2 < fac1) {
        return fighter1.name;
    } else {
        return firstAttacker;
    }
}


// Solution 2
function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
        fighter2.health -= fighter1.damagePerAttack;
        fighter1.health -= fighter2.damagePerAttack;
    }

    if (fighter1.health <= 0 && fighter2.health <= 0)
        return firstAttacker;
    else if (fighter1.health <= 0)
        return fighter2.name;
    else
        return fighter1.name;
}


// Solution 3
function declareWinner(fighter1, fighter2, firstAttacker) {
    var attacker = (fighter1.name === firstAttacker)
        ? fighter1
        : fighter2;

    function noOneWins() {
        return ((fighter1.health > 0) && (fighter2.health > 0));
    }

    function getNextAttacker(attacker) {
        return (attacker === fighter1) ? fighter2 : fighter1;
    }

    function getDefender(attacker) {
        return getNextAttacker(attacker);
    }

    function killRound(attacker) {
        var defender = getDefender(attacker);
        defender.health -= attacker.damagePerAttack;
    }

    function getWinner() {
        return (fighter1.health > 0)
            ? fighter1.name
            : fighter2.name;
    }

    while (noOneWins()) {
        killRound(attacker);
        attacker = getNextAttacker(attacker);
    }

    return getWinner();
}


// Solution 4
function declareWinner(fighter1, fighter2, firstAttacker) {
    if (fighter1.name !== firstAttacker) return declareWinner(fighter2, fighter1, fighter2.name)
    if (fighter1.health <= 0) return fighter2.name
    if (fighter2.health <= 0) return fighter1.name

    return declareWinner(new Fighter(fighter2.name, fighter2.health - fighter1.damagePerAttack, fighter2.damagePerAttack), fighter1, fighter2.name)
}


// Solution 5
Object.defineProperties(Fighter.prototype, {
    isDead: { get: function () { return this.health <= 0; } },
    attack: { value: function (other) { other.health -= this.damagePerAttack; } }
});

function declareWinner(fighter1, fighter2, firstAttacker) {
    var [a, b] = (fighter1.name === firstAttacker) ? [fighter1, fighter2] : [fighter2, fighter1];
    while (true) {
        a.attack(b);
        if (b.isDead) return a.name;
        b.attack(a);
        if (a.isDead) return b.name;
    }
}


// Solution 6
function declareWinner(fighter1, fighter2, firstAttacker) {
    var first = firstAttacker === fighter1.name ? fighter1 : fighter2,
        second = first === fighter1 ? fighter2 : fighter1,
        fight = true;
    while (first.health > 0 && second.health > 0) {
        if (fight) {
            second.health -= first.damagePerAttack;
            fight = false;
        }
        else {
            first.health -= second.damagePerAttack;
            fight = true;
        }
    }
    return first.health > 0 ? first.name : second.name;
}


// Solution 7
function declareWinner(fighter1, fighter2, firstAttacker) {

    var secondAttacker;

    if (firstAttacker === fighter1.name) {

        firstAttacker = fighter1;
        secondAttacker = fighter2;
    }
    else {

        firstAttacker = fighter2;
        secondAttacker = fighter1;
    }

    while (fighter1.health > 0 && fighter2.health > 0) {

        secondAttacker.health -= firstAttacker.damagePerAttack;

        if (secondAttacker.health <= 0) {
            return firstAttacker.name;
        }

        firstAttacker.health -= secondAttacker.damagePerAttack;

        if (firstAttacker.health <= 0) {
            return secondAttacker.name;
        }

    }
}


// Solution 8
function declareWinner(fighter1, fighter2, firstAttacker) {
    var res = Math.ceil(fighter1.health / fighter2.damagePerAttack) -
        Math.ceil(fighter2.health / fighter1.damagePerAttack);
    return res > 0 ? fighter1.name : (res < 0 ? fighter2.name : firstAttacker);
}


// Solution 9
function declareWinner(fighter1, fighter2, firstAttacker) {

    const turnsUntilDeath1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    const turnsUntilDeath2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);

    if (turnsUntilDeath2 > turnsUntilDeath1) {
        return fighter2.name
    } else if (turnsUntilDeath1 > turnsUntilDeath2) {
        return fighter1.name
    } else {
        return firstAttacker
    }
}


// Solution 10
const declareWinner = (f1, f2, fa) => {

    if (f2.name === fa) [f1, f2] = [f2, f1];

    while (f1.health > 0) {
        f2.health -= f1.damagePerAttack;
        [f1, f2] = [f2, f1];
    }

    return f2.name;
};


// Solution 11
const declareWinner = (fighter1, fighter2, firstAttacker) =>
  (val => val > 0 ? fighter1.name : val < 0 ? fighter2.name : firstAttacker)
  (Math.ceil(fighter1.health / fighter2.damagePerAttack) - Math.ceil(fighter2.health / fighter1.damagePerAttack));


// Solution 12
const declareWinner = (f1, f2, fa) => (f1.health -= (f2.name === fa ? f2.damagePerAttack : 0)) > 0 && (f2.health -= (f1.name === fa ? f1.damagePerAttack : 0)) > 0 ? declareWinner(f1, f2, f1.name === fa ? f2.name : f1.name) : f1.health <= 0 ? f2.name : f1.name;