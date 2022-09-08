// Find the missing element between two arrays

// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2

// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8

// The first array will always have at least one element.


function findMissing(arr1, arr2) {
   
    let arr1Sorted = arr1.sort()
    let arr2Sorted = arr2.sort()
    // console.log(arr1Sorted)
    // console.log(arr2Sorted)

    for (let i = 0; i < arr1Sorted.length; i++) {
        
        // console.log('arr1Sorted[i]', arr1Sorted[i], 'arr2Sorted[i]', arr2Sorted[i])

        if (arr1Sorted[i] === arr2Sorted[i]) {
            // console.log('The Same')
            continue;
        } else {
            // console.log('Missing!')
            return arr1Sorted[i]
        }

    }

}


console.log(findMissing([1, 2, 3], [1, 3]));
// 2
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));
// 8
console.log(findMissing([7], []));
// 7
console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]));
// 3
console.log(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]));
// 0


// Solution 1
function findMissing(arr1, arr2) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
 return arr1.reduce(reducer, 0) - arr2.reduce(reducer, 0);
}


// Solution 2
const findMissing = (arr1, arr2) => {
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] != arr2[i]) return arr1[i];
    }
}


// Solution 3
const sum = arr => arr.reduce((a, b) => a + b, 0);

const findMissing = (arr1, arr2) => sum(arr1) - sum(arr2);


// Solution 4
sum=x=>x.reduce((a,b)=>a+b,0)
find_missing=findMissing=(a,b)=>sum(a)-sum(b)


// Solution 5
function findMissing(arr1, arr2) {
    return arr1.reduce((a,b)=>a^b,0) ^ arr2.reduce((a,b)=>a^b,0)
}


// Solution 6
function findMissing(arr1, arr2) {
    arr1.sort();
    arr2.sort();
    
    for (var i = 0; i < arr1.length; i++) {
      if(arr1[i] != arr2[i]) {
        return arr1[i];
      }
    }
}


// Solution 7
const findMissing = (arr1, arr2) => arr1.concat(arr2).reduce((a, b) => a ^ b, 0);


// Solution 8
const findMissing = (arr1, arr2) =>
  arr1.reduce((pre, val) => pre + val) - arr2.reduce((pre, val) => pre + val, 0);


// Solution 9
function findMissing(arr1, arr2) {
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    for (var i=0; i<arr1.length; ++i)
      if (arr1[i]!=arr2[i])
        return arr1[i];
}


// Solution 10
function findMissing(arr1, arr2) {
    return arr1.sort().filter((e,i) => arr2.sort()[i] !== e)[0]
}