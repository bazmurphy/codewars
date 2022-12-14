// Hells Kitchen

// Gordon Ramsay shouts. He shouts and swears. 
// There may be something wrong with him.

// Anyway, you will be given a string of four words. 
// Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, 
// Every word should end with '!!!!', 
// Any letter 'a' or 'A' should become '@', 
// Any other vowel should become '*'.

function gordon(a){
    const lettersToReplace = ["A", "E", "I", "O", "U", " "];
    const replacements = ["@", "*", "*", "*", "*", "!!!! "];
    return a.toUpperCase()
            .split("")
            .map(element => lettersToReplace.indexOf(element) > -1 ? replacements[lettersToReplace.indexOf(element)] : element)
            .join("")
            .concat("!!!!");
}

console.log(gordon('What feck damn cake'))
// 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
console.log(gordon('are you stu pid'))
// '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'
console.log(gordon('i am a chef'));
// '*!!!! @M!!!! @!!!! CH*F!!!!'


// Solution 1
function gordon(ramsay) {
    return ramsay
      .toUpperCase()
      .replace(/\w+/g, '$&!!!!')
      .replace(/[AEIOU]/g, v => v == 'A' ? '@' : '*');
  }


// Solution 2
const gordon=a=>a.toUpperCase().split(" ").map(a=>a.replace(/A/g,"@").replace(/[EIOU]/g,"*")+"!!!!").join(" ");


// Solution 3
const gordon = (str) => 
                str.toUpperCase().replace(/A/g, x=>'@').replace(/[EOUI]/g, x=>'*')
                .split(' ').map(el => el + '!!!!').join(' ');


// Solution 4
const gordon = s =>
  s.toUpperCase().replace(/\w+/g, `$&!!!!`).replace(/[AEIOU]/g, val => val === `A` ? `@` : `*`);


// Solution 5
function gordon(s){
    return s.toUpperCase().replace(/\b\w+\b/g,'$&!!!!').replace(/A/g,'@').replace(/[UIOE]/g,'*')
}


// Solution 6
function gordon(a) {
    return a.split(" ").map(w => w.toUpperCase().replace(/A/g, "@").replace(/[EIOU]/g, "*") + "!!!!").join(" ");
}


// Solution 7
function gordon(a){
    const vowels = 'AEIOU';
    let result = '';
    
    for(let char of a) {
      
      if (vowels.includes(char.toUpperCase()) && char.toUpperCase() === 'A') {
        result += '@';
      } else if (vowels.includes(char.toUpperCase())) {
        result += '*';
      } else if (char === ' ') {
        result += '!!!! ';
      } else {
        result += char.toUpperCase();
      }
    }
    
    result += '!!!!';
    
    return result;
}


// Solution 8
function gordon(a) {
    return a.replace(/[EeIiOoUu]/ig,'*').replace(/[aA]/ig,'@').toUpperCase().split(' ').map(a => a + '!!!!').join(' ');
}


// Solution 9
function gordon(a){
    var arr=a.split(' ');
    var ans=[]
    for (var i=0; i<arr.length; ++i)
    {
      var s=(arr[i].toUpperCase()+'!!!!').split('');
      for (var j=0; j<s.length; ++j)
      {
        if (s[j]=='A')
          s[j]='@';
        if (s[j]=='E'||s[j]=='I'||s[j]=='O'||s[j]=='U')
          s[j]='*';
      }
      ans.push(s.join('')); 
    }
    return ans.join(' ')
}


// Solution 10
function gordon(a){
let palavras = a
let arr = []
for (i=0; i < palavras.length; i++){  
  if(palavras[i] == "a"){
    arr.push("@")
  }
  else if (palavras[i] == "e"|| palavras[i] == "i" || palavras[i] == "o" || palavras[i] == "u"){
    arr.push("*")
  }
  else{
    arr.push(palavras[i])
  }
}
let alteração1 = arr.join("")
let alteração2 = alteração1.split(" ")
let alteração3 = alteração2.join("!!!! ")
let alteração4 = alteração3 + "!!!!"
let final = alteração4.toUpperCase()
return final
}


