// Simple Change Machine

// Your task is to create a change machine.

// The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

// The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

// This change machine is programmed to accept and ditribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.


function changeMe(moneyIn){

    console.log(moneyIn)

    let twenty = "20p "
    let ten = "10p "

    if (moneyIn === "£5")
        return twenty.repeat(500/20).trim()
    else if (moneyIn === "£2")
        return twenty.repeat(200/20).trim()
    else if (moneyIn === "£1")
        return twenty.repeat(100/20).trim()
    else if (moneyIn === "50p")
        return twenty.repeat(50/20).concat(ten.repeat(50 % 20 / 10)).trim()
    else if (moneyIn === "20p")
        return ten.repeat(20/10).trim()
    else {
        return moneyIn
    }
}

console.log(changeMe("£5"));

console.log(changeMe("£2"));

console.log(changeMe("£1"));
// "20p 20p 20p 20p 20p"
console.log(changeMe("50p"));

console.log(changeMe("20p"));

// console.log(changeMe("Money"));
// "Money"



// Solution 1
function changeMe(moneyIn){
    switch (moneyIn) {
      case '£5':
        var change = Array(25).fill('20p');
        return change.join(' ');
      case '£2':
        var change = Array(10).fill('20p');
        return change.join(' ');
      case '£1':
        var change = Array(5).fill('20p');
        return change.join(' ');
      case '50p':
        return '20p 20p 10p';
      case '20p':
        return '10p 10p';
      default:
        return moneyIn;
    }
}


// Solution 2
function changeMe(moneyIn) {
    var accepted = ['£5','£2','£1','50p','20p'];
    var change = ["20p 20p 20p 20p 20p 20p 20p 20p 20p 20p " + 
                  "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p " + 
                  "20p 20p 20p 20p 20p",
                  "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p",
                  "20p 20p 20p 20p 20p", "20p 20p 10p", "10p 10p"]
    var moneyIndex = accepted.indexOf(moneyIn);
    if (moneyIndex == -1) return moneyIn;
    else return change[moneyIndex];
}

// Solution 3
function changeMe(moneyIn){
    switch (moneyIn) {
      case '£5': return '20p '.repeat(25).trim()
      case '£2': return '20p '.repeat(10).trim()
      case '£1': return '20p '.repeat(5).trim()
      case '50p': return '20p 20p 10p'
      case '20p': return '10p 10p'
      default: return moneyIn
    }
}

// Solution 4
function changeMe(m){
    return {"£5":"20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p","£2":"20p 20p 20p 20p 20p 20p 20p 20p 20p 20p","£1":"20p 20p 20p 20p 20p","50p":"20p 20p 10p","20p":"10p 10p"}[m]||m
}

// Solution 5
function changeMe(moneyIn){
    var change;
    if(moneyIn=='£5'||moneyIn=='£2'||moneyIn=='£1'){
      change=Number(moneyIn.substring(1,2))*100;   
    } else if(moneyIn=='50p') {
        change=Number(moneyIn.substring(0,2));
    }else if(moneyIn=='20p'){
      return '10p 10p';
    }
    else {
        return moneyIn;
    }
  
    var moneyOut='';
    while(change>=20) {
      moneyOut=moneyOut+' 20p';
      change=change-20;
    } 
    while(change>0) {
      moneyOut=moneyOut+' 10p';
      change=change-10;
    }
    return moneyOut.trim();
}


// Solution 6
const changeMe = moneyIn =>
  moneyIn.replace(/^£5$|^£2$|^£1$|^50p$|^20p$/, val => isNaN(val[0]) ? '20p '.repeat(val[1] * 5).trim() : val[0] == 5 ? `20p 20p 10p` : `10p 10p`);



// Solution 7
const accepted = ['20p', '50p', '£1', '£2', '£5'];
function changeMe(moneyIn){
  if( !accepted.includes(moneyIn) ) return moneyIn; // not accepted
  if( moneyIn === '20p' ) return '10p 10p'; // special case
  const money = parseInt(moneyIn.replace(/£(\d)/, '$100'), 10); // change to pennies and parse as number
  return (new Array(Math.floor(money / 20))).fill('20p').join(' ') + (money % 20 ? ' 10p' : '');
}