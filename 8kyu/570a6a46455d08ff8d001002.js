// No zeros for heros

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// - 1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {

    n = n.toString().split('')
    // console.log(n)
    
    if (n[n.length - 1] !== '0') {
        // console.log('the last number is not 0');
        return Number(n.join(''));
    } else if (n.length === 1) {
        // console.log('the number is length 1');
        return Number(n.join(''));
    } else {
        let lastIndexOfZero = n.length - 1;

        for (let i = n.length - 1; i > -1; i--) {
            // console.log('i:', i)
            if (n[i] === '0' && n[i-1] !== '0') {
                // console.log(lastIndexOfZero)
                lastIndexOfZero = i;
                break;
            }
        }
        // console.log('lastIndexOfZero:', lastIndexOfZero);
        return Number(n.slice(0, lastIndexOfZero).join(''))
    }
}

console.log(noBoringZeros(1450))
// 145
console.log(noBoringZeros(960000))
// 96
console.log(noBoringZeros(1050))
// 105
console.log(noBoringZeros(-1050))
// -105
console.log(noBoringZeros(-105))
// -105
console.log(noBoringZeros(0))
// 0


// Solution 1
function noBoringZeros(n) {
    while (n % 10 == 0 && n != 0) { n /= 10; }
    return n;
}


// Solution 2
function noBoringZeros(n) {
    return +`${n}`.replace(/0*$/, "");
}


// Solution 3
function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
        n = n / 10
    }
    return n
}


// Solution 4
const noBoringZeros = n => parseInt(n.toString().replace(/0+$/g, "") + 0) / 10;


// Solution 5
function noBoringZeros(n) {
    return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}


// Solution 6
function noBoringZeros(n) {
    return Number(String(n).replace(/0+$/, ''));
}


// Solution 7
const noBoringZeros = (n) => +`${n}`.replace(/0+$/, '')


// Solution 8
function noBoringZeros(n) {
    return Number(n.toString().replace(/0+$/, ''));
}


// Solution 9
const noBoringZeros = n =>
    +`${n}`.replace(/0+$/g, ``);


// Solution 10
const noBoringZeros = n => +("" + n).replace(/0+$/, "");


// Solution 11
function noBoringZeros(x) {
    let a = `${x}`.split('');
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] == 0) {
            a.pop()
        } else {
            break
        }
    }
    return Number(a.join(''))
}


// Solution 12
const noBoringZeros = n => +("" + n).replace(/0*$/, "");