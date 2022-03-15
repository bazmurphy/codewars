// String repeat

// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
  
    let output = '';
    
    for (let i = 0; i < n; i++)
      output = output + s;
    
    return output;

}

repeatStr(6, "I") 
// "IIIIII"
repeatStr(5, "Hello") 
// "HelloHelloHelloHelloHello"


// Solution 1
function repeatStr (n, s) {
    return s.repeat(n)
}


// Solution 2
repeatStr = (n, s) => s.repeat(n)


// Solution 3
function repeatStr (n, s) {
    var str="";
    for(var i=0; i < n; i++)
      str+=s;
      return str;
}