// Sort the odd

// Task

// You will be given an array of numbers.
// You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples

// [7, 1]  => [1, 7]
// [5, 8, 6, 3, 4]  => [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {

    let odds = array.filter(element => element % 2 !== 0).sort((a,b) => a - b)
    // console.log(odds);

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            array[i] = odds.shift()
        }
    }

    return array;

}

console.log(sortArray([7, 1]));
// [1, 7]
console.log(sortArray([5, 8, 6, 3, 4]));
// [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
// [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
console.log(sortArray([5, 3, 2, 8, 1, 4]));
// [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0]));
// [1, 3, 5, 8, 0]


// Solution 1
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}


// Solution 2
function sortArray(array) {
    var odds = [];
    //loop, if it's odd, push to odds array
    for (var i = 0; i < array.length; ++i) {
        if (array[i] % 2 !== 0) {
            odds.push(array[i]);
        }
    }
    //sort odds from smallest to largest
    odds.sort(function (a, b) {
        return a - b;
    });

    //loop through array, replace any odd values with sorted odd values
    for (var j = 0; j < array.length; ++j) {
        if (array[j] % 2 !== 0) {
            array[j] = odds.shift();
        }
    }

    return array;
}


// Solution 3
function sortArray(array) {
    var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
    return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
}


// Solution 4
function sortArray(array) {
    let oddList = array.filter(num => num % 2).sort((a, b) => b - a);

    return array.map(num => {
        return num % 2 ? oddList.pop() : num;
    });
}


// Solution 5
function sortArray(array) {
    if (array.length == 0) {
        return array;
    }

    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i; j < array.length; j++) {
            if ((array[i] != 0) && (array[i] % 2 != 0) &&
                (array[j] != 0) && (array[j] % 2 != 0)) {
                if (array[i] > array[j]) {
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
    }

    return array;
}


// Solution 6
const sortArray = (array) => {
    let oddArr = array.filter(el => el % 2 !== 0).sort((a, b) => a - b);

    return array.map(el => el % 2 === 0 ? el : oddArr.shift());
};


// Solution 7
function sortArray(array) {
    const odds = array.filter(n => n & 1).sort((a, b) => a - b);
    return array.map(n => n & 1 ? odds.shift() : n);
}


// Solution 8
function sortArray(array) {
    var odd = array
        .filter(n => n % 2)
        .sort((a, b) => a - b);

    return array.map(n => n % 2 ? odd.shift() : n);
}


// Solution 9
function sortArray(array) {
    const odd = array.filter(el => el % 2).sort((a, b) => a - b);
    return array.map(el => el % 2 ? odd.shift() : el);
}


// Solution 10
sortArray = (a, b = a.filter(a => a % 2).sort((a, b) => a - b)) => a.map(a => a % 2 ? b.shift() : a)


// Solution 11
function sortArray(array) {
    let oddNumbers = [];

    if (array === []) {
        return array;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            oddNumbers.push(array[i]);
        }
    }

    let finalArray = oddNumbers.sort((a, b) => a - b);

    for (let j = 0; j < array.length; j++) {
        if (array[j] % 2 === 0) {
            finalArray.splice(j, 0, array[j]);
        }
    }

    return finalArray;
}


// Solution 12
function sortArray(array) {
    var result = [];
    function ifEven(num) {
        if (num % 2 === 0) { return true; }
        else { return false; }
    }


    var oddNumber = [];
    var even = [];

    function evenNumber(p, value) {
        this.p = p;
        this.value = value;
    }

    for (var i = 0; i < array.length; i++) {
        if (ifEven(array[i])) {
            var x = new evenNumber(i, array[i]);
            even.push(x);
        }
        else { result.push(array[i]) }
    }

    result.sort(function (a, b) {
        return a - b
    });
    function sortNumber(a, b) {
        return a.p - b.p
    }
    even.sort(sortNumber)


    for (var i = 0; i < even.length; i++) {
        result.splice(even[i].p, 0, even[i].value);
    }

    return result;


}