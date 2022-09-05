// Sort arrays - 1

// Just a simple sorting usage. 
// Create a function that returns the elements of the input-array / list sorted in lexicographical order.

function sortme(names){
  return names.sort()  
}

// const sortme = names => names.sort();

console.log(sortme(['one', 'two', 'three' ]));
// ["one", "three", "two"]


// Solution 1
sortme = function( names ){
    return names.sort()
}


// Solution 2
sortme = names => names.sort()


// Solution 3
sortme = function( names ){
    return names.sort(function(a, b) { return a > b ? 1 : a < b ? -1 : 0 });
}


// Solution 5
const sortme = arr => arr.length === 0 ? [] : (() => {
    const [head, tail]  = [arr[0], arr.slice(1)]
    const smallerSorted = sortme (tail.filter (x => x <= head))
    const biggerSorted  = sortme (tail.filter (x => x > head))
    return [...smallerSorted, head, ...biggerSorted]
  })()


// Solution 12
const isSorted = function (first, last) {
    //Checks whether first element should be first (whether two elements are in ascending order)
    let i = 0;
    first = [...first];
    last = [...last];
  
    // while there exists letters in both arrays
    while (first[0] && last[0]) {
      // If letter from the first array is "bigger", they are not sorted
      if (first[0].charCodeAt(0) > last[0].charCodeAt(0)) {
        return false;
      } // If letter from the last array is smaller they are sorted
      else if (first[0].charCodeAt(0) < last[0].charCodeAt(0)) {
        return true;
      } else {
        //Else if both elements are the same, remove them from arrays
        first.shift();
        last.shift();
      }
    }
    // If till now both strings were the same and the first one is longer, they are not sorted
    if (first[0] !== undefined) return false;
    // Otherwise they are sorted
    return true;
  };
  
  const sortme = function (names) {
    let sorted = true;
  
    do {
      sorted = true;
      for (let i = 0; i < names.length - 1; ++i) {
        if (!isSorted(names[i], names[i + 1])) {
          console.log(names);
          let temp = names[i];
          names[i] = names[i + 1];
          names[i + 1] = temp;
          sorted = false;
        }
      }
    } while (!sorted);
  
    return names;
};  


// Solution 13
sortme = function( names ) {
    for (let i=0; i<names.length-1; i++) {
      for (let j=i+1; j<names.length; j++) {
        if (names[i] > names[j]) {
          let tmp = names[i];
          names[i] = names[j];
          names[j] = tmp;
        }
      }
    }
    return names
}


// Solution 14
sortme = function( names ){
    for(var i = 1; i < names.length; i++){
      for(var j = 0; j < i; j++){
        if(names[i] < names[j]){
          var temp = names[j];
          names[j] = names[i];
          names[i] = temp;
        }
      }
    }
    return names;
}


// Solution 15
let sortme = function(names) {
    return names.slice().sort(String.localeCompare);
}

// Solution 18
swapval = function(names, i1,i2){
    let temp = names[i1] ;
    names[i1] = names[i2];
    names[i2] = temp;
    return
  }
  
  partition = function(arr,low,high){
    let pivot = arr[high];
    
    let i = (low -1)
    
    for (let j = low; j <= high -1; j++){
      if(arr[j] < pivot){
        i++
        swapval(arr,i,j)
      }
    }
    swapval(arr, i+1, high);
    return (i+1)
  }
  
  quickSort = function(arr, low, high){
    if (low < high){
      let pi = partition(arr, low, high);
      quickSort(arr, low, pi-1)
      quickSort(arr,pi+1, high)
    }
  }
  
  sortme = function( names ){
    
    quickSort(names, 0, names.length-1);
    return names
}