// How old will I be in 2099 ?

// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. 
// His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." 
// For dates in the past: "You will be born in ... year(s)." 
// If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. 
// Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!


function calculateAge(birthYear, questionYear) {

    let years = questionYear - birthYear;
    
    if (years < -1) {
        return `You will be born in ${Math.abs(years)} years.`;
    } else if (years === -1) {
        return `You will be born in ${Math.abs(years)} year.`;
    } else if (years === 0) {
        return `You were born this very year!`;
    } else if (years === 1) {
        return `You are ${years} year old.`
    } else if (years > 1) {
        return `You are ${years} years old.`
    }

}

console.log(calculateAge(2012, 2016));
// "You are 4 years old."
console.log(calculateAge(1989, 2016));
// "You are 27 years old."
console.log(calculateAge(2000, 2090));
// "You are 90 years old."
console.log(calculateAge(2000, 1990));
// "You will be born in 10 years."
console.log(calculateAge(3400, 3400));
// "You were born this very year!"
console.log(calculateAge(900, 2900));
// "You are 2000 years old."
console.log(calculateAge(2010, 1990));
// "You will be born in 20 years."
console.log(calculateAge(2010, 1500));
// "You will be born in 510 years."
console.log(calculateAge(2011, 2012));
// "You are 1 year old."
console.log(calculateAge(2000, 1999));
// "You will be born in 1 year."


// Solution 1
function calculateAge(m, n) {
    if (m == n) return 'You were born this very year!';
    var year = Math.abs(m - n) == 1 ? 'year' : 'years';
    if (m < n) return "You are " + (n - m) + ' ' + year + ' old.';
    if (m > n) return "You will be born in " + (-n + m) + ' ' + year + '.';
}


// Solution 2
var calculateAge = (b, c) => {
    r = c - b;
    switch (true) {
        case (r > 1): return "You are " + r + " years old."; break;
        case (r === 1): return "You are 1 year old."; break;
        case (r === 0): return "You were born this very year!"; break;
        case (r === -1): return "You will be born in 1 year."; break;
        case (r < -1): return "You will be born in " + (-r) + " years."; break;
    }
}


// Solution 3
function calculateAge(birthYear, year) {
    age = year - birthYear;
    if (age == 1)
        return "You are 1 year old.";
    else if (age === -1)
        return "You will be born in 1 year."
    else if (age > 0)
        return "You are " + age + " years old.";
    else if (age < 0) {
        age = birthYear - year;
        return "You will be born in " + age + " years."
    }
    else {
        return "You were born this very year!";
    }
}


// Solution 4
var calculateAge = (old, news) => {
    if (old === news) {
        return "You were born this very year!"
    } else if (news > old) {
        return news - old === 1 ? "You are 1 year old." : `You are ${news - old} years old.`
    } else {
        return old - news === 1 ? "You will be born in 1 year." : `You will be born in ${old - news} years.`
    }
}


// Solution 5
function  calculateAge(a,b) {
  return a>b?`You will be born in ${a-b} year${a-b==1?"":"s"}.`:
         a<b?`You are ${b-a} year${b-a==1?"":"s"} old.`:
         `You were born this very year!`
}


// Solution 6
const calculateAge = (a, b) =>
    a < b ? `You are ${b - a} year${b - a > 1 ? `s` : ``} old.` : a > b ? `You will be born in ${a - b} year${a - b > 1 ? `s` : ``}.` : `You were born this very year!`;



// Solution 7
function calculateAge(y1, y2) {
    var dif = y2 - y1;
    var s = Math.abs(dif) === 1 ? "" : "s";
    return dif > 0 ? `You are ${dif} year${s} old.` : (dif < 0 ? `You will be born in ${Math.abs(dif)} year${s}.` : `You were born this very year!`);
}


// Solution 8
function calculateAge(b, yr) {
    if (b == yr) return 'You were born this very year!'
    if (b < yr) return `You are ${yr - b} ${yr - b > 1 ? 'years' : 'year'} old.`
    if (b > yr) return `You will be born in ${b - yr} ${b - yr > 1 ? 'years' : 'year'}.`
}


// Solution 9
function calculateAge(current,result) {
   return (result - current > 1 ) ? `You are ${result - current} years old.` : 
   (result - current == -1) ? `You will be born in 1 year.` :
   (result - current < 0) ? `You will be born in ${current - result} years.` :
   (result - current == 1 ) ? `You are 1 year old.` : 
   (result - current == 0 ) ? `You were born this very year!` : false
}


// Solution 10
const calculateAge = (a, b) => 'You ' + (a == b ? 'were born this very year!' : a > b ? `will be born in ${a - b} year${a - b != 1 ? 's' : ''}.` : `are ${b - a} year${b - a != 1 ? 's' : ''} old.`);


// Solution 12
const calculateAge = (x, y) => x == y ? 'You were born this very year!' : x > y ? `You will be born in ${x - y} year${x - 1 == y ? '' : 's'}.` : `You are ${y - x} year${y - 1 == x ? '' : 's'} old.`;