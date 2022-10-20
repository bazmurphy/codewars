// Sort Numbers

// Finish the solution so that it sorts the passed in array of numbers.
// If the function passes in an empty array or null / nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums) {
    if (nums === null || nums === undefined || nums === []) {
        return []
    } else {
        return nums.sort((a,b) => a - b)
    }
}

console.log(solution([1, 2, 10, 50, 5])); 
// [1,2,5,10,50]
console.log(solution([1, 2, 3, 10, 5]));
// [1, 2, 3, 5, 10])
console.log(solution(null));
// [])
console.log(solution([]));
// [])
console.log(solution([20, 2, 10]));
// [2, 10, 20])
console.log(solution([2, 20, 10]));
// [2, 10, 20])


// Solution 1
function solution(nums) {
    return (nums || []).sort(function (a, b) {
        return a - b
    });
}


// Solution 2
function solution(nums) {
    return nums !== null ? nums.sort(function (a, b) { return a - b }) : [];
}


// Solution 3
function solution(nums) {
    return nums ? nums.sort(function (a, b) { return a - b; }) : [];
}


// Solution 4
let solution = (nums) => (nums || []).sort((a, b) => (a - b))


// Solution 5
function solution(arreglo) {
    if (arreglo == null || arreglo.length === 0) {
        return arreglo = [];

    }
    var n, aux;
    n = arreglo.length;
    for (let k = 1; k < n; k++) {
        for (let i = 0; i < (n - k); i++) {
            if (arreglo[i] > arreglo[i + 1]) {
                aux = arreglo[i];
                arreglo[i] = arreglo[i + 1];
                arreglo[i + 1] = aux;
            }
        }
    }
    return arreglo;
}


// Solution 6
const solution = nums =>
    nums ?
        nums.sort((a, b) => a - b) :
        [];


// Solution 7
function solution(nums) {
    if (nums === null)
        return [];
    return nums.sort(sortNum);
}

function sortNum(a, b) {
    return a - b;
}


// Solution 8
function solution(nums) {
    if (nums === null) {
        return [];
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            let newNum = nums[i]
            nums[i] = nums[i + 1];
            nums[i + 1] = newNum
            solution(nums);
        }
    }
    return nums;
}


// Solution 9
function solution(nums) {
    return nums ? nums.sort((a, b) => a - b) : []
}


// Solution 10
const solution = (nums, arr = nums === null ? [] : nums) => arr.sort((a, b) => a - b)


// Solution 11
function solution(nums, n = nums === null ? [] : nums) {
    return n.sort((a, b) => a - b)
}


// Solution 12
function solution(nums) {
    if (!nums) return [];
    return nums.sort((a, z) => a - z);
}