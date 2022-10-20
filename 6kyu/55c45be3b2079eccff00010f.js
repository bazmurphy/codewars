// Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {

    let numbers = ['1','2','3','4','5','6','7','8','9'];

    let arr = words.split(" ");
    
    // console.log(arr);

    let output = {};

    for (let i = 0; i < arr.length; i++) {

        // console.log(arr[i]);

        for (let j = 0; j < arr[i].length; j++) {

            // console.log(arr[i][j]);

            if (numbers.indexOf(arr[i][j]) !== -1) {

                // console.log(numbers.indexOf(arr[i][j]));
                output[(numbers.indexOf(arr[i][j]))] = arr[i];

            }
        }

    }

    return Object.values(output).join(" ");

}

console.log(order("is2 Thi1s T4est 3a"));
// "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
// "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order(""));
// "", "empty input should return empty string"


// Solution 1
function order(words) {

    return words.split(' ').sort(function (a, b) {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}    


// Solution 2
var reg = /\d/;

function order(words) {
    return words.split(' ').sort(comparator).join(' ');
}

function comparator(word, nextWord) {
    return +word.match(reg) - +nextWord.match(reg)
}


// Solution 3
function order(words) {
    var array = words.split(' ');
    var sortedArray = [];
    for (i = 0; i <= array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[j].indexOf(i) >= 0) {
                sortedArray.push(array[j]);
            }
        }
    }
    return sortedArray.join(' ');
}


// Solution 4
function order(words) {
    return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
}


// Solution 5
function order(words) {
    // ...
    return words && words.split(' ')
        .map(word => word.match(/\d/) + word)
        .sort()
        .map(word => word.slice(1))
        .join(' ');
}


// Solution 6
function order(str) {
    str = str.split(" ");
    var index, result = new Array(str.length);
    for (var i in str) {
        index = str[i].match(/\d/);
        result[index - 1] = str[i];
    }
    return result.join(" ");
}


// Solution 7
const order = w => w.split(' ').sort((a, b) => /\d/.exec(a) - /\d/.exec(b)).join(' ');


// Solution 8
function order(words) {
    return words.split(" ").sort((a, b) => a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, "")).join(" ")
}


// Solution 9
const order = words => words.split(' ').sort((a, b) => +/(\d+)/.exec(a)[0] - +/(\d+)/.exec(b)[0]).join(' ');


// Solution 10
function order(words) {
    return words.split(' ').sort(function (a, b) {
        return a.match(/\d+/g) - b.match(/\d+/g);
    }).join(' ');
}


// Solution 11
function order(string) {
    // ...
    return string.split(' ').reduce((acc, el, i) => {
        acc[el.match(/\d/) - 1] = el
        return acc;
    }, []).join(' ')
}


// Solution 12
function order(words) {
    if (!words) return '';

    var result = words.split(' ').map(word => {
        var orderAsString = word.split('').filter(c => !isNaN(c))[0];
        var order = Number(orderAsString);

        return {
            "order": order,
            "word": word
        };
    });

    result.sort((a, b) => a.order - b.order);

    return result.map(x => x.word).join(' ');
}