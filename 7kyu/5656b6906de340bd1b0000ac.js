// Two to One

// Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    // split both strings
    // alphabetically order both strings
    // creata a new array
    // iterate through string one
    // push unique letters to new array
    // iterate through string two
    // push unique letters to new array
    // alphabetically sort new array
    // join new array into string

    // let s1Array = s1.split("").sort();
    // let s2Array = s2.split("").sort();
    // console.log('s1Array:', s1Array);
    // console.log('s2Array:', s2Array);

    // let newArray = [];

    // for (let i = 0; i < s1Array.length; i++) {
    //     if (newArray.includes(s1Array[i])) {
    //         continue;
    //     } else {
    //         newArray.push(s1Array[i])
    //     }
    // }

    // for (let i = 0; i < s2Array.length; i++) {
    //     if (newArray.includes(s2Array[i])) {
    //         continue;
    //     } else {
    //         newArray.push(s2Array[i])
    //     }
    // }

    // console.log('newArray:', newArray)

    // return newArray.sort().join("");

    // learning about "Set" (unique values)
    return [...new Set(s1.concat(s2).split(""))].sort().join("")
}

console.log(longest("aretheyhere", "yestheyarehere"))
// "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
// "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions"))
// "acefghilmnoprstuy"


// Solution 1
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')


// Solution 2
function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}


// Solution 3
function longest(s1, s2) {
    // your code
    s3 = s1 + s2;
    s4 = s3.split("");
    s4 = s4.sort().filter(function (element, index, array) {
        return element !== array[index - 1];
    });
    return s4.join("");
}


// Solution 4
function longest(s1, s2) {
    let str = new Set([...s1, ...s2]);
    return [...str].sort().join('');
}


// Solution 5
function longest(s1, s2) {
    let output = [];
    let combi = s1.concat(s2);
    let array = combi.split('').sort();

    for (let i = 0; i <= array.length; i++) {
        console.log(array[i]);//test
        if (!output.includes(array[i])) {
            output.push(array[i]);
        }
    }
    return output.join('');
}


// Solution 6
function longest(s1, s2) {
    return (s1 + s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}


// Solution 7
const longest = ($1, $2) => [...new Set([...$1, ...$2])].sort().join('')


// Solution 8
function longest(s1, s2) {
    return [...(new Set(s1 + s2))].sort().join('');
}


// Solution 9
function longest(s1, s2) {
    // your code
    let duplicates = {}, uniqueChars = [];
    for (let i = 0; i < Math.max(s1.length, s2.length); i++) {
        if (i < s1.length) {
            if (duplicates[s1[i]]) {
                duplicates[s1[i]]++
            } else {
                duplicates[s1[i]] = 1;
            }
        }
        if (i < s2.length) {
            if (duplicates[s2[i]]) {
                duplicates[s2[i]]++
            } else {
                duplicates[s2[i]] = 1;
            }
        }
    }
    for (let key in duplicates) {
        uniqueChars.push(key)
    }
    return uniqueChars.sort().join('')
}


// Solution 10
const longest = (s1, s2) => Array.from(s1 + s2)
    .sort()
    .filter((x, i, a) => x !== a[i - 1])
    .join('');