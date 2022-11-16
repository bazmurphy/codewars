// Did she say hallo?

// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish

// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

function validateHello(greetings) {
  return /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings) 
}

console.log(validateHello('ahoj'))
// true

console.log(validateHello('meh'))
// false


// Solution 1
const validateHello = greetings => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);


// Solution 2
function validateHello(greetings) {
  return /(ahoj|ciao|czesc|h[ae]llo|hola|salut)/i.test(greetings)
}


// Solution 3
const hellos = {
  hello: 'english',
  ciao: 'italian',
  salut: 'french',
  hallo: 'german',
  hola: 'spanish',
  ahoj: 'czech republic',
  czesc: 'polish',
  }
  
  const validateHello = greetings => {
    for (key in hellos) {
     if (greetings.toLowerCase().includes(key)) {
       return true
     }
    }
    return false
  }


// Solution 4
const validateHello = greetings => /hello|ciao|salut|hallo|hola|ahoj|czesc/gi.test(greetings);


// Solution 5
function validateHello(greetings) {
  var known = ['hello','ciao','salut','hallo','hola','ahoj','czesc'];
  res =  false;
  if ( typeof greetings == "string") {
    known.map(function(v){
      regEx = new RegExp(v);
      if (regEx.test(greetings.toLowerCase()) == true ) {
        console.log("true" + v );
        res =  true;
        }
    });
  }
  return res;
}


// Solution 6
const vivas = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
const validateHello = message => new RegExp(vivas.join('|'), 'i').test(message);


// Solution 7
function validateHello(greetings) {
  const newStr = greetings.toLowerCase();

  if (newStr.includes('hello') ||
      newStr.includes('ciao')  ||
      newStr.includes('salut') ||
      newStr.includes('hallo') ||
      newStr.includes('hola')  ||
      newStr.includes('ahoj')  ||
      newStr.includes('czesc')) {
    return true;
  } else return false;
}


// Solution 8
const greetingPattern = /\b(hello|ciao|salut|hallo|hola|ahoj|czesc)\b/i

function validateHello (phrase) {
  return greetingPattern.test(phrase)
}


// Solution 9
function validateHello(greetings) { console.log(greetings);
  const hallos = {"hello" :"english",

"ciao":" - italian",

"salut":" - french",

"hallo":" - german",

"hola":" - spanish",

"ahoj":" - czech republic",

"czesc":" - polish" };
 // console.log(greetings);
  for (let greet of Object.keys(hallos)){
    if(greetings.toLowerCase().indexOf(greet)!=-1) {
      return true;
    }
  }
  return false;
}


// Solution 10
validateHello=_=>/.*(h[ea]llo|ciao|salut|hola|ahoj|czesc)/i.test(_)


// Solution 11
const validateHello = greetings => /(hello|ciao|salut|hallo|hola|ahoj|czesc)/g.test(greetings.toLowerCase())


// Solution 12
function validateHello(ge) {
  var g=ge.toLowerCase();
  return (g.indexOf('hello')!=-1 || g.indexOf('ciao')!=-1 || g.indexOf('salut')!=-1 || g.indexOf('hallo')!=-1 || g.indexOf('hola')!=-1 || g.indexOf('ahoj')!=-1 || g.indexOf('czesc')!=-1);
}


// Solution 13
function validateHello(greetings) {
  let res = /hello|ciao|salut|hallo|hola|ahoj|czesc/ig.test(greetings);
  return res;
}


// Solution 14
validateHello = greetings => /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings) ;