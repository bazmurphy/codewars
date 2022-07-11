// Return the day

// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"

// Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) {

    let days = {
        1: 'Sunday',
        2: 'Monday',
        3: 'Tuesday',
        4: 'Wednesday',
        5: 'Thursday',
        6: 'Friday',
        7: 'Saturday',
    }

    return days[num] ? days[num] : 'Wrong, please enter a number between 1 and 7'

}

console.log(whatday(1));
// 'Sunday'
console.log(whatday(2));
// 'Monday'
console.log(whatday(3));
// 'Tuesday'
console.log(whatday(8));
// 'Wrong, please enter a number between 1 and 7'
console.log(whatday(20));
// 'Wrong, please enter a number between 1 and 7'


// Solution 1
function whatday(num) {
    switch (num) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return 'Wrong, please enter a number between 1 and 7';
    }
}


// Solution 2
function whatday(num) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
}


// Solution 3
function whatday(num) {
    let days = {
        1: 'Sunday',
        2: 'Monday',
        3: 'Tuesday',
        4: 'Wednesday',
        5: 'Thursday',
        6: 'Friday',
        7: 'Saturday'
    }
    return days[num] || 'Wrong, please enter a number between 1 and 7';
}


// Solution 4
whatday = n => {
    switch (n) {
        case 1: return 'Sunday';
        case 2: return 'Monday';
        case 3: return 'Tuesday';
        case 4: return 'Wednesday';
        case 5: return 'Thursday';
        case 6: return 'Friday';
        case 7: return 'Saturday';
        default: return 'Wrong, please enter a number between 1 and 7';
    }
}


// Solution 5
whatday = n => [, 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][n] || 'Wrong, please enter a number between 1 and 7'


// Solution 6
const whatday = n => n > 0 && n < 8 ? new Date(1728e5 + n * 864e5).toLocaleString('en', { weekday: 'long' }) : 'Wrong, please enter a number between 1 and 7'


// Solution 7
function whatday(num) {
    switch (num) {
        case 1:
            return 'Sunday';
            break;
        case 2:
            return 'Monday';
            break;
        case 3:
            return 'Tuesday';
            break;
        case 4:
            return 'Wednesday';
            break;
        case 5:
            return 'Thursday';
            break;
        case 6:
            return 'Friday';
            break;
        case 7:
            return 'Saturday';
            break;
        default:
            return "Wrong, please enter a number between 1 and 7"
    }
}


// Solution 8
function whatday(num) {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][num - 1] || 'Wrong, please enter a number between 1 and 7'
}


// Solution 9
function whatday(num) { 
  return num && num < 8 ? new Date(0, 0, num-1).toLocaleString('en',{weekday:'long'}) : 
  'Wrong, please enter a number between 1 and 7';
}


// Solution 10
function whatday(num) {
    var week = ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (num >= 1 && num <= 7) { return week[num] }
    else { return "Wrong, please enter a number between 1 and 7" }
}


// Solution 11
const whatday = num =>
    [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`][--num] || `Wrong, please enter a number between 1 and 7`;


// Solution 12
function whatday(num) {
    switch (num) {
        case 1: return 'Sunday';
        case 2: return 'Monday';
        case 3: return 'Tuesday';
        case 4: return 'Wednesday';
        case 5: return 'Thursday';
        case 6: return 'Friday';
        case 7: return 'Saturday';
        default:
            return "Wrong, please enter a \
number between 1 and 7";
    }
}