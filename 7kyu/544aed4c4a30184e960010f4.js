// Find the divisors! 

// Create a function named divisors / Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. 
// If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"


function divisors(integer) {

    let newArr = [];

    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            // console.log(i)
            newArr.push(i)
        }
    }

    // if (newArr.length === 0) {
    //     return `${integer} is prime`
    // } else {   
    //     return newArr;
    // }

    return newArr.length === 0 ? `${integer} is prime` : newArr
}


console.log(divisors(15));
// [3,5]
console.log(divisors(12)); 
// [2,3,4,6]
console.log(divisors(25)); 
// [5]
console.log(divisors(13)); 
//"13 is prime"


// Solution 1
function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
};


// Solution 2
function divisors(integer) {
    var divs = [];

    for (var i = 2; i < integer; i++) {
        if (integer % i === 0) {
            divs.push(i);
        }
    }

    return divs.length ? divs : integer + ' is prime';
};


// Solution 3
function divisors(int) {
    const arr = Array.from({ length: int - 1 }, (_, i) => i + 1).slice(1).filter(el => int % el === 0)
    return arr.length ? arr : `${int} is prime`;
};


// Solution 4
function divisors(integer) {
    for (var div = [], i = 2; i < integer; i++) if (integer % i == 0) div.push(i);
    return div.length > 0 ? div : integer + " is prime";
}


// Solution 5
function divisors(integer) {
    var divisors = [...Array(integer).keys()].slice(2, integer).filter(div => integer % div == 0);
    return divisors.length > 0 ? divisors : integer + ' is prime';
};


// Solution 6
function divisors(x) {
    var result = [];
    for (var a = 2; a * a <= x; ++a) {
        if (x % a == 0) {
            var b = x / a;
            result.push(a);
            if (b != a) {
                result.push(b);
            }
        }
    }
    if (result.length == 0) {
        return x + ' is prime';
    }
    result.sort(function (a, b) {
        return a - b;
    });
    return result;
};


// Solution 7
function divisors(integer) {
    var divisors = [];
    for (var i = 2; i < integer - 1; i++) {
        if (integer % i === 0) divisors.push(i);
    }
    if (divisors.length === 0) return '' + integer + ' is prime';
    return divisors;
}


// Solution 8
function divisors(integer) {
    let d = [];
    for (i = 2; i <= Math.floor(Math.sqrt(integer)); i++) {
        let n = integer / i;
        if (n == Math.floor(n)) {
            d.push(i);
            d.push(n);
        };
    };
    return d.length === 0 ? `${integer} is prime` : d.sort((a, b) => a - b);
};


// Solution 9
function divisors(integer) {
    for (var res = [], i = 2; i < integer - 1; i++) {
        if (integer % i == 0) res.push(i)
    }

    return res.length ? res : integer + ' is prime'
}


// Solution 10
function divisors(integer) {
    var arr = [];

    for (var i = 2; i < integer; i++) {
        if (integer % i) continue;
        arr.push(i);
    }

    return arr.length ? arr : (integer + " is prime");
};