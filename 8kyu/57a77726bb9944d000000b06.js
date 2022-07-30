// Price of Mangoes

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. 
// For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples

// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

function mango(quantity, price) {
    return (Math.floor(quantity / 3) * (price * 2)) + ((quantity % 3) * price);
}

console.log(mango(3, 3));
// 6
console.log(mango(9, 5));
// 30
console.log(mango(7, 3));
// 15
console.log(mango(31, 11));
// 231


// Solution 1
function mango(quantity, price) {
    return price * (quantity - Math.floor(quantity / 3));
}


// Solution 2
function mango(quantity, price) {
    let freeMangos = Math.floor(quantity / 3);
    return (quantity - freeMangos) * price;
}


// Solution 3
function mango(quantity, price) {
    return Math.floor(quantity / 3) * 2 * price + quantity % 3 * price;
}


// Solution 4
function mango(quantity, price) {
    var divider = Math.floor(quantity / 3);
    var remainder = quantity % 3;
    var totalCost = ((divider * 2) * price) + (remainder * price);
    return totalCost;
}


// Solution 5
const mango = (quantity, price) => Math.ceil(quantity / 1.5) * price;


// Solution 6
const mango = (quantity, price) =>
    (quantity - (quantity / 3 ^ 0)) * price;


// Solution 7
mango = (q, p) => (~~(q / 3) * 2 + q % 3) * p;


// Solution 8
function mango(quantity, price) {
    return (quantity - ~~(quantity / 3)) * price
}


// Solution 9
mango = (quantity, price) => price * (quantity - Math.floor(quantity / 3))


// Solution 10
function mango(quantity, price) {
    let p = 0;
    for (i = 1; i <= quantity; i++) {
        if (i % 3 === 0) {
            p++
        }
    }
    return (quantity - p) * price
}


// Solution 11
function mango(quantity, price, extra = 3) {
    const discount = ~~(quantity / extra);
    return (quantity - discount) * price;
}


// Solution 12
function mango(quantity, price) {
    let giftCount = Math.floor(quantity / 3);
    return (quantity - giftCount) * price;
}