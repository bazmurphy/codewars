// Convert a Boolean to a String

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
    return b.toString()
}

console.log(booleanToString(true)); 
// "true",
console.log(booleanToString(false)); 
// "false"


// Solution 1
function booleanToString(b){
    return b.toString();
}

// Solution 2
function booleanToString(b){
    return b ? 'true' : 'false';
}

// Solution 3
function booleanToString(b){
    return String(b);
}

// Solution 4
function booleanToString(b){
    return `${b}`
}