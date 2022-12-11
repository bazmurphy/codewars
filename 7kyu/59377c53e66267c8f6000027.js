// Alphabet war

// Introduction

// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
// Task

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims.
// Example

// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

function alphabetWar(fight) {

    let leftSideTotal = 0;
    let rightSideTotal = 0;

    let leftSide = {
        'w' : 4,
        'p' : 3,
        'b' : 2,
        's' : 1,  
    }

    let rightSide = {
        'm': 4,
        'q': 3,
        'd': 2,
        'z': 1
    }

    for (letter of fight) {
        if (letter in leftSide) {
            leftSideTotal += leftSide[letter]
        }
        else if (letter in rightSide) {
            rightSideTotal += rightSide[letter]
        }
    }

    // console.log(`left side total : ${leftSideTotal}`)
    // console.log(`right side total : ${rightSideTotal}`)

    if (leftSideTotal > rightSideTotal) {
        return "Left side wins!";
    } else if (leftSideTotal < rightSideTotal) {
        return "Right side wins!"
    } else {
        return "Let's fight again!";
    }

}

console.log(alphabetWar("z"));
// "Right side wins!"
console.log(alphabetWar("zdqmwpbs"));
// "Let's fight again!"
console.log(alphabetWar("zzzzs"));
// "Right side wins!"
console.log(alphabetWar("wwwwww"));
// "Left side wins!"


// Solution 1
function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}


// Solution 2
function alphabetWar(fight) {
    var right = {}
    right['m'] = 4
    right['q'] = 3
    right['d'] = 2
    right['z'] = 1
    var left = {}
    left['w'] = 4
    left['p'] = 3
    left['b'] = 2
    left['s'] = 1

    var sumRight = 0
    var sumLeft = 0

    for (i in fight) {
        if (right[fight[i]]) { sumRight += right[fight[i]] }
        if (left[fight[i]]) { sumLeft += left[fight[i]] }
    }
    if (sumRight > sumLeft) { return 'Right side wins!' }
    if (sumRight < sumLeft) { return 'Left side wins!' }
    return "Let's fight again!";
}


// Solution 3
function alphabetWar(fight) {
    let left = 0;
    let right = 0;

    for (i = 0; i < fight.length; i++) {
        (fight[i] === 'w')
        ? left += 4
        : (fight[i] === 'p')
        ? left += 3
        : (fight[i] === 'b')
        ? left += 2
        : (fight[i] === 's')
        ? left += 1
        : (fight[i] === 'm')
        ? right += 4
        : (fight[i] === 'q')
        ? right += 3
        : (fight[i] === 'd')
        ? right += 2
        : (fight[i] === 'z')
        ? right += 1
        : left += 0;
    }
    return (left > right) 
      ? `Left side wins!`
      : (left < right)
      ? `Right side wins!`
      : `Let's fight again!`

}


// Solution 4
function alphabetWar(fight) {
    let score = 0;
    for (const letter of fight) {
        switch (letter) {
            case 'w': score -= 4; break;
            case 'p': score -= 3; break;
            case 'b': score -= 2; break;
            case 's': score -= 1; break;
            case 'm': score += 4; break;
            case 'q': score += 3; break;
            case 'd': score += 2; break;
            case 'z': score += 1; break;
        }
    }

    return score < 0 ? "Left side wins!" : score > 0 ? "Right side wins!" : "Let's fight again!";
}


// Solution 5
function alphabetWar(fight) {
  var powers = {
    'w': 4,
    'p': 3,
    'b': 2,
    's': 1,
    'm': -4,
    'q': -3,
    'd': -2,
    'z': -1
  };
  
  var result = fight.split('').reduce(function (total, char) {
    if (powers.hasOwnProperty(char)) {
      return total + powers[char];
    }
    return total;
  }, 0);
  
  if (result > 0) {
    return 'Left side wins!';
  }
  
  if (result < 0) {
    return 'Right side wins!';
  }
  
  return 'Let\'s fight again!';
}


// Solution 6
function alphabetWar(fight) {
    thisIsWar = { 'w': 4, 'p': 3, 'b': 2, 's': 1, 'm': -4, 'q': -3, 'd': -2, 'z': -1 };
    result = 0;
    fight.split("").map(function (l) { result += thisIsWar[l] !== undefined ? thisIsWar[l] : 0 });
    return result < 0 ? "Right side wins!" : result > 0 ? "Left side wins!" : "Let's fight again!"
}


// Solution 7
function alphabetWar(fight) {
    const dic = { 'w': 4, 'p': 3, 'b': 2, 's': 1, 'm': -4, 'q': -3, 'd': -2, 'z': -1 };
    const out = [...fight].map(el => dic[el] ? dic[el] : 0).reduce((a, b) => a + b, 0)
    return out > 0 ? 'Left side wins!' : out < 0 ? 'Right side wins!' : 'Let\'s fight again!';
}


// Solution 8
alphabetWar = (fight) => ["Right side wins!", "Let's fight again!", "Left side wins!"][Math.sign([...fight].reduce((r, cv) => r + 'sbpw'.indexOf(cv) - 'zdqm'.indexOf(cv), 0)) + 1]


// Solution 9
const alphabetWar = fight =>
    [`Right side wins!`, `Let's fight again!`, `Left side wins!`][Math.sign([...fight].reduce((pre, val) => pre + ((`mqdz sbpw`.indexOf(val) - 4) % 5), 0)) + 1];


// Solution 10
function alphabetWar(fight) {
    const newStr = fight.split("");
    const rightObj = { m: 4, q: 3, d: 2, z: 1 };
    const leftObj = { w: 4, p: 3, b: 2, s: 1 };
    let rightStr = [];
    let leftStr = [];
    let rightCount = 0;
    let leftCount = 0;

    for (let val of newStr) {
        for (let key in rightObj) {
            if (val === key) {
                rightStr.push(val);
                rightCount += rightObj[key];
            }
            else continue;
        }
        for (let key in leftObj) {
            if (val === key) {
                leftStr.push(val);
                leftCount += leftObj[key];
            }
            else continue;
        }
    }

    if (rightCount > leftCount) return "Right side wins!";
    if (rightCount < leftCount) return "Left side wins!";
    else return "Let's fight again!";
}


// Solution 11
function alphabetWar(fight){
 const leftSide = {
    "w": 4,
    "p": 3,
    "b": 2,
    "s": 1
  };

  const rightSide = {
    "m": 4,
    "q": 3,
    "d": 2,
    "z": 1
  };

  let rightCount = 0;
  let leftCount = 0;

  for(let char of fight){
    
    if(char in leftSide){
       leftCount += leftSide[char];
    }

    if(char in rightSide){
       rightCount += rightSide[char];
    }
  }

    if(leftCount > rightCount){
      return "Left side wins!";
    }
 
    if (leftCount < rightCount){
      return "Right side wins!"; 
    }
    
    return "Let's fight again!";
}


// Solution 12
function alphabetWar(fight) {
    const score = [...fight].reduce((n, c) => n + "sbpw".indexOf(c) - "zdqm".indexOf(c), 0)
    return score === 0 ? "Let's fight again!" : `${score < 0 ? "Right" : "Left"} side wins!`
}