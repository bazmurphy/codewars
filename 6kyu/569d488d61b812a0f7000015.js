// Data Reverse

// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)

// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)

// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.

function dataReverse(data) {
    let output = [];
    for (let i = 0; i < data.length; i += 8) {
        let byte = data.slice(i, i + 8);
        output.unshift(byte);
    }
    return output.flat(1);
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));
// [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
console.log(dataReverse([0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]));
// [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]


// Solution 1
const dataReverse = data => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};


// Solution 2
const dataReverse = a => a.join``.match(/\d{8}/g).reverse().join``.split``.map(Number);


// Solution 3
const dataReverse = data => {

  const result = [];

  while(data.length){
    result.push(...data.splice(-8))
  }

  return result;
}


// Solution 4
const dataReverse = (data, out = []) => {
    for (let i = 0; i < data.length; i += 8){
        out.unshift(...data.slice(i, i+8));
    }
    return out;
}


// Solution 5
function dataReverse(data) {
  let a = [];
  while (data.length)
    a.unshift(...data.splice(0, 8));
  return a;
}


// Solution 6
const dataReverse = data =>
  [...data.join(``).match(/.{8}|$/g).reverse().join(``)].map(Number);


// Solution 8
function dataReverse(data) {
  if( data.length%8 === 0 ) {
    
    let i = data.length
    const arr = [];
    
    while(i >= 0) {
            
      arr.push(...data.slice((i-8), i))      
      
      i -= 8;
    }

    return arr;
  }
}


// Solution 9
function dataReverse(data) {
  const splitBytes = [];
  let currByte = [];
  
  for (let i = 0; i < data.length; i += 1) {
    currByte.push(data[i]);
    
    if (!((i + 1) % 8)) {
      splitBytes.push(currByte);
      currByte = [];
    }
  }
  
  splitBytes.reverse();
  const reversedData = [];
  
  for (let byte of splitBytes) {
    for (let i = 0; i < byte.length; i += 1) {
      reversedData.push(byte[i]);
    }
  }
  
  return reversedData;
}


// Solution 10
function dataReverse(data) {
  return (data.join('').match(/.{8}/g)||[]).reverse().join('').split('').map(n=>+n);
}


// Solution 12
function dataReverse(data) {
  const reverseData = [];

  for (let i = data.length; i > 0; i -= 8) {
    const segment = data.slice(i - 8, i);
    reverseData.push(...segment);
  }
  return reverseData;
}


// Solution 13
function dataReverse(data) {
  return data.map((e, i) => data.slice(i * 8, i * 8 + 8)).reverse().flat();
}


// Solution 14
function dataReverse(data) {
  for(var bits=[];data.length;)
    bits.push(...data.splice(data.length-8,8))
  return bits
}