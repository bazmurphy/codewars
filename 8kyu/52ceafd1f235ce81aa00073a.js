// Plural

// We need a simple function that determines if a plural is needed or not.
// It should take a number, and return true if a plural should be used with that number or false if not.
// This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

function plural(n) {
    if (n === 1) {
        return false
    }
    return true;
}

console.log(plural(0));
// true
console.log(plural(0.5));
// true
console.log(plural(1));
// false
console.log(plural(100));
// true
console.log(plural(Infinity));
// true


// Solution 1
function plural(n) {
    return n !== 1;
}


// Solution 2
function plural(n) {
    return n != 1;
}


// Solution 3
function plural(n) {
    return n === 1 ? false : true;
}


// Solution 4
const plural = n => n !== 1;


// Solution 5
function plural(n) {
    return (n !== 1);
}


// Solution 6
function plural(n) {
    if (n >= 0) {
        if (n == 1) {
            return false;
        } else {
            return true;
        }
    }
}


// Solution 7
function plural(n) {
    return Math.abs(n) !== 1
}


// Solution 8
let plural = n => n != 1


// Solution 9
function plural(n) {
    // ...
    if (n != 1) {
        return true;
    }
    return false;
}


// Solution 10
function PluralNecessityVerifier(number) {

}

PluralNecessityVerifier.prototype.verifyPotentialNeedOfPluralization = function (number) {
    const numberIsNotPotentiallyBuggyData = number !== 'Potentially Buggy Data';
    const numberIsReallyANumberAndNotAnIntruderDataType = typeof number === 'number';
    const numberIsNotNotANumber = !isNaN(number);
    const numberOfAbstractElementsDoesntEqualsOne = number !== 1;
    if (
        (numberIsNotPotentiallyBuggyData) &&
        (numberIsReallyANumberAndNotAnIntruderDataType) &&
        (numberIsNotNotANumber) &&
        (numberOfAbstractElementsDoesntEqualsOne)
    ) {
        return "It's true that the sentence needs pluralization";
    }
    return ''
}

function plural(n) {
    const pluralNecessityVerifierWorker = new PluralNecessityVerifier();
    return !!pluralNecessityVerifierWorker.verifyPotentialNeedOfPluralization(n);
}


// Solution 11
function plural(n) {

    return n != 1
}


// Solution 12
const plural = n => n === Infinity ? true : n < 1 ? true : n > 6 ? true : n % 1 != 0 ? true : false