// Categorize New Member

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
// They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input

// Input will consist of a list of pairs. 
// Each pair contains information for a single potential member. 
// Information consists of an integer for the person's age and an integer for the person's handicap.

// Output

// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {

    let output = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            output.push("Senior");
        } else {
            output.push("Open");
        }
    }

    return output;

}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
// ['Open', 'Senior', 'Open', 'Senior']
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]))
// ['Open', 'Open', 'Open', 'Open']
console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]))
// ['Senior', 'Open', 'Open', 'Open']



// Solution 1
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

function openOrSenior(data) {
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}


// Solution 2
function openOrSenior(data) {
    function determineMembership(member) {
        return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
    }
    return data.map(determineMembership);
}


// Solution 3
function openOrSenior(data) {
    var result = [];
    data.forEach(function (member) {
        if (member[0] >= 55 && member[1] > 7) {
            result.push('Senior');
        } else {
            result.push('Open');
        }
    })
    return result;
}


// Solution 4
function openOrSenior(data) {
    return data.map(function (d) {
        return d[0] >= 55 && d[1] > 7 ? 'Senior' : 'Open';
    });
}


// Solution 5
function openOrSenior(data) {
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
}


// Solution 6
const openOrSenior = data => {
    let getOpenOrSenior = [];
    for (i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            getOpenOrSenior.push("Senior");
        } else {
            getOpenOrSenior.push("Open");
        }
    }
    return getOpenOrSenior;
}


// Solution 7
const openOrSenior = (members) => members.map(([age, handicap]) => (age >= 55) && (handicap > 7) ? 'Senior' : 'Open')


// Solution 8
function openOrSenior(data) {
    var rez = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) { rez.push("Senior"); } else rez.push("Open");
    }
    return rez;
}


// Solution 9
openOrSenior = data => data.map(e => (e[0] > 54 && e[1] > 7) ? "Senior" : "Open")


// Solution 10
const Category = {
    Open: 'Open',
    Senior: 'Senior',
};

function openOrSenior(data) {
    return data.map(([age, handicap]) => {
        if (age >= 55 && handicap > 7) {
            return Category.Senior;
        }

        return Category.Open;
    });
}


// Solution 11
function openOrSenior(data) {
    // ...
    var arr = [];
    for (var i = 0; i < data.length; i++) {
        arr[i] = 'Open';
        if (data[i][0] >= 55 && data[i][1] > 7) {
            arr[i] = 'Senior';
        }
    }
    return arr;
}