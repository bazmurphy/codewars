// Good vs Evil

// Description

// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10

// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10

// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// Input:

// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.

// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.

// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:

// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

function goodVsEvil(good, evil){
    const goodWorth = [1,2,3,3,4,10];
    const evilWorth = [1,2,2,2,3,5,10];
    const goodTotal = good.split(" ").map((element, index) => Number(element) * goodWorth[index]).reduce((acc, cv) => acc + cv, 0);
    const evilTotal = evil.split(" ").map((element, index) => Number(element) * evilWorth[index]).reduce((acc, cv) => acc + cv, 0);
    return goodTotal > evilTotal ? "Battle Result: Good triumphs over Evil" : goodTotal < evilTotal ? "Battle Result: Evil eradicates all trace of Good" : "Battle Result: No victor on this battle field";
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
// 'Battle Result: Evil eradicates all trace of Good'
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));
// 'Battle Result: Good triumphs over Evil'
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));
// 'Battle Result: No victor on this battle field'


// Solution 1
function goodVsEvil(good, evil) {  
  var getWorth = function( side, worth ) {
    return side.split(' ').reduce( function(result, value, index) { 
      return result + (worth[index] * value);
    }, 0);
  }

  var result = getWorth( good, [1,2,3,3,4,10] ) - getWorth( evil, [1,2,2,2,3,5,10] );

  return result > 0 ? "Battle Result: Good triumphs over Evil" :
         result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                      "Battle Result: No victor on this battle field";
}


// Solution 2
var app = {}

//Added arrays so that if / when then Ents come to battle
app.good = [{ Name : "Hobbits", Strength : 1},
            { Name : "Men", Strength : 2 },
            { Name : "Elves", Strength : 3},
            { Name : "Dwarves", Strength : 3},
            { Name : "Eagles", Strength : 4},
            { Name : "Wizards", Strength : 10}]
            
app.evil = [{ Name : "Orcs", Strength : 1},
           { Name : "Men", Strength : 2 },
           { Name : "Wargs", Strength : 2},
           { Name : "Goblins", Strength : 2},
           { Name : "Uruk Hai", Strength : 3},
           { Name : "Trolls", Strength : 5},
           { Name : "Wizards", Strength : 10} ]
           
app.battleResults = [{ Won : "Evil", Message : "Battle Result: Evil eradicates all trace of Good"},
                     { Won : "Good", Message : "Battle Result: Good triumphs over Evil"},
                     { Won : "Tie", Message : "Battle Result: No victor on this battle field"}];

app.getBattleResultMessage = function(s) { return this.battleResults[this.battleResults.map(function(e) { return e.Won; }).indexOf(s)].Message; }

function goodVsEvil(good, evil){
  var goodArmy = good.split(' ');
  var evilArmy = evil.split(' ');
  var goodRoll = 0;
  var evilRoll = 0;
  
  for(var i = 0; i < goodArmy.length; i++){
    goodRoll += app.good[i].Strength * goodArmy[i];    
  }
  for(var i = 0; i < evilArmy.length; i++){
    evilRoll += app.evil[i].Strength * evilArmy[i];
  }
  
  if(evilRoll > goodRoll){
    return app.getBattleResultMessage('Evil');
  }else if(evilRoll < goodRoll){
    return app.getBattleResultMessage('Good');
  }else{
    return app.getBattleResultMessage('Tie');
  }
}


// Solution 3
function goodVsEvil(good, evil) {
  var worth = [ [1, 2, 3, 3, 4, 10], [1, 2, 2, 2, 3, 5, 10] ];
  var good = good.split(' ').reduce((s,v,i) => s + worth[0][i] * v, 0);
  var evil = evil.split(' ').reduce((s,v,i) => s + worth[1][i] * v, 0);
  if (good > evil) return "Battle Result: Good triumphs over Evil";
  else if (evil > good) return "Battle Result: Evil eradicates all trace of Good";
  else return "Battle Result: No victor on this battle field";
}


// Solution 4
function goodVsEvil(good, evil){
 var worthGood = [1, 2, 3, 3, 4, 10];
 var worthEvil = [1, 2, 2, 2, 3, 5, 10];
 
 var powerGood = good.split(' ').reduce(function(sum, current, index){ return sum + current*worthGood[index]}, 0);
 var powerEvil = evil.split(' ').reduce(function(sum, current, index){ return sum + current*worthEvil[index]}, 0);
 
  
  if (powerEvil > powerGood) return 'Battle Result: Evil eradicates all trace of Good';
  else if (powerGood > powerEvil) return 'Battle Result: Good triumphs over Evil';
  else return 'Battle Result: No victor on this battle field'
}


// Solution 5
function goodVsEvil(good, evil){
  var g = 0, e = 0;
  var goodWorth = [1, 2, 3, 3, 4, 10], evilWorth = [1, 2, 2, 2, 3, 5, 10];
  for (n in good.split(" ")) g += +good.split(" ")[n]*goodWorth[n];
  for (n in evil.split(" ")) e += +evil.split(" ")[n]*evilWorth[n];
  return (g > e) ? "Battle Result: Good triumphs over Evil" 
    : (e > g) ? "Battle Result: Evil eradicates all trace of Good"
    : "Battle Result: No victor on this battle field";
}


// Solution 6
function goodVsEvil(good, evil){
    //Welcome to hardcode guyZ. <3
    var goodArr = good.split(' '),
     evilArr = evil.split(' '),
     goodPoints = goodArr[0]*1 + goodArr[1]*2 + goodArr[2]*3 + goodArr[3]*3 + goodArr[4]*4 + goodArr[5]*10,
     evilPoints = evilArr[0]*1 + evilArr[1]*2 + evilArr[2]*2 + evilArr[3]*2 + evilArr[4]*3 + evilArr[5]*5 + evilArr[6]*10;
   if (goodPoints === evilPoints) return 'Battle Result: No victor on this battle field';
    return goodPoints < evilPoints ?  "Battle Result: Evil eradicates all trace of Good" :"Battle Result: Good triumphs over Evil";
}


