// Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
// "(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// "(123) 456-7890"


// Solution 1
function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}


// Solution 2
function createPhoneNumber(numbers) {
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') '
        + numbers.substring(3, 6)
        + '-'
        + numbers.substring(6);
}


// Solution 3
function createPhoneNumber(numbers) {
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}


// Solution 4



// Solution 5
function createPhoneNumber(numbers) {
    return numbers.reduce((p, c) => p.replace('x', c), "(xxx) xxx-xxxx");
}


// Solution 6
function createPhoneNumber(numbers) {
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}


// Solution 7
function createPhoneNumber(numbers) {
    var n = numbers;
    return '(' + n[0] + n[1] + n[2] + ') ' + n[3] + n[4] + n[5] + '-' + n[6] + n[7] + n[8] + n[9];
}


// Solution 8
function createPhoneNumber(numbers) {
    return '(' + numbers.slice(0, 3).join('') + ') ' + numbers.slice(3, 6).join('') + '-' + numbers.slice(6).join('');
}


// Solution 9
function createPhoneNumber(numbers) {
    return '(' + numbers[0] + numbers[1] + numbers[2] + ') ' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9];
}


// Solution 10
createPhoneNumber = n => '(###) ###-####'.replace(/#/g, () => n.shift())


// Solution 11
function createPhoneNumber(numbers) {
    numbers.unshift("(");
    numbers.splice(4, 0, ")", " ");
    numbers.splice(9, 0, "-");
    return numbers.join("");
}


// Solution 12
function createPhoneNumber(numbers) {
    const areaCode = numbers.slice(0, 3).join("");
    const firstThree = numbers.slice(3, -4).join("");
    const lastFour = numbers.slice(6).join("");
    return `(${areaCode}) ${firstThree}-${lastFour}`;
}