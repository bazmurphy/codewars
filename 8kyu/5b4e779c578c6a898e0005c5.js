// Draw stairs

// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"

// or printed:

// I
//  I
//   I

// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

function drawStairs(n) {
  let output = "";
  for (let i = 0; i < n; i++) {
    output += " ".repeat(i) + "I";
    if (i !== n - 1) {
      output += "\n";
    }
  }
  return output;
}

// "Draw stairs with only 1 step"
console.log(drawStairs(1));
// "I", "The first step has no padding on the left, just an 'I'"
// "Draw stairs with 3 steps"
console.log(drawStairs(3));
// "I\n I\n  I", "There's something wrong with these 3 steps"
// "Draw stairs with 5 steps"
console.log(drawStairs(5));
// "I\n I\n  I\n   I\n    I", "5-step stairs no good"


// Solution 1
const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");


// Solution 2
function drawStairs(n) {
  let result = [];
  
  for (let i = 0; i < n; i++) {
    result[i] = `${' '.repeat(i)}I`;
  }
  
  return result.join('\n');
}


// Solution 3
function drawStairs(n) {

  let step = "I"
  for(let i=1; i<n;  i++) {
   step +="\n" + " ".repeat(i) + 'I' ;
  }return step 
}


// Solution 4
function drawStairs(n) {
  return Array(n).fill("I").map((e,i)=>e.padStart(i+1," ")).join("\n")
}


// Solution 5
const drawStairs = n => {
  let out = [],
      sp = ' ';
  for (let i = 0; i < n; i++) {
    out.push(sp.repeat(i) + 'I')
}
  return out.join('\n');
}


// Solution 6
function drawStairs(n) {
  return(new Array(n).fill('').map((x,i)=>x+' '.repeat(i)+'I').join('\n'))
}


// Solution 7
const drawStairs = n =>
  [...Array(n)].map((_, idx) => `I`.padStart(++idx)).join(`\n`);


// Solution 8
function drawStairs(n) {
  let str = '';

  if (n > 1) {
    for (let i = 0; i < n; i++) {
      str += ' '.repeat(i) + 'I\n';
    }
    return str.trim();
  } else {
    return 'I';
  }
}


// Solution 9
function drawStairs(n) {
  var s="";
  var ans="";
  for (var i =0; i<n; ++i)
  {
    ans+=s;
    ans+='I';
    s+=' ';
    if (i!=n-1)
    ans+='\n';
  }
  return ans;
}


// Solution 10
drawStairs = n => [...Array(n)].map((_,index) => ' '.repeat(index) + 'I').join('\n')


// Solution 11
function drawStairs(n) {
  return [...Array(n)].map((x,y) => ' '.repeat(y) + 'I').join('\n')
}


// Solution 12
function drawStairs(n) {
  let res = 'I';
  let arr = ' '.repeat(n - 1);
  let c = 1;
  for (let i in arr) {
    res += '\n' + ' '.repeat(c) + 'I'
    c += 1;
  }
  return res;
}


// Solution 13
function drawStairs(n) {
  let res = 'I';
  let arr = ' '.repeat(n - 1);
  let c = 1;
  for (let i of arr) {
    res += '\n' + ' '.repeat(c) + 'I'
    c += 1;
  }
  return res;
}


// Solution 14
function drawStairs(n) {
  let res = '';
  let i = 0;
  while (i < n) {
    res += ' '.repeat(i) + 'I' + '\n';
    i++;
  }
  return res.trim();
}