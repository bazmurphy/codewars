// Basic Math (Add or Subtract)

// In this kata, you will do addition and subtraction on a given string. 
// The return value must be also a string.

// Note: the input will not be empty.

// Examples

// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

function calculate(str) {
    // deliberately doing this without Regex OR eval
    let numbers = "1234567890";
    let composite = [];
    let temp = 0;

    for (let i = 0; i < str.length; i++) {
        if (numbers.indexOf(str[i]) > -1) {
            temp += str[i];
        } else if (str[i] === "p") {
            composite.push(Number(temp));
            temp = 0;
            composite.push("+");
        } else if (str[i] === "m") {
            composite.push(Number(temp));
            temp = 0;
            composite.push("-");
        }
    }
    composite.push(Number(temp));
    // console.log(composite);

    let result = 0;
    result += composite[0];
    for (let i = 1; i < composite.length; i++) {
        if (composite[i] === "+" && typeof composite[i+1] === "number") {
            result += composite[i+1];
        } else if (composite[i] === "-" && typeof composite[i+1] === "number") {
            result -= composite[i+1];
        }
    }
    // console.log(result);
    
    return result.toString();
}

console.log(calculate("1plus2plus3plus4"))
// '10'
console.log(calculate('1minus2minus3minus4'))
// '-8'
console.log(calculate('1plus2plus3minus4'))
// '2'
console.log(calculate('10plus20plus30minus40'))
// '20'


// Solution 1
function calculate(str) {

    return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
  }


// Solution 2
function calculate(str) {
    let numbers = str.split(/plus|minus/);
    let operations = str.match(/[a-z]+/g);
    let sum = parseInt(numbers[0]);
    for(let i = 0, len = operations.length; i < len; i++){
      switch(operations[i]){
        case "plus":
          sum += parseInt(numbers[i+1]);
          break;
        case "minus":
          sum -= parseInt(numbers[i+1]);
          break;
      }
    }
    return sum+"";
  }


// Solution 3
function calculate(str) {
    return eval(str.split("plus").join("+").split("minus").join("-")).toString();
  
  }


// Solution 4
function calculate(str) {
    let result = '';
    
    result = str.split('plus').join(' ')
              .split('minus').join(' -')
              .split(' ').reduce((a,c)=> +a + +c)  
    return result+'';
    }


// Solution 5
function calculate(str) {
    const num = str.split('plus').join(' ').split('minus').join(' -').split(' ').reduce((a,i)=> a + +i, 0)
  return [] + num
  }


// Solution 6
function calculate(str) {
    const result = String(
       str.split('plus').join(' ').split('minus').join(' -').split(' ')
         .reduce((total, num) => total + Number(num), 0)
        )
     return result;
   }


// Solution 7
const calculate = str => str.match(/\d+|\D+/g).reduce((acc, curr, idx, arr) => {
    if (curr === 'plus') {
      return +acc + +arr[idx + 1];
    } else if (curr === 'minus') {
      return +acc - +arr[idx + 1];
    } else {
      return String(acc);
    }
  })


// Solution 8
const calculate=(s)=>`${eval(s.split('plus').join('+').split('minus').join('-'))}`


// Solution 9
const calculate = s => eval(s.replace(/plus/g, '+').replace(/minus/g, '-')).toString()


// Solution 10
const calculate = str =>
  `${str.replace(/plus/g, ` `).replace(/minus/g, ` -`).split(` `).reduce((pre, val) => pre + +val, 0)}`;


// Solution 11
function calculate(str) {
    var re1 = /plus/gi;
    var re2 = /minus/gi;
    var newStr = eval(str.replace(re1, '+').replace(re2, '-')) + '';
   
     return newStr;
   }


// Solution 12
var calculate = str => "" + eval(str.replace(/(plus)|(minus)/g, (word) => word === "plus" ? "+" : "-"));