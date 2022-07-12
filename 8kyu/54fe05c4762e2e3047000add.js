// Object Oriented Piracy 

// Ahoy matey!

// You are a leader of a small pirate crew. And you have a plan. 
// With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

// Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

// You begin with writing a generic Ship class / struct:

// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }

// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board

// var titanic = new Ship(15, 10);

// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt

// to decide if the ship is worthy to loot. For example:

// titanic.isWorthIt() // return false

// This Kata teaches you the very basic of method creation.

// Good luck!


function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;

    this.isWorthIt = function() {
        return this.draft - (this.crew * 1.5) > 20 ? true : false;
    }
}

let titanic = new Ship(15, 10);
titanic.isWorthIt()


// Solution 1
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
    return this.draft - (this.crew * 1.5) > 20;
}


// Solution 2
class Ship {
    constructor(draft, crew) {
        this.draft = draft;
        this.crew = crew;
    }

    isWorthIt() {
        return this.draft - 1.5 * this.crew > 20;
    }
}


// Solution 3
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function () { return this.draft - (this.crew * 1.5) > 20 }
}


// Solution 4
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
    return this.draft - (this.crew * 1.5) > 20 ? true : false;
}


// Solution 5
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;

    this.isWorthIt = function () {
        return this.draft > this.crew * 1.5 + 20;
    }
}



// Solution 6
class Ship {
    constructor(draft, crew) {
        this.draft = draft
        this.crew = crew
    }

    isWorthIt() {
        return this.draft - this.crew * 1.5 > 20
    }
}

module.exports = Ship


// Solution 7
// Why function if can be class
class Ship {
    constructor(draft, crew) {
        this.draft = draft;
        this.crew = crew;
    }
    isWorthIt() {
        return this.draft - this.crew * 1.5 > 20;
    }
}


// Solution 8
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function () {
        return this.draft >= this.crew * 1.5 + 20;
    }
}


// Solution 9
class Ship {
    constructor(draft, crew) {
        this.draft = draft;
        this.crew = crew;
    }
    isWorthIt() {
        return this.draft - this.crew * 1.5 >= 20
    }
}


// Solution 10
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
}
Ship.prototype.isWorthIt = function () {
    worth = this.draft - (this.crew * 1.5);
    if (worth > 20) {
        return true;
    }
    else {
        return false;
    }
}


// Solution 11
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
    return this.crew * 1.5 < this.draft - 20;
}


// Solution 12
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
    if ((this.draft - (this.crew * 1.5)) > 20) {
        return true;
    }
    return false;
}