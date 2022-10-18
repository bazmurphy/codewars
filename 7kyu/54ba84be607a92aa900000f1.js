// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram.Ignore letter case.

// Example: (Input-- > Output)

// "Dermatoglyphics" -- > true
// "aba" -- > false
// "moOse" -- > false(ignore letter case)


function isIsogram(str) {

    let listOfChars = [];
    let repeatedLetter = [];

    for (let i = 0; i < str.length; i++) {

        if (listOfChars.indexOf(str[i].toLowerCase()) === -1) {
            listOfChars.push(str[i].toLowerCase());
        } else {
            repeatedLetter.push(str[i])
            console.log(`First Repeated Letter: ${repeatedLetter} listOfChars: ${listOfChars}`);
            return false;
        }

    }
    console.log(`No Repeated Letters. listOfChars: ${listOfChars}`);
    return true;
}


console.log(isIsogram("Dermatoglyphics"));
// true
console.log(isIsogram("isogram"));
// true
console.log(isIsogram("aba"));
// false, "same chars may not be adjacent"
console.log(isIsogram("moOse"));
// false, "same chars may not be same case"
console.log(isIsogram("isIsogram"));
// false
console.log(isIsogram(""));
// true, "an empty string is a valid isogram"


// // Solution 1
// function isIsogram(str) {
//     return new Set(str.toUpperCase()).size == str.length;
// }


// // Solution 2
// function isIsogram(str) {
//     return !/(\w).*\1/i.test(str)
// }


// // Solution 3
// function isIsogram(str) {
//     var i, j;
//     str = str.toLowerCase();
//     for (i = 0; i < str.length; ++i)
//         for (j = i + 1; j < str.length; ++j)
//             if (str[i] === str[j])
//                 return false;
//     return true;
// }


// // Solution 4
// function isIsogram(str) {
//     return !str.match(/([a-z]).*\1/i);
// }


// // Solution 5
// function isIsogram(str) {
//     // Downcase everything, split on letters.
//     str_lc = str.toLowerCase();
//     var letters = str_lc.split('');

//     // Utility: checks whether the given "value" at "index" is actually
//     // first encountered at this "index" position within a string ("self").
//     // Expected to be used with Array#filter.
//     var check4uniqueness = function (value, index, self) {
//         return self.indexOf(value) === index;
//     }

//     // An isogram string contains no duplicate, hence must have the same
//     // length than the array composed of unique letters from that string.
//     return letters.filter(check4uniqueness).length == str.length;
// }


// // Solution 6
// function isIsogram(str) {
//     return !str || (str.length === new Set(str.toLowerCase()).size);
// }


// // Solution 7
// function isIsogram(str) {
//     str = str.toLowerCase()

//     for (var i = 0; i < str.length; i++) {
//         if (str.indexOf(str.charAt(i), i + 1) >= 0) {
//             return false
//         }
//     }

//     return true
// }


// // Solution 8
// function isIsogram(str) {
//     var map = {};
//     var result = true;
//     str.split('').forEach(function (char) {
//         if (map[char.toUpperCase()] === undefined) {
//             map[char.toUpperCase()] = 1;
//         } else {
//             result = false;
//         }
//     });
//     return result;
// }


// // Solution 9
// function isIsogram(str) {
//     return !str || str.toLowerCase().split('').every(function (v, i, arr) { return arr.indexOf(v) == i; });
// }


// // Solution 10
// function isIsogram(str) {
//     //Create array from string and make it uppercased
//     var arr = str.split('').map(function (el) {
//         return el.toUpperCase();
//     });
//     //Test each value for duplicates.
//     return arr.every(function (el) {
//         return arr.indexOf(el) == arr.lastIndexOf(el);
//     });
// }


// // Solution 11
// function isIsogram(word) {
//     word = word.toLowerCase().split("").sort();
//     for (var i = 0; i < word.length - 1; i++) {
//         if (word[i] == word[i + 1]) return false;
//     }
//     return true;
// }


// // Solution 12
// function isIsogram(str) {
//     return str.length == new Set(str.toLowerCase()).size;
// }