// Sort and Star

// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {

    let sort = s.sort((a,b) => a < b ? -1 : a > b ? 1 : 0)
    // console.log(sort)
    let first = sort.shift()
    // console.log(first)
    let final = first.split("").join("***")
    // console.log(final)
    return final;

}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
// 'b***i***t***c***o***i***n'
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])); 
// 'a***r***e'


// Solution 1
function twoSort(s) {
    return s.sort()[0].split('').join('***');
}

// Solution 2
twoSort = s => s.sort()[0].split('').join('***')

// Solution 3
const twoSort = s => [...s.sort()[0]].join('***');

// Solution 4
function twoSort(s) {
    s.sort();
    return s[0].split('').join('***');
} 