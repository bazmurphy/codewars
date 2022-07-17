// Are arrow functions odd ?

// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []


function odds(values) {
    return values.filter( element => element % 2 !== 0 );
}

const odds = (values) => values.filter(e => e % 2 !== 0);

console.log(odds([]));
// [], "Should handle empty array")
console.log(odds([2, 4, 6]));
// [], "Should handle array with even numbers only")
console.log(odds([1, 3, 5]));
// [1, 3, 5], "Should handle array with odd numbers only")
console.log(odds([1, 2, 3, 4, 5, 6]));
// [1, 3, 5], "Should handle mixed array")


// Solution 1
function odds(values) {
    return values.filter(v => v % 2);
}


// Solution 2
var odds = (values) => values.filter(v => v % 2);


// Solution 3
function odds(values) {
    return values.filter(x => x & 1)
}


// Solution 4
const odds = values => values.filter(n => n & 1);


// Solution 5
const odds = values => values.filter(n => n % 2 !== 0);


// Solution 6
var odds = odd => odd.filter(e => e % 2 != 0)


// Solution 7
function odds(values) {
    var result = [];
    for (var i = 0; i < values.length; i++) {
        if (values[i] % 2 !== 0) {
            result.push(values[i]);
        }
    }
    return result;
}


// Solution 8
const odds = (values) => values.filter((v) => v & 1)


// Solution 9
const odds = values => values.filter(x => x & 1);


// Solution 10
function odds(values) {
    return values.filter(x => x % 2);
}


// Solution 11
var odds = vv => vv.filter(v => v % 2);


// Solution 12
const odds = values => values.filter(v => v % 2);