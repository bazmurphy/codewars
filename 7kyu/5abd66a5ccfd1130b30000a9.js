// Row Weights

// Scenario

// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task

// Given an array of positive integers (the weights of the people), 
// return a new array/tuple of two integers, 
// where the first one is the total weight of team 1, 
// and the second one is the total weight of team 2.

// Notes

// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples

// rowWeights([13, 27, 49])  ==>  return (62, 27)

// Explanation:

// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

// Explanation:

// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)

// Explanation:

// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.


function rowWeights(array) {
    
    let weightOfTeamOne = 0;
    let weightOfTeamTwo = 0;

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            weightOfTeamOne += array[i];
        } else if (i % 2 !== 0) {
            weightOfTeamTwo += array[i];
        }
    }

    return [weightOfTeamOne, weightOfTeamTwo];

}

console.log(rowWeights([80]));
// [80, 0]
console.log(rowWeights([100, 50]));
// [100, 50]
console.log(rowWeights([50, 60, 70, 80]));
// [120, 140]
console.log(rowWeights([13, 27, 49]));
// [62, 27]
console.log(rowWeights([70, 58, 75, 34, 91]));
// [236, 92]
console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]));
// [211, 164]
console.log(rowWeights([0]));
// [0, 0]
console.log(rowWeights([100, 51, 50, 100]));
// [150, 151]
console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]));
// [207, 235]
console.log(rowWeights([0, 1, 0]));
// [0, 1]


// Solution 1
function rowWeights(array) {
    let t1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0);
    let t2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0);

    return [t1, t2]
}


// Solution 2
function rowWeights(array) {
    var arr = [0, 0];
    for (var i = 0; i < array.length; i++) {
        i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
    }
    return arr;
}


// Solution 3
rowWeights = arr => arr.reduce((a, b, i) => (a[i % 2] += b, a), [0, 0])


// Solution 4
function rowWeights(array) {
    var team1 = 0;
    var team2 = 0;
    array.forEach(function (element, index) {
        if (index % 2 == 0) {
            team1 += element;
        } else {
            team2 += element;
        }
    });
    return [team1, team2];
}


// Solution 5
const rowWeights = arr => arr.reduce((a, w, i) => (a[i % 2] += w, a), [0, 0]);


// Solution 6
function rowWeights(array) {
    let team1 = 0;
    let team2 = 0;
    let answer = [];

    for (let i = 0; i < array.length; i++) { //loop through array
        if (i % 2 === 0) {                 //if i is even add to team 1
            team1 += array[i];
        } else {                            //if not, add to team 2
            team2 += array[i];
        }
    }
    answer.push(team1, team2);          //push both totals to answer array
    return answer;
}


// Solution 7
function rowWeights(people) {
    /*
      Better have maintainable code
      with an efficient loop
      than ugly one-liner
    */
    var firstTeam = 0,
        secondTeam = 0,
        isFirst = true;
    for (var i = 0, max = people.length; i < max; i++) {
        if (isFirst) {
            firstTeam += people[i];
        } else {
            secondTeam += people[i];
        }
        isFirst = !isFirst;
    }
    return [firstTeam, secondTeam];
}


// Solution 8
function rowWeights(array) {
    return array.reduce((t, x, i) => {
        t[i % 2] += x;
        return t;
    }, [0, 0]);
}


// Solution 9
function rowWeights(array) {
    let team1 = array.reduce((sum, x, i) => i % 2 == 0 ? sum = sum + x : sum, 0);
    let team2 = array.reduce((sum, x, i) => i % 2 != 0 ? sum = sum + x : sum, 0);

    return [team1, team2];
}


// Solution 10
function rowWeights(array) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            sum1 += array[i];
        } else {
            sum2 += array[i];
        }
    }

    return [sum1, sum2];
}


// Solution 11
const rowWeights = array =>
    array.reduce((pre, val, idx) => (pre[idx & 1] += val, pre), [0, 0]);


// Solution 12
function rowWeights(array) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i in array) {
        if (i % 2 == 0) {
            sum1 += array[i]
        } else if (i % 2 != 0) {
            sum2 += array[i]
        }
    }
    return [sum1, sum2]
}