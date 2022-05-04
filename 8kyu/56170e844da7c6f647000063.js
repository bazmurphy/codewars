// Drink about

// Description:

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.

// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// Examples: (Input-- > Output)

// 13 -- > "drink toddy"
// 17 -- > "drink coke"
// 18 -- > "drink beer"
// 20 -- > "drink beer"
// 30 -- > "drink whisky"

function peopleWithAgeDrink(old) {

    let drink;

    if (old < 14) {
        drink = 'toddy'
    } else if (old < 18) {
        drink = 'coke'
    } else if (old < 21) {
        drink = 'beer'
    } else if (old >= 21) {
        drink = 'whisky'
    }

    return `drink ${drink}`

};

console.log(peopleWithAgeDrink(22));
// 'drink whisky'


// Solution 1
const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"


// Solution 2
function peopleWithAgeDrink(age) {
    if (age < 14)
        drink = 'toddy';
    else if (age < 18)
        drink = 'coke'
    else if (age < 21)
        drink = 'beer';
    else if (age => 21)
        drink = 'whisky';

    return 'drink ' + drink;
}


// Solution 3
const peopleWithAgeDrink = old => 'drink ' + (old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky')


// Solution 4
var peopleWithAgeDrink = function (old) {
    if (old >= 21) return 'drink whisky';
    if (old >= 18) return 'drink beer';
    if (old >= 14) return 'drink coke';
    return 'drink toddy';
};


// Solution 5
var peopleWithAgeDrink = function (old) {
    if (old < 14) {
        return "drink toddy";
    }
    else if (old < 18) {
        return "drink coke";
    }
    else if (old < 21) {
        return "drink beer";
    }
    else {
        return "drink whisky";
    }
};


// Solution 6
const peopleWithAgeDrink = old =>
    `drink ${old < 14 ? `toddy` : old < 18 ? `coke` : old < 21 ? `beer` : `whisky`}`;


// Solution 7
var drinkAbout = [
    { ageMin: 0, ageMax: 14, drink: 'toddy' },
    { ageMin: 14, ageMax: 18, drink: 'coke' },
    { ageMin: 18, ageMax: 21, drink: 'beer' },
    { ageMin: 21, ageMax: 999, drink: 'whisky' }];

var peopleWithAgeDrink = function (old) {
    return "drink " + drinkAbout.filter(a => a.ageMin <= old && a.ageMax > old)[0].drink;
};


// Solution 8
const peopleWithAgeDrink = (age) => {
    switch (true) {
        case (age >= 21): return 'drink whisky'
        case (age >= 18): return 'drink beer'
        case (age >= 14): return 'drink coke'
        default: return 'drink toddy'
    }
};


// Solution 9
var peopleWithAgeDrink = function (old) {
    var groups = [
        [14, "toddy"],
        [18, "coke"],
        [21, "beer"],
        [999, "whisky"]
    ];
    for (var i = 0; i < groups.length; i++) {
        var group = groups[i];
        if (old < group[0]) {
            return "drink " + group[1];
        }
    }
};


// Solution 10
const peopleWithAgeDrink = (old) => old < 14 ? "drink toddy" :
    old < 18 ? "drink coke" :
        old < 21 ? 'drink beer' : 'drink whisky';


// Solution 11
function peopleWithAgeDrink(old) {
    if (old < 14) return 'drink toddy'
    if (old < 18) return 'drink coke'
    if (old < 21) return 'drink beer'
    return 'drink whisky';
};


// Solution 12
var peopleWithAgeDrink = function (age) {
    return "drink " + (age < 14 ? "toddy" : (age < 18 ? "coke" : (age < 21 ? "beer" : "whisky")));
};