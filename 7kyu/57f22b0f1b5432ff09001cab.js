// Well of Ideas - Harder Version

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.

// The sub arrays may not be the same length.

// The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). 
// All inputs may not be strings.

function well(x){
    // console.log(x)

    // let total = 0;

    // for (let i = 0; i < x.length; i++) {
    //     // console.log(x[i])
    //     for (let j = 0; j < x[i].length; j++) {
    //         // console.log(x[i][j]);
    //         if (x[i][j].toString().toLowerCase() === "good") {
    //             total += 1;
    //         }
    //     }
    // }

    // if (total > 2) {
    //     return "I smell a series!";
    // } else if (total > 0) {
    //     return "Publish!";
    // } else {
    //     return "Fail!";
    // }


    const total = x.reduce((pV, cV) => pV + cV.filter(element => element.toString().toLowerCase() === "good").length, 0)
    return total > 2 ? "I smell a series!" : total > 0 ? "Publish!" : "Fail!";

}

console.log(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]))
// 'Fail!'
console.log(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]))
// 'Publish!'
console.log(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]))
// 'I smell a series!'


// Solution 1
function well(x) {
    let match = (''+x).match(/good/gi) || []
    if (match.length == 0) return 'Fail!'
    if (match.length <= 2) return 'Publish!'
    return 'I smell a series!'
}


// Solution 2
function well(x){
    var count = 0;
    x.forEach(function(arr) {
      arr.forEach(function(elem) {
        if(typeof(elem) === 'string' && elem.toLowerCase() === 'good') {
          count++;
        }
      });
    });
    if(count === 0) {
      return 'Fail!';
    }
    return count > 2 ? 'I smell a series!' : 'Publish!';
}


// Solution 3
function well( x ) {
  const $ = x.toString().toLowerCase().split(/good/g).length-1
  return $ > 2 ? 'I smell a series!' : $ > 0 ? 'Publish!' : 'Fail!'
}


// Solution 4
const well = x =>
  (val => val ? val > 2 ? `I smell a series!` : `Publish!` : `Fail!`)
  ((`${x}`.match(/good/gi) || []).length);


// Solution 5
function well(x){
    let count = 0;
    for (let i = 0; i < x.length; i++){
      for (let j = 0; j < x[i].length; j++){
        if (`${x[i][j]}`.toLowerCase() == 'good'){
          count += 1;
        };
      };
    };
    return count < 1 ? 'Fail!' : count <= 2 ? 'Publish!' : 'I smell a series!';
  }


// Solution 6
function isGood(idea) {
    return typeof idea === 'string' && idea.toLowerCase() === 'good'
  }
  
  function well([first, ...rest]) {
    const all = first.concat(...rest)
    const good = all.filter(isGood).length
    if (good > 2) return 'I smell a series!'
    if (good > 0) return 'Publish!'
    return 'Fail!'
  }


// Solution 7
const well = a => {
    let goodCounts = a.map(e => e.filter(e => (''+e).toLowerCase() == 'good').length)
    let goodCount = goodCounts.reduce((p,c) => p + c)
    return goodCount == 0 ? 'Fail!' : goodCount > 2 ? 'I smell a series!' : 'Publish!'
  }


// Solution 8
function well (x) {
    let flattenedX = [].concat(...x); 
              
    return toString(flattenedX
      .filter(isValid)                  // is string good || bad
      .map(wordToPoints)                // good to 1;1
      .reduce((acc, n) => acc + n, 0)); // sum all points
  }
  
  function isValid (word) {  
    return String(word).match(/good|bad/i);
  }
  
  function wordToPoints (word) {
    return String(word).match(/good/i) ? 1 : 0;
  }
  
  function toString (n) {
    if (n == 0) return 'Fail!';
    if (n <= 2) return 'Publish!';
                return 'I smell a series!' 
  }


// Solution 9
function well(x){
    x = x.reduce((p, c) => p + c.filter(f => /^good$/i.test(f)).length, 0);
    return x === 0 ? 'Fail!' : x <= 2 ? 'Publish!' : 'I smell a series!';
  }


// Solution 10
const well = x =>   (x = x.map(e=>e.join``).join(``).replace(/[^g]/gi,'').length) == 0 ? 'Fail!' :
                      x > 2 ? 'I smell a series!' : 'Publish!'



// Solution 11
well=x=>{var y =[].concat.apply([], x).filter(v => new RegExp(/good/, 'gi').test(v));
        return y.length == 0 ? 'Fail!' : y.length > 2 ? 'I smell a series!' : 'Publish!'}


// Solution 12
function well(kataQualities){

  let goodCount = 0;
  
  for(let kataArr of kataQualities){
    for(let quality of kataArr){
  
      if (typeof quality === 'string' && quality.toLowerCase() === "good") {
        goodCount++;
    }
    }    
  }
  
  if(goodCount===0) {
    return 'Fail!';
  } else if (goodCount <= 2){
    return 'Publish!'
  } 
  return 'I smell a series!'
}