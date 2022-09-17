// Two Oldest Ages

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order.The array will always include at least 2 items.If there are two or more oldest age, then return both of them in array format.

// For example:
// twoOldestAges([1, 2, 10, 8]) 
// should return [8, 10]


function twoOldestAges(ages) {
    // console.log(ages);
    let agesSorted = ages.sort((a, b) => a - b);
    // console.log(agesSorted);
    let oldest = agesSorted[agesSorted.length -1]
    // console.log(oldest);
    let secondOldest = agesSorted[agesSorted.length -2]
    // console.log(secondOldest);
    return [secondOldest, oldest];
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
// 45, 87
console.log(twoOldestAges([6, 5, 83, 5, 3, 18]));
// 18, 83


// Solution 1
function twoOldestAges(ages) {
    return ages.sort(function (a, b) { return a - b; }).slice(-2);
}


// Solution 2
const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2)


// Solution 3
function twoOldestAges(ages) {
    var x = ages.sort(function (i, j) { return j - i; });
    return [x[1], x[0]];
}


// Solution 4
function twoOldestAges(ages) {
    let oldest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < ages.length; ++i) {
        if (ages[i] > oldest) {
            second = oldest;
            oldest = ages[i];
        }
        else if (ages[i] > second) {
            second = ages[i];
        }
    }

    return [second, oldest];
}


// Solution 5
function twoOldestAges(ages) {
    var max = ages[0]
    var lastMax = 0;
    for (var aid in ages)
        if (ages[aid] >= max) {
            if (lastMax < max) lastMax = max;
            max = ages[aid];
        }
        else if (ages[aid] >= lastMax) {
            lastMax = ages[aid];
        }
    console.log(lastMax, max);
    return [lastMax, max];
}


// Solution 6
function twoOldestAges(ages) {
    return ages.slice(0).sort((a, b) => a - b).slice(-2);
}


// Solution 7
function twoOldestAges(ages) {
    return ages.sort((a, b) => a - b).slice(-2);
}


// Solution 8
function twoOldestAges(ages) {
    let findOldest = Math.max(...ages);

    let oldest = ages.splice(ages.indexOf(findOldest), 1)

    let findSecondOldest = Math.max(...ages);

    let secondOldest = ages.splice(ages.indexOf(findSecondOldest), 1);

    return [...secondOldest, ...oldest]
}


// Solution 9
function twoOldestAges(ages) {
    let s = ages.sort((a, b) => b - a);
    return [s[1], s[0]];
}


// Solution 10
function twoOldestAges(array) {
    return array.sort(function (a, b) { return a - b }).slice(array.length - 2);
}