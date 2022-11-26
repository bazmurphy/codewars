// Make the Deadfish Swim

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array

// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// Return the output array, and ignore all non-op characters

function parse(data) {
    let outputArray = [];
    let currentValue = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] === "i") {
            currentValue++
        } else if (data[i] === "d") {
            currentValue--;
        } else if (data[i] === "s") {
            currentValue *= currentValue;
        } else if (data[i] === "o") {
            outputArray.push(currentValue);
        }
    }
    return outputArray;
}

console.log( parse("iiisdoso"));
// [ 8, 64 ]
console.log( parse("iiisxxxdoso"));
// [ 8, 64 ]


// Solution 1
function parse(data) {
  let res = [];

  data.split('').reduce((cur, s) => {
    if (s === 'i') cur++;
    if (s === 'd') cur--;
    if (s === 's') cur = Math.pow(cur, 2);
    if (s === 'o') res.push(cur);
    
    return cur;
  }, 0);
  
  return res;
}


// Solution 2
const parse = data => {
  const Commands = {
      INCREMENT:  'i',
      DECREMENT:  'd',
      SQUARE:     's',
      OUTPUT:     'o'
  }

  var outputs = [],
      value = 0;
  
  data.split('').forEach(command => {
    switch(command) {
      case Commands.INCREMENT:  value++;                   break;
      case Commands.DECREMENT:  value--;                   break;
      case Commands.SQUARE:     value = Math.pow(value, 2);break;
      case Commands.OUTPUT:     outputs.push(value);       break;
    }
  });
  
  return outputs;
}


// Solution 3
function parse( data ) {  
  var v = 0, ret = []
  for (var c of data) {
    switch (c) {
      case 'i' : v++;         break;
      case 'd' : v--;         break;
      case 's' : v=v*v;       break;
      case 'o' : ret.push(v); break;
    }
  }
  return ret;
}


// Solution 4
var map = {
  'i' : function(x){return x + 1;},
  'd' : function(x){return x - 1;},
  's' : function(x){return x * x;}
}

function parse( data )
{
  var array = [], val = 0;
  data.split('').forEach(function(x){
    if(x === 'o'){
      array.push(val); 
    } else {
      val = map[x](val);
    }
  });
  return array;
}


// Solution 5
const parse = (data) => {
  let result = []
  let val = 0
  data.split('').forEach(x => {
    switch(x){
      case 'i':
        val++
        break
      case 'd':
        val--
        break
      case 's':
        val*=val
        break
      case 'o':
        result.push(val)
    }
  })
  return result
}


// Solution 6
function parse(data, value = 0, output = []) {
  if (!data.length) return output
  
  const [current, ...rest] = data
  
  return parse(
    rest,
    COMMANDS[current] ? COMMANDS[current](value) : value,
    current === 'o' ? [...output, value] : output
  )
}

const COMMANDS = {
  i: v => v + 1,
  d: v => v - 1,
  s: v => v * v
}


// Solution 7
const parse = data => data
  .split('')
  .reduce(({ val, output }, op) => {
      if (op === 'i') val += 1
      if (op === 'd') val -= 1
      if (op === 's') val *= val
      if (op === 'o') output.push(val)

      return { val, output }
    }, { val: 0, output: [] }).output



// Solution 8
function parse( str ){
  let arr = [],n = 0;
  for(let i = 0;i<str.length;i++){
    str[i] === 'i'? n++:
    str[i] === 'd'? n--:
    str[i] === 's'? n=n**2:
    str[i] === 'o'? arr.push(n):n 
  }
  return arr
}



// Solution 9
const parse = data =>
  [...data].reduce(([a, b], val) => val === `i` ? [++a, b] : val === `d` ? [--a, b] : val === `s` ? [a ** 2, b] : val === `o` ? [a, [...b, a]] : [a, b], [0, []])[1];


// Solution 10
function parse( data ) {
  const result = [];
  const parser = {
    'i': (a) => ++a,
    'd': (a) => --a,
    's': (a) => a ** 2,
    'o': (a) => {result.push(a); return a},
  };
  [...data].reduce((p,c) => c in parser ? parser[c](p) : p , 0);
  return result;
}


// Solution 11
const parse = commands => [...commands].reduce(processCommand, { value: 0, out: [] }).out;
const processCommand = (acc, command) => {
  switch (command) {
    case 'i': acc.value += 1; break;
    case 'd': acc.value -= 1; break;
    case 's': acc.value *= acc.value; break;
    case 'o': acc.out.push(acc.value); break;
  }
  return acc;
}


// Solution 12
const parse = ( data ) => {    
    return data.split``.reduce(([a,b], c) => {        
        switch(c) {
            case 'i': return [a, ++b];
            case 'd': return [a, --b];
            case 's': return [a, b*b];
            case 'o': return [[...a, b], b];
            default: return [a,b];
        }
    }, [[], 0])[0]
}


// Solution 13
const parse = (i) => i.split('').reduce((r, x) => ({
  m: ({ i: (m) => m+1, d: (m) => m-1, s: (m) => m*m }[x] || (m => m))(r.m),
  c: (x === 'o') ? [...r.c, r.m] : r.c
}), { m: 0, c: [] }).c


// Solution 14
function parse( data )
{
  const outputArray = []
  let value = 0
  
  for (let char of data) {    
    if (char === "i") { 
      value++
    }
    else if (char === "d") {
      value--
    }
    else if (char === "s") { 
      value **= 2
    }
    else if (char === "o") {
      outputArray.push(value)  
    } 
  }
  
  return outputArray
}