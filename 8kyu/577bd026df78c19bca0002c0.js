// Correct the mistakes of the character recognition software

// Character recognition software is widely used to digitise printed texts.
// Thus the texts can be edited, searched and stored on a computer.

// When documents(especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text.You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1

// The test cases contain numbers only by mistake.


function correct(string) {

    // CodeWars doesn't accept "replaceAll" because it's ES2021/ES12

    // return string
    //     .replaceAll('5','S')
    //     .replaceAll('0','O')
    //     .replaceAll('1', 'I')
    
    let stringArr = string.split("")

    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] === '5') {
            stringArr[i] = 'S'
        } else if (stringArr[i] === '0') {
            stringArr[i] = 'O'
        } else if (stringArr[i] === '1') {
            stringArr[i] = 'I'
        }
    }
    
    return stringArr.join("")

}

console.log(correct("L0ND0N"));
// "LONDON"
console.log(correct("DUBL1N"));
// "DUBLIN"
console.log(correct("51NGAP0RE"));
// "SINGAPORE"
console.log(correct("BUDAPE5T"));
// "BUDAPEST"
console.log(correct("PAR15"));
// "PARIS"



// Solution 1
correct = s => s.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')


// Solution 2
const corrections = {
    '5': 'S',
    '0': 'O',
    '1': 'I',
};

const correct = string => (
    string.replace(/[501]/g, character => corrections[character])
);


// Solution 3
function correct(string) {
    return string.replace(/0/g, "O")
        .replace(/5/g, "S")
        .replace(/1/g, "I");
}


// Solution 4
const correct = string => string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");


// Solution 5
function correct(string) {
    const map = {
        0: "O",
        1: "I",
        5: "S"
    };

    return string
        .split("")
        .map(c => map.hasOwnProperty(c) ? map[c] : c)
        .join("");
}


// Solution 6
function correct(string) {
    return [...string].map(a => ({ '0': 'O', '5': 'S', '1': 'I' })[a] || a).join('')
}


// Solution 7
function correct(string) {
    return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
}


// Solution 8
const correct = string =>
    string.replace(/\d/g, val => `OI   S`[val]);


// Solution 9
function correct(s) {
    s = s.split('');
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '5') s[i] = 'S';
        else if (s[i] === '0') s[i] = 'O';
        else if (s[i] === '1') s[i] = 'I';
    }
    return s.join('');
}


// Solution 10
function correct(string) {
    var cor = string.replace(/0/ig, "O");
    cor = cor.replace(/1/ig, "I");
    cor = cor.replace(/5/ig, "S");
    return cor;
}


// Solution 11
function correct(string) {
    let opts = { 0: 'O', 1: 'I', 5: 'S' };
    return string.replace(/./g, c => opts[c] || c);
}


// Solution 12
const correct = s => s.replace(/\d/g, c => 'OI   S'[c])



// Solution 14
function correct(string) {
    //  for(var i = 0; i<string.length; i++){
    //     if(string[i] == 0 && string[i] !== ' '){
    //      string = string.substring(0, i) + 'O' + string.substring(i+1);
    //     }
    //     else if(string[i] == 5){
    //      string = string.substring(0, i) + 'S' + string.substring(i+1);
    //     } 
    //     else if(string[i] == 1){
    //      string = string.substring(0, i) + 'I' + string.substring(i+1);
    //     } 
    //   }
    //   return string; 
    return string.split('').map(function (l) { return l === '0' ? 'O' : l === '1' ? 'I' : l === '5' ? 'S' : l; }).join('');
}