// Deodorant Evaporator

// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), 
// the percentage of foam or gas lost every day (evap_per_day) 
// and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. 
// All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:

// evaporator(10, 10, 5) -> 29

// Note:

// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. 
// Some people might prefer to reason with content, some other with percentages only. 
// It's up to you but you must keep it as a parameter because the tests have it as an argument.


function evaporator(content, evap_per_day, threshold) {
    
    let days = 0;

    threshold = content * (threshold / 100);
    // console.log('threshold:', threshold)

    evap_per_day = evap_per_day / 100;
    // console.log(evap_per_day)

    // console.log(content * evap_per_day)
    // console.log(content - content * evap_per_day)

    while (content > threshold) {
        content = content - (content * evap_per_day)
        days++;
    }

    return days;
    
}

console.log(evaporator(10, 10, 10));
// 22


// Day 1 10 % of 10ml(= 1ml) is lost, leaving 9ml
// Day 2 10 % of 9ml(= 0.9ml) is lost, leaving 8.1ml
// Day 3 10 % of 8.1ml(= 0.81ml) is lost, leaving 7.29ml



// Solution 1
function evaporator(content, evap_per_day, threshold) {
    threshold = threshold / 100
    evap_per_day = evap_per_day / 100
    return Math.ceil(Math.log(threshold) / Math.log(1 - evap_per_day))
}


// Solution 2
function evaporator(content, evap_per_day, threshold) {
    var days = 0;
    var gas = 100;
    while (gas >= threshold) {
        gas -= gas * evap_per_day / 100;
        days++;
    }
    return days;
}


// Solution 3
function evaporator(content, evap_per_day, threshold) {
    var current = 100;
    var day = 0;
    while (current >= threshold) {
        current -= current * evap_per_day / 100;
        day++;
    }
    return day;
}


// Solution 4
function evaporator(content, evap_per_day, threshold) {
    var byvol = content * (threshold / 100);
    var result = content;
    var i = 0;
    while (result > byvol) {
        result = result - (result * (evap_per_day / 100));
        i++;
    }
    return i;
}


// Solution 5
function evaporator(content, evap_per_day, threshold) {
    let count = 0
    let contentLeft = content
    let contentPercent = 100

    while (contentPercent >= threshold) {
        contentLeft -= (evap_per_day * contentLeft / 100)
        contentPercent = contentLeft / content * 100
        count++
    }
    return count
}


// Solution 6
function evaporator(content, evap_per_day, threshold) {
    let [out, part] = [0, 100];
    while (part > threshold) {
        part = part - part * (evap_per_day / 100);
        out += 1;
    }
    return out;
}


// Solution 7
function evaporator(content, evap_per_day, threshold) {
    function recurse(pctLeft = 100, counter = 0) {
        if (pctLeft <= threshold) { return counter; }
        else { return recurse(pctLeft * (1 - evap_per_day / 100), ++counter); }
    };

    return recurse();
}


// Solution 8
const evaporator = (content, evapPerDay, threshold) => {
    let day = 0;
    let total = 100;

    while (total > threshold) {
        day += 1;
        total -= total * evapPerDay / 100;
    }

    return day;
};


// Solution 9
function evaporator(content, evap_per_day, threshold) {
    let result = 0;
    let percent = 100;
    while (percent > threshold) {
        percent = percent - percent * (evap_per_day / 100);
        result++;
    }
    return result;
}


// Solution 10
with (Math) evaporator = (唐, ev, t) => ceil(log(t / 100) / log(1 - ev / 100))


// Solution 11
const evaporator = (content, evap_per_day, threshold) => Math.ceil(Math.log(threshold / 100) / Math.log(1 - evap_per_day / 100));


// Solution 12
evaporator = (c, e, t) => Math.ceil(1 / (Math.log(1 - e * 1e-2) / Math.log(t * 1e-2)))