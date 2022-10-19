// Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    
    let strArr = [...str];

    let newArr = [];

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === '_' || strArr[i] === '-') {
            console.log(strArr[i])
            strArr[i + 1] = strArr[i+1].toUpperCase();
            newArr.push(strArr[i+1])
            i++;
        } else {
            newArr.push(strArr[i])
        }
    }

    return newArr.join('');

}


console.log(toCamelCase(''));
// '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior"));
// "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior"));
// "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C"));
// "ABC", "toCamelCase('A-B-C') did not return correct value")


// Solution 1
function toCamelCase(str) {
    var regExp = /[-_]\w/ig;
    return str.replace(regExp, function (match) {
        return match.charAt(1).toUpperCase();
    });
}


// Solution 2
function toCamelCase(str) {
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}


// Solution 3
function toCamelCase(str) {
    return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
}


// Solution 4
function toCamelCase(str) {
    return str.split(/\-|_/).reduce(function (previous, current, index) { return camelize(previous, current, index); });
}

function camelize(previous, current, index) {
    return previous + current.capitalizeFirstLetter();
}

String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


// Solution 5
function toCamelCase(str) {
    return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
}


// Solution 6
function toCamelCase(str) {
    if (str.length === 0) return str;
    let firstUpperCase = false;
    let res = "";

    if (str[0] === str[0].toUpperCase()) firstUpperCase = true;

    let arrStr = str.split(/-|_/)

    for (let i = 0; i < arrStr.length; i++) {
        if (i === 0 && !firstUpperCase) {
            res += arrStr[i];
        } else {
            res += capitilizeFirstLetter(arrStr[i]);
        }
    }

    return res;
}

function capitilizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1)
}


// Solution 7
function toCamelCase(str) {
    return str.replace(/(_|-)./g, m => m.substr(1, 1).toUpperCase());
}


// Solution 8
function toCamelCase(str) {
    return str.replace(/([-_])(\w)/g, function (match, dash, letter) { return letter.toUpperCase() });
}


// Solution 9
unction toCamelCase(str){
    var strArray;
    if (str.indexOf('-') !== -1) { //if delineated by -
        strArray = str.split('-');
    } else {
        strArray = str.split('_');  //if delineated by _
    }
    var camelCase = strArray[0]; //keeps first word value as is
    for (var i = 1, len = strArray.length; i < len; i++) {
        var capitalized = strArray[i].substr(0, 1).toUpperCase() + strArray[i].slice(1);
        camelCase += capitalized;
    }
    return camelCase;


}


// Solution 10
function toCamelCase(str) {
    return str.replace(/[_-][A-Za-z]/g, function (match) { return match[1].toUpperCase(); });
}


// Solution 11
function toCamelCase(str) {
    let arr = str.split('');
    for (i = 0; i < arr.length; i++) {
        let letter = arr[i];
        if (letter == '_' || letter == '-') {
            arr[i + 1] = arr[i + 1].toUpperCase();
            arr[i] = '';
        }
    }
    return arr.join('');
}


// Solution 12
function toCamelCase(str) {
    return str.replace(/[^a-z]./gi, x => x.toUpperCase().slice(-1))
}