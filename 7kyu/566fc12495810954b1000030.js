// Count the Digit

// Take an integer n(n >= 0) and a digit d(0 <= d <= 9) as an integer.

// Square all numbers k(0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k ** 2.

// Call nb_dig(or nbDig or ...) the function taking n and d as parameters and returning this count.
//     Examples:

// n = 10, d = 1 
// the k * k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k * k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.

// Note that 121 has twice the digit 1.


function nbDig(n, d) {

    let count = 0;

    let arr = [];

    for (let i = 0; i <= n; i++) {
        arr.push((Math.pow(i, 2)).toString().split(""));
    }

    // console.log(arr);

    for (let element of arr) {
        // console.log('element:', element)

        for (let subElement of element) {
        // console.log('subElement:', subElement)

            if (subElement === d.toString()) {
                count++;
            }
        }
    }    

    return count;
    
}

console.log(nbDig(10, 1))
// 4
console.log(nbDig(25, 1));
// 11
console.log(nbDig(5750, 0));
// 4700, "n = 5750, d = 0"
console.log(nbDig(11011, 2));
// 9481, "n = 11011, d = 2"
console.log(nbDig(12224, 8));
// 7733, "n = 12224, d = 8"
console.log(nbDig(11549, 1));
// 11905, "n = 11549, d = 1"



// Solution 1
function nbDig(n, d) {
    var res = 0;
    for (var g = 0; g <= n; g++) {
        var square = (g * g + "").split("");
        square.forEach((s) => s == d ? res++ : null)
    } return res;
}


// Solution 2
function nbDig(n, d) {
    var o = '';
    for (var i = 0; i <= n; i++) {
        o += Math.pow(i, 2);
    }
    return o.split(d).length - 1
}


// Solution 3
nbDig = (n, d) => Array.from(Array(n + 1), (e, i) => i * i).join('').match(new RegExp(d, 'g')).length;


// Solution 4
function nbDig(n, d) {
    let count = '';
    const re = RegExp(d, 'g');
    for (let i = 0; i <= n; i++) {
        count += i ** 2;
    }
    return count.match(re).length;
}


// Solution 5
const nbDig = (n, d) => {
  let re = new RegExp(d, 'g');
  return Array(...Array(n + 1))
    .reduce((s, v, i) => s + ((i * i + '').match(re) || []).length, 0);
}


// Solution 6
function nbDig(n, d) {
    var squares = '', reg = new RegExp(d, 'g');
    for (var i = 0; i <= n; i++) { squares += (i * i); }
    return squares.match(reg).length;
}


// Solution 7
function nbDig(n, d) {
    return [...Array(n + 1).keys()].map((i) => {
        return i * i;
    })
        .join('')
        .split('')
        .filter((i) => {
            return i == d;
        }).length;
}


// Solution 8
const nbDig = (n, d) =>
    [...Array(++n)].map((_, idx) => idx ** 2).join(``).split(d).length - 1;


// Solution 9
function nbDig(n, d) {
    let totalOfDigit = 0;

    for (let i = 0; i <= n; i++) {
        totalOfDigit += (i * i).toString().split('').filter(n => n == d).length;
    }

    return totalOfDigit;
}


// Solution 10
function nbDig(n, d) {
    var k = 0, cnt = 0, d = d.toString();
    while (k <= n) {
        var a = 0;
        var s = (k * k).toString();
        for (var i = 0; i < s.length; i++)
            if (s[i] == d)
                a++;
        if (a > 0) {
            cnt += a;
        }
        k++;
    }
    return cnt;
}


// Solution 11
function nbDig(n, d) {
    return Array.from({ length: n + 1 }, (_, i) => Math.pow(i, 2)).join('').match(new RegExp(d, 'g')).length;
}


// Solution 12
function nbDig(n, d) {
    let but = RegExp("[^" + d + "]", "g"), tot = 0;
    while (n > -1) tot += ('' + (n * n--)).replace(but, '').length;
    return tot
}