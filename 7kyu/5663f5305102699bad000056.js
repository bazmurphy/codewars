// Maximum Length Difference

// You are given two arrays a1 and a2 of strings. 
// Each string is composed with letters from a to z. 
// Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
// Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

// Bash note:

// input : 2 strings with substrings separated by ,
// output: number as a string

function mxdiflg(a1, a2) {

    // console.log('a1:', a1, 'a2:', a2)

    if (!a1.length || !a2.length) {
        
        return -1

    } else {
        
        let a1min = a1.sort((a, b) => a.length - b.length)[0].length
        let a1max = a1.sort((a, b) => a.length - b.length)[a1.length - 1].length

        let a2min = a2.sort((a, b) => a.length - b.length)[0].length
        let a2max = a2.sort((a, b) => a.length - b.length)[a2.length - 1].length

        return Math.max(a1max - a2min, a2max - a1min);
    }

}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2));
// 13


// Solution 1
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}


// Solution 2
/*
function mxdiflg(a1, a2) {
  a1 = a1.sort(function(a,b){return a.length-b.length});
  a2 = a2.sort(function(a,b){return a.length-b.length});
  return a1.length * a2.length ? Math.max(
    Math.abs(a1[0].length - a2[a2.length-1].length),
    Math.abs(a2[0].length - a1[a1.length-1].length)
  ) : -1;
}
*/

function mxdiflg(a1, a2) {
    var max = -1;
    for (var A1 of a1)
        for (var A2 of a2)
            max = Math.max(max, Math.abs(A1.length - A2.length));
    return max;
}


// Solution 3
function mxdiflg(a1, a2) {
    const maxx = (x) => x.map(el => el.length)
    return a1.length === 0 || a2.length === 0 ? -1 : Math.max(Math.max(...maxx(a1)) - Math.min(...maxx(a2)), Math.max(...maxx(a2)) - Math.min(...maxx(a1)))
}


// Solution 4
function mxdiflg(a1, a2) {
    if (!a1.length || !a2.length) return -1;
    a1.sort((a, b) => a.length - b.length);
    a2.sort((a, b) => a.length - b.length)
    return Math.max(Math.abs(a1[0].length - a2[a2.length - 1].length), Math.abs(a2[0].length - a1[a1.length - 1].length));
}


// Solution 5
function mxdiflg(a1, a2) {
    const minmax = (minmax, x) => [Math.min(minmax[0], x.length), Math.max(minmax[1], x.length)];
    if (a1.length == 0 || a2.length == 0) return -1;
    let minmax1 = a1.reduce(minmax, [Infinity, -1]);
    let minmax2 = a2.reduce(minmax, [Infinity, -1]);
    return Math.max(minmax1[1] - minmax2[0], minmax2[1] - minmax1[0]);
}


// Solution 6
const byLen = arr => arr.map(v => v.length).sort((a, b) => a - b);
const mxdiflg = (a1, a2) => {
    a1 = byLen(a1), a2 = byLen(a2);
    let max = Math.max(
        Math.max(...a2) - Math.min(...a1),
        Math.max(...a1) - Math.min(...a2)
    );
    return Number.isFinite(max) ? max : -1;
};


// Solution 7
function mxdiflg(a1, a2) {
    return (a1 && a1.length && a2 && a2.length)
        ? Math.max(Math.abs(max(a1) - min(a2)), Math.abs(max(a2) - min(a1)))
        : -1;

    function max(a) {
        return a.reduce((b, c) => { return (b > c.length) ? b : c.length; }, 0);
    }

    function min(a) {
        return a.reduce((b, c) => { return (b < c.length) ? b : c.length; }, a[0].length);
    }
}


// Solution 8
const mxdiflg = (a1, a2) =>
    a1.reduce((pre, val) => Math.max(pre, a2.reduce((p, v) => Math.max(p, Math.abs(val.length - v.length)), -1)), -1);


// Solution 9
const mxdiflg = (a1, a2, c) => a1.reduce((res, x) => (a2.forEach(y => (c = Math.abs(x.length - y.length)) > res ? res = c : 0), res), -1)


// Solution 10
function mxdiflg(arr1, arr2) {
    if (arr1.length == 0 || arr2.length == 0) { return -1; };
    var diffA = maxLen(arr1) - minLen(arr2), diffB = maxLen(arr2) - minLen(arr1);
    return diffA > diffB ? diffA : diffB;
}

function maxLen(array) {
    return array.sort(function (a, b) { return b.length - a.length; })[0].length;
}

function minLen(array) {
    return array.sort(function (a, b) { return a.length - b.length; })[0].length;
}


// Solution 11
function mxdiflg(a1, a2) {
    return !a1.length || !a2.length ? -1 : Math.max(...a1.map(x => Math.max(...a2.map(y => Math.abs(y.length - x.length)))))
}


// Solution 12
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1

    const length1 = a1.map(str => str.length)
    const length2 = a2.map(str => str.length)

    return Math.max(
        Math.max(...length1) - Math.min(...length2),
        Math.max(...length2) - Math.min(...length1)
    )
}