// Name on billboard

// You can print your name on a billboard ad. 
// Find out how much it will cost you. 
// Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).

function billboard(name, price = 30) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
        total += price
    }
    return total;
} 


console.log(billboard("Jeong-Ho Aristotelis"));
// 600
console.log(billboard("Abishai Charalampos"));
// 570
console.log(billboard("Idwal Augustin"));
// 420
console.log(billboard("Hadufuns John", 20));
// 260
console.log(billboard("Zoroaster Donnchadh"));
// 570
console.log(billboard("Claude Miljenko"));
// 450
console.log(billboard("Werner Vígi", 15));
// 165
console.log(billboard("Anani Fridumar"));
// 420
console.log(billboard("Paolo Oli"));
// 270
console.log(billboard("Hjalmar Liupold", 40));
// 600
console.log(billboard("Simon Eadwulf"));
// 390


// Solution 1
function billboard(name, price = 30) {

    var totalCost = 0;
    for (i = 0; i < name.length; i++) {
        totalCost += price;
    }

    return totalCost;

}


// Solution 2
function billboard(name, price = 30) {
    return name.split('').reduce((sum, letter) => sum + price, 0);
}


// Solution 3
const billboard = (name, price = 30) => +(name.length / (1 / price))


// Solution 4
const billboard = (name, price = 30) =>
    [...name].reduce(pre => pre + price, 0);


// Solution 5
const billboard = (n, p = 30) => n.length / (1 / p);


// Solution 6
function billboard(name, price = 30) {
    return name.repeat(price).length;
} 


// Solution 7
const billboard = (ﬂ, $ = 30) => [...ﬂ].reduce((acc, el) => acc + $, 0)


// Solution 8
function billboard(name, price = 30) {
    return name.length / (1 / price)
} 


// Solution 9
const billboard = (name, price = 30) => name.split('').map(el => el = price).reduce((a, b) => a + b, 0);


// Solution 10
const billboard = (name, price = 30) => name === '' ? 0 : name.split('').map(el => el = price).reduce((a, b) => a + b);


// Solution 11
function billboard(name, price = 30) {
    // Solving Recursively
    if (name.length === 0) return 0;
    return price + billboard(name.split("").filter((e, i) => i != 0).join(""), price);
}


// Solution 12
function billboard(n, p = 30) {
    return n.length / (1 / p);
} 