// Reverse or rotate?

// Description:

// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

// Examples:

// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"

// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

function revrot(str, sz) {
    if (sz === 0 || sz > str.length) {
        return "";
    } else {
        let output = [];
        for(let i = 0; i < str.length; i += sz) {
            let chunk = str.substring(i, i + sz);
            // ignore the last chunk if its size is less than sz
            if (chunk.length === sz) {
                // If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk;
                if (chunk.split("").map(element => Math.pow(Number(element), 3)).reduce((acc, cv) => acc + cv, 0) % 2 === 0) {
                    chunk = chunk.split("").reverse().join("");
                }
                // otherwise rotate it to the left by one position
                else {
                    chunk = chunk.slice(1) + chunk.slice(0, 1);
                }
                output.push(chunk);
            }
        }
        // Put together these modified chunks and return the result as a string.
        return output.join("");
    }
}

console.log(revrot("123456987654", 6));
// "234561876549"
console.log(revrot("123456987653", 6));
// "234561356789"
console.log(revrot("66443875", 4));
// "44668753"
console.log(revrot("66443875", 8));
// "64438756"
console.log(revrot("664438769", 8));
// "67834466"
console.log(revrot("123456779", 8));
// "23456771"
console.log(revrot("733049910872815764", 5));
// "330479108928157"

// size 0 or string length less than size
console.log(revrot("1234", 0));
// ""
console.log(revrot("", 0));
// ""
console.log(revrot("1234", 5));
// ""


// Solution 1
function revrot(str, sz) {
   if(!sz||sz<0||sz>str.length)return '';
   var arr=str.match(new RegExp('\\d{'+sz+'}','g'));
   return arr.map(function(v){
     if(v.toString().split('').reduce((s,v)=>s+v*1,0)%2===0){
       return v.split('').reverse().join('');
     }
     else return v.slice(1)+v[0];
   }).join('');
}


// Solution 2
function revrot(str, sz) {
    if (sz <= 0 || !str || sz > str.length) return '';    
      
    const sumCubes = chunk => chunk.split('').reduce((sum, digit) => sum += digit**3, 0);
    const reverse = chunk => chunk.split('').reverse().join('');
    const rotate = chunk => chunk.slice(1) + chunk.slice(0, 1);
    
    const chunks = [];
    
    for (let i = 0; i < str.length; i += sz) {
      let chunk = str.slice(i, i + sz);
      
      if (chunk.length < sz) continue;
      
      chunk = sumCubes(chunk) % 2 
        ? rotate(chunk)   
        : reverse(chunk);
      
      chunks.push(chunk)
    }
    
    return chunks.join('')
}


// Solution 3
function revrot(str, sz){
  if(sz <= 0 || str.length <= 0 || sz > str.length)
    return '';
  var nums = [];
  while(str.length >= sz){
    nums.push(str.slice(0, sz));
    str = str.slice(sz);
  }
  nums = nums.map(function(num){
    var sum = num.replace(/[02468]/g, '').length;
    if(sum % 2 == 0)
      return num.split('').reverse().join('');
    else
      return num.slice(1) + num.slice(0, 1);
  });
  return nums.join('');
}


// Solution 4
function cubeSum(string){
  return string.split('').map(e=> Math.pow(Number(e),3)).reduce((p,c)=>p+=c);
}

function revrotEach(string){
  if(cubeSum(string)%2===0){
    return string.split('').reverse().join('');
  }
  else{
    return string.slice(1) + string.slice(0,1);
  }
}

function revrot(str, sz) {
  if(sz === 0 || str.length < sz){
    return '';
  }
  else{
    var arr = [];
    for(var c = 0; c < str.length; c+=sz){
      arr.push(str.slice(c,c+sz));
    }
    return arr.filter(e=> e.length===sz).map(e=>revrotEach(e)).join('');
  }
}


// Solution 5
function revrot(str, sz) {
  return ( sz<=0 || sz > str.length || str=="" ) ? "" 
    : str2chunks(str,sz).map( chunk => isSumOfCubesOfDigitsOdd(chunk) ? rotate(chunk) : reverse(chunk) ).join("")
}

const str2chunks = (s,c) => s.match( new RegExp(".{"+c+"}", "g"))||[];
const isSumOfCubesOfDigitsOdd = str => str.replace(/[02468]/g,'').length%2;
const rotate = str => str.slice(1)+str[0];
const reverse = str => str.split('').reverse().join('')