// Solution 7
function goodVsEvil(good, evil){
   let goodForces = good.split(" ");
   let evilForces = evil.split(" ");
   
   let goodArmy = new Map([
                           ["Hobbits", goodForces[0] * 1 ],
                           ["Men"    , goodForces[1] * 2 ],
                           ["Elves"  , goodForces[2] * 3 ],
                           ["Dwarves", goodForces[3] * 3 ],
                           ["Eagles" , goodForces[4] * 4 ],
                           ["Wizards", goodForces[5] * 10]
                         ]);    
   
   
   let evilArmy = new Map([
                           ["Orcs"    , evilForces[0] * 1 ],
                           ["Men"     , evilForces[1] * 2 ],
                           ["Wargs"   , evilForces[2] * 2 ],
                           ["Goblins" , evilForces[3] * 2 ],
                           ["Uruk Hai", evilForces[4] * 3 ],
                           ["Trolls"  , evilForces[5] * 5 ],
                           ["Wizards" , evilForces[6] * 10]
                         ]);
   
   
   let goodworth = 0;
   for(let value of goodArmy.values()) goodworth += value;
   
   
   let evilworth = 0;
   for(let value of evilArmy.values()) evilworth += value;
   
   if (goodworth == evilworth) return "Battle Result: No victor on this battle field";
   if (goodworth > evilworth)  return "Battle Result: Good triumphs over Evil";
   if (goodworth < evilworth)  return "Battle Result: Evil eradicates all trace of Good";
}


// Solution 8
function goodVsEvil(good, evil){
good = good.split(' ');
evil = evil.split(' ');

let goodWorth = [1, 2, 3, 3, 4, 10];
let evilWorth = [1, 2, 2, 2, 3, 5, 10];

let addGood = good.map((i, e) => i * goodWorth[e]);
let addEvil = evil.map((i, e) => i * evilWorth[e]);

let goodSide = addGood.reduce((acc, curr) => acc + curr);
 let evilSide = addEvil.reduce((acc, curr) => acc + curr);

if (goodSide > evilSide) {
    return "Battle Result: Good triumphs over Evil";
  } else if (goodSide < evilSide) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
 
}


// Solution 9
const goodVsEvil = (good, evil) =>
  (fn => `Battle Result: ${fn(good) === fn(evil) ? `No victor on this battle field` : fn(good) > fn(evil) ? `Good triumphs over Evil` : `Evil eradicates all trace of Good`}`)
  (str => str.split(` `).reduce((pre, val, idx) => pre + val * (str === good ? [1, 2, 3, 3, 4, 10] : [1, 2, 2, 2, 3, 5, 10])[idx], 0));


// Solution 10
goodVsEvil=(a,b,c=[1,2,3,3,4,10],d=[1,2,2,2,3,5,10],e=(a,b)=>a.split` `.reduce((c,d,e)=>c+d*b[e],0))=>(([a,b])=>`Battle Result: ${a>b?'Good triumphs over Evil':a<b?'Evil eradicates all trace of Good':'No victor on this battle field'}`)([e(a,c),e(b,d)])


// Solution 11
function goodVsEvil(good, evil){

  let goodPower = [
    1, // Hobbits
    2, // Men
    3, // Elves
    3, // Dwarves
    4, // Eagles
    10 // Wizards
  ];
  
  let evilPower = [
    1, // Orcs
    2, // Men
    2, // Wargs
    2, // Goblins
    3, // Uruk Hai
    5, // Trolls
    10 // Wizzards
  ]

  let goodArray = arrayToNumber(good.split(" "));
  let evilArray = arrayToNumber(evil.split(" "));
  let goodResult = 0;
  let evilResult = 0;
  
  
  for(let i=0; i<goodArray.length; i++){
   goodResult += (goodArray[i] * goodPower[i]);
  }
  
  for(let i=0; i<evilArray.length; i++){
   evilResult += (evilArray[i] * evilPower[i]);
  }
  
  console.log("GoodArray: " + goodArray + " EvilArray: " + evilArray)
  console.log("Good: " + goodResult + " Evil: " + evilResult)
  
  if(goodResult > evilResult && evilResult != 0) {
    return "Battle Result: Good triumphs over Evil"
  } else if (goodResult < evilResult && goodResult !=0) {
    return "Battle Result: Evil eradicates all trace of Good"
  } else {
    return  "Battle Result: No victor on this battle field"
  }

}

// Array to number
function arrayToNumber(array){
  for(let i=0; i<array.length; i++){
    array[i] = parseInt(array[i])
  }
  return array;
}


// Solution 12
function goodVsEvil(good, evil){
  var goodWorth = [1, 2, 3, 3, 4, 10], 
    evilWorth = [1, 2, 2, 2, 3, 5, 10],
    goodTotal = 0,
    evilTotal = 0;
  good = good.split(' ');
  evil = evil.split(' ');
  for (i = 0; i < good.length; i++){
    goodTotal += good[i]*goodWorth[i];
  }
    for (i = 0; i < evil.length; i++){
    evilTotal += evil[i]*evilWorth[i];
  }
  if (goodTotal > evilTotal){
    return 'Battle Result: Good triumphs over Evil';
  } else if (evilTotal > goodTotal){
    return 'Battle Result: Evil eradicates all trace of Good';
  } else {
    return 'Battle Result: No victor on this battle field';
  }
}