// Even odd disparity

// Given an array, return the difference between the count of even numbers and the count of odd numbers. 
// 0 will be considered an even number.

// For example:
// solve([0, 1, 2, 3]) = 0 because there are two even numbers and two odd numbers.Even - Odd = 2 - 2 = 0.  

// Let's now add two letters to the last example:

// solve([0, 1, 2, 3, 'a', 'b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters. 

// The input will be an array of lowercase letters and numbers only.

// In some languages(Haskell, C++, and others), input will be an array of strings:

// solve["0", "1", "2", "3", "a", "b"] = 0 

function solve(a) {
    let even = 0;
    let odd = 0;
    a.forEach(element => {
        if (typeof element === "number") {
            if (element % 2 === 0) {
                even++;
            } else { 
                odd++;
            }
    }});
    return even - odd;

    // attempting to do it all in a reduce - not finished
    // return a.reduce((acc, cur) => typeof cur === "number" ? cur % 2 === 0 ? acc + 1 : acc - 1, 0)

};

console.log(solve([0, 1, 2, 3]));
// 0
console.log(solve([0, 1, 2, 3, 'a', 'b']));
// 0
console.log(solve([0, 15, 'z', 16, 'm', 13, 14, 'c', 9, 10, 13, 'u', 4, 3]));
// 0
console.log(solve([13, 6, 8, 15, 4, 8, 13]));
// 1
console.log(solve([1, 'a', 17, 8, 'e', 3, 'i', 12, 1]));
// -2
console.log(solve([5, 15, 16, 10, 6, 4, 16, 't', 13, 'n', 14, 'k', 'n', 0, 'q', 'd', 7, 9]));
// 2


// // Solution 1
// function solve(a) {
//     return a.reduce(((x, y) => Number.isInteger(y) ? (y % 2 === 0 ? x + 1 : x - 1) : x), 0);
// }


// // Solution 2
// function solve(a) {
//     var count = 0;
//     for (var i = 0; i < a.length; ++i)
//         if (typeof a[i] == 'number') {
//             if (a[i] % 2 == 0) count++;
//             else count--;
//         }
//     return count;
// };


// // Solution 3
// function solve(a) {

//     let theEvens = a.filter(number => number % 2 == 0); // find even numbers
//     let theOdds = a.filter(number => number % 2 == 1); // find odd numbers
//     return theEvens.length - theOdds.length; //return number of evens minus number of odds

// };


// // Solution 4
// function solve(a){
//   let odd = 0, even = 0;
//   a.map(x => {
//     if(!isNaN(x)){
//       if(x % 2 === 0) {
//         even++
//       } else {
//         odd++
//       }
//     }
//   });
//   return even - odd;
// };


// // Solution 5
// let solve = a => a.filter(n => n % 2 === 0).length - a.filter(n => Math.abs(n % 2) === 1).length;


// // Solution 6
// const solve = a =>
//     a.reduce((pre, val) => pre + (val % 2 === 0) - (val % 2 === 1), 0);


// // Solution 7
// var solve = (a) => a.filter(e => typeof e === 'number').reduce((ac, el) => ac + (el % 2 ? - 1 : 1), 0);


// // Solution 8
// function solve(a) {
//     return a.filter(x => x % 2 === 0).length - a.filter(x => x % 2 === 1).length;
// };


// // Solution 9
// function solve(a) {
//     let newArray = a.filter(e => typeof (e) === "number");
//     let evenArr = [];
//     let oddArr = [];
//     newArray.forEach(n => {
//         if (n % 2 === 0) {
//             evenArr.push(n);
//         } else if (n % 2 !== 0) {
//             oddArr.push(n);
//         } else {
//             null
//         }
//     })

//     let evenN = evenArr.length
//     let oddN = oddArr.length
//     let result = ((evenN) - (oddN));
//     return result;
// };


// // Solution 10
// function solve(a) {
//     return a.reduce((acc, n) => {
//         if (!Number.isInteger(n)) {
//             return acc;
//         }

//         return acc + (n % 2 === 0 ? 1 : -1);
//     }, 0);
// }


// // Solution 11
// const solve = a => a.reduce((d, v) => isNaN(v) ? d : v % 2 ? --d : ++d, 0);


// // Solution 12
// function solve(a) {
//     let odds = a.filter((x, y) => (!isNaN(x) && x % 2 == 1)).length
//     let evens = a.filter((x, y) => (!isNaN(x) && x % 2 == 0)).length
//     return evens - odds
// };