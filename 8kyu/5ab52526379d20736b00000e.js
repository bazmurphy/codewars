// Help the Elite Squad of Brazilian forces BOPE

// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.

function magNumber(info){
  const weapons = {
    "PT92": 17,
    "M4A1": 30,
    "M16A2": 30,
    "PSG1": 5
  }

  const streetsToCross = info[1];
  const magazineCapacity = weapons[info[0]];
  const bulletsNeccessary = streetsToCross * 3;
  const magazinesNeeded = Math.ceil(bulletsNeccessary / magazineCapacity);

  return magazinesNeeded;
}


console.log(magNumber(["PT92", 6]));
// 2
console.log(magNumber(["M4A1", 8]));
// 1
console.log(magNumber(["M16A2", 19]));
// 2
console.log(magNumber(["PSG1", 31]));
// 19
console.log(magNumber(["PT92", 19]));
// 4


// Solution 1
magNumber = info => Math.ceil(info[1] * 3 / {PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5}[info[0]])


// Solution 2
function magNumber(info){
  const dict = {"PT92": 17, "M4A1": 30, "M16A2": 30, "PSG1": 5}
  return Math.ceil(info[1] * 3 / dict[info[0]])
}


// Solution 3
const magNumber = (info) => {
  const [gun, street] = info;
  let magzines = 0;
  switch(gun){
      case('PT92'):
      magzines = Math.ceil((street * 3) / 17);
      break;
      case('M4A1'):
      magzines = Math.ceil((street * 3) / 30);
      break;
      case('M16A2'):
      magzines = Math.ceil((street * 3) / 30);
      break;
      case('PSG1'):
      magzines = Math.ceil((street * 3) / 5);
      break;
  }
  return magzines;
}


// Solution 4
function magNumber(info){
  [weapon, streets] = info
  const weapons={
    "PT92": 17,
    "M4A1" : 30,
    "M16A2" : 30,
    "PSG1":5,
  }
  if(3*streets<=weapons[weapon]) return 1
  else{
      let n=1;
      while(weapons[weapon]*n<streets*3) n++
      return n
  }
}


// Solution 5
function magNumber(info){
  const dict = new Map([
    ["PT92", 17],
    ["M4A1", 30],
    ["M16A2", 30],
    ["PSG1", 5]
  ]);
  return Math.ceil(info[1] * 3 / dict.get(info[0]));
}


// Solution 6
function magNumber(info){
  const weapons = {
    PT92: 17,
    M4A1: 30,
    M16A2: 30,
    PSG1: 5
  }
  for(let i = 0; i < info.length; i++){
      return Math.ceil((info.pop() * 3) / weapons[info[i]]);
  }
}


// Solution 7
function magNumber(info){
  let bulletsNeeded = info[1]*3
  let answer
   
  const requiredClips = (bulletsInClip) => {
    answer = Math.ceil(bulletsNeeded / bulletsInClip)
  }
 
   switch(info[0]) {
     case 'M4A1':
     case 'M16A2':
       requiredClips(30)
       break
     case 'PT92':
       requiredClips(17)
       break
     case 'PSG1':
       requiredClips(5)
       break
   }
   return answer
 }


// Solution 8
function magNumber(info) {
  const [gun, bullet] = info;
  
  switch(gun) {
    case 'PT92':
      return Math.ceil(bullet * 3 / 17);
    case 'M4A1':
    case 'M16A2':
      return Math.ceil(bullet * 3 / 30);
    case 'PSG1':
      return Math.ceil(bullet * 3 / 5);
  }
}


// Solution 9
function magNumber(info) {
  const [gun, bullet] = info;
  
  switch(gun) {
    case 'PT92':
      return Math.ceil(bullet * 3 / 17);
    case 'M4A1':
      return Math.ceil(bullet * 3 / 30);
    case 'M16A2':
      return Math.ceil(bullet * 3 / 30);
    case 'PSG1':
      return Math.ceil(bullet * 3 / 5);
  }
}


// Solution 10
function magNumber(info){
  const ammoBul = {
    'PT92' : 17, 
    'M4A1' : 30, 
    'M16A2' : 30, 
    'PSG1' : 5, 
  }
  
  return Math.ceil( info[1] * 3 / ammoBul[info[0]])
  
  
}


// Solution 11
const magNumber = ([weapon, streets]) => Math.ceil(streets * 3 / ({
  'PT92': 17,
  'M4A1': 30,
  'M16A2': 30,
  'PSG1': 5,
})[weapon]);


// Solution 12
function magNumber(info){
  let result = info[1] * 3 / (info[0] == 'PT92' ? 17 : info[0] == 'PSG1' ? 5 : 30);
  return  Math.ceil(result);
  }


// Solution 13
function magNumber(info){
  const [weapon, numOfStreets] = info
  const allMagsCapacity = {
    PT92: 17,
    M4A1: 30,
    M16A2: 30,
    PSG1: 5,
  }
  const magCapacity = allMagsCapacity[weapon]
  const roundsAvailable = numOfStreets * 3 || 1
  
  const exactMagsCount = roundsAvailable / magCapacity
  return Math.ceil(exactMagsCount)
}


// Solution 14
const magNumber = info => Math.ceil(info[1]*3 /({PT92: 17, M4A1: 30, M16A2:30, PSG1:5})[info[0]])

