// Ironman Triathlon

// An Ironman Triathlon is one of a series of long-distance triathlon races organized by the World Triathlon Corporaion (WTC). 
// It consists of a 2.4-mile swim, a 112-mile bicycle ride and a marathon 26.2-mile raced in that order and without a break. 
// It hurts... trust me.

// Your task is to take a distance that an athlete is through the race, and return one of the following:

// If the distance is zero, return 'Starting Line... Good Luck!'.

// If the athlete will be swimming, return an object with 'Swim' as the key, and the remaining race distance as the value.

// If the athlete will be riding their bike, return an object with 'Bike' as the key, and the remaining race distance as the value.

// If the athlete will be running, and has more than 10 miles to go, return an object with 'Run' as the key, and the remaining race distance as the value.

// If the athlete has 10 miles or less to go, return return an object with 'Run' as the key, and 'Nearly there!' as the value.

// Finally, if the athlete has completed the distance, return "You're done! Stop running!".

// All distance should be calculated to two decimal places.

function iTri(s){
    const swim = 2.4;
    const bicycle = 112;
    const run = 26.2;
    // this is deliberately not hardcoded so you can adjust these values for different triathlons
    const total = swim + bicycle + run;
    // console.log(total);
    // 140.6

    if (s === 0) {
        return "Starting Line... Good Luck!";
    } else if (s < swim) {
        return { Swim : `${(total - s).toFixed(2)} to go!` };
    } else if (s < swim + bicycle) {
        return { Bike : `${(total - s).toFixed(2)} to go!` };
    } else if (s < swim + bicycle + run - 10) {
        return { Run : `${(total - s).toFixed(2)} to go!` };
    } else if (s < total) {
        return { Run : `Nearly there!`};
    } else {
        return "You're done! Stop running!";
    }
}

console.log(iTri(36))
// 'Bike':'104.60 to go!'
console.log(iTri(103.5))
// 'Bike':'37.10 to go!'
console.log(iTri(0))
// Starting Line... Good Luck!'
console.log(iTri(2))
// 'Swim':'138.60 to go!'


// Solution 1
function iTri(dist){
    let totalDist = 2.4 + 112 + 26.2;
    if (dist === 0) return 'Starting Line... Good Luck!';
    if (dist <= 2.4) return {'Swim': `${(totalDist - dist).toFixed(2)} to go!`};
    if (dist <= 114.4) return {'Bike': `${(totalDist - dist).toFixed(2)} to go!`};
    if (dist <= 127) return {'Run': `${(totalDist - dist).toFixed(2)} to go!`};
    if (dist < totalDist) return {'Run': `Nearly there!`};
    return "You're done! Stop running!";
}


// Solution 2

const raceInfo = [
    {type:'Swim', ml: 2.4}, 
    {type:'Bike', ml: 112}, 
    {type:'Run', ml: 26.2}, 
  ];
  
const resultMiles = raceInfo.reduce((a,b) => Number(a) + Number(b.ml),0);
  
const iTri = (s) => {
  //its gonna be a long day!
  // edge cases
  console.log(s);
    if( s >= resultMiles) {
      return `You're done! Stop running!`; 
    } else if(s === 0) {
      return 'Starting Line... Good Luck!';
    } else if ( resultMiles - s  <= 10) {
      return { 'Run': 'Nearly there!' };
    } 
    
    const togo = `${(resultMiles - s).toFixed(2)} to go!`;
    let key = raceInfo[raceInfo.length - 1].type;
  
    if( s <= raceInfo[0].ml) {
      return {[raceInfo[0].type] : togo};
    }
    for(let item of raceInfo) {
      if(s <= Number(item.ml)) {
        key = item.type;
        break;
      }
    }
    return {[key] : togo};
}


// Solution 3
function iTri(s){
    if(s === 0) return 'Starting Line... Good Luck!';
    else if(s < 2.4) return {'Swim': (140.6 - s).toFixed(2) + ' to go!'};
    else if(s < 114.4) return {'Bike': (140.6 - s).toFixed(2) + ' to go!'};
    else if(s < 130.6) return {'Run': (140.6 - s).toFixed(2) + ' to go!'};
    else if(s < 140.6) return {'Run': 'Nearly there!'};
    else return 'You\'re done! Stop running!';
}


// Solution 4
const iTri = s =>
  s >= 140.6 ? `You're done! Stop running!` : s ? {[s > 114.4 ? `Run` : s > 2.4 ? `Bike` : `Swim`]: s > 130.6 ? `Nearly there!` : (140.6 - s).toFixed(2) + ` to go!`} : `Starting Line... Good Luck!`;


