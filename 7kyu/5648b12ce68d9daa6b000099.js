// Number of People in the Bus

// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list(or array) of integer pairs.
// Elements of each pair represent number of people get into bus(The first item) and number of people get off the bus(The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station(after the last array. 
// Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there: D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function (busStops) {

    let total = 0;

    for (let i = 0; i < busStops.length; i++) {
        total += busStops[i][0]
        total -= busStops[i][1]
    }

    return total;
}

console.log(number([[10, 0], [3, 5], [5, 8]]));
// 5
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));
// 17
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));
// 21
console.log(number([[0, 0]]));
// 0


// Solution 1
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);


// Solution 2
var number = function (busStops) {
    var totalPeople = 0;
    for (var i = 0; i < busStops.length; i++) {
        totalPeople += busStops[i][0];
        totalPeople -= busStops[i][1];
    }
    return totalPeople;
}


// Solution 3
const number = busStops => busStops.reduce((p, n) => p + n[0] - n[1], 0)


// Solution 4
const number = busStops => busStops.reduce((n, [on, off]) => n + on - off, 0);


// Solution 5
var number = function (busStops) {
    return busStops.map(x => x[0] - x[1]).reduce((x, y) => x + y);
}


// Solution 6
const number = busStops => busStops.reduce((people, stop) => people + stop[0] - stop[1], 0)


// Solution 7
var number = function (busStops) {
    var num = 0;
    for (var i = 0; i < busStops.length; i++) {
        num += busStops[i][0] - busStops[i][1]
    }
    return num;
}


// Solution 8
const number = (bS) => bS.reduce(($, b) => $ + b[0] - b[1], 0);


// Solution 9
const number = busStops => {
    return busStops.reduce((people, next) => {
        const [on, off] = next;
        return (people + on) - off;
    }, 0);
}


// Solution 10
const number = busStops => {
    const sumOfIndex = x => busStops.map(arr => arr[x]).reduce((a, b) => a + b, 0);
    let enter = sumOfIndex(0);
    let leave = sumOfIndex(1);
    return enter - leave;
}


// Solution 11
var number = function (busStops) {
    return busStops.map(x => x[0] - x[1]).reduce((a, b) => a + b);
}


// Solution 12
var number = function (busStops) {
    let peopleInBus = 0;
    busStops.forEach(([enter, left]) => {
        peopleInBus += enter - left;
    })

    return peopleInBus
}