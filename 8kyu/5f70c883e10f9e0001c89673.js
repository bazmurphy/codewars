// Gravity Flip

// If you've completed this kata already and want a bigger challenge, here's the 3D version

// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time.
// The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. 
// The i-th column contains a_i cubes. 
// At first, the gravity in the box is pulling the cubes downwards. 
// When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). 
// Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+

// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.
// Examples (input -> output:

// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

let flip = (d, a) => {
  
//   if (d === 'R') {
//     return a.sort((a, b) => a - b)
//   }
//   else if (d === 'L') {
//     return a.sort((a, b) => b - a)
//   }

    return d === 'R' ? a.sort((a, b) => a - b) : d === 'L' ? a.sort((a, b) => b - a) : 'Invalid Direction'

}

console.log(flip('R', [3, 2, 1, 2])); 
// [1, 2, 2, 3]
console.log(flip('L', [1, 4, 5, 3, 5]));
// [5, 5, 4, 3, 1])


// Solution 1
let flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);


// Solution 2
let flip = (d, a) => {
    if (d === 'R') return a.sort((a, b) => a - b);
    if (d === 'L') return a.sort((a, b) => b - a);
}


// Solution 3
let flip = (direction, arr) => {
    return arr.sort((a, b) => direction === 'R' ? a - b : b - a);
}


// Solution 4
let flip = (d, a) => d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)


// Solution 5
let flip = (d, a) => {
    let cmp = d == 'L' ? (x, y) => y - x : (x, y) => x - y;
    return a.slice().sort(cmp);
}


// Solution 6
let flip = (d, a) => {
    for (let i = 0; i < a.length; i++) {
        let t = false;
        for (let j = 0; j < a.length - 1; j++) {
            let num = a[j] - a[j + 1];
            if (num > 0) {
                let chache = a[j + 1];
                a[j + 1] = num + a[j + 1];
                a[j] = a[j] - num;
                t = true;
            }
        }
        if (!t) break;
    }
    return d == 'R' ? a : a.reverse();
}


// Solution 7
let flip = (direction, columns) => (
    [...columns].sort((A, Z) => {
        if (direction === 'R') return A - Z
        if (direction === 'L') return Z - A
    })
)


// Solution 8
let flip = (d, a) =>
    a.sort((a, b) => d === `R` ? a - b : b - a);


// Solution 9
let flip = (d, a) => {
    if (d == "R")
        a.sort((b, c) => b - c);
    else
        a.sort((b, c) => c - b);
    return a;
}


// Solution 10
let flip = (d, a) => d === 'L' ? a.sort((x, y) => y - x) : a.sort((x, y) => x - y)


// Solution 11
let flip = (d, a) => a.sort((a, b) => (a - b) * { R: 1, L: -1 }[d])


// Solution 12
let sorted = ns => ns.sort((a, b) => a - b);
let flip = (d, ns) => d == 'R' ? sorted(ns) : sorted(ns).reverse();