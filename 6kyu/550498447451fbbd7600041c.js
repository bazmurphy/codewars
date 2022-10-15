// Are they the "same" ?

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities(the multiplicity of a member is the number of times it appears). 
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.
// It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]

// Invalid arrays

// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

// comp(a, b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

// comp(a, b) returns false because in b 36100 is not the square of any number of a.
// Remarks

// a or b might be[] or { } (all languages except R, Shell).
// a or b might be nil or null or None or nothing(except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).

// If a or b are nil(or null or None, depending on the language), the problem doesn't make sense so return false.

// Note for C

// The two arrays have the same size(> 0) given as parameter in function comp.

function comp(array1, array2) {

    // console.log(array1, array2)

    if (array1 === null || array2 === null) {
        return false;
    }

    let arr1 = array1.sort((a, b) => a - b)
    let arr2 = array2.map(element => Math.sqrt(element)).sort((a, b) => a - b)
    // console.log(array1Sorted)
    // console.log(array2SortedRooted)

    return arr1.every((element, index) => element === arr2[index]);
 
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]));


// Solution 1
function comp(array1, array2) {
    if (array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}


// Solution 2
function comp(a, b) {
    return !!a && !!b && a.map(x => x * x).sort().join() == b.sort().join();
}


// Solution 3
const comp = (array1, array2) =>
    Array.isArray(array1) &&
    Array.isArray(array2) &&
    array1.every(item => {
        const index = array2.indexOf(Math.pow(item, 2))
        return index > -1 ? array2.splice(index, 1) : false
    })


// Solution 4
function comp(a, b) {
    if (!a || !b || a.length !== b.length) return false;
    return a.map(x => x * x).sort().toString() === b.sort().toString();
}


// Solution 5
function comp(a1, a2) {
    if (a1 == null || a2 == null) return false;
    a1 = a1.sort(function (a, b) { return b < a });
    a2 = a2.sort(function (a, b) { return b < a });
    for (var i in a1) if (Math.pow(a1[i], 2) != a2[i]) return false;
    return true;
}


// Solution 6
function comp(a1, a2) {
    return a2 != null && a1.map(x => x * x).sort().join('-') == a2.sort().join('-')
}


// Solution 7
function comp(arr1, arr2) {
    if (!arr1 || !arr2) return false;
    arr1.map(function (x) {
        arr2.map(function (y) {
            if (x * x == y) {
                const ind = arr2.indexOf(y);
                arr2.splice(ind, 1)
            }
        })
    })
    return arr2.length == 0
}


// Solution 8
function comp(array1, array2) {
    let arr1 = array1 ? array1.map(e => e * e).sort((a, b) => a - b) : 1;
    let arr2 = array2 ? array2.sort((a, b) => a - b).join('') : 1;
    return arr1.join('') == arr2;
}


// Solution 9
function comp(a, b) {

    try {
        var a1 = a.map(x => x * x).sort();
        b.sort();
    } catch (err) { return false; }

    return (a1.toString() == b.toString() ? true : false);

}


// Solution 10
function comp(a1, a2) {
    if (a2 === null || a1 === null) {
        return false
    }
    const a1maped = a1.map((e) => {
        return e * e
    })
    a2.sort(), a1maped.sort()
    return JSON.stringify(a2) === JSON.stringify(a1maped)

}


// Solution 11
function comp(array1, array2) {
    return !!array2 && !!array1 && array2.every(a => array1.some((b, i) => a === b * b && delete array1[i]))
}


// Solution 12
function comp(array1, array2) {
    if (array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    return array1.every((item, index) => item * item == array2[index]);
}