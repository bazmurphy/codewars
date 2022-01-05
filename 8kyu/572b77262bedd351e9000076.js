// pick a set of first elements

// Write a function to get the first elements of a sequence. 

// Passing a parameter n (default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence []

// Examples

var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];


// function first(arr, n = 1) {
    
//     let newArray = [];

//     if (n === 0) {
        
//         newArray.push(arr[0]);
//         return newArray;

//     } else {

//         for (let i = 0; i < n; i++) {
//             newArray.push(arr[i])
//         }

//         return newArray;
//     }

// }


function first(arr, n = 1) {

    return n === 0 ? [] : arr.slice(0, n)
    
    // if (n === 0) {
    //     return []
    // } else {             
    //     return arr.slice(0, n)
    // }

}

// Solution 1
function first(arr, n=1) {
    return arr.slice(0,n);
}

// Solution 2
const first = (arr, n = 1) => arr.slice(0, n)

// Solution 3
function first(arr, n) {
    return n === undefined ? arr.slice(0, 1) : arr.slice(0, n);
}

// Solution 4
function first(arr, n) {
    if(n == undefined) return arr.slice(0, 1);
    if(n == 0) return [];
    let newArr = [];
    if(n <= arr.length){
      for(let i = 0; i < n; i++){
        newArr.push(arr[i])
      } return newArr
    } return arr
}