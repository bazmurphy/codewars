// Calculate Price Excluding VAT

// Write a function that calculates the original product price, without VAT.

// Example

// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1

function excludingVatPrice(price){
  if (price === null) {
    return -1
  } else {
    return parseFloat((price / ( 1 + (15/100) )).toFixed(2));
  }
}

console.log(excludingVatPrice(230));
// 200.00
console.log(excludingVatPrice(123));
// 106.96


// Solution 1
excludingVatPrice = p => p === null ? -1 : +(p / 1.15).toFixed(2);


// Solution 2
function excludingVatPrice(price) {
  return (price == null) ? -1 : Math.round((price / 1.15) * 100) / 100;
}


// Solution 3
const excludingVatPrice = price =>
  price === null ? -1 : Math.round(price / 1.15 * 10**2) / 10**2;


// Solution 4
function excludingVatPrice(price){
  return (price == null)? -1 : ((price/115)*100).toFixed(2)*1;
}


// Solution 5
excludingVatPrice = price => price == null? -1: +(price/1.15).toFixed(2) 


// Solution 6
function excludingVatPrice(price){
  let i = price - (price*15/115)
return price === null  ? -1 : +(i.toFixed(2))
  console.log(price)
}


// Solution 7
function excludingVatPrice(price){
    return (price === +price ? (price / 1.15).toFixed(2) - 0 : -1);
}


// Solution 8
function excludingVatPrice(price){
  return price == undefined ? -1 : +((price / 1.15).toFixed(2)) 
}


// Solution 9
function excludingVatPrice(price) {
  if (price === null) return -1
  return Math.round(price / 1.15 * 100) / 100;
}


// Solution 10
const excludingVatPrice = price => price !== null ? (price / 1.15).toFixed(2) * 100 / 100 : -1;


// Solution 11
var excludingVatPrice = prIce => prIce == null ? -1 : +(prIce/1.15).toFixed(2)


// Solution 12
function excludingVatPrice(price){
  let vatFree = (price / 1.15).toFixed(2)
    return price == null ? -1 : vatFree * 1;
}


// Solution 13
const excludingVatPrice=price=>price===null ? -1 : +(price*100/115).toFixed(2);


// Solution 14
const excludingVatPrice = price => price == null ? -1 : Number((price / 1.15).toFixed(2));