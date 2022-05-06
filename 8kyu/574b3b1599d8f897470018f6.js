// What's the real floor?

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor(due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. 
// In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements(negatives) stay the same as the universal level.

// More information here

// Examples

// 1  => 0
// 0  => 0
// 5  => 4
// 15  => 13
// - 3  => -3

function getRealFloor(n) {
    if (n > 13) {
        return n - 2;
    } else if (n > 0) {
        return n - 1;
    } else {
        return n;
    }
}

console.log(getRealFloor(1), 0);
console.log(getRealFloor(5), 4);
console.log(getRealFloor(15), 13);


// Solution 1
function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}


// Solution 2
function getRealFloor(n) {
    // Less than 1, return n
    if (n <= 0) return n;

    return n - (n >= 13 ? 2 : 1);
}


// Solution 3
const getRealFloor = n => {
    if (n >= 13) return n - 2
    if (n > 0) return n - 1
    return n
}


// Solution 4
const getRealFloor = n =>
    n > 0 ? --n - (n >= 13) : n;


// Solution 5
getRealFloor = n => n <= 0 ? n : n < 13 ? n - 1 : n - 2;


// Solution 6
function getRealFloor(n) {
    return n > 13 ? n - 2 : n - (n >= 1);
}


// Solution 7
const getRealFloor = (n) => (n <= 0) ? n : (n < 13) ? n - 1 : n - 2;


// Solution 8
function getRealFloor(n) {
    if (n === 0 || n === 1) {
        return 0;
    } else if (n > 1 && n < 13) {
        return n - 1;
    } else if (n > 13) {
        return n - 2
    } else if (n < 0) {
        return -Math.abs(n);
    }
}


// Solution 9
function getRealFloor(n) {
    return n < 1 ? n : n < 13 ? n - 1 : n - 2
}


// Solution 10
getRealFloor = Q => Q - (0 < Q) - (12 < Q)


// Solution 11
function getRealFloor(n) {

    return n <= 0 ? n : (n < 13) ? n - 1 : n - 2

}


// Solution 12
function getRealFloor(n) {
    return n > 0 ? n - 1 - (n > 12) : n
}