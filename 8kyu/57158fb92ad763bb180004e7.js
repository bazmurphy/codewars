// Fix your code before the garden dies!

// You have an award - winning garden and every day the plants need exactly 40mm of water.
// You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day.
// Your jealous neighbour hacked your computer and filled your code with bugs.

// Your task is to debug the code before your plants die!

function rainAmount(mm) {
    if (mm > 40) {
        return `You need to give your plant ${ mm - 40}mm of water`;
    } else {
        return `Your plant has had more than enough water for today!`;
    }
}

console.log(rainAmount(100))
// "Your plant has had more than enough water for today!"
console.log(rainAmount(39))
// "You need to give your plant 1mm of water"


// Solution 1
function rainAmount(mm) {
    if (mm < 40)
        return "You need to give your plant " + (40 - mm) + "mm of water"
    return "Your plant has had more than enough water for today!"
}


// Solution 2
function rainAmount(mm) {
    if (mm < 40) {
        return "You need to give your plant " + (40 - mm) + "mm of water"
    } else {
        return "Your plant has had more than enough water for today!"
    }
}


// Solution 3
function rainAmount(mm) {
    return mm < 40 ? `You need to give your plant ${40 - mm}mm of water` : "Your plant has had more than enough water for today!"
}


// Solution 4
function rainAmount(mm) {
    if (mm < 40) {
        return `You need to give your plant ${40 - mm}mm of water`;
    } else {
        return "Your plant has had more than enough water for today!";
    }
}


// Solution 5
var rainAmount = r => r < 40 ? `You need to give your plant ${40 - r}mm of water` : 'Your plant has had more than enough water for today!';


// Solution 6
rainAmount = mm => mm < 40 ? "You need to give your plant " + (40 - mm) + "mm of water" : "Your plant has had more than enough water for today!"


// Solution 7
const rainAmount = m => m < 40 ? `You need to give your plant ${40 - m}mm of water` : `Your plant has had more than enough water for today!`;


// Solution 8
function rainAmount(mm) {
    if (mm < 40) {
        return "You need to give your plant " + (40 - mm) + "mm of water"
    } else {
        return "Your plant has had more than enough water for today!"
    };
}


// Solution 9
rainAmount = (mm) => mm < 40
    ? "You need to give your plant " + `${40 - mm}` + "mm of water"
    : "Your plant has had more than enough water for today!"


// Solution 10
function rainAmount(mm) {
    if (40 > mm) {
        return `You need to give your plant ${40 - mm}mm of water`
    }
    else {
        return "Your plant has had more than enough water for today!"
    };
}


// Solution 11
const rainAmount = rain => rain >= 40 ? `Your plant has had more than enough water for today!` : `You need to give your plant ${40 - rain}mm of water`


// Solution 12
const rainAmount = amount => amount < 40 ? 'You need to give your plant ' + (40 - amount) + 'mm of water' : 'Your plant has had more than enough water for today!';