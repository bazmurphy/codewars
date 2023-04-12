// Digits explosion

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples

// explode("312")

// should return :

// "333122"

// explode("102269")

// should return :

// "12222666666999999999"

function explode(s) {
  
  let output = "";

  for (let i = 0; i < s.length; i++) {
    // console.log(s[i]);
    for (let j = 0; j < Number(s[i]); j++) {
      // console.log(j);
      output += s[i]
    }
  }

  return output;
}

console.log(explode("312"));
// "333122"
console.log(explode("102269"));
// "12222666666999999999"
console.log(explode("0"));
// ""
console.log(explode("000"));
// ""
console.log(explode("123"));
// "122333"


// Solution 1
function explode(s) {
  return s.split("").map((e) => e.repeat(+e)).join("");
}


// Solution 2
const explode = s => s.replace(/\d/g, d => d.repeat(d));


// Solution 3
function explode(s) {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    for (let num = s[i]; num > 0; num--) {
      newStr += s[i]
    }
  }
  return newStr
}


// Solution 4
explode=s=>[...s].map(n=>n.repeat(n)).join``


// Solution 5
const explode = s =>
  s.replace(/\d/g, val => val.repeat(val));


// Solution 6
function explode(s) {
  let arr = [];
  let split = s.split("");
  for (let item of s) {
    if (item == "1") {
      arr.push("1");
    } else if (item == "2") {
      arr.push("22");
    } else if (item == "3") {
      arr.push("333");
    } else if (item == "4") {
      arr.push("4444");
    } else if (item == "5") {
      arr.push("55555");
    } else if (item == "6") {
      arr.push("666666");
    } else if (item == "7") {
      arr.push("7777777");
    } else if (item == "8") {
      arr.push("88888888");
    } else if (item == "9") {
      arr.push("999999999");
    }
  }
  return arr.join("");
}


// Solution 7
function explode(s) {
  s = s.split("")
  newS = ""
  for (let i = 0; i < s.length; i++)  {
  switch(s[i]) {
    case "1":
      newS = newS +"1"
      break;
    case "2":
      newS = newS+ "22"
      break;
    case "3":
      newS = newS+ "333"
      break;
    case "4":
      newS = newS+ "4444"
      break;
    case "5":
      newS = newS+ "55555"
      break;
    case "6":
      newS = newS+ "666666"
      break;
    case "7":
      newS = newS+ "7777777"
      break;
    case "8":
      newS = newS+ "88888888"
      break;
    case "9":
      newS =newS+ "999999999"
      break;
    case "0":
      newS = newS+ ""
      break;
   } 
  }
    return newS;
  }


// Solution 8
const explode = s => s.split('').map(x => x.repeat(+x)).join('')


// Solution 9
const explode = $ => [...$].map(el => el.repeat(+el)).join('')


// Solution 10
function explode(s) {
  return s.toString().split('').map(function(el) {
    return el = el.repeat(el);
  }).join('');
}


// Solution 11
const explode = s => s.replace(/./g,l=> l.repeat(+l));


// Solution 12
function explode(s) { return s.split``.map((el) => el.repeat(+el)).join`` }


// Solution 13
const explode = s => s.replace(/./g, n => n.repeat(n));


// Solution 14
function explode(s) {
  let result = '';
  s.split('');
  for (i=0; i<s.length; i++) {
      result = result.concat(s[i].repeat(parseInt(s[i])));
  }
  return result;
}