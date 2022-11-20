// CamelCase Method

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase=function(){
  return this.split(" ").map(element => element.slice(0,1).toUpperCase() + element.slice(1)).join("");
}

console.log("test case".camelCase());
// "TestCase"
console.log("camel case method".camelCase());
// "CamelCaseMethod"
console.log("say hello ".camelCase());
// "SayHello"
console.log(" camel case word".camelCase());
// "CamelCaseWord"
console.log("".camelCase());
// ""


// Solution 1
String.prototype.camelCase=function(){
  return this.split(' ').map(function(word){
   return word.charAt(0).toUpperCase() + word.slice(1);
 }).join('');
}


// Solution 2
String.prototype.camelCase = function () {
  return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
}


// Solution 3
String.prototype.camelCase=function(){
  return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
}


// Solution 4
String.prototype.camelCase=function(){
  const capitalize = (word) => {
    return word.slice(0,1).toUpperCase() + word.slice(1)
  }
  
  return this
    .split(' ')
    .map(capitalize)
    .join('')
}


// Solution 5
String.prototype.camelCase = function() {
  if (typeof this !== 'string' || !this.length) return '';
  
  return this
    .trim()
    .split(' ')
    .map(w => `${w[0].toUpperCase()}${w.toLowerCase().slice(1)}`)
    .join('');
}


// Solution 6
String.prototype.camelCase = function(){
  return this.split(/\s/)
    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
    .join('');
}


// Solution 7
String.prototype.camelCase = function () {
  return this.trim().replace(/(?:^|\s)(\w)/g, (_, $1) => $1.toUpperCase());
};


// Solution 8
String.prototype.camelCase=function(){
  var arr = this.split(" ");
   arr = arr.map(function(e){
      return e.charAt(0).toUpperCase() + e.substr(1);
         })
     return arr.join("");
}


// Solution 9
String.prototype.camelCase=function(){
  return this.split(" ").reduce(
      (acc, x) => (acc += x.substr(0, 1).toUpperCase() + x.substr(1)),
      ""
    )
}


// Solution 10
String.prototype.camelCase = function() {
  return this.trim().replace(/(\b|\s)\w/g, match => match.trim().toUpperCase());
}


// Solution 11
String.prototype.camelCase = function(){
  return this.trim().replace(/(^|\s+)([a-z])/g, (_, __, char) => char.toUpperCase());
}


// Solution 12
String.prototype.camelCase=function(){
  return this.trim().replace(/(?:^|[" "]+)([a-z])/gi, (_, p) => p.toUpperCase());
}


// Solution 13
String.prototype.camelCase=function() {
  if (this.length === 0) {
    return "";
  }
  let arr = this.trim().split(" ");
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length);
  }
  return res;
}


// Solution 14
String.prototype.camelCase=function() {
  return this+'' && this.trim``.split` `.map(i=> i[0].toUpperCase`` + i.slice`1`).join``
}