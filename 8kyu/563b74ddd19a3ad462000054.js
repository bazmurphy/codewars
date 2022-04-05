// Stringy Strings

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.


function stringy(size) {

    let string = ""

    for (let i = 1; i <= size; i++)
        if (i % 2 !== 0)
            string += "1"
        else
            string += "0"

    return string;

}


console.log(stringy(6));
// '101010'
console.log(stringy(4));
// '1010'
console.log(stringy(12));
// '101010101010'


// Solution 1
function stringy(size) {
    var str='';
    for( var i=1; i<=size; i++ )
      str+=i%2;
    return str;
}


// Solution 2
const stringy = x => ''.padStart(x,'10');


// Solution 3
const stringy = size => "10".repeat(size).slice(0,size);


// Solution 4
function stringy(size) {
    string = "1";
    for (var i = 0; i < size-1; i++) {
      if(i % 2 == 0)
        string += "0";
      else
        string += "1";
    }
    return string;
}


// Solution 5
const stringy = size => Array.from(Array(size), (v, i) => +!(i % 2)).join('');


// Solution 6
const stringy = size =>
  ``.padStart(size, `10`);


// Solution 7
function stringy(size) {
    return new Array(size).join('10').substr(0,size)   
}


// Solution 8
function stringy(size) {
    return ('1'.repeat(size)).replace(/11/g, '10');
}