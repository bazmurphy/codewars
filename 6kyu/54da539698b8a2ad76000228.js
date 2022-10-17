// Take a Ten Minutes Walk

// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones-- everytime you press the button it sends you an array of one - letter strings representing directions to walk(eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter(direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes(you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters('n', 's', 'e', or 'w' only).
// It will never give you an empty array(that's not a walk, that's standing still!).

function isValidWalk(walk) {

    if (walk.length !== 10) {

        return false;

    } else {

        let startXCoordinate = 0;
        let startYCoordinate = 0;
        let endXCoordinate = 0;
        let endYCoordinate = 0;

        for (let i = 0; i < walk.length; i++) {
            if (walk[i] === 'n') {
                endYCoordinate += 1;
            } else if (walk[i] === 's') {
                endYCoordinate -= 1;
            } else if (walk[i] === 'e') {
                endXCoordinate += 1;
            } else if (walk[i] === 'w') {
                endXCoordinate -= 1;
            }
        }

        // console.log([startXCoordinate, startYCoordinate], [endXCoordinate, endYCoordinate])
        
        if (startXCoordinate === endXCoordinate && startYCoordinate === endYCoordinate) {
            return true;
        } else {
            return false;
        }

    }
}


console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
// true
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
// false
console.log(isValidWalk(['w']));
// false
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
// false


// Solution 1
function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length

    for (var i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': dy--; break
            case 's': dy++; break
            case 'w': dx--; break
            case 'e': dx++; break
        }
    }

    return dt === 10 && dx === 0 && dy === 0
}


// Solution 2
function isValidWalk(walk) {
    function count(val) {
        return walk.filter(function (a) { return a == val; }).length;
    }
    return walk.length == 10 && count('n') == count('s') && count('w') == count('e');
}


// Solution 3
function isValidWalk(walk) {
    const north = walk.filter(item => { return item === "n" }).length;
    const south = walk.filter(item => { return item === "s" }).length;
    const east = walk.filter(item => { return item === "e" }).length;
    const west = walk.filter(item => { return item === "w" }).length;

    return walk.length === 10 && north === south && east === west;
}


// Solution 4
function isValidWalk(walk) {
    return walk.length == 10 && !walk.reduce(function (w, step) { return w + { "n": -1, "s": 1, "e": 99, "w": -99 }[step] }, 0)
}


// Solution 5
function isValidWalk(walk) {
    var res = { n: 0, w: 0, s: 0, e: 0 };
    walk.forEach((c) => res[c]++);
    return walk.length === 10 && res.n == res.s && res.e == res.w;
}


// Solution 6
const MOVEMENTS = {
    n({ x, y }) { return { x, y: y + 1 }; },
    s({ x, y }) { return { x, y: y - 1 }; },
    e({ x, y }) { return { x: x + 1, y }; },
    w({ x, y }) { return { x: x - 1, y }; },
};

function isValidWalk(walk) {
    return takes10MinutesToWalk(walk) &&
        returnsToStartingPoint(walk);
}

function takes10MinutesToWalk(walk) {
    return walk.length === 10;
}

function returnsToStartingPoint(walk) {
    return isOrigin(processWalk(walk));
}

function isOrigin(position) {
    return position.x === 0 && position.y === 0
}

function processWalk(walk = [], position = { x: 0, y: 0 }) {
    return walk.reduce((pos, direction) => MOVEMENTS[direction](pos), position);
}


// Solution 7
function isValidWalk(walk) {
    function count(c) { return walk.filter(function (v) { return v == c }).length }
    return walk.length == 10 && count('w') == count('e') && count('n') == count('s')
}


// Solution 8
function count(dir, walk) {
    return walk.filter(function (d) {
        return d == dir;
    }).length;
}

function isValidWalk(walk) {
    return walk.length === 10 &&
        count('n', walk) == count('s', walk) &&
        count('e', walk) == count('w', walk)
}


// Solution 9
function isValidWalk(walk) {
    return walk.filter(function (dir, i, arr) { return dir != arr[i + 1]; }).length === 10;
}


// Solution 10
function countDirections(walk) {
    var count = {
        n: 0, s: 0, w: 0, e: 0,

        total: function () {
            return this.n + this.s + this.w + this.e;
        },

        sameStartAndEndPoint: function () {
            return (this.n === this.s) && (this.w === this.e);
        }
    }

    walk.forEach(function (direction) {
        count[direction]++;
    });
    return count;
}

function isValidWalk(walk) {
    var count = countDirections(walk);
    return count.total() === 10 && count.sameStartAndEndPoint();
}


// Solution 11
function isValidWalk(walk) {
    if (walk.length === 10) {
        var ns = 0;
        var we = 0;

        walk.forEach(function (v, i, a) {
            if (v === 'n') { ns += 1; }
            if (v === 's') { ns -= 1; }
            if (v === 'w') { we += 1; }
            if (v === 'e') { we -= 1; }
        });

        if (ns === 0 && we === 0)
            return true
        else
            return false
    }
    else
        return false
}


// Solution 12
function isValidWalk(walk) {
    let total = 0;
    if (walk.length !== 10) return false;
    for (el of walk)
        el === 'n' || el === 'w' ? total++ : total--;
    return !total;
}