// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). 
// Spaces will only be present if there are multiple words. 
// Words will be separated by a single space(' ').

// Examples:

// toWeirdCase( "String" ); //=> returns "StRiNg"
// toWeirdCase( "Weird string case" ); //=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string){

  function applyWeirdCase(string) {
    return string.split("").map((element, index) => index % 2 === 0 ? element.toUpperCase() : element).join(""); 
  }

  // if (string.includes(" ")) {
  //   return string.split(" ").map((element) => applyWeirdCase(element)).join(" ");
  // } else {
  //  return applyWeirdCase(string);
  // }

  return string.includes(" ") ? string.split(" ").map((element) => applyWeirdCase(element)).join(" ") : applyWeirdCase(string);
}

console.log(toWeirdCase('This'));
// 'ThIs'
console.log(toWeirdCase('is'));
// 'Is'
console.log(toWeirdCase('This is a test'));
// 'ThIs Is A TeSt'


// Solution 1
function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}


// Solution 2
function toWeirdCaseCharacter(chr, index){
  return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
}

function toWeirdCaseWord(word){
  return word.split("").map(toWeirdCaseCharacter).join("");
}

function toWeirdCase(string){
  return string.split(" ").map(toWeirdCaseWord).join(" ");
}


// Solution 3
function toWeirdCase(string){
  return string.replace(/(\w{1,2})/g,(m)=>m[0].toUpperCase()+m.slice(1))
}


// Solution 4
function toWeirdCase(string){
  return string.split(/ /g).map(function (word) { return word.split('').map(function (c, i) { return i % 2 ? c.toLowerCase() : c.toUpperCase(); }).join('') }).join(' ');
}


// Solution 5
function toWeirdCase(str){
  var newStr = '';
  var gowno = '';
  var chuj = str.split(' ');
  for (j in chuj) {
    for (i = 0; i <= chuj[j].length; i++) {
      if (i % 2 == 0) {
        newStr += chuj[j].charAt(i).toUpperCase();
      } else {
        newStr += chuj[j].charAt(i);
      }  
    }
    if (j < chuj.length-1) { newStr += " "; }
  }
  return newStr;
}


// Solution 6
const toWeirdCase = function (string){
  return string.toLowerCase().split(' ').map(mapWord).join(' ');
};

const mapWord = function (word) {
  return word.split('').map(mapCharacter).join('');
};

const mapCharacter = function (letter, index) {
  return (index%2 === 0) ? letter.toUpperCase() : letter;
};


// Solution 7
function toWeirdCase(string) {
  var i = 0;
  return [].map.call(string.toLowerCase(), function(char) {
    if (char == " ") { i = -1; }
    return i++ % 2 ? char : char.toUpperCase();
  }).join('');
}


// Solution 8
function toWeirdCase(string){
  var str = '';
  var counter = 0;
  
  for(var i = 0; i < string.length; i++) {
    if(string[i] === ' ') {
      str += ' ';
      counter = 0;
    } else if(counter % 2 === 0) {
      str += string[i].toUpperCase();
      counter++;
    } else if(counter % 2 !== 0) {
      str += string[i].toLowerCase();
      counter++;
    }
  }
  return str;
};


// Solution 9
const toWeirdCase = string =>
  string.toUpperCase().replace(/\w{2}/g, val => val[0] + val[1].toLowerCase());


// Solution 10
function toWeirdCase(string) {

  function singleWeird(e) {
      var word = e.split('');
      for (var i = 0; i < word.length; i += 2) {
          word[i] = word[i].toUpperCase();
      }
      return word.join('');
  }

  return string.split(' ').map(function (e) {
      return singleWeird(e);
  }).join(' ');
}


// Solution 11
function toWeirdCase(string){
  var res = [];
  var k = 0;
  
  for (var i=0; i<string.length; i++){
     res.push( k%2==0 ? string[i].toUpperCase(): string[i].toLowerCase() );
     k++;
     if (string[i] == ' ') k=0;
  }
  return res.join("");
}


// Solution 12
function toWeirdCase(string){
  var weired = "";
  for (var index = 0, i = 0; i < string.length; i++) {                 
      weired += !(index % 2) ? 
            string[i].toUpperCase() :
            string[i].toLowerCase();              
            
      (string[i] == " ") ? 
        index = 0 : index++;           
  }
  return weired;
}


// Solution 13
function toWeirdCase(string){
  return string
    .split(' ')
    .map(
      (word) => word
                    .split('')
                    .map( 
                      (letter, i) => (i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase())
      ).join('')
    ).join(' ')
}


// Solution 14
var toWeirdCase=s=>s.split` `.map(s=>[...s].map((c,i)=>c["to"+(i&1?"Lower":"Upper")+"Case"]()).join``).join` `