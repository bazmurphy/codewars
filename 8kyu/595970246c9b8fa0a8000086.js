// Capitalization and Mutability
// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizeWord(word) {

    let arrayOfChars = word.split("")
    // console.log(arrayOfChars)
    arrayOfChars[0] = arrayOfChars[0].toUpperCase();
    // console.log(arrayOfChars)
    let finalString = arrayOfChars.join("")
    // console.log(finalString)
    return finalString;

}

console.log(capitalizeWord('word'));
// 'Word'
console.log(capitalizeWord('i'));
// 'I'
console.log(capitalizeWord('glasswear'));
// 'Glasswear'



// Solution 1
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}


// Solution 2
const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());


// Solution 3
const capitalizeWord = word => word[0].toUpperCase()+word.slice(1);


// Solution 4
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}


// Solution 5
function capitalizeWord(word) {
    const first = word[0].toUpperCase()
    return first + word.slice(1)   
}


// Solution 8
const capitalizeWord = s => s[0].toUpperCase() + s.slice(1)