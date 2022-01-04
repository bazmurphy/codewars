// Filling an array (part 1)

// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:
// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

// const arr = N => [ /* the numbers 0 to N-1 */ ];

function arr(n = 0) {

    let giveBackArray = []; 
        
    for (i = 0; i < n; i++) {
        giveBackArray.push(i)
    }
    
    return giveBackArray;
}

console.log(arr())
// []
console.log(arr(1))
// [ 0 ]
console.log(arr(2))
// [ 0, 1 ]
console.log(arr(3))
// [ 0, 1, 2 ]
console.log(arr(4))
// [ 0, 1, 2, 3 ]
console.log(arr(5))
// [ 0, 1, 2, 3, 4 ]


// Solution 1
function arr(n){
    var newArr = [];
    for(var i = 0; i < n; i++){
      newArr.push(i);
    }
    return newArr;
}

// Solution 2
const arr = n => Array.from({length: n}, (_, i) => i);


// Solution 3
arr = n => n ? [...Array(n).keys()] : [];


// Solution 5
const arr = (n = 0) => [...Array(n).keys()]


// Solution 6
const arr = N => [...Array(N||0).keys()];