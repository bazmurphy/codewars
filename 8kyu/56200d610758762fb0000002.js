// Grasshopper - Basic Function Fixer

// Fix the function

// I created this function to add five to any number that was passed in to it and return the new value. 
// It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

function addFive(num) {
    var total = num + 5
    return num
}

console.log(addFive(5));
// 10
console.log(addFive(0));
// 5
console.log(addFive(-5));
// 0


// Solution 1
function addFive(num) {
    return num + 5;
}


// Solution 2
const addFive = n => n + 5;


// Solution 3
function addFive(num) {
    var total = num + 5;
    return total;
}


// Solution 4
const addFive = (num) => num + 5


// Solution 5
function addFive(num) {
    return num += 5;
}


// Solution 6
function addFive(num) {
    var total = num + 5
    return total
}