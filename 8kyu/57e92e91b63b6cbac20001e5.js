// Holiday VIII - Duty Free

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price(normPrice), the duty free discount(discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10 %, you would save £1 per bottle.If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers.Please return an integer.Round down.


function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol / (normPrice * discount / 100))
}

console.log(dutyFree(12, 50, 1000));
// 166
console.log(dutyFree(17, 10, 500));
// 294
console.log(dutyFree(24, 35, 3000));
// 357


// Solution 1
function dutyFree(normPrice, discount, hol) {
    return (Math.floor(hol / normPrice / discount * 100))
}


// Solution 2
function dutyFree(normPrice, discount, hol) {
    var saving = normPrice * discount / 100;
    return Math.floor(hol / saving);
}


// Solution 3
const dutyFree = (normPrice, discount, hol) => {
    return Math.floor(1 / (normPrice * discount / 100) * hol);
}


// Solution 4
dutyFree = (p, d, h) => ~~(100 * h / p / d)


// Solution 5
const dutyFree = (normPrice, discount, hol) =>
    hol / (normPrice * discount / 100) ^ 0;


// Solution 6
function dutyFree(normPrice, discount, hol) {
    var discountAmount = normPrice * (discount / 100);
    var bottles = hol / discountAmount;

    return Math.floor(bottles);
}


// Solution 7
dutyFree = (n, d, h) => h / (n * d / 100) ^ 0


// Solution 8
function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol / (discount / 100 * normPrice))
}


// Solution 9
const dutyFree = (normPrice, discount, hol) => Math.floor(hol / (normPrice * discount / 100))


// Solution 10
const dutyFree = (n, d, h) => (h * 100 / (n * d)) | 0


// Solution 11
const dutyFree = (x, y, z) => Math.floor(z / (x * (y / 100)))


// Solution 12
function dutyFree(normPrice, discount, hol) {
    let count = 0;
    let holRest = hol
    for (let i = 0; i < hol; i++) {
        if (holRest > 0) {
            holRest = holRest - normPrice * discount / 100
            count = count + 1
        }

    }
    return count - 1
}