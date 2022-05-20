// Do I get a bonus?

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).


function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}` : `£${salary}`
}

console.log(bonusTime(10000, true));
// '£100000'
console.log(bonusTime(25000, true));
// '£250000'
console.log(bonusTime(10000, false)); 
// '£10000'
console.log(bonusTime(60000, false));
// '£60000'
console.log(bonusTime(2, true));
// '£20'
console.log(bonusTime(78, false));
// '£78'
console.log(bonusTime(67890, true));
// '£678900'


// Solution 1
function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
}


// Solution 2
const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;


// Solution 3
function bonusTime(salary, bonus) {
    return '£' + salary * (bonus ? 10 : 1);
}


// Solution 4
function bonusTime(salary, bonus) {
    return '£'+(bonus ? salary*10:salary)
}


// Solution 5
const bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`;


// Solution 6
function bonusTime(salary, bonus) 
{
  if(bonus)
  {
    return "£" + (salary*10).toString();
  }
  return "£" + salary.toString();
}


// Solution 7
const bonusTime = (salary, bonus) => `£${salary + bonus * salary * 9}`;


// Solution 8
var bonusTime=(salary, bonus)=>'£'+salary*(bonus?10:1)

