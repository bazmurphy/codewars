// Find the next perfect square!

// You might know some pretty large perfect squares.But what about the NEXT one ?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then - 1 should be returned.You may assume the parameter is non - negative.

// Examples: (Input-- > Output)

// 121 -- > 144
// 625 -- > 676
// 114 -- > -1 since 114 is not a perfect square

function findNextSquare(sq) {

    // console.log(sq)
    // console.log(Math.sqrt(sq))
    // console.log(Number.isInteger(Math.sqrt(sq)))
    // console.log((Math.sqrt(sq) + 1))
    // console.log(Math.pow((Math.sqrt(sq) + 1), 2))

    // if (Number.isInteger(Math.sqrt(sq))) {
    //     console.log('yes, perfect square ')
    //     return Math.pow((Math.sqrt(sq) + 1), 2);
    // } else {
    //     console.log('no, not perfect square')
    //     return -1;
    // }

    return Number.isInteger(Math.sqrt(sq)) ? Math.pow((Math.sqrt(sq) + 1), 2) : -1

}


console.log(findNextSquare(121));
// 144
console.log(findNextSquare(625));
// 676
console.log(findNextSquare(319225));
// 320356
console.log(findNextSquare(15241383936))
// 15241630849
console.log(findNextSquare(155))
// -1
console.log(findNextSquare(342786627))
// -1


// Solution 1
function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}


// Solution 2
function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    if (Math.round(number) === number) {
        return Math.pow(++number, 2)
    }
    return -1;
}


// Solution 3
function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}


// Solution 4
function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    var root = Math.sqrt(sq);
    if (Number.isInteger(root)) {
        return Math.pow(root + 1, 2);
    } else {
        return -1;
    }
}


// Solution 5
function findNextSquare(sq) {
    let r = Math.sqrt(sq)
    return r % 1 ? -1 : ++r * r
}


// Solution 6
function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq);
    return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}


// Solution 7
const findNextSquare = sq => (sq = Math.sqrt(sq)) % 1 ? -1 : Math.pow(++sq, 2)


// Solution 8
function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root - Math.floor(root) === 0 ? Math.pow(root + 1, 2) : -1;
}


// Solution 9
function findNextSquare(sq) {
    var n = Math.sqrt(sq);
    return Number.isInteger(n) ? (n + 1) * (n + 1) : -1
}


// Solution 10
function findNextSquare(sq) {
    return !(Math.sqrt(sq) % 1) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}