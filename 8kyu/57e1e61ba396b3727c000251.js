// String cleaning

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// Examples (input -> output)

// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.


function stringClean(s){
    return s.replace(/[0-9]/g, "")
}


// Solution 1
function stringClean(s){
    return s.replace(/\d/g, "");
}

// Solution 2
  function stringClean(s){
    return s.replace(/[0-9]/g, '');
}


// Solution 3
const stringClean = s => s.replace( /\d/g, "" ) ;

// Solution 4
  function stringClean(s){
    while(s.indexOf(0) >= 0) {s = s.replace(0, '')}
      while(s.indexOf(1) >= 0) {s = s.replace(1, '')}
        while(s.indexOf(2) >= 0)  {s = s.replace(2, '')}
          while(s.indexOf(3) >= 0)  {s = s.replace(3, '')}
             while(s.indexOf(4) >= 0)  {s = s.replace(4, '')}
                while(s.indexOf(5) >= 0)  {s = s.replace(5, '')}
                   while (s.indexOf(6) >= 0)  {s = s.replace(6, '')}
                      while (s.indexOf(7) >= 0)  {s = s.replace(7, '')}
                         while (s.indexOf(8) >= 0)  {s = s.replace(8, '')}
                            while (s.indexOf(9) >= 0)  {s = s.replace(9, '')}
    return s
}

// Solution 6
function stringClean(s){
    // Function will return the cleaned string
  var result = '';
  for(var i=0;i<s.length;i++) {
    if(isNaN(s[i])||s[i]==' ') result+=s[i]; 
    }
  return result;
}

// Solution 7
function stringClean(s){
    return s.split('').filter((n) => n != parseInt(n)).join('');
}

// Solution 8
function stringClean(s){
    var isNumber = {
      '0': true,
      '1': true,
      '2': true,
      '3': true,
      '4': true,
      '5': true,
      '6': true,
      '7': true,
      '8': true,
      '9': true,
    };
    
    var finalString = '';
    for (var i = 0; i < s.length; i++) {
      if (!isNumber[s[i]]) {
        finalString += s[i];
      }
    }
    
    return finalString;
}