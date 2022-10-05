// Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n.
// If that value has more than one digit, continue reducing in this way until a single - digit number is produced.
// he input will be a non - negative integer.

// Examples

// 16  -- > 1 + 6 = 7
// 942  -- > 9 + 4 + 2 = 15  -- > 1 + 5 = 6
// 132189  -- > 1 + 3 + 2 + 1 + 8 + 9 = 24  -- > 2 + 4 = 6
// 493193  -- > 4 + 9 + 3 + 1 + 9 + 3 = 29  -- > 2 + 9 = 11  -- > 1 + 1 = 2

function digital_root(n) {

    // console.log(n)

    let result = Array.from(n.toString()).map(Number).reduce((pV, cV) => pV + cV)

    do {
        result = Array.from(result.toString()).map(Number).reduce((pV, cV) => pV + cV)
    } while (result >= 10) 

    return result

}

console.log(digital_root(16))
// 7
console.log(digital_root(456))
// 6


// Solution 1
function digital_root(n) {
    return (n - 1) % 9 + 1;
}


// Solution 2
function digital_root(n) {
    if (n < 10) return n;

    return digital_root(
        n.toString().split('').reduce(function (acc, d) { return acc + +d; }, 0));
}


// Solution 3
function digital_root(n) {
    if (n < 10)
        return n;

    for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
        sum += Number(n[i]);

    return digital_root(sum);
}


// Solution 4
function digital_root(n) {
    n = eval(n.toString().split('').join('+'));

    if (n > 9) {
        return digital_root(n);
    }

    return n;
}


// Solution 5
function digital_root(n) {
    if (n < 10) return n
    return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
}


// Solution 6
function digital_root(n) {
    return --n % 9 + 1;
}


// Solution 7
function digital_root(n) {
    while (n > 9) { n = ('' + n).split('').reduce(function (s, d) { return +s + +d; }); }
    return n;
}


// Solution 8
function digital_root(n) {
    return n < 10 ? n : digital_root(String(n).split('').reduce((s, v) => Number(s) + Number(v)));
}


// Solution 9
function digital_root(n) {
    let finalSum = 10, tempSum = 0;
    while (finalSum > 9) {
        while (n > 9) {
            tempSum += n % 10;
            n = parseInt(n / 10);
        }
        tempSum += n;
        finalSum = tempSum;
        n = finalSum;
        tempSum = 0;
    }
    return finalSum;
}


// Solution 10
function digital_root(n) {
    if (n < 10) {
        return n;
    }
    n = n.toString().split("");
    var result = 0;
    for (var i = 0; i < n.length; i++) {
        result += parseInt(n[i]);
    }
    return result < 10 ? result : digital_root(result);
}


// Solution 11
function digital_root(n) {
    var s = 0;
    while (n) {
        s += n % 10;
        n = Math.floor(n / 10);
    }
    return s < 10 ? s : digital_root(s);

}


// Solution 12
function digital_root(n) {
    // ...
    var output = []
    var s_number = n.toString();

    for (var i = 0, len = s_number.length; i < len; i += 1) {
        output.push(+s_number.charAt(i));
    }
    if (output.length === 1) {
        return output[0]
    }

    for (var i = 0, sum = 0; i < output.length; sum += output[i++]);


    return digital_root(sum)
}