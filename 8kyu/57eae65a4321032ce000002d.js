// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string


function fakeBin(x){

    let xToArray = x.split('');

    // console.log(`xToArray before: ${xToArray}`);

    for (let i = 0; i < xToArray.length; i++) {
    //   console.log(`index: ${i}`)
    //   console.log(`content: ${xToArray[i]}`)
      
      if (xToArray[i] < 5) {
        // console.log(`is below 5: ${xToArray[i]}`)
        xToArray[i] = 0;
        // console.log(`converted: ${xToArray[i]}`)
      }
      else if (xToArray[i] >= 5) {
        // console.log(`is 5 or above: ${xToArray[i]}`)
        xToArray[i] = 1;
        // console.log(`converted: ${xToArray[i]}`)
      }
    }
    
    // console.log(`xToArray after: ${xToArray}`);

    let xBackToString = xToArray.join('')

    return xBackToString;

    // console.log(`xBackToString: ${xBackToString}`);
}

fakeBin('45385593107843568')
//'01011110001100111'



// Solution 1
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// Solution 2
function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  }


// Solution 3
function fakeBin(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
      if(Number(str[i])>=5){
        newStr += "1"
      }
      else{
        newStr += "0";
      }
    }
    return newStr;
  }


// Solution 4
function fakeBin(x){
  let result = '';
  for(let i = 0; i < x.length; i++){
    x[i] < 5 ? result += 0 : result += 1;
  }
  return result;
}