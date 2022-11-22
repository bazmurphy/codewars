// Sort the Gift Code

// Happy Holidays fellow Code Warriors!

// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

// Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

// Sort the Gift Code

// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

// Examples (Input -- => Output):

// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"


function sortGiftCode(code) {

    return code.split('')
                .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
                .join('');
    
}

console.log(sortGiftCode('abcdef'));
// 'abcdef'
console.log(sortGiftCode('pqksuvy'));
// 'kpqsuvy'
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'));
// 'abcdefghijklmnopqrstuvwxyz'


// Solution 1
function sortGiftCode(code) {
    return code.split('').sort().join('');
}


// Solution 2
function sortGiftCode(code) {
    return [...code].sort().join``
}


// Solution 3
const sortGiftCode = code => code.split('').sort().join('');


// Solution 4
function sortGiftCode(code) {
    return code.split('').sort().toString().replace(/,/g, '');
}


// Solution 5
function sortGiftCode(code) {
    return code.split("").sort().join("");
}


// Solution 6
function sortGiftCode(code) {

    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const odenAlfabeto = []

    for (let i = 0; i < alfabeto.length; i++) {
        for (let j = 0; j < code.length; j++) {
            if (alfabeto[i] === code[j]) {
                odenAlfabeto.push(code[j])
            }
        }
    }
    return odenAlfabeto.join('')
};


// Solution 7
const sortGiftCode = code => "abcdefghijklmnopqrstuvwxyz".split("").filter(letter => code.includes(letter)).join("")


// Solution 8
function sortGiftCode(code) {
    return code.length <= 26 ? code.split("").sort().join("") : "Too many characters"
}


// Solution 9
function sortGiftCode(code) {
    return code.split``.sort().join``
}


// Solution 10
sortGiftCode = c => c.split('').sort().join('');


// Solution 11
function sortGiftCode(code) {
    var bits = code.split("");
    bits.sort();
    return bits.join("");
}


// Solution 12
function sortGiftCode(code) {
    return code.substring(0, 26).split('').sort().join('');
}