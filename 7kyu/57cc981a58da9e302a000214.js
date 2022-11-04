// Small enough ? - Beginner

// You will be given an array and a limit value.
// You must check that all values in the array are below or equal to the limit value.
// If they are, return true.
// Else, return false.

// You can assume all values in the array are numbers.


function smallEnough(a, limit) {
    return a.every((element) => element <= limit)
}

console.log(smallEnough([66, 101], 200));
// true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
// false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));
// true
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));
// true


// Solution 1
function smallEnough(a, limit) {
    return Math.max(...a) <= limit
}


// Solution 2
smallEnough = (a, l) => a.every(e => e <= l)


// Solution 3
function smallEnough(a, limit) {
    return a.every(x => x <= limit);
}


// Solution 4
function smallEnough(a, limit) {
    for (var i of a) {
        if (i > limit)
            return false;
    }
    return true;
}


// Solution 5
const smallEnough = ($, limit) => $.every(el => el <= limit)


// Solution 6
function smallEnough(array, limit) {
    return array.filter((value) => value > limit).length > 0 ? false : true;
}


// Solution 7
function smallEnough(a, limit) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) {
            return false
        }
    }
    return true

}


// Solution 8
function smallEnough(a, limit) {
    var counter = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] <= limit) {
            counter++;
        };
    };
    if (counter === a.length) {
        return true;
    } else {
        return false;
    };
};


// Solution 9
const smallEnough = (a, l) => a.every(b => b <= l);


// Solution 10
function smallEnough(a, limit) {
    var arr = [];
    var test = a.filter(function (x) {
        if (x <= limit) {
            arr.push(x);
        }
    });

    if (arr.length === a.length) {
        return true;
    } else {
        return false;
    }
};


// Solution 11
function smallEnough(a, l) {
    return a.every(_ => _ <= l);
}


// Solution 12
const smallEnough = (a, l) => a.every(e => e <= l);