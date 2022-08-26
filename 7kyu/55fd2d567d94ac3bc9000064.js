// Sum of odd numbers

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    
	// 1 = 1 = 1
    // 2 = 3 5 = 8
    // 3 = 7 9 11 = 27
    // 4 = 13 15 17 19 = 64
    // 5 = 21 23 25 27 29 = 125
    // (turns out the final result is the number cubed!)

    // create the array of odd numbers from 1 to whatever (1+2+3+4+5+6 number of times)
    // then select the index starting from and ending from
    // then sum them
 
    let total = 0;

    for (let i = 1; i <= n; i++)
        total += i;
    
    console.log('total', total)

    let newArr = [];

    for (let j = 1; newArr.length < total; j += 2)
        newArr.push(j);

    console.log('newArr', newArr)

    let selection = newArr.slice(total - n, total)
    console.log('selection', selection)

    let final = selection.reduce((pV,cV) => pV + cV, 0)
    console.log('final', final)

    return final;
}

console.log(rowSumOddNumbers(1))
console.log(rowSumOddNumbers(2))
console.log(rowSumOddNumbers(3))
console.log(rowSumOddNumbers(4))
console.log(rowSumOddNumbers(5))


// Solution 1
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}


// Solution 2

function rowSumOddNumbers(n) {
  return n * n * n;
}

// Solution 3
let rowSumOddNumbers = n => n ** 3;


// Solution 4
function rowSumOddNumbers(n) {
    var start = n * n - n + 1;
    var result = 0;  
    
    for(i = 0; i < n; i++) {
      result =  result + (start + (i*2));
    }
      
    return result;
}


// Solution 5
function rowSumOddNumbers(n) {
    return n > 0 ? n * n * n : "Wrong Input"
}


// Solution 9
function rowSumOddNumbers(n) {
    const out = Array.from( {length: n*(n+1)/2}, (_,i) => i * 2 + 1 );
    return out.slice( out.length - n ).reduce((a, b) => a + b, 0)
}


// Solution 10
const rowSumOddNumbers = (n) => Array.from({length: n*(n+1)/2}, (_, i) => i*2+1).slice(-n).reduce((a, b)=> a + b, 0)


// Solution 12
function rowSumOddNumbers(n) {
    var first = (n*(n-1)) + 1;
    var result = 0;
    for (i = 0; i < n; i++) {
      result += first;
      first += 2;
    }
    return result;
}