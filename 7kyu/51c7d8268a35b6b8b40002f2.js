// Building Strings From a Hash

// Complete the solution so that it takes the object(JavaScript / CoffeeScript) or hash(ruby) passed in and generates a human readable string from its key / value pairs.

// The format should be "KEY = VALUE".
// Each key / value pair should be separated by a comma except for the last pair.

// Example:

// solution({ a: 1, b: '2' }) // should return "a = 1,b = 2"


function solution(pairs) {

    let output = [];

    for (let i = 0; i < Object.keys(pairs).length; i++) {
        output.push(`${Object.keys(pairs)[i]} = ${Object.values(pairs)[i]}`);
    }

    return output.join(',');

}

console.log(solution({ a: 1, b: '2' })) 
// should return "a = 1,b = 2"



// Solution 1
function solution(pairs) {
    return Object.keys(pairs)
        .map(function (k) { return k + ' = ' + pairs[k] })
        .join(',');
}


// Solution 2
function solution(pairs) {
    var array = [];
    for (var pair in pairs) {
        array.push((pair + ' = ' + pairs[pair]));
    }
    return array.join(',');
}


// Solution 3
const solution = pairs =>
    Object.entries(pairs)
        .map(([key, value]) => `${key} = ${value}`)
        .join(',');


// Solution 4
function solution(pairs) {
    return Object.keys(pairs).map(k => `${k} = ${pairs[k]}`).join(",");
}


// Solution 5
function solution(pairs) {
    var response = '';

    for (p in pairs) {
        if (!pairs.hasOwnProperty(p)) continue;
        response += p + " = " + pairs[p] + ",";
    }

    return response.slice(0, -1);
}


// Solution 6
function solution(pairs, str = []) {
    for (let i in pairs) {
        str.push(`${i} = ${pairs[i]}`)
    }
    return str.join(',')
}


// Solution 7
const solution = pairs =>
    `${Object.entries(pairs).map(([key, val]) => `${key} = ${val}`)}`;


// Solution 8
function solution(pairs) {
    return Object.keys(pairs).map(function (key) { return key + " = " + pairs[key]; }).join(",");
}


// Solution 9
function solution(pairs) {
    return Object.keys(pairs).map(e => `${e} = ${pairs[e]}`).join(',');
}


// Solution 10
function solution(pairs) {

    if (Object.keys(pairs).length) {
        var pairs_str = [];
        for (key in pairs) {
            if (pairs.hasOwnProperty(key)) {
                pairs_str.push([key, pairs[key]].join(' = '));
            }
        }
        return pairs_str.join(',');
    }
    return '';
}


// Solution 11
function solution(pairs) {
    const result = [];
    for (let i in pairs) {
        result.push(`${i} = ${pairs[i]}`)
    }
    return result.join(',');
};


// Solution 12
function solution(pairs) {
    let keys = Object.keys(pairs)
    let values = Object.values(pairs)
    let str = ""
    for (let i = 0; i < keys.length; i++) {
        str += keys[i] + " = " + values[i] + ","
    }
    return str.slice(0, str.length - 1)
}