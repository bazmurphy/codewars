// RGB To Hex Conversion

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
  const hexadecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  
  function convertIndividualColor(color) {
    if (color <= 0) {
      return "00";
    } else if (color >= 255) {
      return "FF";
    } else {
      const colorPartOne = hexadecimal[Math.floor(color / 16)];
      const colorPartTwo = hexadecimal[(color % 16 / 16) * 16];
      return colorPartOne + colorPartTwo;
    }
  }

  return convertIndividualColor(r) + convertIndividualColor(g) + convertIndividualColor(b);
}

console.log(rgb(0, 0, 0));
// '000000'
console.log(rgb(0, 0, -20));
// '000000'
console.log(rgb(300,255,255));
// 'FFFFFF'
console.log(rgb(173,255,47));
// 'ADFF2F'


// Solution 1
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}


// Solution 2
function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}


// Solution 3
const rgb = (...arg) => arg
  .map(it => Math.max(Math.min(it, 255), 0)
    .toString(16)
    .padStart(2, '0')
    .toUpperCase()
   ).join('');


// Solution 4
function rgb(r, g, b) {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  let color = (r << 16) + (g << 8) + b;

  return ('00000' + color.toString(16).toUpperCase()).slice(-6);
}


// Solution 5
function decToHex(n) {
  
  var mods = [];
  var num = n;
  var mod;
  const HEXHASH = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
  };
  
  while (num > 0) {
    mod = num % 16;
    mod >= 10 ? mods.push(HEXHASH[mod]) : mods.push(mod);
    num = Math.floor(num / 16);
  }
  
  return mods.reverse().map(function(n) {
    return n.toString();
  }).join('');
}

//decToHex(148);

function fillZeroes(s) {
  
  if (s.length === 0) return '00';
  if (s.length === 1) return '0' + s;
  return s;
}

function rgb(r, g, b){
  
  var args = Array.prototype.slice.call(arguments).map(function(n) {
    return (n > 255) ? 255 : n;
  });
  
  var red = decToHex(args[0]);
  var green = decToHex(args[1]);
  var blue = decToHex(args[2]);
  
  return fillZeroes(red) + fillZeroes(green) + fillZeroes(blue);
}


// Solution 7
function rgb(r, g, b)
{
   if (r<0) r = '00';
   if (r>=255) r = 'FF';  
   r = r.toString(16).toUpperCase();
   if (r.length === 1) r = '0' + r;
   if (g<0) g = '00';
   if (g>=255) g = 'FF';
   g = g.toString(16).toUpperCase();
   if (g.length === 1) g = '0' + g;
   if (b<0) b = '00';
   if (b>=255) b = 'FF';
   b = b.toString(16).toUpperCase();
   if (b.length === 1) b = '0' + b; 
   return r+g+b;
}


// Solution 8
const rgb = (r, g, b) =>
  [r, g, b].map(val => Math.max(0, Math.min(255, val)).toString(16).padStart(2, `0`)).join(``).toUpperCase();


// Solution 9
function rgb(r, g, b) {
  return [].slice.call(arguments).map(function (v) {
    var ret = Math.max(0, Math.min(255, v)).toString(16).toUpperCase();
    return (ret.length<2 ? '0' : '') + ret;
  }).join('');
}


// Solution 10
function rgb(r, g, b) {
  return `${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
}

function toHex(num) {
  return Math.max(0, Math.min(255, num)).toString(16).padStart(2, '0')
}


// Solution 11
function rgb(r, g, b){
  const c = n => ('0' + Math.max(0, Math.min(255,n)).toString(16).toUpperCase()).slice(-2);
  return c(r)+c(g)+c(b);
}


// Solution 12
function rgb(...z){
  return(z.map(c=>{ a=Math.min(255,Math.max(0,c)).toString(16);
                      return(parseInt('0x'+a)>15?a:'0'+a)  }).join("").toUpperCase())
}


// Solution 13
function rgb(r, g, b){
  return [r,g,b].map(x=>x>255?'FF':x<0?'00':(Array(2).join('0') + x.toString(16).toUpperCase()).slice(-2)).join('') 
}


// Solution 14
const decimalToHex = decimal => {
  const hex = decimal.toString(16)
  return hex.length < 2 ? `0${hex}` : hex
}

function rgb(r, g, b){
  const validValue = v => {
    if(v < 0) return 0
    if(v > 255) return 255
    return v
  }
  
  const hex = [r, g, b].map(validValue).map(decimalToHex).join('').toUpperCase()
  return hex
}