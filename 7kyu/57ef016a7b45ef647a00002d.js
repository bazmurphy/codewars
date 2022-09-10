// Homogenous arrays

// Challenge:

// Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

// Example:

// Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

// Addendum:

// Please keep in mind that for this kata, we assume that empty arrays are not homogenous.

// The resultant arrays should be in the order they were originally in and should not have its values changed.

// No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.

function filterHomogenous(arrays) {

    // create a new array to return
    let newArr = [];
    
    // loop through the outer array
    for (let i = 0; i < arrays.length; i++) {
        // console.log(arrays[i])

        // check if the inner array element is not an empty array
        if (arrays[i].length > 0) {

            // setup a flag
            let allTheSame = true;
            
            // loop through the inner array elements
            for (let j = 0; j < arrays[i].length; j++) {
                // console.log(arrays[i][j])

                // check the type of each element against the first element
                // if the same continue the loop, if different, set the flag to false, and break the loop
                if (typeof arrays[i][0] === typeof arrays[i][j]) {
                    // console.log("Same Type")
                    continue;
                } else {
                    // console.log("Different Type")
                    allTheSame = false;
                    break;
                }
            
            }
            
            // if the flag is true at the end of the loop, push the inner array to the final array
            if (allTheSame === true) {
                newArr.push(arrays[i])
            }

        }
    }

    // console.log('returning newArr')
    // return the new array
    return newArr;
}


console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));
// [[1, 5, 4], ['b']]
console.log(filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []]));
// [[123, 234, 432], ['', 'abc'], [''], ['', '1']]


// Solution 1
let filterHomogenous = a => a.filter(b => b.length > 0 && b.every(e => typeof e == typeof b[0]));


// Solution 2
function filterHomogenous(arr) {
    return arr.filter(subArr => subArr.length > 0 && subArr.every(val => typeof val === typeof subArr[0]));
}


// Solution 3
const filterHomogenous = arrays =>
  arrays.filter(val => val.length && val.every(v => typeof v === typeof val[0]));


// Solution 4
function filterHomogenous(arrays) {
    const homo = xs => xs.length > 0 && xs.every(y => typeof y === typeof xs[0])
    return arrays.filter(homo)
  }


// Solution 5
function filterHomogenous(arrays) {
    return arrays.filter(arr => {
      if (arr.length && arr.every(elem => typeof elem === 'number'))  return arr 
      if (arr.length && arr.every(elem => typeof elem === 'string'))  return arr
    })
}


// Solution 6
function filterHomogenous(arrays) {
    return arrays.filter(arr => isOneType(arr))
    
    function isOneType(array) {
      const count = {}
      for (const el of array) {
        if (!count[typeof el]) {
          count[typeof el] = 1
        } else {
          count[typeof el] += 1
        }
      }
      return Object.keys(count).length === 1
    }
}


// Solution 7
function filterHomogenous(arrays) {
    const notEmpty = (arr) => arr.length !== 0;
    const sameType = (arr) => arr.every(i => typeof i === typeof arr[0]);
    return arrays.filter(arr => notEmpty(arr) && sameType(arr));
}


// Solution 8
function filterHomogenous(arrays) {
    const filteredArr = arrays.filter(item => item.every((item, index, arr) => typeof item === typeof arr[0]));
    return filteredArr.filter(item => item.length !== 0);
}


// Solution 9
function filterHomogenous(arrays) {
    return arrays.filter(arr => arr.length && arr.reduce((type, i) => (type === typeof i || type === null) ? typeof i : false, null));
}


// Solution 10
let filterHomogenous =arrs=> arrs.filter(arr=> arr.length && arr.every((j)=> typeof j == typeof arr[0]))