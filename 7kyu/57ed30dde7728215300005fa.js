// Bumps in the Road

// Your car is old, it breaks easily.
// The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! 
// Given a string showing either flat road("_") or bumps("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x) {

    let bumpCount = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'n') {
            bumpCount++;
        }
    }

    if (bumpCount <= 15) {
        return "Woohoo!";
    } else if (bumpCount > 15) {
        return 'Car Dead';
    }
    
}

console.log(bump("n"));
// "Woohoo!"
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));
// "Car Dead"
console.log(bump("______n___n_"));
// "Woohoo!"


// Solution 1
const bump = x => x.split('n').length > 16 ? "Car Dead" : "Woohoo!"


// Solution 2
function bump(x) {
    return (x.match(/n/g) || []).length > 15 ? "Car Dead" : "Woohoo!";
}


// Solution 3
const bump = x => x.split``.filter(e => e === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';


// Solution 4
function bump(x) {
    return x.match(new RegExp("n", "g")).length > 15 ? "Car Dead" : "Woohoo!";
}


// Solution 5
const bump = $ => ($.match(/n/g) || []).length <= 15 ? 'Woohoo!' : 'Car Dead'


// Solution 6
const bump = x => {
    let string = "";
    for (let count = 0; count < x.length; count++) {
        if (x[count] == 'n') {
            string += x[count];
        }
    }
    if (string.length > 15) {
        return 'Car Dead';
    } else {
        return 'Woohoo!'
    }
};


// Solution 7
function bump(str) {
    return str.replace(/_/g, "").length > 15 ? "Car Dead" : "Woohoo!";
}


// Solution 8
function bump(x) {
    x = x.match(/n/ig);
    return x ? (x.length > 15 ? "Car Dead" : "Woohoo!") : "Woohoo!";
}


// Solution 9
function bump(x) {
    let count = 0
    for (const i of x) {
        if (i === 'n') {
            count++
        }
    }
    if (count > 15) {
        return "Car Dead"
    }
    return "Woohoo!"
}


// Solution 10
const bump = (road, bumps = 0, limit = 15) => {
    for (let i = 0; i < road.length; i++) {
        if (road[i] === 'n') {
            bumps++;
            if (bumps > limit) return 'Car Dead';
        }
    }
    return 'Woohoo!';
}


// Solution 11
const bump = (road, bumps = 0, limit = 15) => {
    for (let i = 0; i < road.length; i++) {
        if (road[i] === 'n') {
            bumps++;
            if (bumps > limit) return 'Car Dead';
        }
    }
    return 'Woohoo!';
}


// Solution 12
const bump = x => --x.split(`n`).length > 15 ? `Car Dead` : `Woohoo!`;


// Solution 13
function bump(x) {
    return x.split`n`.length < 17 ? 'Woohoo!' : 'Car Dead'
}


// Solution 14
function bump(x) {
    const bumps = x.split("").filter(r => r === "n");
    return (bumps.length <= 15) ? "Woohoo!" : "Car Dead";
}