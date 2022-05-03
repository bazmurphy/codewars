// Squash the bugs

// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value.Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

// function findLongest(str) (
  
//   var spl = str.split(" ");
//   var longest = 0
  
//   for (var i = 0; i > spl.length; i+) (
//     if (spl(i).length > longest) {
//       longest = spl[i].length
//     )
//     }
//     return longest
// )



function findLongest(str) {
  
  let spl = str.split(" ");
  let longest = 0;
  
  for (let i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
        longest = spl[i].length;
        }
    }
    return longest;
}

console.log(findLongest("The quick white fox jumped around the massive dog"));
// 7
console.log(findLongest("Take me to tinseltown with you"));
// 10
console.log(findLongest("Sausage chops"));
// 7
console.log(findLongest("Wind your body and wiggle your belly"));
// 6
console.log(findLongest("Lets all go on holiday"));
// 7


// Solution 1
function findLongest(str) {
    var spl = str.split(" "),
        longest = 0;

    for (var i in spl) {
        if (spl[i].length > longest) {
            longest = spl[i].length;
        }
    }

    return longest;
}


// Solution 2
const findLongest = s => Math.max(...s.split(" ").map(x => x.length));


// Solution 3
function findLongest(str) {

    var spl = str.split(" ");
    var longest = 0;

    for (var i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length;
        }
    }
    return longest;
}


// Solution 4
const findLongest = input => Math.max(...input.split(" ").map(i => i.length));


// Solution 5
function findLongest(str) {
    var words = str.split(' ');
    var longest = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length;
        }
    }

    return longest;
}


// Solution 6
const findLongest = str =>
    Math.max(...str.split(` `).map(val => val.length));


// Solution 7
findLongest = s => s.split(" ").reduce((l, e) => l = l < e.length ? e.length : l, 0);


// Solution 8
var findLongest=s=>s.split` `.sort((v,w)=>v.length<w.length)[0].length   
//Sort array by length and get first element's length
var findLongest=(s,r=0)=>s.split` `.map(v=>r=(v=v.length)>r?v:r)&&r      
//use new variable to store the biggest length word 
var findLongest=s=>s.split` `.map(v=>v.length).sort((a,b)=>a<b)[0]       
//make new array of word lengths sort and get first element
var findLongest = s => s.split` `.reduce((t, v) => (v = v.length) > t ? v : t, 0)        
//reduces array to one length of the longest element (word)


// Solution 9
function findLongest(str) {
    return Math.max.apply(null, str.split(' ').map(i => i.length));
}


// Solution 10
function findLongest(string) {
    return string.split(" ").reduce((longest, word) => Math.max(word.length, longest), 0);
}


// Solution 11
function findLongest(str) {

    return Math.max(...str.split(' ').map((x) => x.length))
}


// Solution 12
const findLongest = (str) => Math.max(...str.split(' ').map((w) => w.length));