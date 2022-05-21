// Count the Monkeys!

// You take your son to the forest to see the monkeys. 
// You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. 
// Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example:
// monkeyCount(10) 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) 
// [1]

function monkeyCount(n) {
    let finalArray = [];
    
    for (let i = 1; i <= n; i++) {
      finalArray.push(i);
    }
    
    return finalArray;
}

console.log((monkeyCount(5)))
// [1, 2, 3, 4, 5]
console.log((monkeyCount(3)));
// [1, 2, 3]
console.log((monkeyCount(9)));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log((monkeyCount(10)));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log((monkeyCount(20)));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// Solution 1
function monkeyCount(n) {
    var monkeys = [];
    for(var i=1; i<n+1; i++){
      monkeys.push(i);
    }
    return monkeys;
}


// Solution 2
function monkeyCount(n) {
    return Array.from({length:n}, (_,i)=>i+1)
}


// Solution 3
function monkeyCount(n) {
    for (var i = 0, arr = []; i < n; arr.push(++i));
    
    return arr;
}


// Solution 4
function monkeyCount(n) {
var num = [];
for(i=1;i<=n;i++) { 
    num.push(i);
}
return num;
}


// Solution 5
function monkeyCount(n) {
    return [...Array(n+1).keys()].slice(1);
}


// Solution 6
function monkeyCount(n) {
    return [...Array(n).keys()].map(a => a+1)
}

    
// Solution 7
function monkeyCount(n) {
    return Array.from(Array(n), (_,i)=>++i)
}