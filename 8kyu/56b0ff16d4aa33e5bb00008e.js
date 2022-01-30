// Remove the time

// You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

// Weekday Month Day, time e.g., Friday May 2, 7pm

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

// Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".

function shortenToDate(longDate) {
  return longDate.split(",")[0]
}

console.log(shortenToDate("Friday May 2, 9am"));
// "Friday May 2"
console.log(shortenToDate("Tuesday January 29, 10pm"));
// "Tuesday January 29"
console.log(shortenToDate("Monday December 25, 10pm"));
// "Monday December 25"


// Solution 1
function shortenToDate(longDate) {
    return longDate.split(",")[0];
}


// Solution 2
const shortenToDate = longDate => longDate.split(",")[0];


// Solution 3
function shortenToDate(longDate) {
    return longDate.slice(0, longDate.indexOf(","));
}


// Solution 4
const shortenToDate = longDate => longDate.replace(/, \d\d?[ap]m$/, '');


// Solution 5
function shortenToDate(longDate) {
    const [date, time] = longDate.split(',');
    return date;
}