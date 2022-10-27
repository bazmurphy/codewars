// Largest 5 digit number in a series

// In the following 6 digit number:

// 283910

// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890

// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given.
// The number will be passed in as a string of only digits.
// It should return a five digit integer.
// The number passed may be as large as 1000 digits.


function solution(digits) {

    let currentHighest = Number(digits.slice(0, 5))

    for (let i = 0; i < digits.length -4; i++) {
        if (Number(digits.slice(i, i+5)) > currentHighest) {
            currentHighest = Number(digits.slice(i, i + 5));
        }
    }

    return currentHighest;

}

console.log(solution("7316717653133062491922511967442657474235534919493496983520368542506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753123457977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257540920752963450"))
// 99890
console.log(solution('1234567898765'))
// 98765
console.log(solution("731674765"))
// 74765


// Solution 1
function solution(digits) {
    let answer = 0;

    for (let i = 0; i < digits.length; i++) {
        let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
        if (Number(number) > answer) {       //convert to number and compare against answer
            answer = Number(number);
        }
    }
    return answer;
}


// Solution 2
function solution(digits) {
    let s = [];
    for (var i = 0; i < digits.length - 4; i++) {
        s.push(digits.substr(i, 5));
    };
    return Math.max(...s);
}


// Solution 3
function solution(digits) {
    if (digits.length <= 5) return digits;

    let largestFiveDigitNumber = digits.slice(0, 5);
    for (let i = 5; i < digits.length; i++) {
        let currentFiveDigitNumber = digits.slice(i, i + 5);
        if (currentFiveDigitNumber > largestFiveDigitNumber) {
            largestFiveDigitNumber = currentFiveDigitNumber;
        }
    }
    return Number(largestFiveDigitNumber);
}


// Solution 4
const solution = digits =>
    [...digits].reduce((pre, _, idx) => Math.max(pre, digits.slice(idx, idx + 5)));


// Solution 5
function solution(digits) {
    let max = '';
    for (let i = 0; i < digits.length - 4; i++) {
        max = Math.max(digits.slice(i, i + 5), max)
    }
    return max
}


// Solution 6
function solution(digits) {
    return +digits.split('').map((v, i, arr) => arr.slice(i, i + 5).join('')).sort((a, b) => +b - +a)[0]
}


// Solution 7
function solution(digits) {
    let arr = []
    for (let i = 0; i < digits.length; i++) {
        arr.push(+digits.slice(i, i + 5))
    }
    return Math.max(...arr)
}


// Solution 8
function solution(digits) {
    return digits.length === 5 ? +digits :
        Math.max(+digits.slice(0, 5), solution(digits.slice(1)))
}


// Solution 9
const solution = d => ~~d.split('').reduce((r, _, i) => (+d.substring(i, i + 5) > r ? +d.substring(i, i + 5) : r), 0);


// Solution 10
solution = s = d => d.length == 5 ? +d : Math.max(+d.slice(0, 5), s(d.slice(1)))


// Solution 11
function solution(digits) {
    const foo = String(digits)
    let max = 0
    for (let i = 0; i <= foo.length - 5; i++) {
        max = Math.max(max, foo.slice(i, i + 5))
    }
    return max
}


// Solution 12
function solution(digits) {
    let numbers = digits.match(new RegExp(/9\d{4}/, "g"))
    return Math.max.apply(0, numbers)
}