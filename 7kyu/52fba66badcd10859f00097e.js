// Disemvowel Trolls

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {

    let newStringArray = [];
    let splitString = str.split('');

    console.log(splitString);
    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i].toLowerCase() !== 'a' &&
            splitString[i].toLowerCase() !== 'e' &&
            splitString[i].toLowerCase() !== 'i' &&
            splitString[i].toLowerCase() !== 'o' &&
            splitString[i].toLowerCase() !== 'u') {
            newStringArray.push(splitString[i]);
        }
    }

    let newString = newStringArray.join('');

    return newString;
}


console.log(disemvowel("This website is for losers LOL!"))
// "Ths wbst s fr lsrs LL!"
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
// "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
console.log(disemvowel("What are you, a communist?"))
// "Wht r y,  cmmnst?"


// Solution 1
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}


// Solution 2
disemvowel = str => str.replace(/[aeiou]/gi, '');


// Solution 3
function disemvowel(str) {
    return (str || "").replace(/[aeiou]/gi, "");
}


// Solution 4
function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    return str.split('').filter(function (el) {
        return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
}


// Solution 5
const vowels = 'aeiou';

function disemvowel(str) {
    return str
        .split('')
        .filter(letter => !vowels.includes(letter.toLowerCase()))
        .join('');
}


// Solution 6
const disemvowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let newStr = '';
    for (let i = 0; i <= str.length; i++) {
        let char = str.charAt(i);
        if (vowels.indexOf(char) == -1) {
            newStr += char;
        }
    }
    return newStr;


};


// Solution 7
function disemvowel(str) { return str.replace(/[aeiou]/gi, '') }


// Solution 8
function disemvowel(str) {
    var diemvoweledStr = str.replace(/[aeiou]/gi, "");
    return diemvoweledStr;
}


// Solution 9
function disemvowel(str) {
    return str.replace(/[aeiouAEUIOU]/g, '');
}


// Solution 10
function disemvowel(string) {
    return string.replace(/[aeiouAEIOU]/g, '');
}