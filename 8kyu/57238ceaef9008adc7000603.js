// Training JS #14: Methods of Number object--toString() and toLocaleString()

// This time we learn about two useful methods of Number objects: toString() and toLocaleString(). the basic usage of the two methods is to convert a number into a string. look at this:

// var num=111;
// var a=num.toString(), 
//     b=num.toLocaleString(), 1`
//     c=num+""
// console.log([a,b,c])   //put them to an array, we can see the quotes
// //output: [ '111', '111', '111' ]

// We can see, if you just want to translate a number into a string representation, in the general case the results obtained in these ways is the same. I love to use the last one, cause I'm lazy ;-)

// But these two methods have other uses as well.

// When used toLocaleString() converted a number to a string. the results obtained are in the order of the local numeric format(I don't have this experience. it is always the same as toString() in my here).

// And toString() of Number object has a more special usage: According to the base output different strings.

// NumberObject.toString(radix)

// radix is optional parameter. if ignored it, the output will be the default decimal. If not, like this:

// var num=111;
// var a=num.toString(2), 
//     b=num.toString(8), 
//     c=num.toString(16), 
// console.log([a,b,c])
// //output: [ '1101111', '157', '6f' ]

// They are converted to binary, octal and hexadecimal.

// Ok, lesson is over. let's us do some task with Number .toString().
// Task

// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

// for example:

// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"

function colorOf(r,g,b){
  function conversion(num) {
    return num.toString(16).length < 2 ? `0${num.toString(16)}` : num.toString(16);
  }
  return `#${conversion(r)}${conversion(g)}${conversion(b)}`
}

// disgusting one liner
function colorOf(r,g,b){
  return `#${[r,g,b].map(element => element.toString(16).length < 2 ? `0${element.toString(16)}` : element.toString(16)).join("")}`
}

console.log(colorOf(255,0,0));
// "#ff0000"
console.log(colorOf(0,111,0));
// "#006f00"
console.log(colorOf(1, 2 ,3));
// "#010203"


// Solution 1
function colorOf(r,g,b)
{
   return "#" + toHex(r)+ toHex(g)+ toHex(b);  
}

function toHex(n)
{
  var result = n.toString(16);
  return result.length == 1 ? "0" + result : result;  
}


// Solution 2
function colorOf(r,g,b){
  r.toString(16).length < 2 ? r = '0' + r.toString(16) : r = r.toString(16);
  g.toString(16).length < 2 ? g = '0' + g.toString(16) : g = g.toString(16);
  b.toString(16).length < 2 ? b = '0' + b.toString(16) : b = b.toString(16);
  
  return '#' + r + g + b;
}


// Solution 3
function colorOf(r,g,b){
  //coding here
  return '#'+r.toString(16).padStart(2,0)+g.toString(16).padStart(2,0)+b.toString(16).padStart(2,0);
}


// Solution 4
const colorOf = (...rgb) => '#' + rgb.map(x => `0${x.toString(16)}`.slice(-2)).join('')


// Solution 5
function colorOf(r, g, b) {
  let R = r.toString(16)
  let G = g.toString(16)
  let B = b.toString(16)
  
  if (r < 16) R = '0' + R
  if (g < 16) G = '0' + G
  if (b < 16) B = '0' + B
  
  return '#' + R + G + B
}


// Solution 6
const colorOf = (r, g, b) => tag`#${r}${g}${b}`;

function tag(strings, ...values) {
  values = values.map(v => `0${v.toString(16)}`.substr(-2));
  return strings.concat(values).join('');
}


// Solution 7
function colorOf(r,g,b){
  var f = function (x) {
    return (x<16 ? '0' : '') + x.toString(16) 
  };
  
  return "#" +  f(r) + f(g) + f(b);
}


// Solution 8
function colorOf(...a){
  return '#'+a.map(x=>x.toString(16).replace(/^(.)$/,'0$1')).join('');
}


// Solution 9
const colorOf = (r,g,b) => {
  const toHex = n => (n.toString(16).length<2)? '0'+n.toString(16) : n.toString(16)
  return '#' + [r,g,b].map(toHex).join('')
}


// Solution 10
colorOf=(...Q)=>'#'+Q.map(V=>(0+V.toString(16)).slice(-2)).join``


// Solution 11
const colorOf = (r, g, b) => `#${hex(r)}${hex(g)}${hex(b)}`;
const hex = v => (v < 16 ? '0' : '') + v.toString(16);


// Solution 12
const colorOf = (r, g, b) =>
  `#${[r, g, b].map(val => val.toString(16).padStart(2, 0)).join(``)}`;


// Solution 13
function colorOf(r,g,b){
  const toStr = (el, x = el.toString(16)) => x.length < 2 ? `0${x}` : x;
  return `#${toStr(r)}${toStr(g)}${toStr(b)}`;
}


// Solution 14
function colorOf(r,g,b){
  if (r < 16) {
      r = '0' + r.toString(16);
        } else { 
          r = r.toString(16); 
  };
  if (g < 16) {
      g = '0' + g.toString(16);
        } else {
          g = g.toString(16); 
  };
  if (b < 16){
      b = '0' + b.toString(16);
        } else {
          b = b.toString(16);
  };
  return '#'+r+g+b; 
}