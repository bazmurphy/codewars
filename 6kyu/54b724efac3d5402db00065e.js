// Decode the Morse code 

// In this kata you have to write a simple Morse code decoder. 
// While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.

// The Morse code encodes every character as a sequence of "dots" and "dashes". 
// For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. 
// The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. 
// These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"

// NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

// The Morse code table is preloaded for you as a dictionary, feel free to use it:

// Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']

// C: provides parallel arrays, i.e. morse[2] == "-.-" for ascii[2] == "C"

// NASM: a table of pointers to the morsecodes, and a corresponding list of ascii symbols

// All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

// Good luck!

const MORSE_CODE = {
    '-.-.--': '!',
    '.-..-.': '"',
    '...-..-': '$',
    '.-...': '&',
    '.----.': '\'',
    '-.--.': '(',
    '-.--.-': ')',
    '.-.-.': '+',
    '--..--': ',',
    '-....-': '-',
    '.-.-.-': '.',
    '-..-.': '/',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '..--..': '?',
    '.--.-.': '@',
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '..--.-': '_',
    '...---...': 'SOS'
}

decodeMorse = function (morseCode) {

    return morseCode
        .trim()
        .split(' ')
        .map(element => MORSE_CODE[element] ? MORSE_CODE[element] : '_')
        .join('')
        .split('__')
        .join(' ')

}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
// 'HEY JUDE'



// Solution 1
decodeMorse = function (morseCode) {
    function decodeMorseLetter(letter) {
        return MORSE_CODE[letter];
    }
    function decodeMorseWord(word) {
        return word.split(' ').map(decodeMorseLetter).join('');
    }
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}


// Solution 2
decodeMorse = function (morseCode) {
    return morseCode
        .trim()
        .split(/  | /)
        .map((code) => MORSE_CODE[code] || ' ')
        .join('');
}


// Solution 3
decodeMorse = function (morseCode) {
    let result = ""
    let tmp = morseCode.trim()
    tmp += " "
    let stk = ""
    for (let i = 0; i < tmp.length; i++) {
        let s = tmp[i]
        stk += s
        switch (stk) {
            case "...---... ":
                result += "SOS"
                stk = ""
                break
            case "  ":
                result += " "
                stk = ""
                break;
            case ". ":
                result += "E"
                stk = ""
                break;
            case "- ":
                result += "T"
                stk = ""
                break;
            case ".. ":
                result += "I"
                stk = ""
                break;
            case "... ":
                result += "S"
                stk = ""
                break;
            case ".... ":
                result += "H"
                stk = ""
                break;
            case "...- ":
                result += "V"
                stk = ""
                break;
            case "..- ":
                result += "U"
                stk = ""
                break;
            case "..-. ":
                result += "F"
                stk = ""
                break;
            case ".- ":
                result += "A"
                stk = ""
                break;
            case ".-. ":
                result += "R"
                stk = ""
                break;
            case ".-.. ":
                result += "L"
                stk = ""
                break;
            case ".-- ":
                result += "W"
                stk = ""
                break;
            case ".--. ":
                result += "P"
                stk = ""
                break;
            case ".--- ":
                result += "J"
                stk = ""
                break;
            case "-. ":
                result += "N"
                stk = ""
                break;
            case "-.. ":
                result += "D"
                stk = ""
                break;
            case "-... ":
                result += "B"
                stk = ""
                break;
            case "-..- ":
                result += "X"
                stk = ""
                break;
            case "-.- ":
                result += "K"
                stk = ""
                break;
            case "-.-. ":
                result += "C"
                stk = ""
                break;
            case "-.-- ":
                result += "Y"
                stk = ""
                break;
            case "-- ":
                result += "M"
                stk = ""
                break;
            case "--. ":
                result += "G"
                stk = ""
                break;
            case "--.. ":
                result += "Z"
                stk = ""
                break;
            case "--.- ":
                result += "Q"
                stk = ""
                break;
            case "-.-.-- ":
                result += "!"
                stk = ""
                break;
            case ".-.-.- ":
                result += "."
                stk = ""
                break;
            case "--- ":
                result += "O"
                stk = ""
                break;

        }
    }
    return result
}


// Solution 4
decodeMorse = function (morseCode) {
    return morseCode.trim().split(' ').map(a => MORSE_CODE[a] || ' ').join('').replace(/\s+/g, ' ');
}


// Solution 5
decodeMorse = function (morseCode) {
    return morseCode.trim().split('   ').map(function (word) {
        return word.split(' ').map(function (letter) {
            return MORSE_CODE[letter];
        }).join('');
    }).join(' ');
}


// Solution 6
const convertCharacter = character => MORSE_CODE[character];

const convertWord = word => word
    .split(" ")
    .map(convertCharacter)
    .join('');

const convertSentence = sentence => sentence
    .trim()
    .split('  ')
    .map(convertWord)
    .join(' ');

decodeMorse = morseCode => convertSentence(morseCode);


// Solution 7
decodeMorse = function (mc) {
    return mc.trim().split('   ').map(function (v) { return v.split(' ').map(function (w) { return MORSE_CODE[w]; }).join(''); }).join(' ');
};


// Solution 8
decodeMorse = function (morseCode) {
    return morseCode.split("   ").
        map(s => s.split(" ")).
        map(s => s.map(s => MORSE_CODE[s])).
        map(s => s.join("")).
        join(" ").trim();

}


// Solution 9
decodeMorse = function (morseCode) {
    return morseCode.trim().split(/\s{3}/).map(function (word) {
        return word.split(/\s/).map(function (char) { return MORSE_CODE[char]; }).join('');
    }).join(' ');
}


// Solution 10
decodeMorse = function (morseCode) {
    var wordArr = morseCode.trim().split('   ');
    return wordArr.map(decodeWord).join(' ');
}

decodeWord = function (word) {
    var letters = word.split(' ');
    return letters.map(decodeLetter).join('');
}

decodeLetter = function (letter) {
    return MORSE_CODE[letter];
}


// Solution 11
decodeMorse = function (morseCode) {
    var morse = {
        'A': '.-', 'B': '-...', 'C': '-.-.',
        'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..',
        'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---',
        'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-',
        'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..',

        '0': '-----', '1': '.----', '2': '..---',
        '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..',
        '9': '----.',

        ',': '--..--', '.': '.-.-.-', ':': '---...', ';': '-.-.-.',
        '?': '..--..', '=': '-...-', "'": '.----.', '/': '-..-.',
        '!': '-.-.--', '-': '-....-', '_': '..--.-', '(': '-.--.',
        ')': '-.--.-', '$': '...-..-', '&': '. . . .', '@': '.--.-.',

        'SOS': '...---...'


    }
    var arr = morseCode.replace(/(^\s*)|(\s*$)/g, "").replace(/(\s)\1+/g, " temp ").split(" ");
    console.log(morseCode)
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        // result += MorseCode.get(arr[i]); 
        if (arr[i] == "temp") {
            result += " "
        }
        for (key in morse) {
            if (arr[i] == morse[key]) {
                result += key;
            }
        }
    }
    return result
}


// Solution 12
const decodeMorse = mc => mc.trim().split('   ').map(v => v.split(' ').map(w => MORSE_CODE[w]).join('')).join(' ');