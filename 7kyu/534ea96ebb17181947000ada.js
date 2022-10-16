// Breaking chocolate problem

// Your task is to split the chocolate bar of given dimension n x m into small squares.Each square is of size 1x1 and unbreakable.Implement a function that will return minimum number of breaks needed.

// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

// If input data is invalid you should return 0(as in no breaks are needed if we do not have any chocolate to split). Input will always be a non - negative integer.


function breakChocolate(n, m) {
    // console.log('n:', n, 'm:', m)
    if (n === 0 || m === 0)
        return 0
    else {
        return (n * m - 1)
    }
}

console.log(breakChocolate(5, 5))
// 24
console.log(breakChocolate(1, 1))
// 0


// Solution 1
var breakChocolate = function (n, m) {
    return (n * m === 0) ? 0 : n * m - 1;
};


// Solution 2
var breakChocolate = function (n, m) {
    if (n === 0 || m === 0) return 0
    return n * m - 1;
};


// Solution 3
var breakChocolate = function (n, m) {
    return Math.max(0, m * n - 1);
};


// Solution 4
var breakChocolate = function (n, m) {
    return Math.max(n * m - 1, 0);
};


// Solution 5
var breakChocolate = function (n, m) { return n && m ? n * m - 1 : 0 };


// Solution 6
var breakChocolate = function (n, m) {
    // input is invalid if either input is less than 1
    if (n < 1 || m < 1) {
        return 0;
    }

    /* Some example cases to spot the pattern: 
    
    2 x 1  2 x 2   2 x 3     2 x 4       2 x 5         2 x 6           2 x 7     
      _     _ _    _ _ _    _ _ _ _    _ _ _ _ _    _ _ _ _ _ _    _ _ _ _ _ _ _ 
     |_|   |_|_|  |_|_|_|  |_|_|_|_|  |_|_|_|_|_|  |_|_|_|_|_|_|  |_|_|_|_|_|_|_|
     |_|   |_|_|  |_|_|_|  |_|_|_|_|  |_|_|_|_|_|  |_|_|_|_|_|_|  |_|_|_|_|_|_|_|
                                     
      1      3       5         7           9             11              13
   
   Minimum breaks = ( rows x columns ) - 1
      */
    return (m * n) - 1;
};


// Solution 7
var breakChocolate = function (n, m) {
    var slices = (n * m) - 1;

    if (slices < 0) slices = 0;

    return slices;
};


// Solution 8
var breakChocolate = ($, ﬂ) => $ < 1 || ﬂ < 1 ? 0 : $ * ﬂ - 1


// Solution 9
const breakChocolate = (n, m) => n + m === 0 ? 0 : (n * m) - 1;


// Solution 10
var breakChocolate = function (n, m) {
    return n * m ? (n * m) - 1 : 0;
};