// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    return str.split(" ").map((element) => "!?.,".indexOf(element) === -1 ? element.slice(1) + element.slice(0,1) + "ay" : element).join(" ");
}

console.log(pigIt('Pig latin is cool'))
// "igPay atinlay siay oolcay"
console.log(pigIt('This is my string'))
// "hisTay siay ymay tringsay"
console.log(pigIt('Hello world !'));
// "elloHay orldway !"


// Solution 1
function pigIt(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}


// Solution 2
function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
        return w.slice(1) + w[0] + 'ay';
    });
}


// Solution 3
function pigIt(str) {
    var arrayWord = str.split(' ');
    return arrayWord.map(function (word) {
        var firstLetter = word.charAt(0);
        return word.slice(1) + firstLetter + 'ay';
    }).join(' ');
}


// Solution 4
function pigIt(str) {
    let newStr = "";
    const array = str.split(" ");
    for (let i of array) {
        let firstLetter = ""; //use to store the first letter in the word
        for (let j in i) {
            if (j === '0') {
                firstLetter += i[j]; //store first letter
            }
            else {
                newStr += i[j];
            }
        }
        newStr += firstLetter; //put it into end of the word
        newStr += " "; //space
    }
    newArray = newStr.split(" ");
    newArray.pop();//delete the empty space
    let result = "" //store the result
    for (let index of newArray) {
        if (index.length != 1) {
            result += index;
            result += "ay";
            result += " ";
        }
        else if (index.length == 1) {
            if (index == "?" || index == "!" || index == ".") { //use to check if the last length is not equal symbol
                result += index;
            }
            else {
                result += index;
                result += "ay";
                result += " ";
            }

        }
    }

    if (result[result.length - 1] === " ") { //delete last space
        result = result.slice(0, result.length - 1);
    }
    return (result);
}


// Solution 5
function pigIt(str) {
    //Code here
    return str.replace(/\b(\w)(\w*)\b/g, "$2$1ay");
}


// Solution 6
function pigIt(str) {
    return str.split(" ").map((item) => `${item.substr(1)}${item[0]}ay`).join(" ")
}


// Solution 7
function pigIt(str) {
    //Code here
    return str.split(' ').map(word => {
        return word.substring(1) + word[0] + 'ay';
    }).join(' ');
}


// Solution 8
const pigIt = s => s.replace(/(\w)(\w*)/g, '\$2\$1ay');


// Solution 9
function pigIt(str) {
    return str.replace(/\w+/g, match => match.slice(1) + match.charAt(0) + "ay");
}


// Solution 10
function pigIt(str) {
    return str
        .split(' ')
        .map((word) => word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + 'ay' : word)
        .join(' ')
}


// Solution 11
function pigIt(str) {
    return str.replace(/\b(\w)(\w*)\b/gi, '$2$1ay');
}


// Solution 12
function pigIt(str) {
    return str
        .split(" ")
        .map(word => `${word.substring(1)}${word.split('').shift()}${word.charCodeAt(0) > 63 ? 'ay' : ''}`)
        .join(" ");
}