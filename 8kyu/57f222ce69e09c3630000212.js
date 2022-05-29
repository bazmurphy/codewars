// Well of Ideas - Easy Version

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    let goodIdeas = 0;
    let badIdeas = 0;
    
    for (let i = 0; i < x.length; i++) {
      if (x[i] === 'good')
        goodIdeas++;
      else if(x[i] === 'bad')
        badIdeas++
    }

    // console.log(goodIdeas);
    // console.log(badIdeas);
      
    if (goodIdeas <= 0)
      return 'Fail!'
    else if (goodIdeas > 0 && goodIdeas < 3)
      return 'Publish!'
    else if (goodIdeas > 2)
      return 'I smell a series!'
}


// Solution 1
const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
}


// Solution 2
function well(x) {
    switch (x.filter(i => i === 'good').length) {
      case 0:
        return 'Fail!'
      case 1:
      case 2:
        return 'Publish!'
      default:
        return 'I smell a series!'
    }
}


// Solution 3
function well(x) {
    var good = 0
    
    for (var i = 0; i < x.length; ++i)
      if (x[i] == 'good' && ++good > 2)
        return 'I smell a series!'
    
    return good ? 'Publish!' : 'Fail!'
}


// Solution 4
function well(x) {
    const count = x.reduce((s, v) => s + (v == 'good'), 0);
    return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}


// Solution 5
const  well = x => {
    let count = x.filter(el => el == 'good').length
    return  count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!'; 
}


// Solution 6
function well(x){
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
      count++;
      if (count == 3)
        break;
    }
  }
  return ['Fail!', 'Publish!', 'Publish!', 'I smell a series!'][count]
}