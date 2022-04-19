// Is the string uppercase ?

// Is the string uppercase ?
// Task

// Create a method to see whether the string is ALL CAPS.
// Examples(input -> output)

// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.


String.prototype.isUpperCase = function() {
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== this[i].toUpperCase()) {
            return false;
        }
    }
    return true;
}


console.log('Hello World'.isUpperCase());
// false, 'Hello World is not upper case');
console.log('hello world'.isUpperCase());
// false, 'hello world is not upper case');
console.log('Hello world'.isUpperCase());
// false, 'Hello world is not upper case');
console.log('hello World'.isUpperCase());
// false, 'hello World is not upper case');
console.log('HELLO WORLD'.isUpperCase());
// true, 'HELLO WORLD is upper case');
console.log('Bob walks his dog every day.'.isUpperCase());
// false, 'Bob walks his dog every day. is not upper case');
console.log('BOB walks his dog every day.'.isUpperCase());
// false, 'BOB walks his dog every day. is not upper case');
console.log('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase());
// true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
console.log('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase());
// false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
console.log('#lovewins'.isUpperCase());
// false, '#lovewins is not upper case');
console.log('#Lovewins'.isUpperCase());
// false, '#Lovewins is not upper case');
console.log('#loveWins'.isUpperCase());
// false, '#loveWins is not upper case');
console.log('#LoveWins'.isUpperCase());
// false, '#LoveWins is not upper case');
console.log('#LOVEWins'.isUpperCase());
// false, '#LOVEWins is not upper case');
console.log('#LoveWINS'.isUpperCase());
// false, '#LoveWINS is not upper case');
console.log('#LOVEWINs'.isUpperCase());
// false, '#LOVEWINs is not upper case');
console.log('#lOVEWINS'.isUpperCase());
// false, '#lOVEWINS is not upper case');
console.log('#LOVEWINS'.isUpperCase());
// true, '#LOVEWINS is upper case');


// Solution 1
String.prototype.isUpperCase = function () { return this == this.toUpperCase() }


// Solution 2
String.prototype.isUpperCase = function () {
    return this.toUpperCase() === this.toString();
}


// Solution 3
String.prototype.isUpperCase = function () {
    return !/[a-z]/.test(this);
};


// Solution 4
String.prototype.isUpperCase = function () {
    return this.toUpperCase() == this;
}


// Solution 5
if (!String.prototype.isUpperCase) {
    String.prototype.isUpperCase = function () {
        return this.toUpperCase() === String(this);
    };
}


// Solution 6
String.prototype.isUpperCase = function () {
    return this.valueOf().toUpperCase() === this.valueOf();
};


// Solution 7
String.prototype.isUpperCase = function () {
    if (this.toString() == this.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}


// Solution 8
String.prototype.isUpperCase = function () {
    return /^[^a-z]+$/.test(this)
}


// Solution 9
String.prototype.isUpperCase = function () {
    return this.search(/[a-z]/g) == -1;
}


// Solution 10
String.prototype.isUpperCase = function (_str) {
    return this.split("").every(function (c) { return c === c.toUpperCase(); });
}


// Solution 11
String.prototype.isUpperCase = function () {

    return this == this.toUpperCase() ? true : false;
}


// Solution 12
String.prototype.isUpperCase = function (e) {
    return this.toUpperCase() == this;
}