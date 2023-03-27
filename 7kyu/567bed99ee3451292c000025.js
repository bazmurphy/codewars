// Regexp Basics - is it a vowel?

// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.

String.prototype.vowel = function() {
  return /^[aeiou]$/i.test(this);
};

console.log(''.vowel());
// false
console.log('a'.vowel());
// true
console.log('E'.vowel());
// true
console.log('ou'.vowel());
// false
console.log('z'.vowel());
// false
console.log('lol'.vowel());
// false


// Solution 1
String.prototype.vowel = function() {
  return /^[aeiou]$/i.test(this)
}


// Solution 2
String.prototype.vowel = function() {
  return /^[aeiouAEIOU]$/.test(this);
};


// Solution 3
String.prototype.vowel = function() {
  return this.match(/[aeiou]/gi) && this.length <= 1 ? true : false;
};


// Solution 4
String.prototype.vowel = function() {
  return /^[aouei]$/gi.test(this);
};


// Solution 5
String.prototype.vowel = function() {
  return /^[aoeui]$/i.test(this);
};


// Solution 6
String.prototype.vowel = function() {
  return this.length === 1 ? ['A','E','O','I','U'].some( x => x === this[0].toUpperCase()) : false
}
// reason for choosing upperCase https://msdn.microsoft.com/en-us/library/bb386042.aspx


// Solution 7
String.prototype.vowel = function() {

  if(this.length>1 || this==='') {
    return false;
  }
var char=/[aeiouAEIOU]/g
var find=this.search(char);
if(find===-1){
  return false;
} else {
  return true;
}

};


// Solution 8
String.prototype.vowel = function() {
  if(this.length == 1){
  
    return /[aeiou]/i.test(this);
    }else{
    return false;
    }
  };


// Solution 9
String.prototype.vowel = function() {
  console.log(this);
    return /^[aeiou]{1}$/i.test(this);
  };


// Solution 10
String.prototype.vowel = function() {
  if(this=='') return false
  const regex = /^[aeiou]$/i;
  return regex.test(this);
};


// Solution 11
String.prototype.vowel = function() {
  let vowels = ["a", "e", "i", "o", "u"];
  
  let argument = this.toLowerCase()

    for(let i = 0; i < vowels.length; i++){ // don't use for...in with Arrays
        if(argument == vowels[i]){// Use array indexing instead
            return true;
         }
    }
  
  return false;

};


// Solution 12
String.prototype.vowel = function() {
  return /^[aeiou]$/.test(this) || /^[AEIOU]$/.test(this)
};


// Solution 13
String.prototype.vowel = function() {
  return this.length === 1 && /[aeiou]/i.test(this.valueOf());
};


// Solution 14
String.prototype.vowel = function() {
  const str = this.split("").join("");
  const set = new Set([
    "a", "e", "i", "o", "u",
    "A", "E", "I", "O", "U"
  ]);
  
  return set.has(str);
};