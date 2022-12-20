// Numbers to Objects

// You will be given an array of numbers.

// For each number in the array you will need to create an object.

// The object key will be the number, as a string. The value will be the corresponding character code, as a string.

// Return an array of the resulting objects.

// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.

function numObj(s){
    return s.map(element => ( { [element] : String.fromCharCode(element) } ));
};

console.log(numObj([118,117,120]));
// [{'118':'v'}, {'117':'u'}, {'120':'x'}]
console.log(numObj([101,121,110,113,113,103]));
// [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]


// Solution 1
function numObj(s){
    return s.map(n => {
      return { [n]: String.fromCharCode(n) };
    });
  }


// Solution 2
const numObj = ($) => $.map(el => ( {[el]: String.fromCodePoint(el)} ))


// Solution 3
const makeNumObj = (n) => ({ [n]: String.fromCharCode(n) });
const numObj = (arr) => arr.map(makeNumObj);


// Solution 4
function numObj(s){
    return s.map(n => {
      const obj = {};
      obj[n] = String.fromCharCode(n);
      return obj;
    });
}


// Solution 5
function numObj(s){
    const arr = []
    for(i=0; i<s.length;i++){
      const obj = {}
      obj[s[i]] = String.fromCharCode(s[i])
      arr.push(obj)
    }
    return arr
}


// Solution 6
function numObj(s){
    return s.map(valor => {
      return {
         [valor]  : String.fromCharCode(valor)  
      }
    }) 
}


// Solution 7
const numObj = s =>
  s.map(val => ({[val] : String.fromCharCode(val)}));


// Solution 8
function numObj(s){
    var arr=[]
    for (var i=0; i<s.length; ++i)
    {
      var c={};
      c[s[i].toString()]=String.fromCharCode(s[i]);
      arr.push(c);
    }
    return arr;
}


// Solution 9
function numObj(s){

    let objArr = [];
    for(let i=0; i<s.length;i++){
      let numObj = {};
      let strNum = String(s[i]);
      numObj[strNum] = String.fromCharCode(s[i]); //{'118': ''}
      objArr.push(numObj); //[{'118': ""}]
    }
    return objArr;
}


// Solution 10
function numObj(arr){
    return arr.map(el => { return { [el]: String.fromCharCode(el) }}
)}


// Solution 11
function numObj(nums){
    const array1 = [];
    nums.map(number => array1.push(String.fromCharCode(number)))
    const object = Array.from({length:nums.length},x => x = {});
    object.map((value,index) => value[nums[index]] = array1[index]);
    return object
    // nums.length {lenght:s.lenght}
}


// Solution 12
function numObj(s) {
    let result = [];
    for (x of s) {
      result.push({ [String(x)]: `${String.fromCharCode([x])}` });
    }
    return result;
}