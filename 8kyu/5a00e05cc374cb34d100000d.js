// Reversed sequence 

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  
    let arr = [];

    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    
    return arr;
    
};

console.log(reverseSeq(5));
// [5,4,3,2,1]


// Solution 1
const reverseSeq = n => {
  let arr = [];
    for (let i=n; i>0; i--) {
      arr.push(i);
      } return arr;
};


// Solution 2
const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};


// Solution 3
const reverseSeq = length => Array.from({length}, () => length--)


// Solution 4
const reverseSeq = n => {
  let answer = [];          //intialize an array
  
  for (let i=n; i>0; i--){  //loop down from n to 1
    answer.push(i);         //push each i to the answer array
  }
  
  return answer;            //return answer;
};


// Solution 5
const reverseSeq = num => {
  return new Array(num)
      .fill()
      .map((d, i) => i + 1)
      .reverse()
};


// Solution 6
const reverseSeq = n => {
  return Array.from({length:n},(_,i)=>n-i);
};


// Solution 7
const reverseSeq = n => {
  if (n<2) return [n]
  return [n].concat(reverseSeq(n-1));
};