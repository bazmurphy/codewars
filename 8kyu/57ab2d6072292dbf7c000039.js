// Polish alphabet

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

console.log(correctPolishLetters("Jędrzej Błądziński"))
// "Jedrzej Bladzinski"
console.log(correctPolishLetters("Lech Wałęsa"))
// "Lech Walesa"
console.log(correctPolishLetters("Maria Skłodowska-Curie"))
// "Maria Sklodowska-Curie"

function correctPolishLetters (string) {

    let arrayFromString = string.split("");

    for (let i = 0; i < arrayFromString.length; i++) {
        console.log(arrayFromString[i])
        if (arrayFromString[i] === 'ą') {
            arrayFromString[i] = 'a';
        } else if (arrayFromString[i] === 'ć') {
            arrayFromString[i] = 'c';
        }else if (arrayFromString[i] === 'ę') {
            arrayFromString[i] = 'e';
        }else if (arrayFromString[i] === 'ł') {
            arrayFromString[i] = 'l';
        }else if (arrayFromString[i] === 'ń') {
            arrayFromString[i] = 'n';
        }else if (arrayFromString[i] === 'ó') {
            arrayFromString[i] = 'o';
        }else if (arrayFromString[i] === 'ś') {
            arrayFromString[i] = 's';
        }else if (arrayFromString[i] === 'ź') {
            arrayFromString[i] = 'z';
        }else if (arrayFromString[i] === 'ż') {
            arrayFromString[i] = 'z';
        }
    }
            
    return arrayFromString.join("");

}


// Solution 1
function correctPolishLetters (string) {
    var dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
    return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
}


// Solution 2
var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters (string) {
  return string.split('').map((c) => polishLetters[c] || c).join("");
}


// Solution 3
function correctPolishLetters (string) {
    return string
    .replace(/ł/g, 'l')
    .replace(/ą/g, 'a')
    .replace(/ć/g, 'c')
    .replace(/ę/g, 'e')
    .replace(/ń/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ś/g, 's')
    .replace(/ź/g, 'z')
    .replace(/ż/g, 'z')
}


// Solution 4
function correctPolishLetters(s) {
    return s.replace(/[ąćęłńóśźż]/g, c => "acelnoszz"["ąćęłńóśźż".indexOf(c)])
}


// Solution 5
var mapping = {
    'ą': 'a',
    'ć': 'c',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    'ó': 'o',
    'ś': 's',
    'ź': 'z',
    'ż': 'z',
};

function correctPolishLetters(text) {
    return text.split('').map(c => mapping[c] || c).join('');
}