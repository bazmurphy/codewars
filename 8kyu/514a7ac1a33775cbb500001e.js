// Return to Sanity

// This function should return an object, but it's not doing what's intended.What's wrong?

function mystery() {
    var results = {sanity: 'Hello'};
    return results;
}

console.log(mystery());
// { sanity: 'Hello' }


// Solution 1
function mystery() {
    var results =
        { sanity: 'Hello' };
    return results;
}


// Solution 2
function mystery() {
    var result = { 'sanity': 'Hello' };
    return result;
}


// Solution 3
const mystery = () => ({ sanity: 'Hello' });


// Solution 4
var mystery = () => ({ sanity: 'Hello' });


// Solution 5
const mystery = _ => ({ sanity: 'Hello' })


// Solution 6
var mystery = () => Object({ sanity: 'Hello' })


// Solution 9
function mystery() {
    var results = { 'sanity': 'Hello' };
    return results;
}


// Solution 10
const mystery = function () { return { sanity: 'Hello' }; }


// Solution 11
const sanity = { sanity: 'Hello' };
const mystery = () => sanity;


// Solution 12
let mystery = () => {
    let results = { "sanity": "Hello" }
    return results
}