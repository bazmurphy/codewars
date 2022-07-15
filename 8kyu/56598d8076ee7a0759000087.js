// Tip Calculator

// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%

// The rating is case insensitive (so "great" = "GREAT"). 
// If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#

// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {

    // console.log(amount, rating)

    rating = rating.toLowerCase()

    let ratings = {
        'terrible': 0 / 100,
        'poor': 5 / 100,
        'good': 10 / 100,
        'great': 15 / 100,
        'excellent': 20 / 100,
    }

    return ratings.hasOwnProperty(rating) ? Math.ceil(ratings[rating] * amount) : 'Rating not recognised';

}

console.log(calculateTip(20, "Excellent"));
// 4
console.log(calculateTip(26.95, "good"));
// 3
console.log(calculateTip(10, "Terrible"));
// 0


// Solution 1
const TIPS = {
    "terrible": 0.0,
    "poor": 0.05,
    "good": 0.1,
    "great": 0.15,
    "excellent": 0.2
};

const calculateTip = (amount, rating) => {
    rating = rating.toLowerCase();

    return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
};


// Solution 2
function calculateTip(amount, rating) {
    switch (rating.toLowerCase()) {
        case "terrible": return 0;
        case "poor": return Math.ceil(amount * 0.05);
        case "good": return Math.ceil(amount * 0.1);
        case "great": return Math.ceil(amount * 0.15);
        case "excellent": return Math.ceil(amount * 0.2);
        default: return "Rating not recognised";
    }
}


// Solution 3
function calculateTip(amount, rating) {

    var tips = {
        'terrible': 0,
        'poor': .05,
        'good': .1,
        'great': .15,
        'excellent': .2
    }

    rating = rating.toLowerCase();

    return rating in tips ? Math.ceil(amount * tips[rating]) : "Rating not recognised";

}


// Solution 4
function calculateTip(amount, rating) {
    switch (rating.toLowerCase()) {
        case "terrible":
            return 0;
            break;
        case "poor":
            return Math.ceil(amount * 0.05);
            break;
        case "good":
            return Math.ceil(amount * 0.10);
            break;
        case "great":
            return Math.ceil(amount * 0.15);
            break;
        case "excellent":
            return Math.ceil(amount * 0.20);
            break;
        default:
            return "Rating not recognised"
    }
}


// Solution 5
let calculateTip = (a, r) => {
    const i = ['terrible', 'poor', 'good', 'great', 'excellent'].indexOf(r.toLowerCase());
    return i === -1 ? "Rating not recognised" : Math.ceil(i * a * .05);
}


// Solution 6
function calculateTip(amount, rating) {
    var multiplier = 0;
    switch (rating.toLowerCase()) {
        case "terrible":
            break;
        case "poor":
            multiplier = .05;
            break;
        case "good":
            multiplier = .1;
            break;
        case "great":
            multiplier = .15;
            break;
        case "excellent":
            multiplier = .2;
            break;
        default:
            return "Rating not recognised";
    }
    return Math.ceil(amount * multiplier);
}


// Solution 7
const calculateTip = (amount, rating) =>
    (val => val < 0 ? `Rating not recognised` : Math.ceil(amount * val * .05))
        ([`terrible`, `poor`, `good`, `great`, `excellent`].indexOf(rating.toLowerCase()));


// Solution 8
function calculateTip(amount, rating) {
    if (rating.toLowerCase() == "terrible") {
        return 0;
    } else if (rating.toLowerCase() == "poor") {
        return Math.ceil((amount / 100) * 5);
    } else if (rating.toLowerCase() == "good") {
        return Math.ceil((amount / 100) * 10);
    } else if (rating.toLowerCase() == "great") {
        return Math.ceil((amount / 100) * 15);
    } else if (rating.toLowerCase() == "excellent") {
        return Math.ceil((amount / 100) * 20);
    } else {
        return "Rating not recognised";
    }
}


// Solution 9
function calculateTip(amount, rating) {
    var index = ['terrible', 'poor', 'good', 'great', 'excellent'].indexOf(rating.toLowerCase());
    return index != -1 ? Math.ceil(amount * index * 0.05) : "Rating not recognised";
}


// Solution 10
const calculateTip = (amount, rating) => {
    let tip = {
        terrible: 0,
        poor: .05,
        good: .1,
        great: .15,
        excellent: .2,
    }[rating.toLowerCase()];

    return typeof tip === 'undefined'
        ? 'Rating not recognised'
        : Math.ceil(amount * tip);
};


// Solution 11
const calculateTip = (amount, rating) => {
    let ratings = [['terrible', 0], ['poor', 0.05], ['good', 0.1], ['great', 0.15], ['excellent', 0.2]];
    let matchedRating = ratings.filter(r => new RegExp('^' + r[0] + '$', 'i').test(rating));

    if (!matchedRating.length) return 'Rating not recognised';

    return Math.ceil(amount * matchedRating[0][1]);
}


// Solution 12
let calculateTip = (a, r) => {
    r = r.toLowerCase();
    return r == 'terrible' ? 0 : r == 'poor' ? Math.ceil(a * .05) : r == 'good' ? Math.ceil(a * .1) : r == 'great' ? Math.ceil(a * .15) : r == 'excellent' ? Math.ceil(a * .2) : "Rating not recognised";
}