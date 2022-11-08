// Training JS #11: loop statement --break,continue

// We have seen break in the switch statement, it can jump out the switch statement. it can also be used in the loop statement. an example:

// function findFirstOddNumber(arr){
//   var result;
//   for (var i=0;i<arr.length;i++){
//     if (arr[i]%2==1){
//       result=arr[i];
//       break;
//     }
//   }
//   return result;
// }

// In this example, for loop traverse the array arr. when the first odd number found, break statement will jump out the for loop.

// In the loop statement, we can use continue skipping some code. for example, the following code ignores negative values:

// function dontDisplayNegative(arr){
//   for (var i=0;i<arr.length;i++){
//     if (arr[i]<0) continue;   
//     console.log(arr[i])
//   }
// }

// In this example, console.log(arr[i]) is never executed for negative element. thanks to continue.

// Through the use of break and continue, you can make the loop statement more flexible and convenient.

// Ok, lesson is over. let's us do some task with break and continue.
// Task

// Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

// Return the bag after for loop finished.

// You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

// If you forgot how to push an element to array, please refer to lesson 4.

function grabDoll(dolls){
  const bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (bag.length >= 3) {
      break;
    } else if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
    } else {
      continue;
    }
  }
  return bag;
}

console.log(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]));
// ["Hello Kitty"]
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]));
// ["Hello Kitty","Hello Kitty"]
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]));
// ["Hello Kitty","Hello Kitty","Barbie doll"]
console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]));
// ["Barbie doll","Hello Kitty","Hello Kitty"]


// Solution 1
function grabDoll(dolls){
  var bag=[];
  
  for(var i = 0; i < dolls.length; i++) {
  
    if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
      bag.push(dolls[i]);
    else
      continue;
      
    if(bag.length === 3) break;
  }
  
  return bag;
}


// Solution 2
function grabDoll(dolls){
  var bag=[], doll;
  for( doll of dolls ){
    if( doll == "Hello Kitty" || doll == "Barbie doll" ) bag.push(doll)
    else continue
    if( bag.length > 2 ) break
  }
  return bag;
}


// Solution 3
function grabDoll(dolls){
  var bag=[];
  for (d in dolls) {
     if (dolls[d]=="Hello Kitty"||dolls[d]=="Barbie doll") bag.push(dolls[d]);
     if (bag.length<3) continue;
     break;
  }
  return bag;
}


// Solution 5
function grabDoll (dolls) {

  let bag = []
  
  for (let i = 0; i < dolls.length; i++) {
      if (!/^(Hello Kitty|Barbie doll)$/.test(dolls[i])) continue
      bag.push(dolls[i])
      if (bag.length === 3) break
  }
  
  return bag;
}


// Solution 6
function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue;
    bag.push(dolls[i]);
    if (bag.length === 3) break;
  }
  return bag;
}


// Solution 7
const grabDoll = dolls => {
  const bag = [];
  for (const doll of dolls) {
    if (bag.length === 3) break;
    if (doll !== `Hello Kitty` && doll !== `Barbie doll`) continue;
    bag.push(doll);
  }
  return bag;
};


// Solution 8
function grabDoll(dolls){
  var bag=[];
  bagisfull:                             //set label is corner use of break
  for (var i=0;i<dolls.length;i++){      //unneed to learn it.
    if (dolls[i]!=="Hello Kitty"&&dolls[i]!=="Barbie doll") continue;
    bag.push(dolls[i]);                  //break can also used with a label 
    if(bag.length==3) break bagisfull;   //but it's easy to mess with code
  }                                      //so it's not a good method.
  return bag;
}


// Solution 9
function grabDoll(dolls){
  const bag = [];
  for (const doll of dolls) {
    if (bag.length == 3) break;
    if (doll != 'Hello Kitty' && doll != 'Barbie doll') continue;
    bag.push(doll);
  }
  return bag;
}


// Solution 10
function grabDoll(dolls){
  const bag=[];
  const findDol=['Hello Kitty', 'Barbie doll'];
  for (const bagElement of dolls) {
      if(findDol.includes(bagElement)) bag.push(bagElement);
      if(bag.length < 3) continue
      if(bag.length === 3) break
  }
  return bag;
}


// Solution 11
function grabDoll(dolls){
  var bag=[]
  for(x of dolls){
    if (x=='Hello Kitty'||x=='Barbie doll') bag.push(x)
    else continue
    if (bag.length==3) break
  }
  return bag
}


// Solution 12
grabDoll=a=>a.filter(x=>/ll/.test(x),'for(breakcontinue').slice(0,3)


// Solution 13
function grabDoll(dolls){
  var bag = [];

  for (let doll of dolls) {
    if (bag.length === 3) break
    
    if (/^(hello kitty|barbie doll)$/i.test(doll)) {
      bag.push(doll)
      continue
    }
  }
  
  return bag;
}


// Solution 14
function grabDoll(dolls){
  var bag=[];
  for (var i = 0; i < dolls.length; i++) {
    if (bag.length === 3) {
      break;
    };   
    switch (dolls[i]) {
      case  "Hello Kitty":
        bag.push(dolls[i]);
        break;
      case "Barbie doll":
        bag.push(dolls[i]);
        break;
      default:
      console.log(dolls[i]);
        continue;
      }
  }
  return bag;
}