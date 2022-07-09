// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

// Description:

// Remove n exclamation marks in the sentence from left to right. 
// n is positive integer.

// Examples

// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

function remove(s, n) {
    
    let newArr = [];

    s = s.split('')

    for (let i = 0, count = 0; i < s.length; i++) {
        if (s[i] === '!' && count < n) {
            count++;
            // console.log(`! ${count} found`)
        } else {
            newArr.push(s[i])
        }
    }

    return newArr.join('');

}


console.log(remove("Hi!", 1));
// "Hi"
console.log(remove("Hi!", 100));
// "Hi"
console.log(remove("Hi!!!", 1));
// "Hi!!"
console.log(remove("Hi!!!", 100));
// "Hi"
console.log(remove("!Hi", 1));
// "Hi"
console.log(remove("!Hi!", 1));
// "Hi!"
console.log(remove("!Hi!", 100));
// "Hi"
console.log(remove("!!!Hi !!hi!!! !hi", 1));
// "!!Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi", 3));
// "Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi", 5));
// "Hi hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi", 100));
// "Hi hi hi"


// Solution 1
function remove(s, n) {
    for (var i = 0; i < n; i++) s = s.replace("!", "");
    return s;
}


// Solution 2
function remove(s, n) {
    return n > 0 ? remove(s.replace('!', ''), n - 1) : s;
}


// Solution 3
function remove(s, n) {
    while (n) {
        s = s.replace("!", "");
        n--;
    }
    return s;
}


// Solution 4
function remove(s, n) {
    return s.replace(/!/g, c => n-- > 0 ? "" : c)
}


// Solution 5
const remove = (s, n) =>
    s.replace(/!/g, val => n-- > 0 ? `` : val);


// Solution 6
const remove = (s, n) => n ? remove(s.replace('!', ''), n - 1) : s;


// Solution 7
function remove(s, n) {
    return s.split('').filter(c => c != '!' || n-- <= 0).join('');
}


// Solution 8
function remove(s, n) {
    let fs = ''
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == '!' && n-- > 0) {
            continue;
        }
        fs += s.charAt(i);
    }
    return fs;
}


// Solution 9
function remove(s, n) {
    return s.replace(/\!/g, m => n-- > 0 ? '' : m);
}


// Solution 10
function remove(s, n) {
    return s.replace(/!/g, el => n-- > 0 ? '' : el);
}


// Solution 11
function remove(s, n) {
    let i = 0;
    return s.split('').filter(a => {
        if (a == '!' && i != n) {
            i++;
            return false;
        } else {
            return true;
        }
    }).join('');
}


// Solution 12

function remove(s, n) {
    return s.split("!").reduce((rst, next, i) => rst + (i <= n ? next : "!" + next));
}
