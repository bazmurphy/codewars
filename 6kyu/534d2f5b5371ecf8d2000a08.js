// Multiplication table

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9


// 1 2 3 4
// 2 4 6 8
// 3 6 9 12
// 4 8 12 16

// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable (size) {
  let outputArray = [];
  for (let i = 1; i <= size; i++) {
    let subArray = [];
    for (let j = 1; j <= size; j++) {
        subArray.push(i * j);
    }
    outputArray.push(subArray);
  }
  return outputArray;
}

console.log(multiplicationTable(3))
// [[1,2,3], [2,4,6], [3,6,9]]
console.log(multiplicationTable(4))
// [[1,2,3,4], [2,4,6,8], [3,6,9,12]]


// Solution 1
multiplicationTable = function(size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for(var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  
  return result
}


// Solution 2
multiplicationTable = function(size) {

  return Array.apply(null, new Array(size)).map(function(val, i) {
    return Array.apply(null, new Array(size)).map(function(val, j) {
      return (i+1) * (j+1);
    });
  });
}


// Solution 3
const multiplicationTable = n => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 1; j <= n; j++)
      row.push(i * j);
    res.push(row);
  }
  return res;
}


// Solution 4
multiplicationTable = function(n) {
  return Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>(i+1)*(j+1)))
}


// Solution 5
multiplicationTable = function(size) {
  // insert code here
  var arr = [];
  for (var i=1; i<=size; i++) {
    arr[i-1] = [];
    for (var j=1; j<=size; j++) {
      arr[i-1][j-1] = i*j;
    }
  }
  return arr;
}


// Solution 6
const multiplicationTable=s=>Array(s).fill().map((a,i)=>Array(s).fill().map((e,j)=>(1+i)*(1+j)))


// Solution 7
const multiplicationTable = size =>
  [...Array(size)].map((_, idx) => [...Array(size)].map((_, i) => ++i * (idx + 1)));


// Solution 8
multiplicationTable=(s,m=Array(s))=>[...m].map((_,i)=>[...m].map((_,j)=>i*++j+j))


// Solution 9
multiplicationTable = function(size) {
  return Array.from({length:size},(v, i) => Array.from({length:size},(vv, ii) => (i+1)*(ii+1)));
}


// Solution 10
multiplicationTable = function(size) {
  return Array.apply(null, Array(size)).map(function(item, indx) {
      return Array.apply(null, Array(size)).map(function(innerItem, innerIndx) {
          return (indx+1)*(innerIndx+1);
        });
    });
}


// Solution 11
multiplicationTable = function(size) {
   return Array(size).fill(0).map((_,j)=> 
          Array(size).fill(0).map((_,i)=>(j+1)*(i+1)));
}


// Solution 13
multiplicationTable=a=>[...Array(a)].map((_,x)=>[...Array(a)].map((_,y)=>(1+x)*(1+y)))


// Solution 14
function multiplicationTable(size){
    var i = 0, res = [];
    while(i < size) {
        var j = 0, sub = [];
        while(j < size) {
            sub.push((i + 1) * (j + 1));
            j++;
        }
        res.push(sub);
        i++;
    }
    return res;
}

