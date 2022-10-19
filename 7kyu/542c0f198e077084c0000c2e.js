// Count the divisors of a number

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.
// Examples(input-- > output)

// 4 -- > 3(1, 2, 4)
// 5 -- > 2(1, 5)
// 12 -- > 6(1, 2, 3, 4, 6, 12)
// 30 -- > 8(1, 2, 3, 5, 6, 10, 15, 30)


function getDivisorsCnt(n) {
    
    let divisors = [];

    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            // console.log(`found: ${i} is a divisor of ${n}`)
            divisors.push(i);
        }
    }
    // console.log(`all the divisors: ${divisors} total divisors: ${divisors.length}`)
    return divisors.length;

}

console.log(getDivisorsCnt(1));
// 1
console.log(getDivisorsCnt(10));
// 4
console.log(getDivisorsCnt(11));
// 2
console.log(getDivisorsCnt(54));
// 8


// Solution 1
function getDivisorsCnt(n) {
    for (var d = 0, i = n; i > 0; i--) {
        if (n % i == 0) d++;
    }

    return d;
}


// Solution 2
function getDivisorsCnt(n) {
    var cnt = 1;
    for (var i = 0; i <= n / 2; ++i)
        if (n % i == 0)
            ++cnt;
    return cnt;
}


// Solution 3
function getDivisorsCnt(n) {
    var div = 0;
    for (var i = 1; i <= n; i++) if (n % i == 0) div++;
    return div;
}


// Solution 4
const getDivisorsCnt = function ($) {
    let [i, num] = [0, 0];

    do {
        if ($ % i === 0) {
            num += 1;
        }
    } while ($ >= ++i)

    return num;
}


// Solution 5
function getDivisorsCnt(n) {
    if (n === 1) return n

    // Use formuls http://vk.cc/4G1m8t
    let divArr = [[2, 0]] // 'divisor', 'number'
    let div = divArr[0][0] // first divisor

    while (n > 1) {
        if (n % div === 0) {
            for (let i = 0; divArr.length; i++) {
                if (divArr[i][0] === div) {
                    divArr[i][1] += 1
                    break
                } else {
                    if (i === divArr.length - 1) {
                        divArr.push([div, 1])
                        break
                    }
                }
            }
            n /= div
        } else {
            div += 1
        }
    }

    for (let i = 0; i < divArr.length; i++) {
        n *= divArr[i][1] + 1
    }

    return n
}


// Solution 6
function getDivisorsCnt(n) {
    var num = 0;
    if (n == 1) return 1;
    if (n % Math.sqrt(n) == 0) num++;
    for (var i = 1; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            num += 2;
        }
    }
    return num;
}


// Solution 7
const getDivisorsCnt = n =>
    [...Array(n / 2 ^ 0)].reduce((pre, _, idx) => n % ++idx ? pre : ++pre, 1);


// Solution 8
function getDivisorsCnt(n) {
    for (var i = 0, r = 0; i <= n; i++)
        if (n % i == 0) r++;
    return r;
}


// Solution 9
function getDivisorsCnt(n) {
    let out = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            out++
        }
    }
    return out
}


// Solution 10
function getDivisorsCnt(n) {
    var d = 0;
    for (var i = 1; i <= n; i++) {
        if (!(n % i)) d++;
    }
    return d;
}


// Solution 11
function getDivisorsCnt(n) {
    var res = [], sqrt = Math.sqrt(n);
    for (let i = 1; i <= sqrt; ++i) {
        if (n % i == 0) { res.push(i); res.push(n / i); }
    }
    res = Array.from(new Set(res));
    return res.length;
}


// Solution 12
const getDivisorsCnt = n => {
    let count = 0
    for (let i = 1; i <= n; i++)
        if (n % i == 0) count++
    return count
}