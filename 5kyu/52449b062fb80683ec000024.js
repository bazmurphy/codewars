// The Hashtag Generator

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
  if (str.split("").every((element) => element === " ")) {
    return false;
  } else {
    let workable = `#${str.trim().split(" ").map((element) => element.slice(0,1).toUpperCase() + element.slice(1)).join("")}`;
    return workable.length > 140 ? false : workable;
  }
}

console.log(generateHashtag(""));
// false
console.log(generateHashtag(" ".repeat(200)));
// false
console.log(generateHashtag("Do We have A Hashtag"));
// "#DoWeHaveAHashtag"
console.log(generateHashtag("Codewars"));
// "#Codewars"
console.log(generateHashtag("Codewars Is Nice"));
// "#CodewarsIsNice"
console.log(generateHashtag("Codewars is nice"));
// "#CodewarsIsNice"
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
// "#CodeWars"
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
// false
console.log(generateHashtag("a".repeat(139)));
// "#A" + "a".repeat(138)
console.log(generateHashtag("a".repeat(140)));
// false


// Solution 1
function generateHashtag (str) {
  if(!str || str.length < 1) return false;
  
  var r = '#' + str.split(' ').map(function(el) {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
  }).join('');
  return r.length > 140?false:r;
}


// Solution 2
function generateHashtag (str) {

  var hashtag = str.split(' ').reduce(function(tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');
  
  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}


// Solution 3
function generateHashtag (str = "") {
  var hashtag = `#${str.trim().replace(/(?:\b|\s)(\w)/gi, (m, g) => g.toUpperCase())}`
  return !!str && hashtag.length <= 140 && hashtag
}


// Solution 4
const generateHashtag = str => (s = '#'+str.trim().split(" ").filter(e=>e).map(e=>e[0].toUpperCase() + e.substring(1,e.length).toLowerCase()).join("")).length > 1 && s.length <= 140 ? s : false


// Solution 5
function generateHashtag (str) { 
  var s = "#" + str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}).split(" ").join("");
  if(str && s.length <= 140){
    return s;
  } return false; 
}


// Solution 6
function generateHashtag (str) {
  return str.length > 140 || str.length < 1 ? false : ('# ' + str).trim().replace(/(\s\w)/g, function ($0, $1) {
      return $1.slice(1).toUpperCase();
  });
}


// Solution 7
function generateHashtag (str) {
  var hash = '#';
  str.split(' ').map(a => {
    hash += a.charAt(0).toUpperCase() + a.slice(1);
  });
  return hash != '#' && hash.length <= 140 ? hash : false;
}


// Solution 8
function generateHashtag (str) {
  if (!str) return false
  let result = '#' + str.split(/\s+/).map(x => x ? x[0].toUpperCase() + x.slice(1).toLowerCase() : '').join('')
  if (result.length > 140) return false
  return result
}


// Solution 9
const generateHashtag = str =>
  (val => !!str.trim() && val.length <= 140 && val)
  (`#${str.replace(/(?:^|\s+)(\w)/g, (_, $1) => $1.toUpperCase())}`);


// Solution 10
function generateHashtag (str) {
  str = str.split(" ").reduce(function(p, c){
    return p + (c ? c[0].toUpperCase() + c.slice(1) : "");
  }, "#");
  return str.length > 140 || str == "#" ? false : str;
}


// Solution 11
generateHashtag=$=>/\w/g.test($)&&(t="#"+$.replace(/\s+/g,` `).split` `.map($=>$[0].toUpperCase``+$.substring(1)).join``)&&t.length<141&&t||!1



// Solution 12
function generateHashtag (str) {
  
  const isItOnlySpaces = (str) => str.trim().length > 0;
    
  const capitalizeEveryFirstLetter = (str) => str.split(' ').map(val => val.charAt(0).toUpperCase() + val.slice(1));
  
  if(isItOnlySpaces(str)) {
  const upperCaseStr = capitalizeEveryFirstLetter(str);
  
  const array = [];
  array.push(...upperCaseStr)
  
  const noSpaceArray = array.filter( e => e != ' ');
  noSpaceArray.unshift('#');
  const string = noSpaceArray.join('');
    if (string.length > 140){
      return false;
    }
  return string;
  }
  return false;
  

}


// Solution 13
function generateHashtag (str) {
  if (str.length == 0 || str.length > 140) return false;
  return '#' + str.split(' ').filter(function(x){return x.length != 0;}).map(function(x){return x[0].toUpperCase() + x.slice(1);}).join('');
}


// Solution 14
function generateHashtag(str) {
  if (!str.trim()) return false;

  const result =
    '#' +
    str
      .split(' ')
      .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
      .join('');

  return result.length > 140 ? false : result;
}