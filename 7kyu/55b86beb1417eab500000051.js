// Find the longest gap!

// A binary gap within a positive number num is any sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of num.
// For example:
// 9 has binary representation 1001 and contains a binary gap of length 2.
// 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
// 20 has binary representation 10100 and contains one binary gap of length 1.
// 15 has binary representation 1111 and has 0 binary gaps.
// Write function gap(num) that, given a positive num, returns the length of its longest binary gap.
// The function should return 0 if num doesn't contain a binary gap.

function gap(num) {
  return Math.max(...num.toString(2).split("1").filter((element, index, array) => index !== array.length - 1).map(element => element.length));
}

console.log(gap(9));
// 2
console.log(gap(529));
// 4
console.log(gap(20));
// 1
console.log(gap(15));
// 0


// Solution 1
const gap = num => (num.toString(2).match(/10+(?=1)/g) || [' ']).sort().pop().length - 1;


// Solution 2
function gap(num) {
  binary = num.toString(2)
  zeros = binary.match(/0+(?=1)/g) || ['']
  longest = zeros.sort().pop()
  return longest.length
}


// Solution 3
const gap = n => n.toString(2).split('1').slice(0, -1).sort().pop().length;


// Solution 4
function gap(num) {
  return Math.max.apply(null, num.toString(2).match(/0*(!?1)/g).map(a => a.length - 1));
}


// Solution 5
function gap(n) {
  const shift = n => n << Math.clz32(n) >>> 0;
  const gap = n => {
    let length = Math.clz32(~shift(~n)), next = shift(n << length);
    return next && length ? Math.max(length, gap(next)) : 0;
  }
  return gap(shift(n));
}


// Solution 6
const gap = n => {
  let b = n.toString(2)
  let first = b.indexOf('1')
  let last = b.lastIndexOf('1') + 1
  return b
    .slice(first, last)
    .split('1')
    .filter(x => x !== "")
    .map(s => s.length)
    .reduce((s, v) => s = v > s ? v : s, 0)
}


// Solution 7
function gap(num) {
  return Math.max.apply(null, parseInt(num)
    .toString(2)
    .replace(/^0+|0+$/g, '')
    .split('1')
    .map(e => e.length)
  );
}


// Solution 8
function gap(num) {
  let bin = num.toString(2).split(''), longest = 0, cur = 0;
  while (longest < cur + bin.length && bin.length > 0) {
    if (bin.shift() == '0') cur++;
    else longest = longest > cur ? longest : cur, cur = 0;
  }
  return longest;
}


// Solution 9
function gap(num) {
  var binaryNumber = (num >>> 0).toString(2);
  console.log(binaryNumber);
  var max = 0;
  var gapNumber = 0;
  for (var i = binaryNumber.length - 1; i > 0; i--) {
    if (binaryNumber[i] == 1) {
      gapNumber = 0;
      while (binaryNumber[i - 1] != undefined && binaryNumber[i - 1] == 0) {
        i--;
        gapNumber++;
      }
    }
    if (gapNumber > max) {
      max = gapNumber;
    }
  }
  return max;
}


// Solution 10
function gap(number) {
  const gaps = number.toString(2).match(/0+(?=1)/g);
  return gaps ? Math.max(...gaps.map(gap => gap.length)) : 0;
}


// Solution 11
function gap(num) {
  return num.toString(2).match(/0*(?=1)/g).sort().pop().length;
}


// Solution 12
const gap = num => {
  const binArr = num.toString(2).split('1');
  let arr = [];
  if (/^(\d+10+|10+)$/g.test(num.toString(2))) {
    binArr.pop();
    arr = binArr.filter(d => d.length).map(s => s.length);
  } else {
    arr = binArr.filter(d => d.length).map(s => s.length)
  }
  return arr.length ? Math.max(...arr) : 0;
}