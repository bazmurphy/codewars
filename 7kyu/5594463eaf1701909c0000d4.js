// Sum ALL the arrays!

// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.


function arraySum(arr) {

    // return arr.reduce((pV, cV) => pV + arraySum(cV), 0)

    // return arr.flat().reduce((pV, cV) => pV + cV)
    
    // return arr.reduce((acc, curVal) => { return acc.concat(curVal) }, []);

    return arr
        .join()
        .split(',')
        .map(Number)
        .reduce((p,c) => p + c)
    
}


let flattened = [];
function flatten(a, i) {
    if(a.length > i) {
        if(Array.isArray(a[i]))
            flatten(a[i], 0);
        else
            flattened.push(a[i]);
        flatten(a, i + 1);
    }
}

flatten([[0, 1], [2, 3], [4, 5]], 0);
console.log(flattened);


function flatten(arr) {
    return arr.reduce(function(a, b) {
      if (Array.isArray(b)) {
        return a.concat(flatten(b))
      }
      return a.concat(b)
    }, [])
}

const flatten = (ary) => ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])



console.log(arraySum([1, 2]))
// 3
console.log(arraySum([1, 2, 3]))
// 6
console.log(arraySum([1, 2, [3, 4]]))
// 6