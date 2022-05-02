// N - th Power

// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non - negative number N.
// You should find the N - th power of the element in the array with the index N.
// If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3 ^ 2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is - 1.

function index(array, n) {
    return array[n] ? Math.pow(array[n], n) : - 1
}

console.log(index([1, 2, 3, 4], 2));
// 9
console.log(index([1, 3, 10, 100], 3));
// 1000000
console.log(index([1, 2], 3));
// -1
console.log(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9));
// 1
console.log(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 9));
// 512
console.log(index([29, 82, 45, 10], 3));
// 1000
console.log(index([6, 31], 3));
// -1
console.log(index([75, 68, 35, 61, 9, 36, 89, 0, 30], 10));
// -1


// Solution 1
const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;


// Solution 2
function index(array, n) {
    //your code here
    return array[n] ** n || -1;
}


// Solution 3
const index = (array, n) => array[n] ** n || -1; 


// Solution 4
function index(array, n) {
    return (array.length) > n ? Math.pow(array[n], n) : -1;
}


// Solution 5
function index(array, n) {
    return Math.pow(array[n], n) || -1;
}


// Solution 6
const index = (array, n) => array.length <= n ? -1 : array[n] ** n



// Solution 7
const index = (ns, k) => k in ns ? ns[k] ** k : -1; 


// Solution 8
const index = (a, i) => a.length > i ? Math.pow(a[i], i) : -1;


// Solution 9
function index(array, n) {
    var p = array.length;
    if (n < p) {
        for (i = 0; i < p; i++) {
            if (n == i) {
                return Math.pow(array[i], n);
            }
        }
    } else {
        return -1;
    }

}


// Solution 10
function index(aRRay, N) {
    return Math.pow(aRRay[N], N) === 0 ? 0 : Math.pow(aRRay[N], N) || -1
}


// Solution 11
function index(array, n) {
    for (let i = 0; i < array.length; i++) {
        if (i == n) {
            return Math.pow(array[i], n);
            break;
        }
    }
    return -1;
}


// Solution 12
function index(array, n) {
    const newNum = array[n];
    if (array[n] === undefined) {
        return -1
    }; return Math.pow(newNum, n);
}