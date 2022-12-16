// Find Your Villain Name

// Create a function that returns a villain name based on the user's birthday. 
// The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.

// The first name will come from the month, and the last name will come from the last digit of the date:

// Month -> first name

//     January -> "The Evil"
//     February -> "The Vile"
//     March -> "The Cruel"
//     April -> "The Trashy"
//     May -> "The Despicable"
//     June -> "The Embarrassing"
//     July -> "The Disreputable"
//     August -> "The Atrocious"
//     September -> "The Twirling"
//     October -> "The Orange"
//     November -> "The Terrifying"
//     December -> "The Awkward"

// Last digit of date -> last name

//     0 -> "Mustache"
//     1 -> "Pickle"
//     2 -> "Hood Ornament"
//     3 -> "Raisin"
//     4 -> "Recycling Bin"
//     5 -> "Potato"
//     6 -> "Tomato"
//     7 -> "House Cat"
//     8 -> "Teaspoon"
//     9 -> "Laundry Basket"

// The returned value should be a string in the form of "First Name Last Name".

// For example, a birthday of November 18 would return "The Terrifying Teaspoon"

function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  
  // console.log(birthday);
  // console.log(birthday.getMonth())
  // console.log(typeof birthday.getMonth())
  // console.log(birthday.getDate())
  // console.log(typeof birthday.getDate())

  return `The ${m[birthday.getMonth()]} ${d[Number(birthday.getDate().toString().slice(-1))]}`;
}

console.log(getVillainName(new Date("May 3")));
// "The Despicable Raisin"
console.log(getVillainName(new Date("April 21")));
// "The Trashy Pickle"
console.log(getVillainName(new Date("December 17")));
// "The Awkward House Cat"


// Solution 1
function getVillainName(birthday){
  firstNames = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"];
  lastNames = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];
  return firstNames[birthday.getMonth()] + ' ' + lastNames[birthday.getDate() % 10]
}


// Solution 2
function getVillainName(birthday) {
  return month[birthday.getMonth()]+" "+date[birthday.getDate()%10];
}


// Solution 3
function getFirstName(month) {
  var firstNames = ['The Evil', 'The Vile', 'The Cruel', 'The Trashy', 'The Despicable', 'The Embarrassing', 'The Disreputable',
      'The Atrocious', 'The Twirling', 'The Orange', 'The Terrifying', 'The Awkward'];
      
      return firstNames[month];
}

function getSecondName(day) {
var secondNames = [
  "Mustache",
  "Pickle",
  "Hood Ornament",
   "Raisin",
   "Recycling Bin",
   "Potato",
   "Tomato",
   "House Cat",
    "Teaspoon",
    "Laundry Basket"];
    day = day % 10;
    return secondNames[day];
}

function getVillainName(birthday){
  return getFirstName(birthday.getMonth()) + ' ' + getSecondName(birthday.getDate());
}


// Solution 4
function getVillainName(birthday){
  return getFirstName(birthday) + " " + getLastName(birthday);
}

function getFirstName(birthday) {
  var firstNames = ["The Evil", "The Vile", "The Cruel", 
                    "The Trashy", "The Despicable", "The Embarrassing", 
                    "The Disreputable", "The Atrocious", "The Twirling",
                    "The Orange", "The Terrifying", "The Awkward"]

  return firstNames[birthday.getMonth()];
}

function getLastName(birthday) {
  var lastNames = ["Mustache", "Pickle", "Hood Ornament",
                   "Raisin", "Recycling Bin", "Potato",
                   "Tomato", "House Cat", "Teaspoon", "Laundry Basket"]
                 
  var digit = birthday.getDate()%10;
  
  return lastNames[digit];
}


// Solution 5
function getVillainName(birthday){
  return "The " + 
  ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"]
  [birthday.getMonth()] + ' ' + 
  ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"]
  [(birthday.getDate()+'').substr(-1)];
}


// Solution 6
function getVillainName(birthday){
  var FIRST_NAMES = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", 
                   "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", 
                   "The Orange", "The Terrifying", "The Awkward"],
      LAST_NAMES =  ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato",
                   "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];
  
  var date = birthday.getDate().toString().slice(-1),
      month = birthday.getMonth();
    
  return FIRST_NAMES[month] + " " + LAST_NAMES[date];
}


// Solution 7
function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
 
  return `The ${m[birthday.getMonth()]} ${d[birthday.getDate()%10]}`
}


// Solution 8
const getVillainName = birthday =>
  ((month, day) => `${month[birthday.getMonth()]} ${day[birthday.getDate() % 10]}`)
  ([`The Evil`, `The Vile`, `The Cruel`, `The Trashy`, `The Despicable`, `The Embarrassing`, `The Disreputable`, `The Atrocious`, `The Twirling`, `The Orange`, `The Terrifying`, `The Awkward`],
   [`Mustache`, `Pickle`, `Hood Ornament`, `Raisin`, `Recycling Bin`, `Potato`, `Tomato`, `House Cat`, `Teaspoon`, `Laundry Basket`]);


// Solution 9
const FIRST_NAMES = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"];
const LAST_NAMES = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];

function getVillainName(birthday) {
  return `${FIRST_NAMES[birthday.getMonth()]} ${LAST_NAMES[birthday.getDate() % 10]}`;
}


// Solution 10
const getVillainName = d => `The ${months[d.getMonth()]} ${days[d.getDate() % 10]}`;

const months = [
  'Evil',
  'Vile',
  'Cruel',
  'Trashy',
  'Despicable',
  'Embarrassing',
  'Disreputable',
  'Atrocious',
  'Twirling',
  'Orange',
  'Terrifying',
  'Awkward',
];

const days = [
  'Mustache',
  'Pickle',
  'Hood Ornament',
  'Raisin',
  'Recycling Bin',
  'Potato',
  'Tomato',
  'House Cat',
  'Teaspoon',
  'Laundry Basket',
]