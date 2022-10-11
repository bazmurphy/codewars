// Find The Parity Outlier

// You are given an array(which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.


// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11(the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160(the only even number)


function findOutlier(integers) {

    // let evens = [];
    // let odds = [];

    // for (let i = 0; i < integers.length; i++) {
    //     if (integers[i] % 2 === 0) {
    //         evens.push(integers[i]);
    //     } else if (integers[i] % 2 !== 0) {
    //         odds.push(integers[i]);
    //     }
    // }

    // // console.log(evens);
    // // console.log(odds);

    // if (odds.length > evens.length) {
    //     return evens[0];
    // } else {
    //     return odds[0];
    // }

    let evens = integers.filter(element => element % 2 === 0)
    let odds = integers.filter(element => element % 2 !== 0)

    // console.log(evens)
    // console.log(odds)

    return odds.length > evens.length ? evens[0] :odds[0];

}


console.log(findOutlier([0, 1, 2]));
// 1
console.log(findOutlier([1, 2, 3]));
// 2
console.log(findOutlier([2, 6, 8, 10, 3]));
// 3
console.log(findOutlier([0, 0, 3, 0, 0]));
// 3
console.log(findOutlier([1, 1, 0, 1, 1]));
// 0



// Solution 1
function findOutlier(int) {
    var even = int.filter(a => a % 2 == 0);
    var odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}


// Solution 2
function findOutlier(integers) {
    return integers.slice(0, 3).filter(even).length >= 2 ? integers.find(odd) : integers.find(even);
}
function even(num) {
    return (num % 2 == 0);
}
function odd(num) {
    return !even(num)
}


// Solution 3
function findOutlier(integers) {
    const even = integers.filter(int => int % 2 === 0);
    const odd = integers.filter(int => int % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
}


// Solution 4
function findOutlier(integers) {
    var res;
    var odd = integers.filter(function (e) {
        if (e % 2 != 0) {
            res = e;
        };
        return e % 2 == 0;
    });

    return odd.length > 1 ? res : odd.pop();
}


// Solution 5
function findOutlier(integers) {
    var len = integers.length;
    var first = Math.abs(integers[0]) % 2,
        second = Math.abs(integers[1]) % 2,
        third = Math.abs(integers[2]) % 2,
        base = (first + second + third) >= 2 ? 1 : 0;

    for (var i = 0; i < len; i++) {
        if (Math.abs(integers[i] % 2) != base) {
            return integers[i];
        }
    }
};


// Solution 6
function findOutlier(int) {
    var evens = [], odds = [];
    int.forEach(function (num) { num % 2 != 0 ? odds.push(num) : evens.push(num) });
    return odds.length > 1 ? evens[0] : odds[0];
}


// Solution 7
function findOutlier(arr) {
    var even = arr.filter(function (num) {
        return num % 2 === 0;
    });
    var odd = arr.filter(function (num) {
        return num % 2 !== 0;
    });
    return even.length > odd.length ? odd[0] : even[0];
}


// Solution 8
function findOutlier(ints) {
    return ints.slice(0, 3).reduce((a, b) => b % 2 === 0 ? a : a + 1, 0) >= 2 ?
        ints.find(i => i % 2 === 0) : ints.find(i => i % 2 !== 0);
}


// Solution 9
function findOutlier(integers) {
    let test = Math.abs(integers[0]) % 2 + Math.abs(integers[1]) % 2 + Math.abs(integers[2]) % 2;
    let outlierIsOdd = test >= 2 ? false : true;
    return integers.filter(function (e) {
        return (Math.abs(e) % 2 === +outlierIsOdd);
    })[0];
}


// Solution 10
const findOutlier = integers => {
    var evens, odds, odd;
    for (var i = integers.length; i--;) {
        let next = integers[i];
        odd = next & 1;
        if ([evens, odds].indexOf(undefined) == -1)
            return odd ? evens : odds;
        odd ?
            odds = next :
            evens = next;
    }
    return odd ? odds : evens;
}


// Solution 11
function findOutlier(integers) {
    var odds = integers.filter((e) => e & 1);

    var evens = integers.filter((e) => !(e & 1));

    var result = (odds.length < evens.length) ? odds.pop() : evens.pop();

    return result;
}


// Solution 12
function findOutlier(integers) {
    var i, len,
        odd = true;
    if (integers[0] & 1 && integers[1] & 1) {
        odd = false
    }
    if (odd && integers[2] & 1 && integers[1] & 1) {
        odd = false
    }
    if (odd && integers[2] & 1 && integers[0] & 1) {
        odd = false
    }

    for (i = 0, len = integers.length; i < len; i++) {
        if (odd) {
            if (integers[i] & 1)
                return integers[i];
        }
        else {
            if (!(integers[i] & 1))
                return integers[i];
        }
    }
}