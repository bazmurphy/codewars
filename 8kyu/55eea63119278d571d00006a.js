// Smallest unused ID

// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted.
// For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

function nextId(ids) {

    // console.log('ids:', ids)

    let uniqueIds = Array.from(new Set(ids.sort((a,b) => a - b)));
    // console.log('uniqueIds:', uniqueIds)

    for (let i = 0; i < uniqueIds.length; i++) {
        if (i !== uniqueIds[i]) {
            // console.log('i', i, 'uniqueIds[i]', uniqueIds[i])
            return i;
        }
    }

    return uniqueIds[uniqueIds.length -1] + 1

}

console.log(nextId([0, 1, 2, 3, 5]));
// 4
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 11
console.log(nextId([1, 2, 0, 2, 3]))
// 4
console.log(nextId([1, 2, 0, 2, 3, 5]))
// 4
console.log(nextId([1, 0, 0, 1, 0, 3, 1, 7]))
// 2
console.log(nextId([7, 6, 0, 9, 0, 1, 4, 2]))
// 3


// Solution 1
function nextId(ids) {
    var x = 0;
    while (ids.includes(x)) x++;
    return x;
}


// Solution 2
function nextId(ids) {
    const used = new Set(ids);
    for (let i = 0; i <= ids.length; i++) {
        if (!used.has(i)) return i;
    }
}


// Solution 3
function nextId(ids) {
    for (i = 0; i < ids.length; i++) {
        if (ids.indexOf(i) == -1) {
            return i;
        }
    }
    return ids.length;
}


// Solution 4
function nextId(ids) {
    var i = 0;
    while (ids.includes(i)) {
        i++;
    }
    return i;
}


// Solution 5
const nextId = ids =>
  (val => val < 0 ? Math.max(...ids) + 1 : val)
  (ids.findIndex((_, idx) => !ids.includes(idx)));


// Solution 6
const nextId = function(u){
  const arr = [...new Set(u)];
  for(let i=0; i <= u.length; i++){
    if(!arr.includes(i)) return i
  }
}


// Solution 7
function nextId(ids){
  for (var i=0;i<ids.length;i++){
    if (ids.indexOf(i)==-1) return i;
  }
  return ids.length;
}


// Solution 8
function nextId(ids) {
    for (var i = 0; i < ids.length; i++) {
        if (ids.indexOf(i) == -1) return i;
    }
    return ids.length;
}
//version if not repeated numbers are present
//nextId=i=>{console.log(i);return (i.length)*(i.length+1)/2-i.reduce((a,b)=>a+b,0);}


// Solution 9
function nextId(ids) {
    let i = 0;
    while (ids.includes(i)) {
        i++
    }
    return i;
}


// Solution 10
const nextId = (ids) => {
 
  // sort the array in ascending order
  ids = ids.sort((a, b) => a - b);
  
  // remove duplicates from the array
  ids = [...new Set(ids)];
  
  // find if zero is the first element in the array
  if (ids[0] !== 0) {
    return 0;
  }
  
  // iterate through each element in the array identify gap and return unused id
  for(let i = 0; i < ids.length; i++) {
    let first = ids[i];
    let second = ids[i+1];
    
    if (second !== first + 1) {
      return first + 1;
    }
    
  }
  
}


// Solution 11

function nextId(ids) {
  let set = new Set(ids);
  for (let i = 0;; i++)
    if (!set.has(i)) return i;
}


// Solution 12
function nextId(urr){
  const arr = [...new Set(urr)];
  for(let i=0; i <= urr.length; i++){
    if(!arr.includes(i)) return i
  }
}