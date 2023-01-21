// Build Tower

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(nFloors) {
  let output = [];

  a = 1;
  b = nFloors - 1;

  for (let i = 1; i <= nFloors; i++) {
    output.push(" ".repeat(b) + "*".repeat(a) + " ".repeat(b))
    a += 2;
    b--;
  }

  return output;
}


// populate an array with asterisks
// use the total stars and total blanks as the metrics
// populate the stars first
// then unshift and push the blank spaces
// start with the final row
// then join it all together

// LIMITER length of all strings / arrays = (nFloors * 2) - 1;
// TOTAL number of strings / arrays = nFloors;

// function towerBuilder(nFloors) {

    // 1f = 1  10 blank
    // 2f = 3   8 blank
    // 3f = 5   6 blank
    // 4f = 7   4 blank    
    // 5f = 9   2 blank
    // 6f = 11  0 blank

    // let output = [];

    // let maxSize = (nFloors * 2) - 1;

    // let currentFloor = nFloors;

    // for (let i = 0; i < nFloors; i++) {
       
    //     let subelement = [];

    //     for (let i = 0; i < maxSize ; i++) {
    //         subelement.push('*')
    //     }
                               
    //     for (let i = subelement.length; i < maxSize ; i += 2) {
    //         subelement.unshift(' ')
    //         subelement.push(' ')
    //     }
        
    //     output.shift(subelement);

    //     currentFloor--;
    
    // }

    // return output;

// }

console.log(towerBuilder(1));
// ["*"]
console.log(towerBuilder(2));
// [" * ", "***"]
console.log(towerBuilder(3));
// ["  *  ", " *** ", "*****"]


// Solution 1
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}


// Solution 2
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}


// Solution 3
function towerBuilder(n) {
  return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}


// Solution 4
function towerBuilder(nFloors) {
  // build here
  let space,star, tower = [];
  for(i = 1; i <= nFloors; i++){
    space = " ".repeat(nFloors - i);
    star  = "*".repeat((2*i) - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower
}


// Solution 5
function towerBuilder(nFloors) {
  var result = [];
  var starNumber = 1;
  for (i=1; i<=nFloors; i++) {
    result[i-1] = " ".repeat(nFloors-i) + "*".repeat(starNumber) + " ".repeat(nFloors-i);
    starNumber += 2;
  }
  return result;
}


// Solution 6
const towerBuilder = n =>
  [...Array(n)].map((_, i) => ' '.repeat(n-i-1) + '*'.repeat(i*2+1) + ' '.repeat(n-i-1)) 


// Solution 7
const towerBuilder = (nFloors) => Array
  .from(Array(nFloors).keys())
  .map(i => 2 * i + 1)
  .reverse()
  .map((i, index) => " ".repeat(index) + '*'.repeat(i) + " ".repeat(index))
  .reverse();


// Solution 8
function towerBuilder(nFloors) {
  const repeat = ch => n => Array(n+1).join(ch);
  const space = repeat(' ');
  const star = repeat('*');
  const center = length => s => space((length-s.length)/2) + s + space((length-s.length)/2);
  const baseSize = nFloors*2 - 1;
  const buildFloor = (_, i) => star(2*i+1);
  
  return Array.from({length:nFloors}, buildFloor).map(center(baseSize));
}


// Solution 9
function towerBuilder(Fl) {
  let arr = [];
  for (var i = 0; i < Fl; i++){
    arr[i] = " ".repeat(Fl-i-1) + "*".repeat(i*2+1) + " ".repeat(Fl-i-1)
  }
  return arr
}


// Solution 10
function towerBuilder(nFloors) {
  var tower = [];
  
  for (var i = 1; i <= nFloors; i++) {
    tower.push(makeFloor((nFloors*2),(i*2)));    
  }
  
  return tower;
}

function makeFloor(width, stars) {
  var padding = Math.floor((width - stars)/2)+1;
  return Array(padding).join(' ') + Array(stars).join('*') + Array(padding).join(' ');            
}


// Solution 11
function towerBuilder(nFloors) {
  var arrTower = [],
      blocks;
  
  function buildFlour(blocks) {
    var maxSize = nFloors == 1 ? 1 : nFloors * 2 - 1,
        floor = '';

    for(var i = 0; i < maxSize; i++) {
      var space = (maxSize - blocks) / 2;
      
      if(maxSize - blocks !== 0) {
          if((i + 1) <= space || (i + 1) > blocks + space) {
            floor += ' ';
          } else {
            floor += '*';
          }
      } else {
        floor += '*';
      }
    }
    
    return floor;
  }
  
  for(var i = 0; i < nFloors; i++) {
    var blocks = i == 0 ? 1 : blocks + 2;
    
    arrTower.push(buildFlour(blocks));
  }
  
  return arrTower;
}


// Solution 12
function towerBuilder(n) {  
  return Array.from({length : n}).map((v,i)=>' '.repeat(n-i-1)+'*'.repeat(2*(i)+1)+' '.repeat(n-i-1));
}


// Solution 13
function towerBuilder(nFloors) {
  let i =-1;let j=nFloors;
  return new Array(nFloors).fill(0).map(x=>{return ' '.repeat(--j)+'*'.repeat(i+=2)+' '.repeat(j)});
}


// Solution 14
function towerBuilder(nFloors) {
  let floors = [];
  for (let i = 0, n = nFloors - 1; i < nFloors; ++i, --n) {
      floors.push(Array(n + 1).join(" ") + Array(i * 2 + 2).join("*") + Array(n + 1).join(" "));
  }
  return floors;
}