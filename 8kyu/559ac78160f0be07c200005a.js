// Name Shuffler

// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
  return str.split(" ").reverse().join(" ")
}

console.log(nameShuffler('john McClane'))
// 'McClane john'


// Solution 1
function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }

  
// Solution 2
const nameShuffler = str => str.split(' ').reverse().join(' ');