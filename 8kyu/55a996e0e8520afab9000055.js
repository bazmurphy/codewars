// Who ate the cookie?

// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

function cookie(x){
  let culprit;
  if (typeof x === "string") {
    culprit = "Zach";
  } else if (typeof x === "number") {
    culprit = "Monica";
  } else {
    culprit = "the dog"
  }
  return `Who ate the last cookie? It was ${culprit}!`
}

console.log(cookie("Ryan"));
// "Who ate the last cookie? It was Zach!"
console.log(cookie(26));
// "Who ate the last cookie? It was Monica!"
console.log(cookie(2.3));
// "Who ate the last cookie? It was Monica!"
console.log(cookie(true));
// "Who ate the last cookie? It was the dog!"


// Solution 1
function cookie(x) {
  var t = typeof x
  var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
  return `Who ate the last cookie? It was ${who}!`
}


// Solution 2
function cookie(x){
  return `Who ate the last cookie? It was ${({string: "Zach", number: "Monica"}[typeof x] || "the dog")}!`;
}


// Solution 3
function cookie(x){
  return typeof x == "string" ? "Who ate the last cookie? It was Zach!" : typeof x == "number" ? "Who ate the last cookie? It was Monica!" : "Who ate the last cookie? It was the dog!";
}


// Solution 4
function cookie(x){
  var resultString = "Who ate the last cookie? It was "
    switch (typeof x){
      case "string": return resultString += "Zach!";
      case "number": return resultString += "Monica!";
      default: return resultString += "the dog!";
    }
  }


// Solution 5
function cookie(x){
  if (typeof x === "string" ){
    return "Who ate the last cookie? It was Zach!";
  } else if (typeof x === "number" ){
    return "Who ate the last cookie? It was Monica!";
  } else if (typeof x === "number"){
    return "Who ate the last cookie? It was Monica!";
  } else {
    return "Who ate the last cookie? It was the dog!";
  }
}


// Solution 6
const myObj = {
  'string': 'Zach',
  'number': 'Monica',
}

function cookie(x){
  retString = (myObj[typeof x]) ? myObj[typeof x] : 'the dog';
  return "Who ate the last cookie? It was " + retString + "!"
}


// Solution 7
cookie = x => `Who ate the last cookie? It was ${x.big ? 'Zach' : x.toFixed ? 'Monica' : 'the dog'}!`


// Solution 8
const cookie = x => {
  let result;
  typeof x === 'string' ? result = 'Zach' : typeof x === 'number' ? result = 'Monica' : result = 'the dog';
  return `Who ate the last cookie? It was ${result}!`
}


// Solution 9
const cookie = x =>
  `Who ate the last cookie? It was ${{string: `Zach`, number: `Monica`}[typeof x] || `the dog`}!`;


// Solution 10
function cookie(x) {
  if (typeof x === 'string') {
    return 'Who ate the last cookie? It was Zach!';
  } else if (typeof x === 'number') {
    return 'Who ate the last cookie? It was Monica!';
  } else {
    return 'Who ate the last cookie? It was the dog!';
  }
}


// Solution 11
function cookie(n){
  return "Who ate the last cookie? It was "+(+n===n?"Monica!":n.split?"Zach!":"the dog!");
}


// Solution 12
function cookie(x){
  console.log(x);
    // ...
    if(x === String(x)) return "Who ate the last cookie? It was Zach!"
    else if(x === +x) return "Who ate the last cookie? It was Monica!"
    return "Who ate the last cookie? It was the dog!"
  }


// Solution 13
function cookie(x){
  if (typeof(x) === 'string'){
  x = 'Zach'
} else if (typeof(x) === 'number'){
  x = "Monica"
} else x = "the dog"
return (`Who ate the last cookie? It was ${x}!`)
}


// Solution 14
function cookie(x){
  let type = typeof x
  let culprit = type == 'string' ? 'Zach' : type == 'number' ? 'Monica' : 'the dog' 
  return `Who ate the last cookie? It was ${culprit}!`
}