// Build a square

// I will give you an integer. 
// Give me back a shape that is as long and wide as the integer. 
// The integer will be a whole number between 1 and 50.

// Example

// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer){
    let result = [];
    for (let i = 0; i < integer; i++) {
        result.push("+".repeat(integer));
    }
    return result.join("\n");
}

console.log(generateShape(8));
// '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'


// Solution 1
function generateShape(n){
    return ("+".repeat(n)+"\n").repeat(n).trim()
  }


// Solution 2
function generateShape(int){  
    var ans='';
    for (var i=0; i<int; ++i)
    {
      for (var j=0; j<int; ++j)
        ans+='+';
      if (i!=int-1)
        ans+='\n';
    }
    return ans;
  }


// Solution 3
let generateShape = int => [...Array(int)].map(_ => "+".repeat(int)).join("\n")


// Solution 4
const generateShape = (int) => ( Array(int + 1).join('+') + '\n' ).repeat(int).trim()


// Solution 5
function generateShape(int){
    return Array(int).fill(Array(int+1).join('+')).join('\n')
  }


// Solution 6
function generateShape(integer){

    //Creates a row of the array then joins it to a string
    let row = Array(integer).fill('+').join('');
    
    //Populates array with rows then joins it to a string with a newline
    let res = Array(integer).fill(row).join('\n');
  
    return res;
  }


// Solution 7
function generateShape(int) {
    var a, v, m, c = "+";
    if (int != 0){
    for (a = 1; a < int; a++) {c = c + "+"}
    m = "\n" + c;
    for (v = 1; v < int; v++) {c = c + m}
    return (c)
    } else {}
  }


// Solution 8
const generateShape = int =>
  `${`+`.repeat(int)}\n`.repeat(int).trim();


// Solution 9
// function generateShape(int){
//   let acc = ''; 
//   for (let i = 0; i < int; i++){
//     for (let j = 0; j < int; j++){
//       acc += '+'
//     }
//     acc += '\n'
//   }
//   return acc.substring(0, acc.length - 1);
// }

function generateShape(int){
    return new Array(int).fill(int).map( int => '+'.repeat(int)).join('\n')
}


// Solution 10
const generateShape = n => Array(n).fill(Array(n).fill`+`.join``).join`\n`;


// Solution 11
const generateShape = int => Array.from({length:int}, _ => '+'.repeat(int)).join('\n');


// Solution 12
const generateShape = (integer) => ('+'.repeat(integer) + '\n').repeat(integer).trim()