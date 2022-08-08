// Barking mad

// Teach snoopy and scooby doo how to bark using object methods.
// Currently only snoopy can bark and not scooby doo.

// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined

// Use method prototypes to enable all Dogs to bark.

function Dog(breed) {
    this.breed = breed;
    this.bark = function() {
        return 'Woof';
    }
}

let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");


console.log(snoopy.bark())
// "Woof"
console.log(scoobydoo.bark())
// "Woof"


// Solution 1
function Dog(breed) {
    this.breed = breed;
}

var snoopy = new Dog("Beagle");

Dog.prototype.bark = function () {
    return "Woof";
};

var scoobydoo = new Dog("Great Dane");


// Solution 2
class Dog {
    constructor(breed) {
        this.breed = breed;
    }

    bark() {
        return "Woof";
    }
}

let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");


// Solution 3
function Dog(breed) {
    this.breed = breed;
    this.bark = function () { return "Woof" };
}

var snoopy = new Dog("Beagle");

snoopy.bark();

var scoobydoo = new Dog("Great Dane");
scoobydoo.bark();


// Solution 4
function Dog(breed) {
    this.breed = breed;
    this.bark = function () {
        return "Woof";
    };
}

var snoopy = new Dog("Beagle");

var scoobydoo = new Dog("Great Dane");


// Solution 5
function Dog(breed) {
    this.breed = breed;
}

Dog.prototype.bark = () => "Woof";

var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");


// Solution 6
var snoopy,
    scoobydoo;

function Dog(breed) {
    this.breed = breed;
}

Dog.prototype.bark = function () {
    return "Woof";
};

snoopy = new Dog("Beagle");
scoobydoo = new Dog("Great Dane");


// Solution 7
function Dog(breed) {
    this.breed = breed;
    this.bark = () => 'Woof';
}

var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");


// Solution 8
function Dog(breed) {
    this.breed = breed;
}

Dog.prototype.bark = function () {
    return "Woof";
};

let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");


// Solution 9
class Dog {
    constructor(breed) {
        this.breed = breed;
    }

    bark() {
        return `Woof`;
    }
}

let snoopy = new Dog(`Beagle`);
let scoobydoo = new Dog(`Great Dane`);


// Solution 10
scoobydoo = snoopy = { bark: String.bind(1, 'Woof') };


// Solution 11
var Dog = { bark: function () { return "Woof" } }
var scoobydoo = Object.create(Dog);
var snoopy = Object.create(Dog);


// Solution 12
function Dog(breed) {
    this.breed = breed;
}

const snoopy = new Dog("Beagle");

Dog.prototype.bark = function () {
    return "Woof";
};

var scoobydoo = new Dog("Great Dane");