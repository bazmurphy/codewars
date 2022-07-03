// How many lightsabers do you own ?

// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.

// The only person who owns lightsabers is Zach, by the way.
// He owns 18, which is an awesome number of lightsabers.
// Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input-- > Output):

// "anyone else" -- > 0
// "Zach" -- > 18

function howManyLightsabersDoYouOwn(name) {
    if (name === 'Zach') {
        return 18;
    } else {
        return 0;
    }
}

console.log(howManyLightsabersDoYouOwn());
// 0
console.log(howManyLightsabersDoYouOwn("Adam"));
// 0
console.log(howManyLightsabersDoYouOwn("Zach"));
// 18


// Solution 1
function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0;
}


// Solution 2
var howManyLightsabersDoYouOwn = function (name) {
    return (name == "Zach") ? 18 : 0;
}


// Solution 3
let howManyLightsabersDoYouOwn = name => name == "Zach" ? 18 : 0;


// Solution 4
var howManyLightsabersDoYouOwn = function (name) {
    if (name === "Zach") {
        return 18;
    } else {
        return 0;
    }
}


// Solution 5
function howManyLightsabersDoYouOwn(person) {
    return person == "Zach" ? 18 : 0;
}


// Solution 6
const howManyLightsabersDoYouOwn = name => name === 'Zach' ? 18 : 0;


// Solution 7
const howManyLightsabersDoYouOwn = name =>
    (name === `Zach`) * 18;


// Solution 8
function howManyLightsabersDoYouOwn(R2D2_ListenOrders) {
    var R2D2_ListenOrders;
    var R2D2_Answer;
    var His_lightsabacollection;
    if (R2D2_ListenOrders == "Zach") {
        R2D2_Answer = "Bipipipi"
    };
    if (R2D2_Answer == "Bipipipi") {
        his_lightsabacollection = 18;
        return his_lightsabacollection
    }
    else {
        R2D2_Answer == "no beep"
        his_lightsabacollection = 0;
        return his_lightsabacollection;
    }
};


// Solution 9
function howManyLightsabersDoYouOwn(programmer) {
    return programmer == "Zach" ? 18 : 0;
}


// Solution 10
function howManyLightsabersDoYouOwn(name) {
    return (name == 'Zach') ? 18 : 0;
}


// Solution 11
const howManyLightsabersDoYouOwn = name => {
    return /Zach/i.test(name) ? 18 : 0;
};


// Solution 12
function howManyLightsabersDoYouOwn(name) {
    if (name === "Zach" || name === "zach") {
        return 18;
    } else {
        return 0;
    }
}