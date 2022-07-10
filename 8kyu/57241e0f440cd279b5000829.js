// Sum of Multiples

// Your Job

// Find the sum of all multiples of n below m

// Keep in Mind

// n and m are natural numbers(positive integers)
// m is excluded from the multiples

// Examples

// sumMul(2, 9) ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13) ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7) ==> "INVALID"

function sumMul(n, m) {

    // console.log(n, m)
        
    let iteration = Math.floor(m / n)
    // console.log('iteration:', iteration)
    
    let sum = 0;

    if (n < 1 || m < 1) {
        return 'INVALID'
    } else {
        for (let i = 1; i <= iteration; i++)
            sum += (n * i)
    }

    return sum;

}

console.log(sumMul(2, 9));
// ==> 2 + 4 + 6 + 8 = 20
console.log(sumMul(3, 13) );
// ==> 3 + 6 + 9 + 12 = 30
console.log(sumMul(4, 123) );
// ==> 4 + 8 + 12 + ... = 1860
console.log(sumMul(4, -7) );
// ==> "INVALID"


// Solution 1
function sumMul(n, m) {
    if (n >= m) return "INVALID";

    var sum = 0;
    for (var i = n; i < m; i += n) {
        sum += i;
    }
    return sum;
}


// Solution 2
const sumMul = (n, m) => ~~(m / n) * (m + n - m % n) / 2 || 'INVALID';


// Solution 3
function sumMul(n, m) {
    return m <= n ? "INVALID" : Math.floor(m / n) * (Math.floor(m / n) + 1) * (n / 2);
}


// Solution 4
function sumMul(n, m) {
    if (n <= 0 || m <= 0) return "INVALID";

    const last = Math.ceil(m / n) * n - n;
    return (last + n) * (last / n) / 2;
}


// Solution 5
const sumMul = (n, m) =>
    m > n ? [...Array(m / n ^ 0)].map((_, idx) => ++idx * n).reduce((pre, val) => pre + val * (val < m)) : `INVALID`;


// Solution 6
function sumMul(n, m) {
    if (m <= 0 || n <= 0) { return "INVALID"; }
    let res = 0;
    for (let i = 0; i < m; i += n) {
        res += i;
    }
    return res;
}


// Solution 7
function sumMul(n, m) {
    return n < 1 || m < 1 ? 'INVALID' : n * (Math.floor(m / n) * (Math.floor(m / n) + 1)) / 2
}


// Solution 8
function sumMul(n, m) {
    if ((n <= 0) || (m < 0))
        return "INVALID";

    let arr = [];
    arr.push(n);

    while (arr[arr.length - 1] < m)
        arr.push(arr[arr.length - 1] + n);

    if (arr[arr.length - 1] > m)
        arr.pop();

    console.log(arr);

    return arr.reduce((acc, cur) => acc + cur);
}


// Solution 9
const sumMul = (n, m) => {
    let r = 0;
    if (n < 1 || m < 1) return 'INVALID';
    for (let i = 2; i < m; i++) if (i / n % 1 == 0) r += i;
    return r;
}


// Solution 10
function sumMul(n, m) {
    let soma = 0
    if (m <= 0) {
        return "INVALID"
    }

    for (let i = 0; i < m; i++) {

        if (i % n == 0) {
            soma += i
        }
    }
    return soma
}


// Solution 11
function sumMul(n, m) {
    if (n < 1 || m < 1) return "INVALID";
    let sum = 0;
    for (let i = n; i < m; i++) {
        if (i % n === 0) sum += i;
    }
    return sum;
}


// Solution 12
function sumMul(n, m) {
    let res = 0;
    if (n >= m) {
        return 'INVALID'
    }
    let quantityOfLoop = Math.floor(m / n);
    for (let i = 0; i <= quantityOfLoop; i++) {
        res = res + n * i;
    }
    return res;
}