// Split The Bill

// It's tricky keeping track of who is owed what when spending money in a group. 
// Write a function to balance the books.

// The function should take one parameter: an object/dict with two or more name-value pairs 
// which represent the members of the group and the amount spent by each.
// The function should return an object/dict with the same names, 
// showing how much money the members should pay or receive.

// Further points:

// The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
// If value is a decimal, round to two decimal places.

// Translations and comments (and upvotes!) welcome.
// Example

// 3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

// var group = {
//     A: 20, 
//     B: 15, 
//     C: 10
// }

// splitTheBill(group) // returns {A: 5, B: 0, C: -5}


function splitTheBill(x) {
    let total = 0;
    let result = {};
    let people = 0;
    for (let item in x) {
        total += x[item];
        people += 1;
    }
    // console.log(total);
    // console.log(people);
    let average = total / people;
    // console.log(average);
    for (let item in x) {
      let calculation = x[item] - average;
      if (Number.isInteger(calculation)) {
        result[item] = calculation;
      } else {
        result[item] = Number(calculation.toFixed(2));
      }
    }
    console.log(`The bill total is £${total}, split between ${people} people, each must pay £${average}`)
    // console.log(result);
    return result;
}

console.log(splitTheBill({A: 20, B: 15, C: 10}))
//  {A: 5, B: 0, C: -5})
console.log(splitTheBill({A: 40, B: 25, X: 10}))
// {A: 15, B: 0, X: -15});


// Solution 1
function splitTheBill(x) {
    var average = 0;
    var count = 0;
    
    for(item in x){
      average += x[item];
      count++;
    }
    average = average / count;  
    
    for(item in x){
      x[item] = Math.round((x[item] - average) * 100) / 100;
    }
    
    return x;
}


// Solution 2
const splitTheBill = x => {
    let vals = Object.values(x),
        avg  = vals.reduce((s, v) => s + v) / vals.length;
    return Object.keys(x).reduce((y, v) => (y[v] = +(x[v] - avg).toFixed(2), y), {});
}


// Solution 3
const splitTheBill = x => {
    const avg = Object.values(x).reduce((r, e) => r + e, 0) / Object.values(x).length;
    for (let key in x) x[key] = +(x[key] - avg).toFixed(2);
    return x; 
}


// Solution 4
function splitTheBill(x) {
    var avg = 0,
        count = 0,
        result = {},
        i;
    for (i in x) {
        if (x.hasOwnProperty(i)) {
            avg += x[i];
            ++count;
        }
    }
    avg /= count;
    for (i in x) {
        if (x.hasOwnProperty(i)) {
            result[i] = Math.round((x[i] - avg) * 100) / 100;
        }
    }
    return result;
}


// Solution 5
const splitTheBill = x =>
    (avg => Object.keys(x).reduce((pre, val) => (pre[val] = Math.round((x[val] - avg) * 1e2) / 1e2, pre), {}))
        (Object.values(x).reduce((pre, val) => pre + val) / Object.values(x).length);


// Solution 6
function splitTheBill(x) {
    const obj = {};
    let values = Object.keys(x);
    let average = values.slice().reduce((acc, cur) => acc + x[cur], 0) / values.length;

    for (let key in x) {
        obj[key] = Number((x[key] - average).toFixed(2));
    }

    return obj;
}


// Solution 7
function splitTheBill(x) {
    // Instantiate a blank object to return
    let finalObject = {};
    // Figure out how many people there are in the group
    const totalNumberOfPeople = Object.keys(x).length;
    // Figure out the total cost of everyones payments together
    const totalCost = Object.values(x).reduce((sum, b) => sum + b, 0)
    // Split the bill equally to figure out how much people paid before being owed / owing.
    const valuePerPerson = totalCost / totalNumberOfPeople;
    // minus the value per person const from the amount each person spent so that we can see if they spent more or less than the value intended
    // and put that in the object with their name key
    const finalAmounts = Object.entries(x).forEach(([person, value]) => {
        const amountOwed = value - valuePerPerson;
        finalObject[person] = Math.round(amountOwed * 100) / 100;
    })
    return finalObject;
}


// Solution 8
function splitTheBill(x) {
    var total = 0;
    var count = 0;

    for (item in x) {
        total += x[item];
        count++;
    }
    var average = total / count;

    for (item in x) {
        x[item] = Math.round((x[item] - average) * 100) / 100;
    }

    return x;
}


// Solution 9
splitTheBill = (a, b = Object.entries(a)) => (c => b.reduce((a, [x, y]) => (a[x] = (Math.round((y - c) * 100)) / 100, a), {}))(b.reduce((a, b) => b[1] + a, 0) / b.length)


// Solution 10

with (require('ramda'))
var splitTheBill = x => {
    const subtractAverage = pipe(values, mean, of, partialRight(subtract))(x)
    const mapper = pipe(subtractAverage, bind(Number.prototype.toFixed), apply(__, [2]), Number)
    return map(mapper)(x)
}


// Solution 11
function splitTheBill(x) {
    let total = 0,
        count = 0
    for (let i in x) {
        count++
        total += x[i]
    }
    let average = total / count
    for (let i in x) {
        x[i] = +(x[i] - average).toFixed(2)
    }
    return x
}


// Solution 12
const splitTheBill = (bill) => {
    const values = Object.values(bill);
    const total = values.reduce((acc, curr) => acc + curr, 0);
    const each = (total / values.length)
    for (let key in bill) {
        bill[key] -= each;
        bill[key] = +bill[key].toFixed(2);
    }
    return bill;
};