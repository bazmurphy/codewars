// Playing with digits

// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51



function digPow(n, p) {
  
    let sum = n.toString()
                .split('')
                .map((element, index) => Math.pow(Number(element), index+p))
                .reduce((pV, cV) => pV + cV);

    return sum / n % 1 === 0 ? (sum / n) : -1;

}

console.log(digPow(89, 1));
// 1
console.log(digPow(92, 1));
// -1
console.log(digPow(46288, 3));
// 51


// Solution 1
function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
}


// Solution 3
function digPow(n, p) {
    var ans = ('' + n).split('')
        .map(function (d, i) { return Math.pow(+d, i + p) })
        .reduce(function (s, v) { return s + v }) / n
    return ans % 1 ? -1 : ans
}


// Solution 4
function digPow(n, p) {
    var ans = n.toString().split('')
        .map((v, i) => Math.pow(parseInt(v), i + p))
        .reduce((a, b) => a + b) / n;
    return ans % 1 == 0 ? ans : -1;
}


// Solution 5
function digPow(n, p) {
    var ans = n.toString().split('')
        .map((v, i) => Math.pow(parseInt(v), i + p))
        .reduce((a, b) => a + b) / n;
    return ans % 1 == 0 ? ans : -1;
}


// Solution 6
function digPow(n, p) {
    // ...
    var num1 = n.toString();
    var num2 = p.toString();
    var sum = 0;

    for (var i = 0; i < num1.length; i++) {
        sum = sum + Math.pow(parseInt(num1.charAt(i)), p);
        p++;
        if (sum % n == 0) { return sum / n; }
    }
    return -1;


}


// Solution 7
function digPow(n, p) {
    var str = n.toString()
    var res = 0;

    for (var i = 0; i < str.length; i++) {
        res += Math.pow(parseInt(str[i]), p++);
    }

    return res % n === 0 ? res / n : -1;
}


// Solution 8
function digPow(num, pow) {
    const raisedAndSummed = num.toString()
        .split('')
        .map(n => Math.pow(n, pow++))
        .reduce((sum, n) => sum + n, 0)
    return (raisedAndSummed % num === 0) ? raisedAndSummed / num : -1
}


// Solution 9
function digPow(n, p) {
    var str = String(n);
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        sum += Math.pow(str[i], p + i);
    }

    if (sum % n == 0) {
        return sum / n;
    }
    return -1;
}


// Solution 10
function digPow(n, p) {
    let total = Reflect.apply(Array.prototype.reduce,
        Reflect.apply(Array.prototype.map, n.toString(), [(i) => parseInt(i)]),
        [(prev, curr, i) => prev + Math.pow(curr, i + p), 0]);

    let division = total / n;

    if (total % n > 0) {
        return -1;
    }

    return division;
}


// Solution 11
function digPow(n, p) {
    if (n <= 0 || !p) return -1;
    var total = 0,
        numstr = "" + n,
        tmp;

    for (var i = 0; i < numstr.length; i++) {
        total += Math.pow(numstr[i], p++);
    }

    return (total / n) % 1 === 0 ? total / n : -1;
}


// Solution 12
function digPow(n, p) {
    const result = `${n}`.split('').reduce((sum, i) => sum += i ** p++, 0)
    return result % n ? -1 : result / n
}