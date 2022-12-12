// Simple beads count

// Two red beads are placed between every two blue beads.There are N blue beads.After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement count_red_beads(n)(in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0. 

function countRedBeads(n) {
  if (n < 2) {
    return 0;
  } else {
    return (n - 1) * 2
  }
}

const countRedBeads = (n) => n < 2 ? 0 : (n - 1) * 2;

console.log(countRedBeads(0));
// 0
console.log(countRedBeads(1));
// 0
console.log(countRedBeads(3));
// 4
console.log(countRedBeads(5));
// 8


// Solution 1
function countRedBeads(n) {
    return n < 2 ? 0 : 2 * n - 2;
}


// Solution 2
const countRedBeads = n => ((n || 1) - 1) * 2


// Solution 3
const countRedBeads = n => n < 2 ? 0 : (n - 1) * 2;


// Solution 4
const countRedBeads = n =>
    n && --n * 2;


// Solution 5
const countRedBeads = ($) => $ < 2 ? 0 : ($ - 1) * 2


// Solution 6
function countRedBeads(n) {
    return n > 1 ? 2 * (n - 1) : 0
}


// Solution 7
function countRedBeads(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push('blueBead')
        if (i !== n - 1) {
            res.push('redBead')
            res.push('redBead')
        }

    }
    return res.filter(x => x === 'redBead').length
}


// Solution 8
function countRedBeads(n) {
    //your code here
    if (n === 1 || n === 0) {
        return 0;
    }
    else {
        return n + (n - 2);;
    }


}


// Solution 9
function countRedBeads(n) {
    if (n === 0 || n === 1) { return 0 }
    else {
        return n * 2 - 2;
    }
}


// Solution 10
function countRedBeads(n) {
    return n < 2 ? 0 : n * 2 - 2;
}


// Solution 11
function countRedBeads(n) {
    if (n < 2) return 0;
    return (n - 1) * 2;
}


// Solution 12
function countRedBeads(n) {
    return Math.max(0, 2 * (n - 1))
}