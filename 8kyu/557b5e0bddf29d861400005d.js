// Miles per gallon to kilometers per liter

// Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

// Create an application that will display the number of kilometers per liter(output) based on the number of miles per imperial gallon(input).

// Make sure to round off the result to two decimal points.
// If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

// Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres

function converter(mpg) {

    let gallonToLitre = 4.54609188 
    let milesToKilometre = 1.609344

    return Number((mpg / gallonToLitre * milesToKilometre).toFixed(2))
}

console.log(converter(10))
// 3.54
console.log(converter(20))
// 7.08
console.log(converter(30))
// 10.62


// Solution 1
var LITRES_PER_GALLON = 4.54609188;
var KILOMETERS_PER_MILE = 1.609344;
function converter(mpg) {
    return Math.round(100 * mpg * KILOMETERS_PER_MILE / LITRES_PER_GALLON) / 100;
}


// Solution 2
function converter(mpg) {
    return +(mpg * .354006043538).toFixed(2)
}


// Solution 3
function converter(mpg) {
    return Math.round(mpg * 35.400604353821375031) / 100;
}


// Solution 4
function converter(mpg) {
    return +(mpg * 1.609344 / 4.54609188).toFixed(2)
}


// Solution 5
function converter(mpg) {
    return Math.round(((mpg * 1.609344) / 4.54609188) * 100) / 100;
}


// Solution 6
function converter(mpg) {
    let g = 4.54609188;
    let m = 1.609344;
    return Number((m * mpg / g).toFixed(2))

}


// Solution 7
function converter(mpg) { return +(mpg * 0.3540060435382138).toFixed(2) }


// Solution 8
function converter(mpg) {
    return Math.round(mpg * 35.400604) / 100
}


// Solution 9
function converter(mpg) {
    return Math.round(mpg * 160.9344 / 4.54609188) / 100
}


// Solution 10
function converter(mpg) {
    return +((mpg / 4.54609188) * 1.609344).toFixed(2);
}


// Solution 11
function converter(mpg) {
    return +(mpg * 0.354006044).toFixed(2);
}


// Solution 12
function converter(mpg) {
    return parseFloat((1.609344 / 4.54609188 * mpg).toFixed(2));
}