// Title Case

// A string is considered to be in title case if each word in the string is either(a) capitalised(that is, only the first letter of the word is in upper case) or(b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions(minor words).
// The list of minor words will be given as a string with each word separated by a space.
// Your function should ignore the case of the minor words string-- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments(Haskell)

// First argument: space - delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.

// ###Arguments(Other languages)

// First argument(required): the original string to be converted.
// Second argument(optional): space - delimited list of minor words that must always be lowercase except for the first word in the string.The JavaScript / CoffeeScript tests will pass undefined when this argument is unused.

// ###Example

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'


function titleCase(title, minorWords) {
    // if title is an empty string
    if (title === "") {
        return "";
    // if there is no minorWords argument
    } else if (!minorWords) {
        return title.toLowerCase().split(" ").map((element) => element.slice(0,1).toUpperCase() + element.slice(1)).join(" ");
    } else {
        let result = [];
        const titleWordsArray = title.toLowerCase().split(" ");
        const minorWordsArray = minorWords.toLowerCase().split(" ");

        titleWordsArray.forEach((element, index) => {
            // if the word does not appear in minorWords
            if (index === 0 || minorWordsArray.indexOf(element) === -1) {
                result.push(element.split(" ").map((element) => element.slice(0, 1).toUpperCase() + element.slice(1)).join(" "));
            } else {
                result.push(element);
            }
        })

        return result.join(" ");
    }
}


console.log(titleCase(''));
// ''
console.log(titleCase('a clash of KINGS', 'a an the of'));
// 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
// 'The Wind in the Willows'
console.log(titleCase('the quick brown fox'));
// 'The Quick Brown Fox'


// Solution 1
function titleCase(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}


// Solution 2
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function titleCase(title, minorWords) {
    var titleAr = title.toLowerCase().split(' '),
        minorWordsAr = minorWords ? minorWords.toLowerCase().split(' ') : [];

    return titleAr.map(function (e, i) { return minorWordsAr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e })
        .join(' ');
}


// Solution 3
const titleCase = (title, minorWords) => {

  if (!title) 
    return title;

  let cap = word => 
    word[0].toUpperCase() + word.slice(1);

  let minors = (minorWords || '')
    .toLowerCase()
    .split(' ');

  let result = title
    .toLowerCase()
    .replace(/\S+/g, w => minors.indexOf(w) === -1 ? cap(w) : w);

  return cap(result);

}


// Solution 4
function titleCase(title, minorWords) {
  minorWords = (minorWords || "").toLowerCase().split(' ');
  title = title.toLowerCase();
  return title.replace(/(\w)\w*/g, (word, firstChar, index) => {
    if (index === 0 || minorWords.indexOf(word) === -1)
      word = word.replace(firstChar, firstChar.toUpperCase());
    return word;
  });
}


// Solution 5
function titleCase(title, minorWords) {
  const minorArr = minorWords ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase()
    .split(' ')
    .map((word, i) => {
      if (!word) return word;
      if (minorArr.indexOf(word) !== -1 && i !== 0) return word;
      
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
}


// Solution 6
String.prototype.getWords = function () {
  return this.match(/\b\w+/gi) || [];
};
String.prototype.ucFirst = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}
Array.prototype.toLowerCase = function () {
  return this.map(function (word) {
    return word.toLowerCase();
  });
};

function titleCase(title, minorWords) {
  if (typeof title !== 'string') {
    return '';
  }
  if (typeof minorWords !== 'string') {
    minorWords = '';
  }
  var
    words = title.getWords().toLowerCase(),
    minorWords = minorWords.getWords().toLowerCase();
  
  return words.map(function (word, index) {
    return (minorWords.indexOf(word) >= 0 && index > 0) ? word : word.ucFirst();
  }).join(' ');
}


// Solution 7
function titleCase(title, minorWords) {
  if (typeof title === 'undefined' || title.length === 0) {
    return title;
  }
  
  var minorWordsArray = minorWords ? minorWords.toLowerCase().split(' ') : [];
  
  var resultTitle = title.toLowerCase().split(' ').map(function (word, index) {
    var strategy = getCapitalizationStrategy(word, minorWordsArray, index === 0);
    return strategy.applyTitleCase();
  }).join(' '); 
  
  return resultTitle;
  
  function getCapitalizationStrategy(word, minorWords, isFirstWord) {  
    if (word.length === 0) {
      return nullCapitalizationStrategy();
    }
    else if (isFirstWord || !isMinorWord()) {
      return regularWordCapitalizationStrategy();
    }
    else {
      return minorWordCapitalizationStrategy();
    }
    
    function isMinorWord() {
      return minorWords.some(function (mw) { 
        return mw === word;
      }); 
    }
    
    function nullCapitalizationStrategy() {
      return  {
        word: word,
        applyTitleCase: function () { 
          return word; 
        } 
      };
    }
    
    function regularWordCapitalizationStrategy() {
      return  {
        word: word,
        applyTitleCase: function () { 
          return word[0].toUpperCase() + word.slice(1).toLowerCase(); 
        } 
      };
    }
    
    function minorWordCapitalizationStrategy() {
      return  {
        word: word,
        applyTitleCase: function () { 
          return word.toLowerCase(); 
        }
      };
    }    
  }
}


// Solution 8
function titleCase(title, minorWords) {
  if(title.length === 0) return title;
  var words = title.toLowerCase().split(" ");
  var minorWordsArray = minorWords?minorWords.toLowerCase().split(" "):[];
  return words.map(function(word,index){
    if(minorWordsArray.indexOf(word) !== -1 && index!=0){
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}


// Solution 9



// Solution 10



// Solution 11



// Solution 12
