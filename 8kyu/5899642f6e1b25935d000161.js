// Merge two sorted arrays into one

// You are given two sorted arrays that both only contain integers. 
// our task is to find a way to merge them into a single one, sorted in asc order. 
// Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. 
// If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. 
// Also arr1 and arr2 may have same integers. 
// Remove duplicated in the returned result.

// Examples (input -> output)
mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])  
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])  
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])  
// [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]


function mergeArrays(arr1, arr2) {

    newArray = [...arr1];
    // console.log('newArray before:', newArray)

    for (let i = 0; i < arr2.length; i++) {
        // console.log('arr2[i]', arr2[i])

        if ( newArray.indexOf(arr2[i]) === -1 ) {
            // console.log('new number', arr2[i])
            newArray.push(arr2[i])
        }

    }
    
    newArray = newArray.sort( (a,b) => a -b )
    // console.log('newArray after:', newArray)

    return newArray;

}

mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])  
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])  
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])  
// [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]


// Solution 1
function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}

// Solution 2
function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a,b)=>a-b)
}

// Solution 4
let mergeArrays = (a, b) => [...new Set([...a, ...b])].sort((a,b)=> a-b)

// Solution 5
function mergeArrays(arr1, arr2) {
    return Array.from(new Set([...arr1,...arr2])).sort((a,b)=>a-b);
}

// Solution 7
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => {
      return a - b;
    }).filter((el, index, arr) => {
      return arr.indexOf(el) === index;
    });
}

// Solution 8
function mergeArrays(arr1, arr2) {
    let res = [];
    arr1.concat(arr2).forEach(el => !res.includes(el) ? res.push(el) : 0);
    return res.sort( (a, b) => a - b);
}