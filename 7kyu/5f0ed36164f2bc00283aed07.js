// Over The Road

// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. 
// Naturally, you would like to find out the house number of the people on the other side of the street. 
// The street looks something like this:

// Street

// 1 |   | 6
// 3 |   | 4
// 5 |   | 2

// Evens increase on the right; odds decrease on the left.
// House numbers start at 1 and increase without gaps.
// When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.
// Example(address, n-- > output)

// Given your house number address and length of street n, give the house number on the opposite side of the street.

// 1, 3 -- > 6
// 3, 3 -- > 4
// 2, 3 -- > 5
// 3, 5 -- > 8

// Note about errors

// If you are timing out, running out of memory, or get any kind of "error", read on.
// Both n and address could get upto 500 billion with over 200 random tests.
// If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash.
// This is not a kata problem so please don't post an issue. 
// Similarly if the tests don't complete within 12 seconds then you also fail.

// To solve this, you need to think of a way to do the kata without making massive lists or huge for loops.
// Read the discourse for some inspiration :)


function overTheRoad(address, n) {
    return (n * 2 + 1) - address;
}

console.log(overTheRoad(1, 3));
// 6
console.log(overTheRoad(3, 3));
// 4
console.log(overTheRoad(2, 3));
// 5
console.log(overTheRoad(3, 5));
// 8
console.log(overTheRoad(7, 11));
// 16
console.log(overTheRoad(23633656673, 310027696726));
// 596421736780



// Solution 1
function overTheRoad(address, n) {
    return (n * 2 + 1) - address;
}


// Solution 2
function overTheRoad(address, n) {
    var maximumPlusMinimum = n * 2 + 1;  // maximum adress is double n // the opposing of Maximum is always 1
    // adress + opposingAddress = n * 2 + 1
    // the opposite address is the maximumPlusMinimum minus your address
    return maximumPlusMinimum - address;
}


// Solution 3
const overTheRoad = (address, n) => (n * 2) + 1 - address


// Solution 4
const overTheRoad = (address, n) =>
    n * 2 - --address;


// Solution 5
function overTheRoad(address, n) {
    //code here
    let total = 2 * n;
    let difference = address - 1;
    return total - difference;
}


// Solution 6
var overTheRoad = (address, num) => num * 2 - (address - 1)


// Solution 7
function overTheRoad(a, n) {
    return (n * 2) + 1 - a
}


// Solution 8
function overTheRoad(address, n) {
    var lastEven = n * 2;
    var steps = 0;
    var oppositeHouse;

    var sideEven = (address % 2 == 0) ? false : true;

    if (sideEven) {
        oppositeHouse = address + 1;
        if (address == n) return address + 1;
        steps = n - address;
        console.log(steps)
        oppositeHouse += (steps * 2);
        console.log(oppositeHouse);
        return oppositeHouse;
    } else {
        oppositeHouse = address - 1;
        if (address == n) return address - 1;
        steps = (n + 1) - address;
        console.log(steps);
        oppositeHouse += (steps * 2);
        return oppositeHouse;
    }
    return 9;
}


// Solution 9
overTheRoad = (a, n) => 2 * n + 1 - a


// Solution 10
const overTheRoad = (address, n) => n + n + 1 - address;


// Solution 11
const overTheRoad = (address, n) => 2 * n + 1 - address;


// Solution 12
function overTheRoad(address, n){
    //   const sideEvens = [], sideOdds = []
    //   for(let i = 1, j = 2; i <= n * 2; i += 2, j += 2){
    //       sideOdds.push(i); sideEvens.unshift(j);
    //   }
    //   let index;
    //   if(address % 2 === 0){
    //     index = sideEvens.indexOf(address)
    //   }else{
    //     index = sideOdds.indexOf(address)
    //   }
    //   return address % 2 === 0 ? sideOdds[index] : sideEvens[index]
    return n * 2 - (address - 1);
}
//  n=3     n=4     n=5
//  1-6     1-8     1-10
//  3-4     3-6     3-8
//  5-2     5-4     5-6
//          7-2     7-4
//                  9-2
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7 8
// 1 2 3 4 5 6 7 8 9 10