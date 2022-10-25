// Split Strings

// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str) {
    
    let arr = [];
    
    let a =  0;
    let b = 2;

    for (let i = 0; i < Math.ceil(str.length / 2); i++) {
      
        arr.push(str.slice(a,b))
        
        if (arr[i][1] === undefined) {
            arr[i] += '_'
        }

        a += 2;
        b += 2;
    }

    return arr;
}

console.log(solution("abcdef"));
// ["ab", "cd", "ef"]
console.log(solution("abcdefg"));
// ["ab", "cd", "ef", "g_"]
console.log(solution(""));
// []


// Solution 1
function solution(s) {
    return (s + "_").match(/.{2}/g) || []
}


// Solution 2
function solution(str) {
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) {
        str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i + 1]);
        i += 2;
    }
    return result;
}


// Solution 3
function solution(str) {
    arr = [];
    for (var i = 0; i < str.length; i += 2) {
        second = str[i + 1] || '_';
        arr.push(str[i] + second);
    }
    return arr;
}


// Solution 4
const solution = str => ((str + "_").match(/../g) || []);


// Solution 5
let solution = str => str.length == 0 ? [] : str.length % 2 != 0 ? (str += '_').split('').map((x, i) => i == 0 ? x : i % 2 == 0 ? ' ' + x : x).join('').split(' ') : str.split('').map((x, i) => i == 0 ? x : i % 2 == 0 ? ' ' + x : x).join('').split(' ');


// Solution 6
function solution(str) {
    let res = [];
    for (var i = 0; i < str.length; i += 2) res.push(`${str[i] + (str[i + 1] || '_')}`)
    return res;
}


// Solution 7
function solution(str) {
    str.length % 2 && (str += "_");
    return str.match(/.{1,2}/g) || [];
}


// Solution 8
function solution(str) {
    const arr = str.split('');

    return arr
        .map((el, i) => el + (arr.splice(i + 1, 1)[0] || '_'))
        .filter(el => el);
}


// Solution 9
function solution(str) {
    let numberOfPairs = Math.ceil(str.length / 2);
    var finalResultArr = [];
    if (str.length % 2 === 0) {
        for (let i = 0; i < str.length; i++) {
            if (i % 2 == 0) {
                finalResultArr.push(str[i].concat('', str[i + 1]));
            }
        }
    } else {
        for (let i = 0; i < str.length; i++) {
            if (i % 2 == 0) {
                if (i == str.length - 1) {
                    finalResultArr.push(str[i].concat('', '_'));
                } else {
                    finalResultArr.push(str[i].concat('', str[i + 1]));
                }
            }
        }
    }
    return finalResultArr;
}


// Solution 10
function solution(str) {
    return str.split("").map((e, i) => i % 2 === 0 ? e + (str[i + 1] || "_") : false).filter(e => e)
}


// Solution 11
function solution(str) {
    // check if the string length is odd add _
    if (str.length % 2 !== 0) str = `${str}_`
    return str ? str.match(/.{1,2}/g) : []
}


// Solution 12
function solution(str) {
    var evenStr = str % 2 === 0 ? str : `${str}_`;
    var result = [];

    while (evenStr.length >= 2) {
        let stringPair = evenStr.slice(0, 2);
        let newStr = evenStr.slice(2);
        result.push(stringPair);
        evenStr = newStr;
    }

    return result;

}