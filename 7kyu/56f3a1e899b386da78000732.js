// Parts of a list

// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

// Examples of returns in different languages:

// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 

// Note

// You can see other examples for each language in "Your test cases"

function partlist(arr) {
  let output = [];
  for (let i = 1; i < arr.length; i++) {
    let subarray = [];
    subarray.push(arr.slice(0, i).join(" "));
    subarray.push(arr.slice(i).join(" "));
    output.push(subarray);
  }
  return output;
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]));
// [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"])); 
// [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"])); 
// [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])


// Solution 1
function partlist(arr) {
    var newArray;
    var returnArray=[];
    for( var i=1; i<arr.length; i++){
      newArray = [];
      newArray.push(arr.slice(0,i).join(" "));
      newArray.push(arr.slice(i).join(" "));
      returnArray.push(newArray);
    }
    
    return returnArray;
}


// Solution 2
var partlist=a=>a.map((v,i)=>[a.slice(0,i).join(' '),a.slice(i).join(' ')]).slice(1)


// Solution 3
function partlist(arr) {
    return arr.map((v, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1)
}


// Solution 5
function partlist(arr) {
    let res = [];
    for(i=1;i<arr.length;i++){
      let subres = [];
      subres.push(arr.slice(0,i).join(' '));
      subres.push(arr.slice(i).join(' '))
      res.push(subres);
    }
    return res;
}


// Solution 6
function partlist(arr) {
    var bigres = [], i = 0;
    while (i < arr.length) { 
        var res = [];
        res.push(arr.slice(0, i+1).join(" "));
        res.push(arr.slice(i+1, arr.length).join(" "));
        bigres.push(res);
        i++;
    }
    var l = bigres.length;
    return bigres.slice(0, l-1);
}


// Solution 7
function partlist(arr){
    arr = arr.map((_, i)=> [arr.slice(0,i+1).join(' '), arr.slice(i+1).join(' ')])
    arr.pop();
    return arr
}


// Solution 8
const partlist = arr => arr.map((word, i) => [arr.slice(0,i+1).join(' '), arr.slice(i+1).join(' ')]).slice(0, arr.length-1)


// Solution 9
const partlist = arr =>
  arr.slice(1).map((_, idx) => [arr.slice(0, ++idx).join(` `), arr.slice(idx).join(` `)]);


// Solution 10
const partlist = arr => arr
  .reduce((a,p,i) => {
    if (i < arr.length-1) {
      a[i].push(arr.slice(0,i+1).join(' '), arr.slice(i+1).join(' '));
      a.push([])
    }
    return a;
  },[[]])
  .filter(arr => arr.length)


// Solution 11
function partlist(arr) {
  var parts = [];
  for(var i = 1; i < arr.length; i++) {
    parts.push([arr.slice(0, i).join(' '), arr.slice(i, arr.length).join(' ')]);
  }
  return parts;
}


// Solution 12
partlist = a => a.map((e, i) => [a.slice(0, i).join(' '),a.slice(i).join(' ')]).slice(1);


// Solution 13
// recursion, recursive process
let partlist =f= (a,n=1)=> n<a.length ? [[a.slice(0,n).join` `,a.slice(n).join` `], ...f(a,++n)] : []


// Solution 14
function partlist(arr) {
  const ans = [];
  for(let i = 0; i < arr.length - 1; i++) {
    ans.push([arr.slice(0, i + 1).join(" "), arr.slice(i+1, ).join(" ")]);
  }
  return ans;
}