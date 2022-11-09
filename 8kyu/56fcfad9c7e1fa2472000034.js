// Evil or Odious

// The number n is Evil if it has an even number of 1's in its binary representation.
// The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

// The number n is Odious if it has an odd number of 1's in its binary representation.
// The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

// You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

function evil(n) {
  const convertedN = n.toString(2);
  const convertedNArray = convertedN.split("");
  const filteredNArray = convertedNArray.filter((element) => element === "1");
  const onesCount = filteredNArray.length;
  if (onesCount % 2 === 0) {
    return "It's Evil!";
  } else if (onesCount % 2 !== 0) {
    return "It's Odious!";
  }
}

console.log(evil(1));
// "It's Odious!"
console.log(evil(2));
// "It's Odious!"
console.log(evil(3));
// "It's Evil!"


// Solution 1
function evil(n) {
  return n.toString(2).match(/1/g).length % 2 ? 'It\'s Odious!' : 'It\'s Evil!';
}


// Solution 2
evil = n => ["It's Evil!", "It's Odious!"][(n.toString(2).split("1").length-1) & 1];


// Solution 3
const evil = n => `It's ${n.toString(2).replace(/0/g, "").length % 2 ? "Odious" : "Evil"}!`;


// Solution 4
function evil(n) {
  let k = 0;
  for(;n > 0; n = n >> 1)
    k += n & 1;
  
  return k % 2 === 1 ? "It's Odious!" : "It's Evil!"
}


// Solution 5
const evil = n => `It's ${n.toString(2).split("").filter(bit => bit == "1").length % 2 ? "Odious" : "Evil"}!`;


// Solution 6
const evil = (n) => [...(n).toString(2)].filter(e => e==1).length % 2 == 0 ? "It's Evil!" : "It's Odious!";


// Solution 7
const evil = n => 
  `It's ${n.toString(2).replace(/0/g, ``).length % 2 ? `Odious` : `Evil`}!`;


// Solution 8
function evil(n) {
  number = n.toString(2);
  count = 0;
 for(var i = 0; i<number.length; i++){
   if(number[i]=="1") count++
 }
 
 
   if(count%2==0)
    return "It's Evil!"; 
   else 
    return "It's Odious!";
}

// Solution 9
function evil(n) {
  return ((n.toString(2).match(/1/g).length)%2 == 0) ? "It's Evil!" :"It's Odious!";
}


// Solution 10
function evil(n) {
  let popcount = 0;
  while (n) {
    n &= n - 1;
    popcount++;
  }
  return popcount & 1 ? "It's Odious!" : "It's Evil!";
}


// Solution 11
function evil(n) {

  var bi = n.toString(2).replace(/0/g, '')
  var ct = bi.length
  if(ct % 2==0){return 'It\'s Evil!'}
  else{return 'It\'s Odious!'}
}


// Solution 12
function evil(n) {
  let binary = n.toString(2);
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
      if (binary[i] === "1") {
      count++;
      }
  }
  if (count % 2 === 0) {
      return "It's Evil!";
  } else {
      return "It's Odious!";
  }
}


// Solution 13
function evil(n) {
  return n.toString(2).split('').reduce( (acc, el) => acc + +el, 0) % 2 
    ? "It's Odious!" : "It's Evil!";
}


// Solution 14
function evil(n) {
  let binary = n.toString(2)
  let sum = 0;
  for(let i=0; i<binary.length; i++){
    sum=sum+Number(binary[i])
  }
  return sum % 2 == 0 ? 'It\'s Evil!' : 'It\'s Odious!';
}