// Solution 5
function iTri(s){
    var distanceLeft = (140.60 - s).toFixed(2);
    if (s === 0) {
      return 'Starting Line... Good Luck!';
    } else if (s > 0 && s <= 2.4) {
      return {Swim: distanceLeft + ' to go!'}; 
    } else if (s > 2.4 && s <= 114.4) {
      return {Bike: distanceLeft + ' to go!'}; 
    } else if (s > 114.4 && s < 130.6) {
      return {Run: distanceLeft + ' to go!'};
    } else if (s >= 130.6 && s < 140.6) {
      return {Run: 'Nearly there!'};
    } else if (s >= 140.6) {
      return "You're done! Stop running!";
    }
}


// Solution 6
function iTri(s){
    var a={}
    if (s<2.4)
      a['Swim']=(140.6-s).toFixed(2)+" to go!";
    if (s>=2.4 && s<114.4)
      a['Bike']=(140.6-s).toFixed(2)+" to go!";
    if (s>=114.4 && s<130.6)
      a['Run']=(140.6-s).toFixed(2)+" to go!";
    if (s>=130.6 && s<140.6)
      a['Run']="Nearly there!";
    return s==0?'Starting Line... Good Luck!':s>=140.6?"You're done! Stop running!":a;
}


// Solution 7
let iTri = s => {
    let rem = 140.6 - s ;
    return (s>140.6) ? "You're done! Stop running!" : (s === 0) ? "Starting Line... Good Luck!" : (s < 2.4) ? {Swim : `${rem.toFixed(2)} to go!`} : (s > 114.4) ?(rem < 10) ? {Run: "Nearly there!"} : {Run : `${rem.toFixed(2)} to go!`} :  {Bike : `${rem.toFixed(2)} to go!`};
}


// Solution 8
function iTri(s){
    let dist = 2.4 + 112 + 26.2;
    let obj = {};
    if(s === 0){ 
      return 'Starting Line... Good Luck!';
    } else if(s < 2.4) {
      obj['Swim'] = `${(dist - s).toFixed(2)} to go!`;
    } else if(s < 114.4) {
      obj['Bike'] = `${(dist - s).toFixed(2)} to go!`;
    } else if(s < dist - 10) {
      obj['Run'] = `${(dist -s).toFixed(2)} to go!`;
    } else if(s < dist) {
      obj['Run'] = `Nearly there!`;
    } else {
      return "You're done! Stop running!"
    }
    return obj;
}


// Solution 9
function iTri(s){
    if (s == 0) {
      return 'Starting Line... Good Luck!';
    }
    if (s > 0 && s < 2.4) {
      return {'Swim':`${(140.6 - s).toFixed(2)} to go!`};
    }
    if (s > 2.4 && s < 114.4) {
      return {'Bike':`${(140.60 - s).toFixed(2)} to go!`};   
    }
    if (s > 114.4 && s < 130.6) {
      return {'Run':`${(140.6 - s).toFixed(2)} to go!`};
    }
    if (s > 130.6 && s < 140.6) {
      return {'Run':'Nearly there!'};
    }
    if (s > 140.6) {
      return "You're done! Stop running!";
    }
  }


// Solution 10
function iTri(n){
    if (!n) return 'Starting Line... Good Luck!'
    const toGo = (140.6 - n).toFixed`2`
    if (n < 2.4) return {Swim: `${toGo} to go!`}
    if (n < 114.4) return {Bike: `${toGo} to go!`}
    if (toGo <= 0) return 'You\'re done! Stop running!'
    if (toGo <= 10) return {Run: 'Nearly there!'}
    return {Run: `${toGo} to go!`}
  }


// Solution 11
function iTri(s){
    const length = 140.6;
    const remain = length - s;
    if (remain === length) {
      return 'Starting Line... Good Luck!';
    } else if (remain > 138.2) {
      return { 'Swim': `${remain.toFixed(2)} to go!`}
    } else if (remain <= 138.2 && remain > 26.2) {
      return { 'Bike': `${remain.toFixed(2)} to go!`}
    } else if (remain <= 26.2 && remain > 10) {
      return { 'Run': `${remain.toFixed(2)} to go!`}
    } else if (remain <= 10 && remain > 0) {
      return { 'Run': 'Nearly there!'}
    } else {
      return "You're done! Stop running!"
    }
  }


// Solution 12
function iTri(distance){
    var swimDist = 2.4;
    var bikeDist = 112;
    var runDist = 26.2;
    
    var swimBikeDist = swimDist + bikeDist;
    var totalDist = swimBikeDist + runDist;
    var restDist = totalDist - distance;
    
    if (!distance) {
      return 'Starting Line... Good Luck!';
    } else if (distance >= totalDist) {
      return "You're done! Stop running!";
    } else {
      var fixedRestDist = restDist.toFixed(2) + ' to go!';
  
      if (distance < swimDist) {
        return { Swim: fixedRestDist  }; 
      } else if (distance >= swimDist && distance < swimBikeDist) {
        return { Bike: fixedRestDist  };
      } else {
        return restDist > 10
          ? { Run: fixedRestDist }
          : { Run: 'Nearly there!'};
      }
    }
  } 