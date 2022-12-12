// Find the Slope

// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

// a:x1
// b:y1
// c:x2
// d:y2

// Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope

function slope(points) {
  const [x1,y1,x2,y2] = points;
  return Number.isInteger((y2 - y1) / (x2 - x1)) ? ((y2 - y1) / (x2 - x1)).toString() : "undefined";
}

console.log(slope([19,3,20,3]));
// "0"
console.log(slope([2,7,4,-7]));
// "-7"
console.log(slope([10,50,30,150]));
// "5"
console.log(slope([15,45,12,60]));
// "-5"
console.log(slope([10,20,20,80]));
// "6"
console.log(slope([-10,6,-10,3]));
// "undefined"


// Solution 1
function slope([ x1, y1, x2, y2 ]) {
  let slope = (y2 - y1) / (x2 - x1);
  return Number.isFinite(slope) ? `${slope}` : 'undefined';
}


// Solution 2
const slope = points => points[2] == points[0] ? "undefined" : (points[3] - points[1]) / (points[2] - points[0]) + "";


// Solution 3
function slope(points) {
var y = points[3] - points[1];
var x = points[2] - points[0];

if (x==0){return String(undefined);}

return String(y/x);
}


// Solution 4
let slope = ([a, b, c, d]) => a == c ? "undefined" : "" + ((b - d) / (a - c));


// Solution 5
function slope(points) {
  let dx = points[2] - points[0],
      dy = points[3] - points[1]
      
  if (dx == 0)
    return 'undefined'
  
  return (dy/dx) + ''
}


// Solution 6
const slope = ([x1, y1, x2, y2]) =>
  x2 - x1 ? `${(y2 - y1) / (x2 - x1)}` : `undefined`;


// Solution 7
function slope([x1, y1, x2, y2]) {
  var m = (y2 - y1) / (x2 - x1)
  return isFinite(m) ? m.toString() : "undefined"
}


// Solution 8
const slope = ([a, b, c, d]) => Number.isFinite(s = (d - b) / (c - a)) ? s.toString() : "undefined";


// Solution 9
function slope(points){
  let x = (points[2] - points[0]);
  let y = (points[3] - points[1]);
  let res = y / x;
  if( x === 0) { return 'undefined' ;}
  return res + '';
}


// Solution 10
const slope = p => String(p[2] != p[0] ? (p[3] - p[1]) / (p[2] - p[0]) : undefined);


// Solution 11
const slope = ([a,b,c,d]) => a == c ? 'undefined' : String((d - b) / (c - a))


// Solution 12
function slope([a, b, c, d]){
  let x = d - b;
  let y = c - a;
  let m = x / y;
  if (y === 0) {
    return "undefined";
    }
  else if (x === 0) {
    return '0';
    } else return m+"";
}


// Solution 13
slope = points => points[0] == points[2] ? 'undefined' : String((points[3] - points[1]) / (points[2] - points[0]))


// Solution 14
function slope([x1, y1, x2, y2], d) {
  return `${(d = x2 - x1, d === 0 ? undefined : (y2 - y1) / d)}`
}