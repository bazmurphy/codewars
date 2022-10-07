// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed(Just like the name of this Kata).Strings passed in will consist of only letters and spaces.Spaces will be included only when more than one word is present.

// Examples: spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw" spinWords("This is a test") => returns "This is a test" spinWords("This is another test")=> returns "This is rehtona test"

function spinWords(string) {
    
    // let arr = string.split(' ')

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].length >= 5) {
    //         arr[i] = arr[i].split('').reverse().join('');
    //     }
    // }

    // return arr.join(' ')

    return string.split(' ')
                .map(element => element.length >= 5 ? element.split('').reverse().join('') : element)
                .join(' ');
}


console.log(spinWords("Welcome"));
// "emocleW"
console.log(spinWords("Hey fellow warriors"));
// "Hey wollef sroirraw"
console.log(spinWords("This is a test"));
// "This is a test"
console.log(spinWords("This is another test"));
// "This is rehtona test"
console.log(spinWords("You are almost to the last test"));
// "You are tsomla to the last test"
console.log(spinWords("Just kidding there is still one more"));
// "Just gniddik ereht is llits one more"
console.log(spinWords("Seriously this is the last one"));
// "ylsuoireS this is the last one"


// Solution 1
function spinWords(words) {
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}


// Solution 2
function spinWords(string) {
    return string.replace(/\w{5,}/g, function (w) { return w.split('').reverse().join('') })
}


// Solution 3
function spinWords(str) {
    return str.split(' ').map(w => w.length < 5 ? w : w.split('').reverse().join('')).join(' ');
}


// Solution 4
function spinWords(str) {
    return str.split(' ').map(spinSingleWord).join(' ');
}

function spinSingleWord(word) {
    return word.length > 4 ? word.split('').reverse().join('') : word;
}


// Solution 5
function spinWords(str) {
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length >= 5)
            strArr[i] = strArr[i].split('').reverse().join('');
    }
    return strArr.join(' ');
}


// Solution 6
function spinWords(str) {
    wordsArray = str.split(' ');
    wordsArray.forEach(function (word, index) {
        if (word.length > 4) {
            wordsArray[index] = word.split('').reverse().join('');
        }
    });
    return wordsArray.join(' ');
}


// Solution 7
function spinWords(words) {
    return words.split(' ').map(w => w.length < 5 ? w : w.split('').reverse().join('')).join(' ');
}


// Solution 8
function spinWords(str) {
    return str.replace(/\w{5,}/g, function (w) {
        return w.split('').reverse().join('');
    });
}


// Solution 9
function spinWords(str) {
    return str.split(' ')
        .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
        .join(' ');
}


// Solution 10
function spinWords(str) {
    var _split = str.split(" "),
        _arr = [];
    for (var i = 0, len = _split.length; i < len; i++) {
        var _str = _split[i],
            _ns = '',
            _len = _str.length;
        if (_len >= 5) {
            while (_len > 0) {
                _ns += _str[_len - 1]
                _len--;
            }
            _str = _ns;
        }
        _arr.push(_str);
    }

    return _arr.join(' ');
}


// Solution 11
function spinWords(phraseOrWord) {
    const arrayWord = phraseOrWord.split(" ");
    if (arrayWord.length == 1) {
        return canRevert(phraseOrWord)
            ? revertWord(phraseOrWord)
            : phraseOrWord;
    }
    else {
        let spinnedArray = arrayWord.map(elem => {
            return canRevert(elem)
                ? revertWord(elem)
                : elem
        })

        return spinnedArray.join(" ")
    }
}

function canRevert(word) {
    return word.length >= 5
}

function revertWord(word) {
    if (word.length) {
        return word.split("").reverse().join("")
    }
}


// Solution 12
R = s =>
    s.split``.reverse().join``;

spinWords = s =>
    s.split(' ').map(e => e.length >= 5 ? R(e) : e).join(' ');