// Solution 6
function revrot(str, sz) {
    
    if (sz <= 0 || str == '') return '';

    let reg = new RegExp('.{' + sz + '}','g');
    let chunks = str.match(reg);
    
    if(!chunks) return '';
    
    return chunks.map((chunk) => {
      let sum = 0;
      
      chunk.split('').forEach((c) => {
        sum += Math.pow((+c), 3);
      });
      
      if (sum % 2 == 0)
        return chunk.split('').reverse().join('');
      else
        return chunk.slice(1, chunk.length) + chunk.charAt(0);
    }).join('');
}


// Solution 7
const revrot = (str, sz) =>
  (str.match(new RegExp(`.{${sz}}`, `g`)) || []).map(val => val.replace(/[02468]/g, ``).length % 2 ? val.replace(/(.)(.+)/, `$2$1`) : [...val].reverse().join(``)).join(``);


// Solution 8
function revrot(str, sz) {
    const check = (v) => v.split('').reduce((cubeSum,d) => cubeSum += d**3, 0) % 2 === 0;
    const reverse = (v) => v.split('').reverse().join('');
    const rotate = (v) => v.slice(1) + v.slice(0,1);
  
    return (str.match(new RegExp('.{'+sz+'}','g')) || [])
        .map(v => check(v) ? reverse(v) : rotate(v))
        .join('');
}


// Solution 9
const toChunks = (str, sz) => str.split('').reduce((acc, cur) => {
  const last = acc.pop();
  const curNum = Number(cur);
  if(last.length < sz) {
    last.push(curNum);
    acc.push(last);
  } else {
    acc.push(last, [curNum])
  }
  return acc;
},[[]])
const sum = arr => arr.reduce((acc, cur)=>acc+cur,0);
const reverseIfSumOfCubesDivisibleByTwo = arr => {
  let arrCopy = [...arr];
  let cubed = arrCopy.map(n => n**3)
  let sumOfCubed = sum(cubed);
  let dividedByTwo = sumOfCubed / 2;
  if (Math.round(dividedByTwo) == dividedByTwo) {
    return arrCopy.reverse()
  } else {
    const first = arrCopy.shift();
    const rest = arrCopy;
    return [...rest, first];
  }
};
const flatMapJoin = arr => arr.map(chunk => chunk.join('')).join('')
const isChunkRightSize = (sz) => chunk => chunk.length === sz
function revrot(str, sz) {
    if (sz <= 0 || str.length <= 0 || sz > str.length) return ""
    return flatMapJoin(toChunks(str, sz).map(reverseIfSumOfCubesDivisibleByTwo).filter(isChunkRightSize(sz)));
}


// Solution 10
const revrot = (str, sz) => (
  !str.length || !sz || str.length < sz 
  ? ''
  : str.split('').reduce((p,c) => {
      let idx = p.length-1;
      if (p[idx].length === sz) p.push([]), idx++;
      p[idx].push(c);
      return p;
    }, [[]])
    .filter(arr => arr.length === sz)
    .map(arr => {
      const sumPow = arr.reduce((s,c) => s + c**2, 0)
      return sumPow % 2 === 0 ? arr.reverse().join('') : (arr.push(arr.shift()), arr.join(''));
    })
    .join('')
)


// Solution 11
function revrot(str, sz) {
  if (sz <= 0 || str == '' || sz > str.length) {
    return '';
  }
  const arr = [];
  const s = str.split('');
  while (s.length >= sz) {
    arr.push(s.splice(0, sz));
  }
  let result = arr.map((elem) => {
    const sum = elem.reduce((a, c) => a + Math.pow(c, 3), 0);
    if (sum % 2) {
      elem.push(elem[0]);
      elem.shift();
      return elem.join('');
    } else {
      return elem.reverse().join('');
    }
  });
  return result.join('');
}


// Solution 12
const revrot = (str, sz) => 
  sz <= 0 ? '' : str
    .match(new RegExp(`\.{1,${sz}}`, 'g'))
    .filter(e => e.length === sz)
    .map(e => e
      .split``
      .reduce((r, x) => 
        r + Math.pow(x, 3), 0) % 2 ?
          (e.slice(1) + e[0]) :
          e.split``.reverse().join``)
    .join``;