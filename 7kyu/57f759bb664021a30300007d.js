// Switcheroo

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
  let output = "";
  for (let char of x) {
    if (char === "a") {
      output += "b";
    } else if (char === "b") {
      output += "a";
    } else {
      output += char;
    }
  }
  return output;
}


console.log(switcheroo('abc'))
// 'bac'
console.log(switcheroo('aaabcccbaaa'))
// 'bbbacccabbb'
console.log(switcheroo('ccccc'))
// 'ccccc'

// Solution 1
const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")


// Solution 2
function switcheroo(x){
  return x.split('').map(function(e){
    if (e =='b')return 'a';
    if (e == 'a') return 'b';
    if(e=='c') return 'c'
  }).join('');
}

// Solution 3
const switcheroo = x => x.replace(/[ab]/gi, match => match === 'a' ? 'b' : 'a');


// Solution 4
function switcheroo(x){
  return [...x].map(v => v == 'a' ? v = 'b' : v == 'b' ? v = 'a' : v).join('');
}


// Solution 5
const switcheroo = x => x.split('').map(letter => letter === 'a' ? 'b' : (letter === 'b' ? 'a' : 'c')).join('');


// Solution 6
const switcheroo = ( $ ) => $.replace(/[ab]/g, x=> x === 'a' ? 'b' : x === 'b' ? 'a' : x)


// Solution 7
function switcheroo(x){
  return x.replace(/[ab]/g, function(c) { return c === 'a' ? 'b' : 'a'; });
}


// Solution 8
function switcheroo(x){
  let str = "";
  for (var i = 0; i < x.length; i++) {
      if (x[i] === 'a') {
        str += 'b';
      } else if (x[i] === 'b') {
        str += 'a';
      } else {
        str += x[i];
      }
  } return str;
}


// Solution 9
const switcheroo = x =>
  x.replace(/[ab]/g, val => val > `a` ? `a` : `b`);


// Solution 10
switcheroo=a=>a.replace(/./g,a=>'abc'['bac'.indexOf(a)])


// Solution 11
function switcheroo(x){
  return x.replace(/[ab]/g, char => char == "a" ? "b" : "a");
}


// Solution 12
function switcheroo(x){
  x = x.replace(/a|b/g, v => {
       if (v=="a") {
         return "b"
       } else {
         return "a"}
    });
  return x;
}


// Solution 13
const dict = {
    'a': 'b',
    'b': 'a',
}
function switcheroo(x){
  return x.split('').map(item => (dict[item] || item)).join('');
}


// Solution 14
function switcheroo(s) {
  return s.replace(/[ab]/g, c => c == 'a' ? 'b' : 'a');
}