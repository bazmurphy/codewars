// Coding 3min : Jumping Dutch act

// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

// Task:

// Mr. despair wants to jump off Dutch act, So he came to the top of a building.

// Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

// Input: floor, The height of the building (floor)

// Output: a string, The voice of despair(When jumping Dutch act)

// Example:

// sc(2) should return "Aa~ Pa! Aa!"

// It means:

// Mr. despair jumped from the 2 floor, the voice is "Aa~"
// He fell on the ground, the voice is "Pa!"
// He did not die immediately, and the final voice was "Aa!"

// sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

// sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

// sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

// if floor<=1, Mr. despair is safe, return ""

function sc(floor){
  let output = [];
  if (floor <= 1) {
    return ""
  } else if (floor <= 6) {
    for (let i = 1; i <= floor; i++) {
     if (i < floor) {
        output.push("Aa~");
      } else if (i === floor) {
        output.push("Pa!");
      }
    }
    output.push("Aa!")
  } else {
      for (let i = 1; i <= floor; i++) {
      if (i < floor) {
        output.push("Aa~");
      } else if (i === floor) {
        output.push("Pa!");
      }
    }
  }
  return output.join(" ");
}

console.log(sc(2));
// "Aa~ Pa! Aa!", "good luck!");  
console.log(sc(6));
// "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!"); 
console.log(sc(7));
// "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
console.log(sc(10));
// "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
console.log(sc(1));
// "", "good luck!"); 
console.log(sc(-1));
// "", "good luck!");


// Solution 1
function sc(floor){
  if(floor <= 1) return "";
  
  return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');
}


// Solution 2
function sc(floor) {
  if (floor <= 1) return "";
  var SCREAM = "";
  for (let i = 0; i < floor - 1; i++) {
    SCREAM += "Aa~ ";
  }
  SCREAM += "Pa!";
  if (floor <= 6) SCREAM += " Aa!";
  return SCREAM;
}


// Solution 3
const sc = floor => floor < 2 ? '' : 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor < 7 ? ' Aa!' : '')


// Solution 4
const sc = floor => floor > 1 ? Array.from({length: floor - 1}, () => "Aa~").concat(floor > 6 ? ["Pa!"] : ["Pa!", "Aa!"]).join(" ") : "";


// Solution 5
const sc = floor => 
  floor >= 7 ? 'Aa~ '.repeat(floor - 1) + 'Pa!' :
  floor > 1 ?  'Aa~ '.repeat(floor - 1) + 'Pa! Aa!' : ''


// Solution 6
const sc=(floor)=>floor>1?new Array(floor).join('Aa~ ')+'Pa!'+(floor>6?'':' Aa!'):'';
//or you can use the ES6 new API array.from :)   just like follow:
const otherSc=(floor)=>floor>1?Array.from({length:floor-1}).map(a=>'Aa~ ').join('')+'Pa!'+(floor>6?'':' Aa!'):'';


// Solution 7
const sc = floor =>
  floor < 2.00000000000000 ? `` : `${`Aa~ `.repeat(--floor)}Pa!${floor < 6 ? ` Aa!` : ``}`;


// Solution 8
function sc(floor){
  if (floor < 2) { return '' }
  return Array(floor - 1).fill('Aa~').join(' ') + 
    (floor < 7 ? ' Pa! Aa!' : ' Pa!');
}


// Solution 9
const sc = f =>{
  let answ = '';
  if(f > 1 && f < 7){
    for (let i=0; i < f; i++){
      if (i == f - 1){
        return answ += 'Pa! Aa!';
      }
      answ += 'Aa~ ';
    }
  }else if(f > 6){
    for (let i=0; i< f; i++){
      if(i == f-1){
        return answ += 'Pa!';
      }
      answ += 'Aa~ ';
    }
  }else{
    return ''
  }
}


// Solution 10
function sc (floor) {
  if (floor < 2) return ''
  let screems = [...Array(floor - 1)].map(x => 'Aa~').concat('Pa!')
  if (floor < 7) screems.push('Aa!')
  return screems.join(' ')
}


// Solution 11
function sc(floor){
  if (floor < 2) return '';

  var result = new Array(floor-1).fill('Aa~');
  
  if (floor > 6) {
    result.push('Pa!');
  } else {
    result.push('Pa!');
    result.push('Aa!');
  }

  return result.join(' ');
}


// Solution 12
const sc = (floor, cry = false, die = false) => {
  if (floor <= 0) return '';             // wrong input
  if (floor == 2) cry = true;            // if man was at 7th floor he'll cry
  if (floor == 7) die = true;            // if man was at 7th floor he'll die
  floor--;                               // recursive step
  if (!floor && die) return 'Pa!';       // if man is landing and have to die
  if (!floor && cry) return 'Pa! Aa!'    // if man is landing and have to cry
  if (!floor && !cry) return ''          // if man is landing and havn't to cry
  return 'Aa~ ' + sc(floor, cry, die);   // recursive call
}


// Solution 13
function sc(floor){
  return (!floor || floor <= 1) ? "" : ("Aa~ ").repeat(floor - 1) + (floor <= 6 ? "Pa! Aa!" : "Pa!");
}


// Solution 14
function sc(floor){
  console.log(floor)
  return floor < 2 ? "" : "Aa~ ".repeat(floor - 1) + "Pa!" + (floor <= 6 ? " Aa!": '')
}