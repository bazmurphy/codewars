// Mix Fruit Juice 

// Story

// Jumbo Juice makes a fresh juice out of fruits of your choice.
// Jumbo Juice charges $5 for regular fruits and $7 for special ones.
// Regular fruits are Banana, Orange, Apple, Lemon and Grapes.
// Special ones are Avocado, Strawberry and Mango.
// Others fruits that are not listed are also available upon request.
// Those extra special fruits cost $9 per each.
// There is no limit on how many fruits she / he picks.
// The price of a cup of juice is the mean of price of chosen fruits.
// In case of decimal number(ex.$5.99), output should be the nearest integer(use the standard rounding function of your language of choice).

// Input

// The function will receive an array of strings, each with the name of a fruit.The recognition of names should be case insensitive.There is no case of an empty array input.

// Example

// ['Mango', 'Banana', 'Avocado'] //the price of this juice bottle is (7+5+7)/3 = $6($6.333333...)

function mixFruit(arr) {

    const prices = {
        banana : 5,
        orange : 5,
        apple : 5, 
        lemon : 5,
        grapes : 5,
        avocado: 7,
        strawberry: 7,
        mango: 7,
        extraspecial: 9,
    }

    return Math.round(arr.reduce((acc, cv) => acc + (prices.hasOwnProperty(cv.toLowerCase()) ? prices[cv.toLowerCase()] : prices.extraspecial), 0) / arr.length);

}

console.log(mixFruit(['banana', 'mango', 'avocado']));
// 6
console.log(mixFruit(['melon', 'Mango', 'kiwi']));
// 8
console.log(mixFruit(['watermelon', 'cherry', 'avocado']));
// 8
console.log(mixFruit(['apple', 'Banana']));
// 5
console.log(mixFruit(['watermelon', 'lime', 'tomato']));
// 9
console.log(mixFruit(['blackBerry', 'coconut', 'avocado']));
// 8
console.log(mixFruit(['waterMelon', 'mango']));
// 8
console.log(mixFruit(['watermelon', 'pEach']));
// 9
console.log(mixFruit(['watermelon', 'Orange', 'grapes']));
// 6
console.log(mixFruit(['watermelon']));
// 9
console.log(mixFruit(['BlACKbeRrY', 'cOcONuT', 'avoCaDo']));
// 8


// Solution 1
function mixFruit(arr) {
    var prices = { banana: 5, orange: 5, apple: 5, lemon: 5, grapes: 5, avocado: 7, strawberry: 7, mango: 7 };
    return Math.round(arr.reduce((a, b) => a += prices[b.toLowerCase()] || 9, 0) / arr.length);
}


// Solution 2
function mixFruit(arr) {
    reg = ["banana", "orange", "apple", "lemon", "grapes"];
    spec = ["avocado", "strawberry", "mango"];
    total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (reg.includes(arr[i].toLowerCase())) {
            total += 5;
        } else if (spec.includes(arr[i].toLowerCase())) {
            total += 7;
        } else {
            total += 9;
        }
    }
    return Math.round(total / arr.length);
}


// Solution 3
const fruitsPrice = {
    banana: 5,
    orange: 5,
    apple: 5,
    lemon: 5,
    grapes: 5,
    avocado: 7,
    strawberry: 7,
    mango: 7
};

const mixFruit = list => Math.round(list.reduce((total, i) => total + (fruitsPrice[i.toLowerCase()] || 9), 0) / list.length);


// Solution 4
function mixFruit(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i].toLowerCase() == 'banana' || arr[i].toLowerCase() == 'orange' || arr[i].toLowerCase() == 'apple' || arr[i].toLowerCase() == 'lemon' || arr[i].toLowerCase() == 'grapes')
            sum += 5;
        else if (arr[i].toLowerCase() == 'avocado' || arr[i].toLowerCase() == 'strawberry' || arr[i].toLowerCase() == 'mango')
            sum += 7;
        else sum += 9
    }
    return Math.round(sum / arr.length);
}


// Solution 5
function mixFruit(arr) {
    let regular = ['banana', 'orange', 'apple', 'lemon', "grapes"],
        special = ['avocado', 'strawberry', 'mango'];
    return Math.round(arr.map((a) => (regular.indexOf(a.toLowerCase()) > -1) ? 5 : (special.indexOf(a.toLowerCase()) > -1) ? 7 : 9).reduce((a, b) => a + b) / arr.length)
}


// Solution 6
function mixFruit(arr) {
    fruits = {
        "banana": 5, "orange": 5, "apple": 5, "lemon": 5, "grapes": 5,
        "avocado": 7, "strawberry": 7, "mango": 7
    }
    return Math.round((arr.map(x => fruits[x.toLowerCase()] || 9).reduce((a, b) => a + b)) / arr.length)

}


// Solution 7
function mixFruit(arr) {
    var f = "Regular fruits are Banana, Orange, Apple, Lemon and Grapes. Special ones are Avocado, Strawberry and Mango. ".toLowerCase().replace(/[^\w ]/g, "").split(" ")
    return Math.round(arr.reduce((a, b) => a + (f.indexOf(b.toLowerCase()) > 11 ? 7 : f.indexOf(b.toLowerCase()) > -1 ? 5 : 9), 0) / arr.length)
}


// Solution 8
const mixFruit = arr => Math.round(arr.reduce((a, b) => a + (["banana", "orange", "apple", "lemon", "grapes"].indexOf(b.toLowerCase()) != -1 ? 5 : ["avocado", "strawberry", "mango"].indexOf(b.toLowerCase()) != -1 ? 7 : 9), 0) / arr.length);




// Solution 9
function mixFruit(arr) {
    const regular = ["banana", "orange", "apple", "lemon", "grapes"];
    const special = ["avocado", "strawberry", "mango"];
    const sum = arr.reduce((acc, curr) => acc + (regular.includes(curr.toLowerCase()) * 5 || special.includes(curr.toLowerCase()) * 7 || 9), 0)
    return Math.round(sum / arr.length)
}


// Solution 10
function mixFruit(arr) {
    let hash = {
        "banana": 5,
        "orange": 5,
        "apple": 5,
        "lemon": 5,
        "grapes": 5,
        "avocado": 7,
        "strawberry": 7,
        "mango": 7
    };

    return Math.round(arr.reduce((a, b) => a += (!hash[b.toLowerCase()]) ? 9 : hash[b.toLowerCase()], 0) / arr.length);
}