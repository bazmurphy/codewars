// 16+18=214

// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// Examples

// 1 6 + 1 6 = 2 14
// 2 6 + 3 9 = 5 15
// 1 2 2 + 0 8 1 = 1 10 3

function add(num1, num2) {

  console.log(num1)
  console.log(num2)
  
  let test1 = num1.toString().split("");
  let test2 = num2.toString().split("");

  if (test1.length < test2.length) {
    for (let i = 0; i < (test2.length - test1.length); i++)
      test1.unshift("0");    
  } else if (test2.length < test1.length) {
    for (let i = 0; i < (test1.length - test2.length); i++)
      test2.unshift("0");
  }

  let output = [];

  for (let i = 0; i < test1.length; i++) {
    output.push(parseInt(test1[i]) + parseInt(test2[i]))
  }

  return parseInt(output.join(""));

}

console.log(add(2, 11));
// 13
console.log(add(0, 1));
// 1
console.log(add(0, 0));
// 0
console.log(add(16, 18));
// 214
console.log(add(26, 39));
// 515
console.log(add(122, 81));
// 1103
console.log(add(1222, 30277));
// 31499
console.log(add(1236, 30977));
// 31111013
console.log(add(38810, 1383));
// 391193
console.log(add(49999, 49999));
// 818181818


// Solution 1
function add(num1, num2) {


  num1 = num1.toString().split("").reverse().join("");
  num2 = num2.toString().split("").reverse().join("");



  if (num1.length < num2.length) {
      [num1, num2] = [num2, num1];
  }



  var returnString = "";
  for (var i = 0; i < num1.length; i++) {
      var int1 = parseInt(num1[i]);
      var int2 = parseInt(num2[i] || 0);
    
      returnString = (int1+ int2).toString()+returnString;
  }
  
  return parseInt(returnString);
}


// Solution 2
function add(num1, num2) {
  let arr1 = num1.toString().split('').reverse()
  let arr2 = num2.toString().split('').reverse()
  let arr3 = []
  for(let i=0; i < (arr1.length < arr2.length ? arr2.length : arr1.length); i++) {
    arr3.push((parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0))
  }
  return parseInt(arr3.reverse().join(''));
}


// Solution 4
function add(a,b) {
  return a*b ? +`${add(a/10|0,b/10|0)}${a%10+b%10}` : a+b
}
// Here it is w/o syntax tricks

// if (a==0) return b
// if (b==0) return a
// return Number(String(add(Math.floor(a/10),Math.floor(b/10))) + String(a%10+b%10))

// Here's normal grade school addition

// if (a*b==0) return a+b
// return 10*add(a/10|0,b/10|0) + a%10+b%10

// recursive version
function add(a,b) {
  if (a==0) return b
  if (b==0) return a
  return Number(String(add(Math.floor(a/10),Math.floor(b/10))) + String(a%10+b%10))
}

// non-recursive version
function add(a,b) {
  let s = ''
  while (a!=0 && b!=0) {
    s = String(a%10+b%10) + String(s) 
    a = Math.floor(a/10)
    b = Math.floor(b/10)
  }
  return Number(s)
}

// Solution 5
function add(a,b) {
  let s = ""
  
  while(a+b) {
      s = a%10 + b%10 + s
      a = a/10|0
      b = b/10|0
  }
  
  return +s
}


// Solution 6
function add(x, y){
  if (y > x){ [x,y] = [y, x] }
  y = [...[]+y].reverse();
  x = [...[]+x].reverse();
return parseInt(x.map((el,i)=> +el + (+y[i] || 0)).reverse().reduce((a,b)=> a + [] + b))
}


// Solution 7
const add = (num1, num2) =>
  num1 && num2 ? +`${add(num1 / 10 ^ 0, num2 / 10 ^ 0)}${num1 % 10 + num2 % 10}` : num1 + num2;


// Solution 8
function add(num1, num2) {
  let arr1 = num1.toString().split('')
  let arr2 = num2.toString().split('')  
  let result = []
  while (arr1.length > 0 || arr2.length > 0) {
    let el1 = arr1.pop()
    let el2 = arr2.pop()
    let temp = (el1 ? +el1 : 0) + (el2 ? +el2 : 0)
    result.push(temp)
  }
  return +result.reverse().join('')
}


// Solution 9
function add(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  
  let sum = '';

  str1 = str1.padStart(str2.length, '0');
  str2 = str2.padStart(str1.length, '0');

  for(let i = 0; i < str1.length; i++) {
    let algarismSum = parseInt(str1[i]) + parseInt(str2[i]);

    sum += algarismSum;
  }
 
  return parseInt(sum);
}


// Solution 10
function add(x, y) {
  let arr1 = x.toString().split('').reverse()
  let arr2 = y.toString().split('').reverse()
  let res = []
  for (let i=0; i<Math.max(arr1.length, arr2.length); i++){
    res.push((+arr2[i] || 0) + (+arr1[i] || 0))
  }
  return +res.reverse().join('')
}


// Solution 11
function add(num1, num2) {
  var a=""+num1;
  var b=""+num2; 
  while (a.length<b.length)
    a='0'+a;
  while (a.length>b.length)
    b='0'+b;
  var ans="";
  for (var i=0; i<a.length; ++i)
    ans+=(+a[i]+ +b[i]);
  return +ans;
}


// Solution 12
function add(num1, num2) {
  let nums1 = num1.toString().split('');
  let nums2 = num2.toString().split('');
  let sum = 0;
  let newArray = [];
  
  let num = Math.abs(nums1.length - nums2.length);
  if(nums1.length > nums2.length) {
    for(let i = 0; i < num; i++) {
      nums2.unshift(0);
    }
  }
  else if(nums1.length < nums2.length) {
    for(let i = 0; i < num; i++) {
      nums1.unshift(0);
    }
  }
  for(let i = 0; i < nums1.length; i++) {
    newArray.push(Number(nums1[i]) + Number(nums2[i]));
  }
  

  return Number(newArray.join(''));
}


// Solution 13
function add(n1, n2) {
  if (n1 < 10 && n2 < 10) return +('' + (n1 % 10 + n2 % 10))
  return +(add(~~(n1 / 10), ~~(n2 / 10)) + ('' + (n1 % 10 + n2 % 10)))
}


// Solution 14
function add(num1, num2) {
  let [a,b] = [num1,num2].sort((a,b)=>a-b).map(e=>[...(e+'')].map(n=>+n))
  let r = '';
  while(a.length) r = (a.pop() + b.pop()) +r
  return +(b.join('')+r)
}